"use client";

import { motion } from "framer-motion";
import { CircleCheck, ShieldCheck, Clock, Edit, LifeBuoy } from "lucide-react";

const cardVariant = {
  inactive: { opacity: 0, y: 25 },
  active: {
    opacity: 1,
    y: 0,
  },
};

export default function WhyChooseUs() {
  return (
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
  );
}
