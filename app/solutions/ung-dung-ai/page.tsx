'use client'

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    BarChart3,
    BarChart4,
    Bot,
    Briefcase,
    Building2,
    Check,
    Clock,
    Factory,
    LineChart,
    MessageCircle,
    MessageSquare,
    Network,
    ScanEye,
    Shield,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    TrendingUp,
    Users,
    Wallet,
    Warehouse,
    Workflow,
} from "lucide-react";
import Link from "next/link";

const UngDungAi = () => {
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
                            Giải Pháp Trí Tuệ Nhân Tạo (AI Solutions)
                        </h1>
                        <p className="text-lg mb-8 mx-auto">
                            Tự Động Hóa Thông Minh - Tăng Hiệu Quả Kinh Doanh & Ra Quyết Định Chính Xác
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
                            { label: "Doanh nghiệp ứng dụng AI", value: 72, suffix: "%" },
                            { label: "Tăng hiệu suất công việc nhờ AI", value: 40, suffix: "%" },
                            { label: "Giảm thời gian xử lý quy trình", value: 60, suffix: "%" },
                            { label: "Tối ưu chi phí vận hành", value: 35, suffix: "%" }
                        ]
                            .map((stat, i) => (
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
                            Tại Sao Doanh Nghiệp Cần AI Solutions?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Tận dụng sức mạnh trí tuệ nhân tạo để tự động hóa và tối ưu hóa mọi quy trình kinh doanh
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Tự động hóa thông minh",
                                description:
                                    "AI xử lý tự động các tác vụ lặp đi lặp lại, giải phóng nhân lực cho công việc sáng tạo.",
                                icon: Bot,
                            },
                            {
                                title: "Phân tích dữ liệu chính xác",
                                description:
                                    "Machine Learning phân tích big data, đưa ra insights và dự đoán xu hướng kinh doanh.",
                                icon: LineChart,
                            },
                            {
                                title: "Hoạt động 24/7",
                                description:
                                    "AI không ngừng nghỉ, phục vụ khách hàng và xử lý công việc mọi lúc mọi nơi.",
                                icon: Clock,
                            },
                            {
                                title: "Tăng ROI đáng kể",
                                description:
                                    "Giảm chi phí vận hành, tăng hiệu quả làm việc và doanh thu từ 30-50%.",
                                icon: TrendingUp,
                            },
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
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính Năng Nổi Bật
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Công nghệ AI tiên tiến được tùy chỉnh theo nhu cầu cụ thể của doanh nghiệp
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Chatbot AI Thông Minh",
                                description:
                                    "Chatbot hiểu ngữ cảnh, trả lời tự nhiên, xử lý 80% câu hỏi khách hàng tự động.",
                                icon: MessageSquare,
                            },
                            {
                                title: "Computer Vision",
                                description:
                                    "Nhận diện hình ảnh, video, kiểm tra chất lượng sản phẩm, phân tích hành vi khách hàng.",
                                icon: ScanEye,
                            },
                            {
                                title: "Predictive Analytics",
                                description:
                                    "Dự đoán xu hướng thị trường, nhu cầu khách hàng, tối ưu hóa inventory và pricing.",
                                icon: BarChart3,
                            },
                            {
                                title: "Process Automation",
                                description:
                                    "RPA kết hợp AI tự động hóa quy trình phức tạp, từ xử lý đơn hàng đến báo cáo.",
                                icon: Workflow,
                            },
                            {
                                title: "Personalization Engine",
                                description:
                                    "Cá nhân hóa trải nghiệm khách hàng, gợi ý sản phẩm, tăng conversion rate.",
                                icon: Sparkles,
                            },
                            {
                                title: "AI Security",
                                description:
                                    "Phát hiện bất thường, ngăn chặn gian lận, bảo vệ dữ liệu với AI security.",
                                icon: Shield,
                            },
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
                                        <p>{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl font-bold md:text-5xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Các Loại AI Solutions
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Giải pháp AI được thiết kế riêng cho từng ngành nghề và quy mô doanh nghiệp
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                id: 1,
                                title: "AI Chatbot & Customer Service",
                                description: "Tự động hóa chăm sóc khách hàng 24/7.",
                                icon: MessageCircle,
                                features: [
                                    "Chatbot đa ngôn ngữ",
                                    "Tích hợp voice assistant",
                                    "Sentiment analysis",
                                    "Auto ticket routing",
                                ],
                            },

                            {
                                id: 2,
                                title: "AI Analytics & Business Intelligence",
                                description: "Phân tích dữ liệu thông minh và dự đoán xu hướng.",
                                icon: LineChart,
                                features: [
                                    "Predictive analytics",
                                    "Real-time dashboard",
                                    "Automated reporting",
                                    "Market trend analysis",
                                ],
                            },

                            {
                                id: 3,
                                title: "AI Process Automation",
                                description: "Tự động hóa quy trình kinh doanh phức tạp.",
                                icon: Workflow,
                                features: [
                                    "Document processing",
                                    "Workflow automation",
                                    "Smart scheduling",
                                    "Quality control AI",
                                ],
                            },

                            {
                                id: 4,
                                title: "AI Personalization & Marketing",
                                description: "Cá nhân hóa trải nghiệm và tối ưu marketing.",
                                icon: Sparkles,
                                features: [
                                    "Product recommendations",
                                    "Dynamic pricing",
                                    "Customer segmentation",
                                    "Campaign optimization",
                                ],
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="relative mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Header */}
                                <div className="flex items-center mb-6">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black font-bold mr-4 shrink-0">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                                </div>

                                {/* Card */}
                                <div className="rounded-lg border text-card-foreground shadow-sm bg-black border-gray-700 p-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <service.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-sm text-gray-400">{service.description}</div>
                                    </div>

                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-white">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                                question: "AI là gì và tại sao doanh nghiệp nên sử dụng AI?",
                                answer:
                                    "AI (Trí tuệ nhân tạo) giúp tự động hóa quy trình, phân tích dữ liệu thông minh, giảm chi phí vận hành và tăng hiệu suất. Doanh nghiệp dùng AI để ra quyết định nhanh hơn và cạnh tranh tốt hơn.",
                            },
                            {
                                question: "AI có thay thế con người không?",
                                answer:
                                    "AI không thay thế hoàn toàn con người mà hỗ trợ xử lý các tác vụ lặp lại, giúp nhân viên tập trung vào công việc sáng tạo và quan trọng hơn.",
                            },
                            {
                                question: "Chi phí triển khai AI có cao không?",
                                answer:
                                    "Chi phí triển khai tùy theo bài toán và mức độ phức tạp. Doanh nghiệp nhỏ vẫn có thể áp dụng AI thông qua các giải pháp sẵn có như chatbot, automation hoặc báo cáo phân tích.",
                            },
                            {
                                question: "AI có an toàn và bảo mật dữ liệu không?",
                                answer:
                                    "AI hiện đại sử dụng mã hóa, phân quyền và tuân thủ tiêu chuẩn bảo mật quốc tế. Doanh nghiệp hoàn toàn kiểm soát dữ liệu và có thể triển khai AI on-premise hoặc cloud.",
                            },
                            {
                                question: "AI có phù hợp với doanh nghiệp nhỏ (SME) không?",
                                answer:
                                    "Có. Nhiều mô hình AI nhẹ, chi phí thấp và dễ triển khai giúp SME tối ưu vận hành và nâng cao trải nghiệm khách hàng mà không cần đầu tư lớn.",
                            },
                            {
                                question: "Chatbot AI có thể trả lời chính xác đến mức nào?",
                                answer:
                                    "Chatbot AI có thể xử lý 70–90% câu hỏi lặp lại, hiểu ngữ cảnh và trả lời tự nhiên. Độ chính xác phụ thuộc vào dữ liệu huấn luyện và mức độ tùy chỉnh.",
                            },
                            {
                                question: "AI có thể tích hợp với hệ thống hiện tại không?",
                                answer:
                                    "Có. AI có thể tích hợp với CRM, ERP, POS, hệ thống bán hàng, website, ứng dụng nội bộ và các nền tảng khác thông qua API.",
                            },
                            {
                                question: "AI có thể giúp doanh nghiệp tăng doanh thu như thế nào?",
                                answer:
                                    "AI giúp cá nhân hóa trải nghiệm khách hàng, gợi ý sản phẩm, tối ưu giá (dynamic pricing), dự báo nhu cầu và tự động hóa marketing để tăng tỷ lệ chuyển đổi.",
                            },
                            {
                                question: "Mất bao lâu để triển khai một giải pháp AI?",
                                answer:
                                    "Tùy độ phức tạp: chatbot hoặc automation mất 1–4 tuần; hệ thống phân tích hoặc dự báo có thể cần 1–3 tháng.",
                            },
                            {
                                question: "Doanh nghiệp cần chuẩn bị gì trước khi áp dụng AI?",
                                answer:
                                    "Doanh nghiệp cần xác định mục tiêu, chuẩn hóa dữ liệu, chọn quy trình ưu tiên và chuẩn bị đội ngũ phối hợp triển khai. Dữ liệu tốt là yếu tố quan trọng nhất.",
                            },
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
                                Sẵn Sàng Ứng Dụng AI Vào Kinh Doanh?
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Liên hệ ngay để nhận tư vấn miễn phí và demo AI solutions phù hợp với doanh nghiệp
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

export default UngDungAi