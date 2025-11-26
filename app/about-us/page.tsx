"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pt-12">
      {/* HEADER */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          Về Chúng Tôi
        </h1>
        <p className="mt-4 text-lg mx-auto">
          Chúng tôi không chỉ thiết kế website chuyên nghiệp tại Hồ Chí Minh, mà
          còn kiến tạo nền tảng số vững chắc giúp doanh nghiệp tăng trưởng vượt
          bậc. Với sự kết hợp giữa sáng tạo đột phá và công nghệ tiên tiến,
          chúng tôi mang đến những giải pháp thiết kế web chuẩn SEO, giúp doanh
          nghiệp khẳng định thương hiệu và gia tăng hiệu quả kinh doanh trong
          thời đại số.
        </p>
      </motion.section>

      {/* SECTION 1 */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-0 text-center">
        <motion.div
          className="space-y-6 order-1 md:order-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-lg">
            Tại Gia Bảo Digital, chúng tôi tin rằng một website không chỉ đơn
            thuần là một nền tảng trực tuyến, mà còn là một công cụ chiến lược
            giúp doanh nghiệp mở rộng quy mô, nâng cao thương hiệu và gia tăng
            doanh thu bền vững. Chúng tôi cung cấp dịch vụ thiết kế website trọn
            gói với chất lượng cao nhưng chi phí hợp lý.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-0 md:order-1"
        >
          <Image
            alt="Mission"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            src="https://tanphatdigital.com/_next/static/media/workflow-01.052bc160.png"
          />
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-0 text-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            alt="Vision"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            src="https://tanphatdigital.com/_next/static/media/workflow-03.216f3b7f.png"
          />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-lg">
            Tại Gia Bảo Digital, chúng tôi tin rằng một website không chỉ đơn
            thuần là một nền tảng trực tuyến, mà còn là một công cụ chiến lược
            giúp doanh nghiệp mở rộng quy mô, nâng cao thương hiệu và gia tăng
            doanh thu bền vững. Chúng tôi cung cấp dịch vụ thiết kế website trọn
            gói với chất lượng cao nhưng chi phí hợp lý.
          </p>
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent mb-8">
          Giá Trị Cốt Lõi
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {[
            {
              title: "Chất lượng vượt trội",
              description:
                "Cam kết cung cấp sản phẩm và dịch vụ đạt tiêu chuẩn cao nhất, đáp ứng nhu cầu của khách hàng.",
            },
            {
              title: "Sáng tạo & Đổi mới",
              description:
                "Liên tục cập nhật xu hướng và công nghệ mới nhất, tiên phong trong đổi mới để mang lại giá trị vượt trội.",
            },
            {
              title: "Khách hàng là trọng tâm",
              description:
                "Lấy sự hài lòng và thành công của khách hàng làm mục tiêu hàng đầu.",
            },
            {
              title: "Minh bạch & Uy tín",
              description:
                "Hành động trung thực, cam kết rõ ràng và giữ vững niềm tin thông qua sự minh bạch.",
            },
            {
              title: "Hợp tác bền vững",
              description:
                "Đồng hành lâu dài với đối tác và cộng đồng để phát triển bền vững.",
            },
            {
              title: "Tận tâm & Trách nhiệm",
              description:
                "Làm việc bằng đam mê và trách nhiệm cao, đảm bảo chất lượng tốt nhất.",
            },
          ].map((i, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-l-yellow-400">
                <div className="p-4">
                  <div className="tracking-tight text-xl font-bold">
                    {i.title}
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p className="text-base">{i.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* TEAM IMAGE */}
      <motion.section
        className="text-center my-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          alt="Our Team"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto"
          src="https://tanphatdigital.com/_next/static/media/features.20a4bd95.svg"
        />
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center py-12 rounded-xl border-white border-t-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Hợp tác ngay với Gia Bảo Digital
          </h2>
          <p className="mt-4">
            Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây
            dựng thương hiệu số mạnh mẽ. Cung cấp dịch vụ thiết kế website trọn
            gói từ thiết kế đến tối ưu SEO. Hãy liên hệ ngay với Gia Bảo
            Digital để cùng tạo nên những giải pháp công nghệ đột phá, hiệu quả
            và bền vững cho doanh nghiệp của bạn tại Hồ Chí Minh
          </p>

          <Link href="/contact">
            <div className="group inline-block mt-6">
              <InteractiveHoverButton>
                <span className="relative z-10">Liên Hệ Ngay</span>
              </InteractiveHoverButton>
            </div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
