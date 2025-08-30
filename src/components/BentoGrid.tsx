import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  containerWidth: number;
  minCardWidth: number; // e.g. 480
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
  containerWidth,
  minCardWidth,
  ...props
}) => {
  const gap = 16; // Tailwind gap-4 = 1rem = 16px

  if (containerWidth <= 0) {
    return (
      <div className={cn("flex flex-wrap gap-4", className)} {...props}>
        {children}
      </div>
    );
  }

  // Calculate how many columns fit at min width
  let columns = Math.floor((containerWidth + gap) / (minCardWidth + gap));
  if (columns < 1) columns = 1;

  // Compute card width to fill the container evenly
  const totalGapWidth = (columns - 1) * gap;
  const colWidthPx = (containerWidth - totalGapWidth) / columns;
  const colWidthPercent = `${(colWidthPx / containerWidth) * 100}%`;

  return (
    <div className={cn("flex flex-wrap gap-4", className)} {...props}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: `0 0 ${colWidthPercent}`, maxWidth: colWidthPercent }}>
          {child}
        </div>
      ))}
    </div>
  );
};
