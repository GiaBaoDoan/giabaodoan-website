"use client";

import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return <div className="container mx-auto px-2 py-12 space-y-16">
    <section>
      <div className="text-center space-y-6">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-80 h-80 rounded-full flex items-center justify-center mx-auto shadow-2xl overflow-hidden"
        >
          <Image
            src="/avatar.jpg"
            alt="Đoàn Gia Bảo - Founder & CEO Gia Bảo Digital"
            width={320}
            height={320}
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl font-bold md:text-5xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent"
        >
          Đoàn Gia Bảo
        </motion.h1>

        {/* Position */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-gray-300 font-medium"
        >
          Founder &amp; CEO – Gia Bảo Digital
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg text-yellow-400 max-w-2xl mx-auto"
        >
          Thiết kế website chuẩn SEO &amp; Chuyển đổi số cho doanh nghiệp
        </motion.p>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-5xl mx-auto p-8 rounded-xl border border-yellow-400/20 shadow-2xl"
        >
          <Quote className="w-8 h-8 text-yellow-400 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
            "Thành công bền vững không đến từ những con số ảo. Giá trị thực sự
            được tạo nên từ sự chuyên nghiệp, tận tâm và cam kết đồng hành lâu
            dài cùng từng khách hàng."
          </blockquote>
        </motion.div>
      </div>
    </section>
    {/* me */}
    <section className="space-y-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent text-center"
      >
        Câu chuyện của tôi
      </motion.h2>

      {/* Wrapper stagger */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="w-full space-y-8 text-gray-300 leading-relaxed text-lg"
      >
        {/* Block 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl border border-gray-700/50"
        >
          <p className="text-xl leading-relaxed">
            Tôi là{" "}
            <span className="text-yellow-400 font-semibold">
              Đoàn Gia Bảo
            </span>
            , Founder &amp; CEO của Gia Bảo Digital với hơn 3 năm kinh nghiệm
            chuyên sâu trong lĩnh vực thiết kế website và tối ưu SEO. Khởi đầu
            từ công việc freelance, tôi đã thành công triển khai hơn 30+ dự án
            đa dạng từ website cá nhân, doanh nghiệp đến các hệ thống thương
            mại điện tử phức tạp.
          </p>
        </motion.div>

        {/* 2 Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg border border-gray-700/30"
          >
            <h3 className="text-yellow-400 font-semibold text-xl mb-4">
              Tầm nhìn
            </h3>
            <p>
              Website không chỉ là công cụ hiển thị thông tin, mà là{" "}
              <strong className="text-white">nền tảng số hóa </strong>cho sự
              phát triển bền vững của doanh nghiệp. Mỗi dòng code, mỗi thiết
              kế đều được tối ưu để tạo ra giá trị thực tế và trải nghiệm xuất
              sắc cho người dùng cuối.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-lg border border-gray-700/30"
          >
            <h3 className="text-yellow-400 font-semibold text-xl mb-4">
              Sứ mệnh
            </h3>
            <p>
              Thành lập{" "}
              <strong className="text-white">Gia Bảo Digital</strong> với sứ
              mệnh đồng hành cùng các doanh nghiệp vừa và nhỏ trong hành trình
              chuyển đổi số. Mang đến giải pháp website chuyên nghiệp, giúp
              doanh nghiệp tiếp cận khách hàng hiệu quả và đạt được tăng
              trưởng bền vững.
            </p>
          </motion.div>
        </div>

        {/* Bottom block */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="border border-yellow-400/20 p-6 rounded-xl"
        >
          <p className="text-lg leading-relaxed">
            <span className="text-yellow-400 font-semibold">
              Hiểu rõ thách thức của doanh nghiệp
            </span>{" "}
            - ngân sách hạn chế, thiếu đội ngũ kỹ thuật chuyên môn, và sự phức
            tạp của các giải pháp công nghệ hiện đại. Chính vì vậy, tôi cam
            kết mang đến những giải pháp{" "}
            <strong className="text-white">tối ưu và hiệu quả</strong>, giúp
            doanh nghiệp tập trung vào phát triển kinh doanh cốt lõi thay vì
            lo lắng về vấn đề kỹ thuật.
          </p>
        </motion.div>
      </motion.div>
    </section>
    {/* time line */}
    <section className="space-y-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent text-center"
      >
        Hành trình phát triển
      </motion.h2>

      <div className="relative mx-auto">
        {/* Line Animation */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 805 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-[13px] w-0.5 bg-yellow-400/30 top-4"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 805 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-[13px] w-0.5 bg-yellow-400 top-4"
        />

        {/* Container with stagger */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="space-y-5"
        >
          {/* ITEM TEMPLATE – duplicated and animated */}
          {[
            {
              year: "2024",
              title: "Khởi đầu hành trình",
              desc: `Bắt đầu với vai trò freelance developer, thực hiện các dự án
              website đầu tiên cho các doanh nghiệp trong lĩnh vực làm đẹp,
              du lịch và nhiếp ảnh. Từng bước xây dựng nền tảng kỹ thuật và
              hiểu biết sâu sắc về nhu cầu thực tế của khách hàng.`,
              tag: "15+ dự án thành công",
            },
            {
              year: "2025",
              title: "Chuyên nghiệp hóa quy trình",
              desc: `Phát triển quy trình làm việc chuẩn hóa với focus vào SEO và
              UX/UI. Áp dụng các best practices trong thiết kế web, đảm bảo
              chất lượng và hiệu quả.`,
              tag: "60+ dự án triển khai",
            },
            {
              year: "Tháng 3/2025",
              title: "Ra mắt Gia Bảo Digital",
              desc: `Chính thức thành lập công ty với tầm nhìn democratize công
              nghệ web cho doanh nghiệp Việt Nam. Cung cấp giải pháp website toàn diện.`,
              tag: "Milestone quan trọng",
            },
            {
              year: "Tháng 9/2025",
              title: "Đột phá về SEO",
              desc: `Website đạt 10.000+ organic visitors/tháng, đứng top nhiều
              từ khóa ngành. Khẳng định năng lực SEO.`,
              tag: "10.000+ organic traffic",
            },
            {
              year: "Tương lai",
              title: "Mở rộng và đổi mới",
              desc: `Xây dựng đội ngũ chuyên gia, đầu tư R&D, hướng đến trở thành
              đối tác tin cậy hàng đầu cho doanh nghiệp SME.`,
              tag: "Scaling & Innovation",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -40 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex items-start gap-8 group"
            >
              {/* dot */}
              <div className="relative shrink-0 pt-1 timeline-icon">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-7 h-7 rounded-full bg-yellow-400 border-4 border-gray-900 relative z-10 flex items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </motion.div>
              </div>

              {/* content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-1 space-y-2 pb-4 p-4 rounded-lg transition-all duration-300 group-hover:bg-gray-800/40 group-hover:shadow-lg group-hover:shadow-yellow-400/10"
              >
                <h3 className="text-yellow-400 font-semibold text-xl md:text-2xl">
                  {item.year}
                </h3>
                <h4 className="text-white font-semibold text-lg uppercase">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                <span className="inline-block text-sm text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">
                  {item.tag}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <p className="text-gray-200 italic text-lg leading-relaxed">
            <span className="text-yellow-400 font-semibold">
              "Chất lượng là nền tảng của sự bền vững."
            </span>{" "}
            Mỗi bước phát triển đều được xây dựng trên nền tảng vững chắc của
            sự kiên trì, học hỏi không ngừng và cam kết mang lại giá trị thực
            tế, lâu dài cho khách hàng.
          </p>
        </motion.div>

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
              Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp
              xây dựng thương hiệu số mạnh mẽ. Cung cấp dịch vụ thiết kế
              website trọn gói từ thiết kế đến tối ưu SEO. Hãy liên hệ ngay
              với Gia Bảo Digital để cùng tạo nên những giải pháp công nghệ
              đột phá, hiệu quả và bền vững cho doanh nghiệp của bạn tại Hồ
              Chí Minh
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
    </section>
  </div>;
};

export default page;
