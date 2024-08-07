##### DEPENDENCIES

FROM --platform=linux/amd64 node:20-bullseye AS deps
# RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi \
  && npm install --cpu=x64 --os=linux --libc=glibc sharp

##### BASE file for builder and runner
FROM --platform=linux/amd64 node:20-bullseye AS base

ENV DEBIAN_FRONTEND noninteractive
WORKDIR /app

ARG ENV production
ENV ENV=${ENV}

ENV IS_DOCKER true
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PRIVATE_STANDALONE true 

##### BUILDER

FROM base AS builder
RUN apt update && apt install -y brotli gzip

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN cp .env.${ENV} .env && rm .env.* && \
  if [ -f yarn.lock ]; then SKIP_ENV_VALIDATION=1 yarn next experimental-compile; \
  elif [ -f package-lock.json ]; then SKIP_ENV_VALIDATION=1 npm run build; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && SKIP_ENV_VALIDATION=1 pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Precompressed assets
# https://github.com/gitpod-io/gitpod/blob/3bf7b41f10f2e5e56e69e4ba7a9f5e9a779f5da4/components/dashboard/leeway.Dockerfile#L23

RUN find .next/static -type f \
  ! -name '*.gz' ! -name '*.br' -size +499c -exec /bin/sh -c 'gzip -v -f -9 -k "$1"' /bin/sh {} \;
RUN find .next/static -type f \
  ! -name '*.gz' ! -name '*.br' -size +499c -exec /bin/sh -c 'brotli -v -q 11 -o "$1.br" "$1"' /bin/sh {} \;

RUN find public -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.png' -o -name '*.svg' -o -name '*.map' -o -name '*.json' -o -name '*.jpg' -o -name '*.jpeg' \) \
  ! -name '*.gz' ! -name '*.br' -size +499c -exec /bin/sh -c 'brotli -v -q 11 -o "$1.br" "$1"' /bin/sh {} \;
RUN find public -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.png' -o -name '*.svg' -o -name '*.map' -o -name '*.json' -o -name '*.jpg' -o -name '*.jpeg' \) \
  ! -name '*.gz' ! -name '*.br' -size +499c -exec /bin/sh -c 'gzip -v -f -9 -k "$1"' /bin/sh {} \;

##### RUNNER

# FROM --platform=linux/amd64 gcr.io/distroless/nodejs20-debian12 AS runner
FROM base AS runner

ENV NODE_ENV production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 80
ENV PORT 80
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
