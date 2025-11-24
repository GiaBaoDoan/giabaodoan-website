import { cn, formatPrice } from "@/lib/utils";
import { Check } from "lucide-react";

interface WebsiteCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string | number;
  features: string[];
  className?: string;
}

export function WebsiteCard({
  icon,
  title,
  description,
  price,
  features,
  className,
}: WebsiteCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg shadow-sm relative cursor-pointer transition-all duration-300 h-full hover:shadow-lg border-2 border-border hover:border-white hover:bg-card",
        className
      )}
    >
      <div className="flex flex-col space-y-1.5 p-4">
        <div className="mb-4">{icon}</div>

        <div className="font-semibold tracking-tight text-xl">{title}</div>

        <div className="text-sm">{description}</div>
      </div>

      <div className="p-4 pt-0 space-y-4">
        <div className="text-2xl font-bold text-primary">
          {formatPrice(price)}
        </div>

        <ul className="space-y-2">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
