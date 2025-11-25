"use client";

import { Contact } from "@/components/contact";

import {
  HeroSection,
  OurProjects,
  OurServices,
  FeedBack,
} from "@/components/home";
import WhyChooseUs from "@/components/home/WhyMe";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="py-12">
        <div className="px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center flex-col gap-6"
          >
            {/* Button intro */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <RainbowButton className="bg-white rounded-full text-black capitalize">
                🎉 Chào mừng đến với Gia Bảo Digital
              </RainbowButton>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-2xl text-center font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]"
            >
              <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                Thiết Kế & Lập Trình Website Chuyên Nghiệp
              </p>
            </motion.h1>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-[1050px] text-center text-lg sm:text-xl"
            >
              Chúng tôi mang đến giải pháp website hoàn hảo, giúp bạn tăng doanh
              thu, nâng tầm thương hiệu với tốc độ tải nhanh, giao diện độc
              quyền & chuẩn SEO!
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <InteractiveHoverButton className="mt-6">
                Nhận báo giá miễn phí
              </InteractiveHoverButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeroSection />
      <WhyChooseUs />
      <OurProjects />
      <OurServices />
      <section className="container mx-auto px-4 md:px-16 relative">
        <div className="mx-auto p-4 md:p-20 text-center border-t-2 border-l-2 border-b-2 rounded-xl">
          <h2 className="text-2xl font-bold md:text-4xl text-center mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Hãy để website trở thành cỗ máy tạo doanh thu
          </h2>
          <p className="text-xl mb-8">
            Liên hệ ngay để nhận tư vấn miễn phí &amp; báo giá tốt nhất
          </p>
          <div className="relative inline-block">
            <RainbowButton className="bg-white rounded-full text-black capitalize">
              Liên hệ ngay
            </RainbowButton>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="dark:stroke-white stroke-black transition-colors duration-300 -rotate-180"
                width="40"
                height="41"
                viewBox="0 0 240 201"
                fill="none"
              >
                <path
                  d="M208.549 179.947C200.559 185.36 192.91 190.762 184.086 196.717C189.208 200.475 194.5 200.119 198.516 197.925C210.567 191.343 222.603 184.42 233.913 176.494C240.401 171.989 239.089 165.189 231.93 161.845C220.048 156.098 207.853 151.047 195.644 145.654C194.946 145.336 194.07 144.853 193.564 145.042C191.527 145.455 189.683 146.375 187.66 147.13C188.415 148.815 188.515 151.208 189.748 152.021C193.979 154.954 198.36 157.368 202.577 159.959C204.864 161.42 207.136 162.539 209.167 166.062C205.242 166.37 201.154 166.855 197.229 167.163C115.86 170.003 44.09 119.964 17.744 42.6676C14.416 32.6858 12.2774 22.4914 9.45506 12.3209C8.45014 8.76178 7.28144 5.37955 6.27653 1.82046C5.41466 1.67938 4.5671 1.8801 3.70523 1.73903C2.76539 3.82563 0.97799 6.11296 1.24191 8.32871C1.7204 15.6715 2.19889 23.0143 3.70304 30.3212C18.3884 103.061 78.6849 161.202 154.409 174.819C168.897 177.394 183.79 177.388 198.385 178.419C201.476 178.653 204.375 178.381 207.452 178.274C207.972 178.427 208.343 179.098 208.549 179.947Z"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="group">
          {/* Wrapper của image */}
          <div className="absolute hidden md:flex top-0 right-0 justify-center">
            {/* Hình mặc định */}
            <Image
              src="/CTA-01.jpg"
              alt="CTA"
              width={300}
              height={300}
              className="transition-opacity duration-300 z-10 group-hover:opacity-0"
            />

            {/* Hình khi hover */}
            <Image
              src="/CTA-02.jpg"
              alt="CTA Hover"
              width={300}
              height={300}
              className="absolute top-0 right-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>
      <FeedBack />
      <Contact />
    </div>
  );
}
