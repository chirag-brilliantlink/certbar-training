import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => {
  return (
    <span className="bg-gradient-to-r from-[#00AEEF] via-[#054ADA] to-[#022570] bg-clip-text text-transparent font-light">
      {children}
    </span>
  );
};

export default GradientText;
