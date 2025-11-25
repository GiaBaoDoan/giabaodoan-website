"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const FeedBack = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const [api, setApi] = useState<CarouselApi | any>(null);

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
    <section>
      <div className="mx-auto container px-8">
        {/* 🎬 Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-8 mt-8"
        >
          <h2 className="text-2xl font-bold md:text-4xl text-center mb-8 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="mt-4 md:text-xl">
            Những đánh giá chân thực từ khách hàng đã trải nghiệm dịch vụ của
            chúng tôi
          </p>
        </motion.div>

        {/* 🎞 Carousel animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full container px-4 md:px-16"
        >
          <Carousel className="w-full" opts={{ loop: false }} setApi={setApi}>
            <CarouselContent>
              {[
                {
                  name: "Nguyễn Thị Hạnh",
                  role: "Chủ cửa hàng mỹ phẩm",
                  avatar: "/feedback-01.jpg",
                  content:
                    "Trang web không chỉ đẹp mà còn giúp khách hàng dễ dàng mua sắm hơn. Nhờ giao diện thân thiện và tốc độ tải nhanh, doanh số của chúng tôi tăng đáng kể trong vài tháng qua.",
                },
                {
                  name: "Trần Quốc Bảo",
                  role: "Chủ doanh nghiệp thời trang",
                  avatar: "/feedback-02.jpg",
                  content:
                    "Trang web không chỉ đẹp mà còn giúp khách hàng dễ dàng mua sắm hơn. Nhờ giao diện thân thiện và tốc độ tải nhanh, doanh số của chúng tôi tăng đáng kể trong vài tháng qua.",
                },
                {
                  name: "Lê Minh Khoa",
                  role: "CEO Start-up",
                  avatar: "/feedback-03.jpg",
                  content:
                    "Trang web không chỉ đẹp mà còn giúp khách hàng dễ dàng mua sắm hơn. Nhờ giao diện thân thiện và tốc độ tải nhanh, doanh số của chúng tôi tăng đáng kể trong vài tháng qua.",
                },
                // Thêm item nếu cần
              ].map((t, i) => (
                <CarouselItem
                  key={i}
                  className="basic-full md:basis-1/3 flex justify-center"
                >
                  {/* 🎬 Item animation + hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "transition-transform duration-500 max-md:scale-100!",
                        i - 1 === selectedIndex ? "scale-100" : "scale-80"
                      )}
                    >
                      <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm">
                        <div className="flex aspect-video items-center justify-center p-4">
                          <div className="flex flex-col gap-4">
                            {/* Avatar + Info */}
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                                <Image
                                  src={t.avatar}
                                  alt={t.name}
                                  width={40}
                                  height={40}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{t.name}</h3>
                                <p className="text-sm">{t.role}</p>
                              </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 text-yellow-500 fill-yellow-500"
                                />
                              ))}
                            </div>

                            {/* Content */}
                            <p>{t.content}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="max-md:hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedBack;
