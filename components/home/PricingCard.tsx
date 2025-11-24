import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({
  title,
  description,
  features,
  isPopular,
}: PricingCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm relative border flex flex-col border-zinc-800 hover:border-slate-100 transition-colors">
      {/* Title */}
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      {isPopular && (
        <div className="inline-flex items-center border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-cyan-400 to-blue-500">
          Phổ Biến
        </div>
      )}

      {/* Description + Features */}
      <div className="p-4 pt-0 flex-1">
        <p className="text-sm">{description}</p>

        <ul className="mt-6 space-y-3">
          {features.map((item, i) => (
            <li key={i} className="flex text-sm space-x-2">
              <CircleCheck className="shrink-0" size={24} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <div className="flex items-center p-4 pt-0">
        <Button className="w-full">Đặt lịch demo</Button>
      </div>
    </div>
  );
}
