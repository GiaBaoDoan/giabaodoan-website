'use client'

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    BarChart3,
    BarChart4,
    Briefcase,
    Building2,
    Check,
    Factory,
    Network,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
    Users,
    Wallet,
    Warehouse,
    Workflow,
} from "lucide-react";
import Link from "next/link";

const QuanLyDoanhNghiepPage = () => {
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
                            Hệ Thống ERP Hoạch Định Tài Nguyên Doanh Nghiệp
                        </h1>
                        <p className="text-lg mb-8 mx-auto">
                            Tích Hợp Toàn Diện - Tự Động Hóa Quy Trình & Tối Ưu Hiệu Quả Vận Hành
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
                            { label: "Doanh nghiệp triển khai ERP", value: 65, suffix: "%" },
                            { label: "Tăng hiệu suất vận hành", value: 50, suffix: "%" },
                            { label: "Giảm sai sót dữ liệu", value: 45, suffix: "%" },
                            { label: "Tối ưu chi phí vận hành", value: 40, suffix: "%" },
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
                            Tại Sao Doanh Nghiệp Cần Hệ Thống ERP?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Tích hợp và tự động hóa toàn bộ quy trình kinh doanh từ A đến Z
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Tích hợp dữ liệu",
                                description:
                                    "Kết nối tất cả phòng ban, loại bỏ silo dữ liệu, thông tin đồng bộ realtime.",
                                icon: Network,
                            },
                            {
                                title: "Tự động hóa quy trình",
                                description:
                                    "Giảm công việc thủ công, tăng tốc độ xử lý, giảm thiểu sai sót con người.",
                                icon: Workflow,
                            },
                            {
                                title: "Báo cáo thông minh",
                                description:
                                    "Dashboard realtime, báo cáo tự động, phân tích dữ liệu để ra quyết định.",
                                icon: BarChart3,
                            },
                            {
                                title: "Tăng hiệu quả",
                                description:
                                    "Tối ưu hóa tài nguyên, giảm chi phí vận hành, tăng năng suất làm việc.",
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
                            Hệ thống ERP toàn diện cho doanh nghiệp hiện đại
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Quản lý tài chính",
                                description:
                                    "Kế toán tổng hợp, quản lý ngân quỹ, báo cáo tài chính, thuế và tuân thủ.",
                                icon: Wallet,
                            },
                            {
                                title: "Quản lý nhân sự",
                                description:
                                    "HR, chấm công, tính lương, đánh giá hiệu suất, đào tạo và phát triển.",
                                icon: Users,
                            },
                            {
                                title: "Quản lý kho hàng",
                                description:
                                    "Nhập xuất tồn, theo dõi lô hàng, cảnh báo hết hàng, tối ưu inventory.",
                                icon: Warehouse,
                            },
                            {
                                title: "Quản lý sản xuất",
                                description:
                                    "Lập kế hoạch sản xuất, theo dõi tiến độ, quản lý chất lượng, máy móc thiết bị.",
                                icon: Factory,
                            },
                            {
                                title: "Quản lý bán hàng",
                                description:
                                    "CRM tích hợp, quản lý đơn hàng, báo giá, hợp đồng và chăm sóc khách hàng.",
                                icon: ShoppingCart,
                            },
                            {
                                title: "Business Intelligence",
                                description:
                                    "Dashboard tổng quan, báo cáo phân tích, dự báo xu hướng, hỗ trợ quyết định.",
                                icon: BarChart4,
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
                            Giải pháp ERP theo ngành nghề
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Tùy chỉnh theo đặc thù và quy mô của từng loại hình doanh nghiệp
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                id: 1,
                                title: "ERP Sản Xuất",
                                description: "Tối ưu quy trình từ lập kế hoạch đến chất lượng sản phẩm.",
                                icon: Factory,
                                features: [
                                    "Lập kế hoạch sản xuất",
                                    "Quản lý BOM",
                                    "Theo dõi tiến độ",
                                    "Quản lý chất lượng",
                                ],
                            },

                            {
                                id: 2,
                                title: "ERP Bán Lẻ",
                                description: "Tối ưu cho chuỗi cửa hàng bán lẻ và thương mại.",
                                icon: ShoppingBag,
                                features: [
                                    "POS tích hợp",
                                    "Quản lý chuỗi cửa hàng",
                                    "Loyalty program",
                                    "Phân tích bán hàng",
                                ],
                            },

                            {
                                id: 3,
                                title: "ERP Dịch Vụ",
                                description: "Dành cho doanh nghiệp cung cấp dịch vụ và tư vấn.",
                                icon: Briefcase,
                                features: [
                                    "Quản lý dự án",
                                    "Time tracking",
                                    "Resource planning",
                                    "Billing & invoicing",
                                ],
                            },

                            {
                                id: 4,
                                title: "ERP Xây Dựng",
                                description: "Chuyên biệt cho ngành xây dựng và hạ tầng.",
                                icon: Building2,
                                features: [
                                    "Quản lý công trình",
                                    "Theo dõi tiến độ",
                                    "Quản lý vật tư",
                                    "Cost control",
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
                                question: "ERP là gì và tại sao doanh nghiệp cần ERP?",
                                answer:
                                    "ERP (Enterprise Resource Planning) là hệ thống quản trị tổng thể doanh nghiệp giúp kết nối dữ liệu giữa các phòng ban, tự động hóa quy trình và nâng cao hiệu quả vận hành. ERP giúp doanh nghiệp giảm sai sót, tiết kiệm chi phí và tối ưu ra quyết định.",
                            },
                            {
                                question: "ERP phù hợp cho doanh nghiệp ở quy mô nào?",
                                answer:
                                    "ERP phù hợp cho mọi quy mô doanh nghiệp: từ SME đến tập đoàn lớn. Với doanh nghiệp nhỏ, ERP giúp chuẩn hóa quy trình; với doanh nghiệp lớn, ERP giúp đồng bộ dữ liệu và tối ưu vận hành toàn hệ thống.",
                            },
                            {
                                question: "Thời gian triển khai ERP mất bao lâu?",
                                answer:
                                    "Thời gian triển khai ERP phụ thuộc vào phạm vi dự án và số module cần triển khai. Thông thường từ 1–6 tháng. Doanh nghiệp nhỏ có thể triển khai trong 4–8 tuần, còn hệ thống lớn có thể cần nhiều giai đoạn.",
                            },
                            {
                                question: "Chi phí triển khai ERP gồm những gì?",
                                answer:
                                    "Chi phí ERP bao gồm: phí bản quyền phần mềm (hoặc thuê bao cloud), chi phí triển khai, tuỳ chỉnh theo quy trình doanh nghiệp, đào tạo nhân sự và chi phí bảo trì sau triển khai. Mỗi doanh nghiệp sẽ có báo giá riêng dựa trên nhu cầu thực tế.",
                            },
                            {
                                question: "ERP có cần tùy chỉnh theo doanh nghiệp không?",
                                answer:
                                    "Có. ERP có thể tùy chỉnh theo quy trình đặc thù của từng doanh nghiệp. Tuy nhiên, hạn chế tối đa việc tùy chỉnh quá nhiều để tránh khó khăn trong bảo trì và nâng cấp sau này.",
                            },
                            {
                                question: "ERP có thể tích hợp với hệ thống khác không?",
                                answer:
                                    "Có. ERP có thể tích hợp với CRM, POS, phần mềm kế toán, hệ thống nhân sự, eCommerce, phần mềm kho vận, và nhiều nền tảng khác thông qua API hoặc tích hợp tiêu chuẩn.",
                            },
                            {
                                question: "Nhân viên có khó sử dụng ERP không?",
                                answer:
                                    "Không. Giao diện ERP hiện đại thân thiện và dễ sử dụng. Ngoài ra, nhân viên sẽ được đào tạo trực tiếp hoặc online. Sau 1–2 tuần, hầu hết đều thích ứng tốt với hệ thống.",
                            },
                            {
                                question: "ERP có giúp tăng năng suất và giảm chi phí không?",
                                answer:
                                    "Có. ERP giúp tự động hóa quy trình, giảm thao tác thủ công, loại bỏ nhập liệu trùng lặp và giảm lỗi. Điều này giúp doanh nghiệp tiết kiệm từ 20–40% chi phí vận hành mỗi năm.",
                            },
                            {
                                question: "Dữ liệu khi dùng ERP có an toàn không?",
                                answer:
                                    "Dữ liệu được mã hóa, phân quyền chi tiết và sao lưu định kỳ. Với ERP cloud, hệ thống còn được bảo vệ bởi các tiêu chuẩn bảo mật quốc tế như ISO 27001 hoặc SOC 2.",
                            },
                            {
                                question: "Doanh nghiệp cần chuẩn bị gì trước khi triển khai ERP?",
                                answer:
                                    "Doanh nghiệp cần xác định mục tiêu triển khai, chuẩn hóa quy trình, chuẩn bị dữ liệu đầu vào và bố trí team triển khai nội bộ. Sự phối hợp chặt chẽ giữa doanh nghiệp và đối tác ERP quyết định phần lớn kết quả triển khai.",
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
                                Sẵn Sàng Tích Hợp Hệ Thống ERP?
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Liên hệ ngay để nhận tư vấn miễn phí và demo hệ thống ERP
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

export default QuanLyDoanhNghiepPage