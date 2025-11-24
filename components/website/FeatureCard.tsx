import { formatPrice } from "@/lib/utils";
import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  price: string | number;
}

const FeatureCard: React.FC<CardProps> = ({ icon, title, desc, price }) => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg border-2 hover:border-white transition-all h-full hover:bg-card hover:shadow-md border-border cursor-pointer">
      <div className="flex items-start justify-between gap-2">
        {/* Checkbox */}
        <button
          type="button"
          role="checkbox"
          aria-checked="false"
          data-state="unchecked"
          value="on"
          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        ></button>

        {/* Icon */}
        <div className="shrink-0 text-primary h-6 w-6">{icon}</div>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer text-sm leading-tight">
            {title}
          </label>
        </div>

        <p className="text-xs line-clamp-2">{desc}</p>

        <div className="mt-auto pt-2 border-t">
          <span className="text-sm font-semibold text-primary">
            +{formatPrice(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
