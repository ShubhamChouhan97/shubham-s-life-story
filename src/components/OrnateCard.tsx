import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface OrnateCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const OrnateCard = ({ children, className, style }: OrnateCardProps) => {
  return (
    <div className={cn("ornate-border p-8 relative shadow-card", className)} style={style}>
      <div className="corner-ornament top-left" />
      <div className="corner-ornament top-right" />
      <div className="corner-ornament bottom-left" />
      <div className="corner-ornament bottom-right" />
      {children}
    </div>
  );
};

export default OrnateCard;
