
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const PremiumCard = ({ children, className, hover = true, gradient = false }: PremiumCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-lg",
        gradient
          ? "bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-blue-900/80"
          : "bg-white/80 dark:bg-gray-800/80",
        hover && "hover:shadow-xl hover:scale-[1.02] transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PremiumCard;
