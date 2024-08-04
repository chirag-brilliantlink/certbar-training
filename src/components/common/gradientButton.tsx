import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void; // Optional onClick handler
  variant?: "bg-gradient" | "border-gradient"; // New prop to specify button type
}

const GradientButton = ({
  children,
  onClick,
  variant = "bg-gradient",
}: GradientButtonProps) => {
  const baseStyles =
    "py-1 xl:py-3 px-2 xl:px-5 rounded-[15px] text-white hover:shadow-[0px_11px_54px_14px_#022570] focus:outline-none duration-200 text-[14px] xl:text-[16px]";
  const gradientStyles =
    variant === "bg-gradient"
      ? "bg-gradient-to-r from-[#00AEEF] via-[#054ADA] to-[#022570]"
      : "border-[1px] bg-transparent border-[#054ADA] border-[1px]";

  return (
    <button onClick={onClick} className={`${baseStyles} ${gradientStyles}`}>
      {children}
    </button>
  );
};

export default GradientButton;
