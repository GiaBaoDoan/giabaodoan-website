"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section id="du-an" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mx-auto mb-8 text-center text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Dự Án Tiêu Biểu – Khách Hàng Đã Thành Công!
          </p>
        </h2>
      </div>

      {/*  */}
      <div className="relative w-full container mx-auto px-4 md:px-16 mt-12">
        <Carousel className="w-full" opts={{ loop: false }} setApi={setApi}>
          <CarouselContent>
            {[
              "https://tanphatdigital.com/_next/static/media/echomedi.5b5b2cbf.png",
              "https://tanphatdigital.com/_next/static/media/taikhoanmavis.6220bd68.png",
              "https://tanphatdigital.com/_next/static/media/amor-spa.dfe40c90.png",
              "https://tanphatdigital.com/_next/static/media/tamly.echomedi.f0179c6f.png",
              "https://tanphatdigital.com/_next/static/media/tamly.echomedi.f0179c6f.png",
            ].map((item, index) => (
              <CarouselItem
                key={index}
                className="basic-full md:basis-1/3 flex justify-center"
              >
                <div
                  className={cn(
                    "transition-transform duration-500 max-md:scale-100!",
                    index - 1 === selectedIndex ? "scale-100" : "scale-80"
                  )}
                >
                  <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm overflow-hidden border-none cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="aspect-auto p-2">
                      <Image
                        src={item}
                        width={1200}
                        height={800}
                        alt="Ảnh"
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
        <div className="flex justify-center items-center">
          <InteractiveHoverButton className="mt-6">
            Xem thêm dự án
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
