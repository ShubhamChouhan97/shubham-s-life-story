import { cn } from "@/lib/utils";

interface InfoRowProps {
  label: string;
  labelHindi?: string;
  value: string;
  valueHindi?: string;
  className?: string;
}

const InfoRow = ({ label, labelHindi, value, valueHindi, className }: InfoRowProps) => {
  return (
    <div className={cn("info-row", className)}>
      <div className="flex flex-col">
        <span className="text-muted-foreground font-medium text-sm uppercase tracking-wide">
          {label}
        </span>
        {labelHindi && (
          <span className="font-hindi text-muted-foreground/70 text-xs">
            {labelHindi}
          </span>
        )}
      </div>
      <div className="flex flex-col text-right">
        <span className="text-foreground font-semibold">
          {value}
        </span>
        {valueHindi && (
          <span className="font-hindi text-muted-foreground text-sm">
            {valueHindi}
          </span>
        )}
      </div>
    </div>
  );
};

export default InfoRow;
