'use client'

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    BarChart,
    BarChart3,
    CircleCheckBig,
    Clock,
    FileText,
    Globe,
    Hash,
    LayoutDashboard,
    Megaphone,
    MessageSquare,
    MousePointerClick,
    SearchCheck,
    SearchCode,
    ServerCog,
    ShieldCheck,
    Smartphone,
    Target,
    TrendingUp,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            {/* Tiêu đề trang web */}
            <motion.section className="py-20">
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Giải Pháp Website Landing Page Chuyên Nghiệp
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Tăng Tỷ Lệ Chuyển Đổi, Nâng Tầm Thương Hiệu & Tối Ưu SEO
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Landing page là công cụ marketing hiệu quả giúp doanh nghiệp thu hút khách hàng tiềm năng, tối ưu tỷ lệ chuyển đổi và tăng doanh thu. Chúng tôi cung cấp giải pháp landing page chuyên nghiệp, tối ưu SEO, giúp chiến dịch marketing của bạn đạt hiệu quả cao nhất.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                        >
                            <InteractiveHoverButton>
                                <span className="relative z-10">Liên hệ tư vấn miễn phí</span>
                            </InteractiveHoverButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
            {/* Chỉ số */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { label: "Landing page thành công", value: 30, suffix: "+" },
                            { label: "Tăng tỷ lệ chuyển đổi", value: 85, suffix: "%" },
                            { label: "Khách hàng hài lòng", value: 95, suffix: "%" },
                            { label: "Giảm chi phí quảng cáo", value: 50, suffix: "%" }
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
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Vì sao doanh nghiệp cần một landing page chuyên nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Landing page không chỉ là một trang web đơn lẻ mà là một công cụ tiếp thị mạnh mẽ, giúp doanh nghiệp thu hút khách hàng, tối ưu chuyển đổi và gia tăng doanh thu.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Tập trung vào một mục tiêu duy nhất",
                                desc: "Thúc đẩy khách hàng thực hiện hành động cụ thể như mua hàng, đăng ký, tải tài liệu hoặc đặt lịch hẹn.",
                                icon: Target
                            },
                            {
                                title: "Tăng tỷ lệ chuyển đổi",
                                desc: "Giao diện tối ưu UX/UI, tốc độ tải trang nhanh, nội dung hấp dẫn giúp gia tăng tỉ lệ khách hàng tiềm năng.",
                                icon: TrendingUp
                            },
                            {
                                title: "Tích hợp chiến lược marketing",
                                desc: "Dễ dàng kết nối với quảng cáo Google Ads, Facebook Ads, email marketing,... để thu hút khách hàng.",
                                icon: Megaphone
                            },
                            {
                                title: "Chuẩn SEO & tối ưu quảng cáo",
                                desc: "Landing page được tối ưu chuẩn SEO giúp nâng cao thứ hạng tìm kiếm, đồng thời tối ưu điểm chất lượng trong quảng cáo.",
                                icon: SearchCode
                            },
                            {
                                title: "Tiết kiệm chi phí & thời gian",
                                desc: "Không cần một website phức tạp, chỉ với một landing page, bạn có thể nhanh chóng triển khai chiến dịch marketing hiệu quả.",
                                icon: Clock
                            },
                            {
                                title: "Đo lường ROI dễ dàng",
                                desc: "Theo dõi và phân tích hiệu quả chiến dịch marketing một cách chính xác, giúp tối ưu ngân sách quảng cáo.",
                                icon: BarChart
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="rounded-lg hover:border-white border border-white/10 text-card-foreground shadow-sm h-full transition-all duration-300"
                                >
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="tracking-tight text-lg font-semibold">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                            Lợi thế SEO cho landing page
                        </h2>
                        <p className="text-lg mx-auto">
                            Chúng tôi áp dụng các chiến lược SEO tiên tiến giúp landing page của bạn dễ dàng được tìm thấy trên công cụ tìm kiếm
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
                                src="https://tanphatdigital.com/_next/static/media/landing.2b799f1e.jpg"
                                alt="SEO Optimization for Websites"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Cấu trúc nội dung tối ưu",
                                    desc: "Thiết kế cấu trúc heading, đoạn văn và từ khóa một cách khoa học, giúp Google dễ dàng hiểu và đánh giá cao nội dung của bạn."
                                },
                                {
                                    title: "Tốc độ tải trang vượt trội",
                                    desc: "Tối ưu hóa mã nguồn, hình ảnh và tài nguyên để đạt điểm PageSpeed Insights cao, cải thiện trải nghiệm người dùng và xếp hạng SEO."
                                },
                                {
                                    title: "Schema Markup tích hợp",
                                    desc: "Cung cấp dữ liệu có cấu trúc giúp Google hiểu rõ nội dung landing page, tăng khả năng hiển thị rich snippets trên kết quả tìm kiếm."
                                },
                                {
                                    title: "Tương thích thiết bị di động",
                                    desc: "Thiết kế responsive hoàn hảo, đáp ứng tiêu chí Mobile-First Indexing của Google, tăng trải nghiệm người dùng trên mọi thiết bị."
                                }
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
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính năng nổi bật của landing page chuyên nghiệp
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Chúng tôi cung cấp các tính năng hiện đại, đáp ứng mọi nhu cầu kinh doanh của bạn.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Thiết kế đẹp, hiện đại",
                                desc: "Tối ưu theo nhận diện thương hiệu của bạn.",
                                icon: LayoutDashboard
                            },
                            {
                                title: "Tốc độ tải trang nhanh",
                                desc: "Tối ưu trải nghiệm người dùng, giảm tỷ lệ thoát.",
                                icon: Zap
                            },
                            {
                                title: "Nội dung chuẩn SEO",
                                desc: "Hỗ trợ quảng cáo & tiếp thị hiệu quả.",
                                icon: SearchCheck
                            },
                            {
                                title: "CTA mạnh mẽ",
                                desc: "Tích hợp form đăng ký để tăng chuyển đổi.",
                                icon: MousePointerClick
                            },
                            {
                                title: "Tích hợp CRM",
                                desc: "Kết nối với email marketing, chatbot,...",
                                icon: ServerCog
                            },
                            {
                                title: "Hỗ trợ đa ngôn ngữ",
                                desc: "Mở rộng khả năng tiếp cận khách hàng quốc tế.",
                                icon: Globe
                            },
                            {
                                title: "Bảo mật cao",
                                desc: "Đảm bảo an toàn dữ liệu khách hàng.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Phân tích dữ liệu",
                                desc: "Theo dõi và tối ưu hiệu suất landing page.",
                                icon: BarChart3
                            },
                            {
                                title: "Tương thích di động",
                                desc: "Hiển thị hoàn hảo trên mọi thiết bị.",
                                icon: Smartphone
                            },
                            {
                                title: "Chat trực tuyến",
                                desc: "Hỗ trợ khách hàng ngay lập tức.",
                                icon: MessageSquare
                            },
                            {
                                title: "Báo cáo chi tiết",
                                desc: "Theo dõi hiệu quả chiến dịch marketing.",
                                icon: FileText
                            },
                            {
                                title: "Tối ưu từ khóa",
                                desc: "Tăng khả năng hiển thị trên Google.",
                                icon: Hash
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="rounded-lg hover:border-white border border-white/10 text-card-foreground shadow-sm h-full transition-all duration-300"
                                >
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="tracking-tight text-lg font-semibold">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Câu hỏi thường gặp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Hãy để chúng tôi giúp bạn xây dựng landing page chuyên nghiệp, thu hút khách hàng và tăng tỷ lệ chuyển đổi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                question: "Chi phí phát triển một landing page là bao nhiêu?",
                                answer: "Chi phí phát triển landing page phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết."
                            },
                            {
                                question: "Thời gian phát triển một landing page mất bao lâu?",
                                answer: "Thời gian phát triển landing page thông thường từ 1-3 tuần tùy thuộc vào quy mô và yêu cầu cụ thể. Landing page cơ bản có thể hoàn thành trong 1 tuần, trong khi các dự án phức tạp hơn với nhiều tính năng tùy chỉnh có thể mất 2-3 tuần."
                            },
                            {
                                question: "Landing page có giúp tăng tỷ lệ chuyển đổi không?",
                                answer: "Có, landing page được thiết kế đặc biệt để tối ưu hóa tỷ lệ chuyển đổi. Với việc tập trung vào một mục tiêu duy nhất, thiết kế UX/UI chuyên nghiệp, và nội dung hấp dẫn, landing page có thể tăng tỷ lệ chuyển đổi từ 50-150% so với trang web thông thường."
                            },
                            {
                                question: "Landing page có tích hợp được với các công cụ marketing khác không?",
                                answer: "Có, landing page của chúng tôi có thể tích hợp với nhiều công cụ marketing như Google Analytics, Facebook Pixel, Google Ads, hệ thống email marketing, CRM và các công cụ chat trực tuyến. Điều này giúp bạn theo dõi hiệu quả chiến dịch và tối ưu hóa quy trình marketing."
                            },
                            {
                                question: "Làm thế nào để landing page của tôi xuất hiện trên trang đầu Google?",
                                answer: "Để landing page xuất hiện trên trang đầu Google cần một chiến lược SEO toàn diện bao gồm: nghiên cứu từ khóa, tối ưu hóa cấu trúc trang, tạo nội dung chất lượng, tối ưu tốc độ tải trang, và xây dựng backlink uy tín. Chúng tôi cung cấp dịch vụ SEO chuyên nghiệp giúp landing page của bạn đạt thứ hạng cao trên các công cụ tìm kiếm."
                            }
                        ].map((data, index) => (
                            <div
                                key={index}
                                className="border border-white/10 rounded-lg p-6"
                            >
                                <h3 className="text-xl font-semibold mb-3">{data.question}</h3>
                                <p>{data.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Liên hệ gia bảo */}
            <section className="pt-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-white"
                        >
                            <h2 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent not-italic">
                                Sẵn sàng nâng cao hiệu quả marketing của bạn
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Hãy để chúng tôi giúp bạn xây dựng landing page chuyên nghiệp, thu hút khách hàng và tăng tỷ lệ chuyển đổi.
                            </p>
                            <div className="inline-block mt-6">
                                <Link href="/contact">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="group inline-block"
                                    >
                                        <InteractiveHoverButton>
                                            <span className="relative z-10">Liên Hệ Ngay</span>
                                        </InteractiveHoverButton>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage