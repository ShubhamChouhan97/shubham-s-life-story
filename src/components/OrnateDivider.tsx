import { cn } from "@/lib/utils";

interface OrnateDividerProps {
  className?: string;
  symbol?: string;
}

const OrnateDivider = ({ className, symbol = "❖" }: OrnateDividerProps) => {
  return (
    <div className={cn("flex items-center gap-4 my-6", className)}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <span className="text-gold text-xl">{symbol}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
};

export default OrnateDivider;
