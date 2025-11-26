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

import { motion } from "framer-motion";

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
                {/* 🎬 Tiêu đề fade-in + slide-up */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-8 text-center text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent"
                >
                    <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                        Dự Án Tiêu Biểu – Khách Hàng Đã Thành Công!
                    </p>
                </motion.h2>
            </div>

            {/* 🎞 Carousel + animation fade-in */}
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full container mx-auto px-4 md:px-16 mt-12"
            >
                <Carousel className="w-full" opts={{ loop: false }} setApi={setApi}>
                    <CarouselContent>
                        {[
                            "https://tanphatdigital.com/_next/static/media/echomedi.5b5b2cbf.png",
                            "https://tanphatdigital.com/_next/static/media/taikhoanmavis.6220bd68.png",
                            "https://tanphatdigital.com/_next/static/media/amor-spa.dfe40c90.png",
                            "https://tanphatdigital.com/_next/static/media/tamly.echomedi.f0179c6f.png",
                            "https://tanphatdigital.com/_next/static/media/tamly.echomedi.f0179c6f.png",
                        ].map((src, index) => (
                            <CarouselItem
                                key={index}
                                className="basic-full md:basis-1/3 flex justify-center"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className={cn(
                                            "transition-transform duration-500 max-md:scale-100!",
                                            index - 1 === selectedIndex ? "scale-100" : "scale-80"
                                        )}
                                    >
                                        <div className="rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                                            <div className="aspect-auto p-2">
                                                <Image
                                                    src={src}
                                                    width={1200}
                                                    height={800}
                                                    alt="Ảnh dự án"
                                                    className="rounded-xl object-cover"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>

                {/* 🎬 Nút animation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center items-center"
                >
                    <InteractiveHoverButton className="mt-6">
                        Xem thêm dự án
                    </InteractiveHoverButton>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OurProjects;
