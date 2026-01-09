import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  titleHindi?: string;
  className?: string;
}

const SectionTitle = ({ title, titleHindi, className }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-6", className)}>
      <h2 className="section-title text-xl md:text-2xl font-semibold tracking-wide">
        {title}
      </h2>
      {titleHindi && (
        <p className="font-hindi text-maroon/70 mt-1 text-sm">
          {titleHindi}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
