"use client";

import Contact from "@/components/share/Contact";
import FeedBack from "@/components/share/FeedBack";
import OurProjects from "@/components/share/Projects";


import { Button } from "@/components/ui/button";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import { CircleCheck, Clock, Edit, LifeBuoy, ShieldCheck } from "lucide-react";
import Image from "next/image";

const cardVariant = {
  inactive: { opacity: 0, y: 25 },
  active: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <div>
      {/* Tieu de trang */}
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
      {/* hero section */}
      <div className="container mx-auto py-12 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-video w-full flex items-center justify-center overflow-hidden rounded-2xl"
        >
          <Image
            width={1200}
            height={600}
            src="/banner-1.webp"
            alt="Hero secion"
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* Tai sao chon chung toi */}
      <section className="mx-auto w-full container px-4 md:px-6 relative py-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 text-center text-2xl font-bold md:text-4xl
        bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent"
        >
          <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
            Tại sao chọn chúng tôi
          </p>
        </motion.h1>

        <div>
          {/* Top 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
            {[
              {
                icon: <CircleCheck className="size-11" />,
                title: "Thiết kế website theo yêu cầu",
                desc: "Website chuẩn UX/UI, tối ưu SEO, giao diện độc quyền giúp thương hiệu chuyên nghiệp hơn.",
              },
              {
                icon: <ShieldCheck className="size-11" />,
                title: "Chuẩn SEO, chuẩn UI/UX",
                desc: "Tối ưu SEO & UX giúp tăng chuyển đổi, thu hút khách hàng!",
              },
              {
                icon: <Clock className="size-11" />,
                title: "Tốc độ cao & bảo mật",
                desc: "Website tải nhanh, bảo mật vững chắc chống hacker & tấn công DDoS.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariant}
                initial="inactive"
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.15, // ✔ delay đặt ở đây
                }}
                whileInView="active"
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 shadow-sm 
              h-full p-4 transition-all duration-300 ease-in-out 
              hover:border-l-4 hover:border-l-slate-100 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-2">
                  {item.icon}
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
                <p className="text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            <div></div>

            {[
              {
                icon: <Edit className="size-11" />,
                title: "Dễ quản lý & nâng cấp",
                desc: "Tích hợp CMS mạnh mẽ giúp quản lý nội dung dễ dàng.",
              },
              {
                icon: <LifeBuoy />,
                title: "Hỗ trợ lâu dài",
                desc: "Bảo trì, cập nhật website miễn phí trọn đời!",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={cardVariant}
                whileInView="active"
                initial="inactive"
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.15, // ✔ delay đặt ở đây
                }}
                viewport={{ once: true }}
                className="col-span-2 rounded-lg border border-white/10 shadow-sm h-full p-4
              transition-all duration-300 ease-in-out hover:border-l-4 
              hover:border-l-slate-100 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-2">
                  {item.icon}
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
                <p className="text-base">{item.desc}</p>
              </motion.div>
            ))}

            <div></div>
          </div>
        </div>
      </section>
      <OurProjects />
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-16 relative">
          {/* 🎬 Heading animation */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 text-2xl text-center font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]"
          >
            <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Gói Dịch Vụ Của Chúng Tôi
            </p>
          </motion.h2>

          {/* 🎬 Cards animation */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cơ Bản",
                description:
                  "Dành cho cá nhân hoặc doanh nghiệp nhỏ cần website cơ bản với SEO tối ưu và tốc độ tải nhanh.",
                features: [
                  "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
                  "Giao diện thiết kế riêng theo thương hiệu",
                  "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
                  "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
                  "Tích hợp Google Maps, Form liên hệ nâng cao",
                  "Bảo trì miễn phí 6 tháng",
                  "Miễn phí domain 1 năm",
                ],
              },
              {
                title: "Chuyên Nghiệp",
                description:
                  "Phù hợp doanh nghiệp cần website chuyên nghiệp với tính năng nâng cao và SEO mạnh mẽ.",
                features: [
                  "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
                  "Giao diện thiết kế riêng theo thương hiệu",
                  "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
                  "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
                  "Tích hợp Google Maps, Form liên hệ nâng cao",
                  "Bảo trì miễn phí 6 tháng",
                  "Miễn phí domain 1 năm",
                ],
              },
              {
                title: "Thương Mại Điện Tử",
                isPopular: true,
                description:
                  "Giải pháp thiết kế website thương mại điện tử chuẩn SEO, tối ưu tốc độ, hỗ trợ thanh toán và quản lý đơn hàng hiệu quả.",
                features: [
                  "Thiết kế UI/UX chuyên nghiệp, tối ưu trải nghiệm mua sắm",
                  "Tích hợp giỏ hàng, thanh toán Momo, VNPay, Stripe, PayPal",
                  "Quản lý sản phẩm, đơn hàng, khách hàng & kho hàng",
                  "Tích hợp chatbot tư vấn, hệ thống mã giảm giá",
                  "Đa ngôn ngữ, đa tiền tệ",
                  "Bảo trì miễn phí 12 tháng",
                  "Miễn phí domain 1 năm",
                ],
              },
              {
                title: "Giải Pháp Tùy Chỉnh",
                description: "Phát triển ứng dụng web/mobile theo yêu cầu đặc biệt.",
                features: [
                  "Thiết kế & lập trình theo yêu cầu đặc thù",
                  "Ứng dụng Web App, Mobile App (iOS & Android)",
                  "Hệ thống web app (CRM, ERP, SaaS...)",
                  "Tích hợp API, hệ thống tự động hóa, quản lý nội bộ",
                  "Hỗ trợ AI & Machine Learning nếu cần",
                  "Hỗ trợ & bảo trì theo hợp đồng riêng",
                  "Miễn phí domain 1 năm",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm relative border flex flex-col border-zinc-800 hover:border-slate-100 transition-colors">
                  {/* Title */}
                  <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="text-lg font-medium">{plan.title}</h3>
                  </div>

                  {plan.isPopular && (
                    <div className="inline-flex items-center border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-cyan-400 to-blue-500">
                      Phổ Biến
                    </div>
                  )}

                  {/* Description + Features */}
                  <div className="p-4 pt-0 flex-1">
                    <p className="text-sm">{plan.description}</p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((item, i) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
