import { Button } from "@/components/ui/button";
import { services } from "@/data/services/ServicesData";
import {
  ArrowRight,
  Check,
  CircleCheckBig,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const OurServices = memo(() => {
  return (
    <section className="py-16" id="dich-vu">
      <div className="mx-auto px-4 container">
        <h2 className="text-2xl font-bold md:text-4xl mb-12 text-center">
          <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Dịch Vụ Thiết Kế Website Của Chúng Tôi
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary"
            >
              <div className="flex-1 space-y-1.5 p-4">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 rounded-full bg-primary/10">{s.icon}</div>
                  <div className="flex-1">
                    <div className="tracking-tight text-xl font-bold mb-1">
                      {s.title}
                    </div>
                    <p className="text-sm text-primary font-medium">
                      {s.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-base">{s.description}</div>
              </div>
              <div className="p-4 pt-0 space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="size-4" />
                    Tính năng nổi bật:
                  </h4>
                  <ul className="space-y-2">
                    {s.features.map((ft, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="size-4 stroke-green-500 shrink-0" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="size-4 shrink-0" />
                    Lợi ích:
                  </h4>
                  <ul className="space-y-1">
                    {s.benefits.map((bt, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheckBig className="size-4 shrink-0" />
                        <span>{bt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={s.link}>
                  <div className="group inline-block w-full">
                    <Button
                      variant="outline"
                      className="w-full h-12 hover:bg-white! hover:text-black"
                    >
                      <span className="relative z-10 text-sm font-medium">
                        Xem chi tiết giải pháp
                      </span>
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default OurServices;
