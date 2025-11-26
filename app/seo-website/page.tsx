"use client";

import {
  PanelLeft,
  Search,
  Smartphone,
  Zap,
  Shield,
  Code,
  MessageSquare,
  Sparkles,
  Rocket,
  Clock,
  Layers,
  Users,
  TrendingUp,
  Brain,
  ChartNoAxesColumn,
  Settings,
  ChartLine,
  Monitor,
  ClipboardCheck,
  ArrowRight,
  Database,
  Quote,
  Star,
  Check,
  CircleCheck,
  CircleCheckBig,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // đường dẫn component Accordion của bạn

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OurProjects from "@/components/share/Projects";

const page = () => {
  return (
    <div className="min-h-screen overflow-y-hidden">
      {/* Tiêu đề Trang  */}
      <section className="relative py-32 md:py-40">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Thiết Kế Website Chuyên Nghiệp
          </motion.h1>

          <motion.p
            className="text-lg font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tạo Lợi Thế Cạnh Tranh &amp; Tăng Trưởng Doanh Thu
          </motion.p>

          <motion.p
            className="mx-auto mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Chúng tôi cung cấp dịch vụ thiết kế website chuyên nghiệp, chuẩn
            SEO, tốc độ cao và tối ưu chuyển đổi, giúp doanh nghiệp của bạn nổi
            bật trong thị trường số và thu hút khách hàng tiềm năng.
          </motion.p>

          <motion.div
            className="mt-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">
              <InteractiveHoverButton>Liên hệ ngay</InteractiveHoverButton>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Chỉ số */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "ROI trung bình", value: 500, suffix: "%" },
              { label: "Giảm chi phí quảng cáo", value: 40, suffix: "%" },
              { label: "Chiến dịch thành công", value: 200, suffix: "+" },
              { label: "Khách hàng hài lòng", value: 98, suffix: "%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="text-3xl md:text-4xl font-bold mb-2">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Rủi ro gặp phai */}
      <section className="py-20" id="thach-thuc">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Doanh Nghiệp Của Bạn Đang Gặp Phải Những Thách Thức Này?
            </h2>
            <p className="text-lg mx-auto max-w-3xl">
              Trong thời đại số, một website kém chất lượng không chỉ làm mất
              khách hàng mà còn ảnh hưởng nghiêm trọng đến doanh thu và uy tín
              thương hiệu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📉",
                title: "Mất Khách Hàng Tiềm Năng",
                percent: "88%",
                description:
                  "khách hàng sẽ không quay lại nếu website có trải nghiệm kém, giao diện lỗi thời hoặc khó sử dụng.",
                warning: "Mất cơ hội kinh doanh",
              },
              {
                emoji: "⚡",
                title: "Tốc Độ Tải Chậm",
                percent: "53%",
                description:
                  "khách hàng rời bỏ website nếu thời gian tải trang vượt quá 3 giây, ảnh hưởng trực tiếp đến doanh số.",
                warning: "Giảm tỷ lệ chuyển đổi",
              },
              {
                emoji: "🔍",
                title: "Không Xuất Hiện Trên Google",
                percent: "75%",
                description:
                  "doanh nghiệp không được tìm thấy trên Google do website không tối ưu SEO, mất đi nguồn khách hàng miễn phí.",
                warning: "Thua kém đối thủ",
              },
              {
                emoji: "💼",
                title: "Thiếu Uy Tín Thương Hiệu",
                percent: "94%",
                description:
                  "người dùng đánh giá độ tin cậy của doanh nghiệp dựa trên thiết kế website chuyên nghiệp hay không.",
                warning: "Khó thu hút khách hàng",
              },
              {
                emoji: "📱",
                title: "Không Tương Thích Mobile",
                percent: "60%",
                description:
                  "lượng truy cập đến từ thiết bị di động, nhưng nhiều website không hiển thị tốt trên mobile.",
                warning: "Mất nửa thị trường",
              },
              {
                emoji: "🔒",
                title: "Bảo Mật Yếu Kém",
                percent: "43%",
                description:
                  "website bị tấn công mỗi ngày do không có biện pháp bảo mật đầy đủ, gây thiệt hại về dữ liệu và uy tín.",
                warning: "Rủi ro pháp lý",
              },
            ].map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">{c.emoji}</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          {c.title}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            {c.percent}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {c.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>{c.warning}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm max-w-5xl mx-auto border-none">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                  <span>💡</span>
                  <span>Giải Pháp Toàn Diện Từ Gia Bảo Digital</span>
                </h3>
                <p className="text-lg mb-4">
                  Chúng tôi giúp bạn xây dựng website chuyên nghiệp, chuẩn SEO,
                  tốc độ cao và tối ưu chuyển đổi - không chỉ đẹp mắt mà còn
                  mang lại kết quả kinh doanh thực tế!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="stroke-emerald-500 size-5" />
                    <span className="font-medium">Tăng trưởng doanh thu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="stroke-emerald-500 size-5" />
                    <span className="font-medium">
                      Nâng cao uy tín thương hiệu
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="stroke-emerald-500 size-5" />
                    <span className="font-medium">
                      Tối ưu trải nghiệm khách hàng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Gói dịch vụ */}
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
                description:
                  "Phát triển ứng dụng web/mobile theo yêu cầu đặc biệt.",
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
            ].map((item, i) => (
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
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>

                  {item.isPopular && (
                    <div className="inline-flex items-center border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-cyan-400 to-blue-500">
                      Phổ Biến
                    </div>
                  )}

                  {/* Description + Features */}
                  <div className="p-4 pt-0 flex-1">
                    <p className="text-sm">{item.description}</p>

                    <ul className="mt-6 space-y-3">
                      {item.features.map((item, i) => (
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
      {/* Tính năng được tích hợp vào trang web */}
      <section className="py-16" id="tinh-nang">
        <div className="container mx-auto rounded-3xl px-4 my-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tính năng nổi bật của website chuyên nghiệp
            </h2>
            <p className="text-lg mx-auto">
              Chúng tôi tích hợp các tính năng hiện đại giúp website của bạn
              không chỉ đẹp mắt mà còn hiệu quả trong việc thu hút và chuyển đổi
              khách hàng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <PanelLeft />,
                title: "Thiết kế UI/UX chuyên nghiệp",
                description: "Giao diện đẹp mắt, thân thiện người dùng",
              },
              {
                icon: <Search />,
                title: "Tối ưu SEO toàn diện",
                description: "Dễ dàng được tìm thấy trên Google",
              },
              {
                icon: <Smartphone />,
                title: "Tương thích đa thiết bị",
                description: "Hiển thị hoàn hảo trên mọi màn hình",
              },
              {
                icon: <Zap />,
                title: "Tốc độ tải trang nhanh",
                description: "Tối ưu trải nghiệm người dùng",
              },
              {
                icon: <Shield />,
                title: "Bảo mật cao cấp",
                description: "Chứng chỉ SSL và các biện pháp bảo vệ",
              },
              {
                icon: <Code />,
                title: "Mã nguồn sạch",
                description: "Dễ dàng bảo trì và nâng cấp",
              },
              {
                icon: <MessageSquare />,
                title: "Tích hợp chat trực tuyến",
                description: "Hỗ trợ khách hàng tức thì",
              },
              {
                icon: <ChartNoAxesColumn />,
                title: "Phân tích dữ liệu",
                description: "Theo dõi và tối ưu hiệu suất",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div className="tracking-tight text-lg font-semibold">
                        {feature.title}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <p>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Lợi thế khi SEO trang web */}
      <section className="py-16" id="seo-advantages">
        <div className="px-4 container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Lợi thế SEO vượt trội
            </h2>
            <p className="text-lg mx-auto">
              Chúng tôi áp dụng các chiến lược SEO tiên tiến giúp website của
              bạn dễ dàng được tìm thấy trên công cụ tìm kiếm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://res.cloudinary.com/dtmxgrnfn/image/upload/v1743770315/tanphatdigital/djttnf2i9danbqgwn1dv.webp"
                alt="SEO Optimization for Websites"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Cấu trúc website tối ưu cho SEO",
                  description:
                    "Thiết kế cấu trúc URL thân thiện, tối ưu hóa thẻ meta, heading và nội dung theo từ khóa mục tiêu.",
                },
                {
                  title: "Tốc độ tải trang vượt trội",
                  description:
                    "Tối ưu hóa mã nguồn, hình ảnh và tài nguyên để đạt điểm PageSpeed Insights cao, cải thiện trải nghiệm người dùng.",
                },
                {
                  title: "Schema Markup tích hợp",
                  description:
                    "Cung cấp dữ liệu có cấu trúc giúp Google hiểu rõ nội dung website, tăng khả năng hiển thị rich snippets.",
                },
                {
                  title: "Tương thích thiết bị di động",
                  description:
                    "Thiết kế responsive hoàn hảo, đáp ứng tiêu chí Mobile-First Indexing của Google, tăng trải nghiệm người dùng trên mọi thiết bị.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <CircleCheckBig className="size-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Lời cam kết */}
      <section className="py-16" id="cam-ket">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <motion.h2
              className="text-2xl font-bold md:text-4xl mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              🎯
              <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                Cam Kết Của Chúng Tôi
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "100% website chuẩn SEO, UI/UX, tốc độ cao.",
                "Thiết kế độc quyền, không dùng template.",
                "Bảo trì & hỗ trợ lâu dài.",
                "Chi phí hợp lý, tối ưu ngân sách doanh nghiệp.",
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-lg border border-white/10 flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                    <Check className="size-5" />
                  </div>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Tại sao lại lựa chọn gia bảo */}
      <section className="py-16" id="tai-sao-chon-chung-toi">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl mb-4">
              🏆
              <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                Tại sao khách hàng tin tưởng Gia Bảo Digital?
              </span>
            </h2>
            <p className="text-lg mx-auto">
              Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây
              dựng thương hiệu số mạnh mẽ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles />,
                title: "Thiết Kế Độc Quyền",
                desc: "Mỗi website được thiết kế riêng, phù hợp với ngành nghề & thương hiệu của bạn, không dùng template có sẵn.",
              },
              {
                icon: <Rocket />,
                title: "Chuẩn SEO - Lên Top Google",
                desc: "Tối ưu tốc độ, nội dung, UI/UX, meta tags, sitemap giúp website đạt thứ hạng cao trên Google.",
              },
              {
                icon: <Zap />,
                title: "Tốc Độ Tải Nhanh",
                desc: "Sử dụng công nghệ Next.js, Tailwind CSS, CDN, Caching để tăng tốc load web dưới 3 giây.",
              },
              {
                icon: <Clock />,
                title: "Bảo Mật Cao Cấp",
                desc: "Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp website an toàn trước mọi rủi ro.",
              },
              {
                icon: <Layers />,
                title: "Hỗ Trợ Lâu Dài",
                desc: "Bảo trì website, cập nhật tính năng mới, tối ưu liên tục giúp website luôn hoạt động hiệu quả.",
              },
              {
                icon: <Users />,
                title: "Tư Vấn Cá Nhân Hóa",
                desc: "Đội ngũ chuyên gia lắng nghe và đưa ra giải pháp phù hợp nhất với mục tiêu kinh doanh của bạn.",
              },
              {
                icon: <Smartphone />,
                title: "Responsive Hoàn Hảo",
                desc: "Website tối ưu hiển thị trên mọi thiết bị: PC, tablet, điện thoại, đảm bảo trải nghiệm tốt nhất.",
              },
              {
                icon: <TrendingUp />,
                title: "Tăng Chuyển Đổi",
                desc: "Thiết kế tập trung vào hành vi người dùng, kết hợp CTA mạnh mẽ giúp tăng tỷ lệ chuyển đổi.",
              },
              {
                icon: <Brain />,
                title: "Công Nghệ AI",
                desc: "Ứng dụng AI để phân tích dữ liệu người dùng, cá nhân hóa trải nghiệm và tối ưu hiệu suất.",
              },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      {Icon}
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      {title}
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Quy trình làm việc để desgin website */}
      <section className="py-16" id="quy-trinh">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Quy Trình Thiết Kế Website Chuyên Nghiệp
            </h2>
            <p className="text-lg mx-auto">
              6 bước đơn giản để sở hữu website hoàn hảo cho doanh nghiệp của
              bạn
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {[
              {
                number: "01",
                title: "Tư vấn & phân tích nhu cầu",
                desc: "Chúng tôi tìm hiểu kỹ về doanh nghiệp, mục tiêu kinh doanh và đối tượng khách hàng để đề xuất giải pháp website phù hợp nhất.",
                icon: ChartLine,
                bgColor: "bg-primary text-primary-foreground",
              },
              {
                number: "02",
                title: "Thiết kế giao diện UI/UX",
                desc: "Đội ngũ thiết kế sẽ xây dựng bản phác thảo và thiết kế giao diện theo đúng nhận diện thương hiệu và mục tiêu của bạn.",
                icon: Monitor,
                bgColor: "bg-secondary text-secondary-foreground",
              },
              {
                number: "03",
                title: "Lập trình & phát triển",
                desc: "Các lập trình viên chuyên nghiệp sẽ biến thiết kế thành website hoàn chỉnh với tốc độ tải trang nhanh và chuẩn SEO.",
                icon: Code,
                bgColor: "bg-primary text-primary-foreground",
              },
              {
                number: "04",
                title: "Kiểm thử & tối ưu",
                desc: "Website được kiểm tra kỹ lưỡng trên nhiều thiết bị và trình duyệt khác nhau để đảm bảo hoạt động ổn định.",
                icon: ClipboardCheck,
                bgColor: "bg-secondary text-secondary-foreground",
              },
              {
                number: "05",
                title: "Triển khai & bàn giao",
                desc: "Chúng tôi bàn giao website và hướng dẫn chi tiết cách quản trị, cập nhật nội dung và sử dụng các tính năng.",
                icon: Rocket,
                bgColor: "bg-primary text-primary-foreground",
              },
              {
                number: "06",
                title: "Hỗ trợ & bảo trì",
                desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ, bảo trì và nâng cấp website của bạn trong suốt quá trình sử dụng.",
                icon: Settings,
                bgColor: "bg-secondary text-secondary-foreground",
                final: true,
              },
            ].map((step, idx) => {
              const isReverse = idx % 2 === 1;
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col items-center gap-8 md:flex-row ${isReverse ? "md:flex-row-reverse" : ""
                    }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Circle Number */}
                  <div className="relative shrink-0 w-full md:w-1/3">
                    <div
                      className={`relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg ${step.bgColor}`}
                    >
                      <div className="text-center">
                        <div className="text-5xl font-bold">{step.number}</div>
                        <div className="text-sm opacity-80">
                          {step.final ? "Final Step" : "Next Step →"}
                        </div>
                      </div>
                    </div>
                    {!step.final && (
                      <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-3 rounded-lg bg-secondary text-current`}
                          >
                            <StepIcon className="size-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {step.title}
                            </h3>
                            <p className="mt-2">{step.desc}</p>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                          Tìm hiểu thêm
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Công nghê Toàn diện */}
      <section id="technologies" className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-2xl font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]">
              <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                Công Nghệ Toàn Diện
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              <strong className="text-white">Gia Bảo Digital</strong> thành thạo
              mọi ngôn ngữ lập trình và công nghệ hiện đại - từ Website, Mobile
              App đến Cloud Deploy. Chúng tôi là đối tác công nghệ đáng tin cậy
              cho mọi dự án của bạn!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                title: "Frontend & Web",
                description: "Mọi framework & ngôn ngữ web",
                items: [
                  "React, Vue, Angular, Svelte",
                  "Next.js, Nuxt.js, SvelteKit",
                  "HTML5, CSS3, JavaScript, TypeScript",
                  "TailwindCSS, Bootstrap, SCSS",
                ],
                icon: <Code className="h-8 w-8 text-white mx-auto" />,
              },
              {
                title: "Backend & Database",
                description: "Đa dạng ngôn ngữ lập trình",
                items: [
                  "Node.js, Python, PHP, Java",
                  "C#, Go, Ruby, Rust",
                  "MySQL, PostgreSQL, MongoDB",
                  "Redis, Firebase, Supabase",
                ],
                icon: <Database className="h-8 w-8 text-white mx-auto" />,
              },
              {
                title: "Mobile Development",
                description: "Native & Cross-platform",
                items: [
                  "React Native, Flutter",
                  "iOS (Swift), Android (Kotlin)",
                  "Ionic, Xamarin",
                  "Progressive Web Apps",
                ],
                icon: <Smartphone className="h-8 w-8 text-white mx-auto" />,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  {card.description && (
                    <p className="text-gray-400 mb-3">{card.description}</p>
                  )}
                  {card.items && (
                    <div className="text-sm space-y-1">
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center gap-2"
                        >
                          <Code className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              Cloud & DevOps Deployment
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cloud Platforms",
                  description: "AWS, GCP, Azure, Vercel, Netlify",
                  icon: <Rocket className="h-6 w-6 text-white mx-auto" />,
                },
                {
                  title: "DevOps & CI/CD",
                  description: "Docker, Kubernetes, Jenkins, GitHub Actions",
                  icon: <Shield className="h-6 w-6 text-white mx-auto" />,
                },
                {
                  title: "Infrastructure",
                  description: "Terraform, Ansible, Monitoring",
                  icon: <Database className="h-6 w-6 text-white mx-auto" />,
                },
                {
                  title: "Performance",
                  description: "CDN, Caching, Load Balancing",
                  icon: <Zap className="h-6 w-6 text-white mx-auto" />,
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    {card.description && (
                      <p className="text-gray-400 mb-3">{card.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Đối tác công nghệ Uy tín */}
      <section>
        <motion.div
          className="text-center bg-black border border-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Gia Bảo Digital - Đối Tác Công Nghệ Toàn Diện
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              <strong className="text-white">
                Không có giới hạn công nghệ!
              </strong>
              Chúng tôi thành thạo mọi ngôn ngữ lập trình, framework và
              platform. Từ ý tưởng đến triển khai hoàn chỉnh - chúng tôi làm
              được tất cả!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "🌐 Website & Web Apps",
                  color: "text-blue-400",
                  items: [
                    "Landing Page, Corporate Website",
                    "E-commerce, CMS, Blog",
                    "Web Application, Dashboard",
                    "API Development & Integration",
                  ],
                },
                {
                  title: "📱 Mobile Applications",
                  color: "text-green-400",
                  items: [
                    "iOS & Android Native Apps",
                    "Cross-platform (React Native, Flutter)",
                    "Progressive Web Apps (PWA)",
                    "App Store Deployment",
                  ],
                },
              ].map((list, idx) => (
                <div key={idx} className="text-left">
                  <h4 className={`font-bold mb-3 ${list.color}`}>
                    {list.title}
                  </h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    {list.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2 bg-green-900 border border-green-800 px-4 py-2 rounded-full">
                <Check className="stroke-green-400 size-4" />
                <span className="text-green-300">Mọi ngôn ngữ lập trình</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900 border border-blue-800 px-4 py-2 rounded-full">
                <Check className="stroke-blue-400 size-4" />
                <span className="text-blue-300">Full-stack development</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900 border border-purple-800 px-4 py-2 rounded-full">
                <Check className="stroke-purple-400 size-4" />
                <span className="text-purple-300">Cloud deployment</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-900 border border-orange-800 px-4 py-2 rounded-full">
                <Check className="stroke-orange-400 size-4" />
                <span className="text-orange-300">24/7 Support</span>
              </div>
            </div>
            <p className="text-base font-medium text-gray-300">
              💡
              <em className="text-yellow-400">
                "Bạn có ý tưởng - chúng tôi có công nghệ để hiện thực hóa!"
              </em>
            </p>
          </div>
        </motion.div>
      </section>
      {/* Những lời đánh giá của khách hàng */}
      <section className="py-16" id="danh-gia">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-lg mx-auto">
              Hơn 100+ doanh nghiệp đã tin tưởng và hợp tác cùng Gia Bảo Digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                initials: "A",
                name: "Anh Minh Hoàng",
                title: "CEO Công ty Thời Trang MH",
                stars: 5,
                feedback:
                  "Gia Bảo Digital đã thiết kế website thương mại điện tử rất chuyên nghiệp cho công ty thời trang của chúng tôi. Giao diện đẹp, tốc độ nhanh, SEO hiệu quả.",
                verified: true,
              },
              {
                id: 2,
                initials: "C",
                name: "Chị Lan Phương",
                title: "Giám đốc Marketing Công ty Du Lịch Việt",
                stars: 5,
                feedback:
                  "Website du lịch được thiết kế rất đẹp và chuẩn SEO. Sau khi launch, traffic tăng 300% và booking online tăng đáng kể.",
                verified: true,
              },
              {
                id: 3,
                initials: "A",
                name: "Anh Tuấn Minh",
                title: "Founder Startup EdTech VietLearn",
                stars: 5,
                feedback:
                  "Gia Bảo Digital đã tư vấn và thiết kế website học trực tuyến rất phù hợp. Hệ thống quản lý khóa học, thanh toán online đều hoạt động mượt mà.",
                verified: true,
              },
              {
                id: 4,
                initials: "C",
                name: "Chị Thu Hà",
                title: "Giám đốc Marketing Công ty Mỹ Phẩm Natural",
                stars: 5,
                feedback:
                  "Website đẹp, thân thiện và dễ quản lý. Các tính năng SEO và tối ưu hiệu suất giúp tăng doanh thu online nhanh chóng.",
                verified: true,
              },
            ].map((t) => (
              <div
                key={t.id}
                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300 relative"
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {t.initials}
                    </div>
                    <div className="flex-1">
                      <div className="tracking-tight text-base font-semibold">
                        {t.name}
                      </div>
                      <p className="text-xs">{t.title}</p>
                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="size-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <Quote className="size-8 text-yellow-500/20" />
                  </div>
                  <div className="pt-0">
                    <p className="text-sm italic">{t.feedback}</p>
                    {t.verified && (
                      <div className="flex items-center gap-2 mt-4 text-xs">
                        <Check className="size-4 text-green-500" />
                        <span>Đã xác thực</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurProjects />
      <section className="py-16" id="FAQ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Câu hỏi thường gặp
            </motion.h2>
            <motion.p
              className="text-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Giải đáp những thắc mắc phổ biến về dịch vụ thiết kế website
            </motion.p>
          </div>

          <Accordion type="single" collapsible>
            {[
              {
                question: "Chi phí thiết kế website là bao nhiêu?",
                answer:
                  "Chi phí thiết kế website phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ để nhận báo giá chi tiết.",
              },
              {
                question:
                  "Tôi có thể thiết kế website theo ngân sách riêng không?",
                answer:
                  "Có. Chúng tôi luôn linh hoạt tư vấn giải pháp phù hợp với ngân sách và mục tiêu kinh doanh của bạn, đảm bảo tối ưu chi phí và hiệu quả.",
              },
              {
                question:
                  "Gia Bảo Digital có gói thiết kế website trọn gói không?",
                answer:
                  "Chúng tôi cung cấp các gói thiết kế website trọn gói bao gồm tên miền, hosting, giao diện, tối ưu tốc độ và SEO cơ bản, giúp bạn tiết kiệm thời gian và chi phí.",
              },
              {
                question: "Phí duy trì website hàng năm gồm những gì?",
                answer:
                  "Phí duy trì hàng năm thường bao gồm chi phí tên miền, hosting, chứng chỉ SSL và bảo trì kỹ thuật cơ bản. Chúng tôi sẽ báo giá cụ thể tùy theo nhu cầu.",
              },
              {
                question: "Thời gian thiết kế một website mất bao lâu?",
                answer:
                  "Thời gian thiết kế website thường từ 2-6 tuần tùy vào quy mô, tính năng và yêu cầu thiết kế. Chúng tôi luôn đảm bảo tiến độ và chất lượng.",
              },
              {
                question: "Tôi có thể yêu cầu website chuẩn SEO không?",
                answer:
                  "Có. Chúng tôi thiết kế website chuẩn SEO, tối ưu tốc độ, trải nghiệm người dùng và hỗ trợ các công cụ tìm kiếm để nâng cao thứ hạng trên Google.",
              },
              {
                question:
                  "Website có thể tích hợp với fanpage Facebook hoặc Zalo không?",
                answer:
                  "Chúng tôi hỗ trợ tích hợp website với fanpage Facebook, Zalo, và các nền tảng khác để đồng bộ dữ liệu và tăng trải nghiệm khách hàng.",
              },
              {
                question: "Tôi có thể tự cập nhật nội dung trên website không?",
                answer:
                  "Có. Chúng tôi thiết kế website với hệ thống quản trị nội dung (CMS) dễ sử dụng, giúp bạn tự cập nhật thông tin, hình ảnh và bài viết mà không cần kỹ thuật viên.",
              },
              {
                question:
                  "Có hỗ trợ bảo trì và nâng cấp website sau khi hoàn thành không?",
                answer:
                  "Chúng tôi cung cấp dịch vụ bảo trì, nâng cấp và tối ưu website định kỳ để đảm bảo hoạt động ổn định, bảo mật và luôn cập nhật các tính năng mới.",
              },
              {
                question:
                  "Website có thiết kế chuẩn trên điện thoại và máy tính bảng không?",
                answer:
                  "Tất cả website của chúng tôi đều thiết kế responsive, hiển thị đẹp và tối ưu trải nghiệm người dùng trên mọi thiết bị từ máy tính đến điện thoại và máy tính bảng.",
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center">
            <div className="p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-white">
              <h2 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent not-italic">
                Chuyển đổi doanh nghiệp với website chuyên nghiệp ngay hôm nay!
              </h2>
              <p className="text-lg mb-8 mx-auto">
                Liên hệ ngay hôm nay để nhận tư vấn miễn phí và khám phá các
                giải pháp website tối ưu cho doanh nghiệp của bạn. Chúng tôi sẽ
                cung cấp báo giá nhanh chóng, phù hợp với nhu cầu và ngân sách
                của bạn.
              </p>
              <div>
                <Link href="/contact">
                  <div className="group inline-block mt-6">
                    <InteractiveHoverButton>
                      <span className="relative z-10">Liên Hệ Ngay</span>
                    </InteractiveHoverButton>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
