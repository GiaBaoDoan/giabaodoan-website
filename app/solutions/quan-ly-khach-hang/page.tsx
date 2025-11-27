"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    Smartphone,
    Users,
    Check,
    Database,
    Calendar,
    Mail,
    BarChart2,
    Ticket,
    Shield,
    Briefcase,
} from "lucide-react";
import Link from "next/link";

const QuanLyKhachHangPage = () => {
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
                            Hệ Thống CRM Quản Lý Khách Hàng Thông Minh
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Tối Ưu Quy Trình Bán Hàng - Nâng Cao Hiệu Quả Kinh Doanh & Chăm Sóc Khách Hàng
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Hệ thống CRM hiện đại giúp doanh nghiệp quản lý khách hàng hiệu quả, tự động hóa quy trình bán hàng, tăng tỷ lệ chuyển đổi và xây dựng mối quan hệ bền vững với khách hàng. Giải pháp toàn diện cho doanh nghiệp muốn tối ưu hóa hoạt động kinh doanh.
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
                            {
                                label: "Tăng hiệu quả bán hàng",
                                value: 90,
                                suffix: "%",
                            },
                            {
                                label: "Tăng tỷ lệ chuyển đổi",
                                value: 75,
                                suffix: "%",
                            },
                            {
                                label: "Doanh nghiệp tin dùng",
                                value: 100,
                                suffix: "+",
                            },
                            {
                                label: "Tăng doanh thu",
                                value: 60,
                                suffix: "%",
                            }
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
                            Vì sao doanh nghiệp cần hệ thống CRM?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Hệ thống CRM hiện đại mang lại nhiều lợi ích vượt trội cho doanh nghiệp trong việc quản lý khách hàng
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Quản lý thông tin khách hàng",
                                description: "Lưu trữ đầy đủ thông tin cá nhân, công ty, lịch sử giao dịch, sở thích của khách hàng tại một nơi.",
                                icon: Database,
                            },
                            {
                                label: "Quản lý leads & cơ hội",
                                description: "Theo dõi leads từ nhiều nguồn, phân loại, nurturing và chuyển đổi thành khách hàng hiệu quả.",
                                icon: Users,
                            },
                            {
                                label: "Lịch hẹn & nhắc nhở",
                                description: "Quản lý lịch hẹn, cuộc gọi, email tự động, nhắc nhở follow-up khách hàng đúng thời điểm.",
                                icon: Calendar,
                            },
                            {
                                label: "Email Marketing tự động",
                                description: "Gửi email marketing, newsletter, drip campaigns tự động dựa trên hành vi và sở thích khách hàng.",
                                icon: Mail,
                            },
                            {
                                label: "Báo cáo & phân tích",
                                description: "Dashboard trực quan, báo cáo doanh số, hiệu suất team, ROI marketing chi tiết và dễ hiểu.",
                                icon: BarChart2,
                            },
                            {
                                label: "Mobile App",
                                description: "Ứng dụng di động cho sales team, truy cập thông tin khách hàng và quản lý công việc mọi lúc mọi nơi.",
                                icon: Smartphone,
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
                                                {item.label}
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
                            Giải pháp phù hợp cho mọi loại hình spa
                        </motion.h2>
                        <motion.p
                            className="text-lg text-white max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Chúng tôi cung cấp giải pháp website spa tùy chỉnh phù hợp với đặc thù của từng loại hình dịch vụ
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                id: 1,
                                title: "Sales CRM",
                                icon: Briefcase,
                                description: "Tối ưu hóa quy trình bán hàng, quản lý pipeline và tăng tỷ lệ chốt deal",
                                features: [
                                    "Quản lý leads & opportunities",
                                    "Sales pipeline visualization",
                                    "Forecast & quota management",
                                    "Activity tracking & reporting",
                                ],
                            },
                            {
                                id: 2,
                                icon: Mail,
                                title: "Marketing CRM",
                                description: "Tự động hóa marketing, nurturing leads và đo lường ROI campaigns",
                                features: [
                                    "Email marketing automation",
                                    "Lead scoring & nurturing",
                                    "Campaign management",
                                    "Marketing analytics",
                                ],
                            },
                            {
                                id: 3,
                                icon: Ticket,
                                title: "Service CRM",
                                description: "Quản lý chăm sóc khách hàng, support tickets và nâng cao trải nghiệm",
                                features: [
                                    "Ticket management system",
                                    "Knowledge base",
                                    "Customer satisfaction surveys",
                                    "SLA management",
                                ],
                            },
                            {
                                id: 4,
                                title: "Enterprise CRM",
                                icon: Shield,
                                description: "Giải pháp CRM doanh nghiệp lớn với tính năng nâng cao và bảo mật cao",
                                features: [
                                    "Advanced customization",
                                    "API integrations",
                                    "Advanced security",
                                    "Multi-language support",
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

            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính Năng Nổi Bật
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Giải pháp CRM toàn diện cho doanh nghiệp hiện đại
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Quản lý thông tin khách hàng",
                                description: "Lưu trữ đầy đủ thông tin cá nhân, công ty, lịch sử giao dịch, sở thích của khách hàng tại một nơi.",
                                icon: Database,
                            },
                            {
                                label: "Quản lý leads & cơ hội",
                                description: "Theo dõi leads từ nhiều nguồn, phân loại, nurturing và chuyển đổi thành khách hàng hiệu quả.",
                                icon: Users,
                            },
                            {
                                label: "Lịch hẹn & nhắc nhở",
                                description: "Quản lý lịch hẹn, cuộc gọi, email tự động, nhắc nhở follow-up khách hàng đúng thời điểm.",
                                icon: Calendar,
                            },
                            {
                                label: "Email Marketing tự động",
                                description: "Gửi email marketing, newsletter, drip campaigns tự động dựa trên hành vi và sở thích khách hàng.",
                                icon: Mail,
                            },
                            {
                                label: "Báo cáo & phân tích",
                                description: "Dashboard trực quan, báo cáo doanh số, hiệu suất team, ROI marketing chi tiết và dễ hiểu.",
                                icon: BarChart2,
                            },
                            {
                                label: "Mobile App",
                                description: "Ứng dụng di động cho sales team, truy cập thông tin khách hàng và quản lý công việc mọi lúc mọi nơi.",
                                icon: Smartphone,
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
                                                {item.label}
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
            {/* Câu hỏi thường gặp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            CRM là gì và tại sao doanh nghiệp cần quản lý khách hàng?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                question: "CRM là gì và tại sao doanh nghiệp cần quản lý khách hàng?",
                                answer:
                                    "CRM (Customer Relationship Management) là hệ thống quản lý mối quan hệ khách hàng, giúp doanh nghiệp lưu trữ, theo dõi thông tin khách hàng, quản lý leads, cơ hội bán hàng và cải thiện trải nghiệm khách hàng. Sử dụng CRM giúp tăng hiệu quả bán hàng, giữ chân khách hàng và nâng cao ROI marketing.",
                            },
                            {
                                question: "Làm thế nào để quản lý thông tin khách hàng hiệu quả?",
                                answer:
                                    "Doanh nghiệp nên sử dụng CRM để lưu trữ đầy đủ thông tin khách hàng, bao gồm thông tin cá nhân, công ty, lịch sử giao dịch, sở thích và nhu cầu. CRM giúp tập trung dữ liệu ở một nơi, dễ dàng truy cập và phân tích để đưa ra các quyết định bán hàng và marketing chính xác.",
                            },
                            {
                                question: "CRM có hỗ trợ quản lý leads và cơ hội bán hàng không?",
                                answer:
                                    "Có, CRM giúp theo dõi leads từ nhiều nguồn, phân loại theo mức độ quan tâm, thực hiện nurturing và chuyển đổi thành khách hàng tiềm năng. Quản lý pipeline rõ ràng giúp sales team tối ưu hóa tỷ lệ chốt deal.",
                            },
                            {
                                question: "Hệ thống CRM có hỗ trợ tự động nhắc lịch và theo dõi hoạt động không?",
                                answer:
                                    "Có, CRM hiện đại tích hợp tính năng nhắc lịch hẹn, cuộc gọi, email tự động, giúp sales team không bỏ sót follow-up và quản lý công việc hiệu quả.",
                            },
                            {
                                question: "CRM có hỗ trợ Email Marketing và chiến dịch tự động không?",
                                answer:
                                    "Có, CRM cho phép gửi email marketing, newsletter, drip campaigns tự động dựa trên hành vi và sở thích khách hàng, giúp nurturing leads và tăng tỷ lệ chuyển đổi.",
                            },
                            {
                                question: "CRM có cung cấp báo cáo và phân tích hiệu quả không?",
                                answer:
                                    "Có, hệ thống CRM cung cấp dashboard trực quan, báo cáo doanh số, hiệu suất team, ROI marketing và các chỉ số quan trọng, giúp doanh nghiệp ra quyết định nhanh chóng và chính xác.",
                            },
                            {
                                question: "CRM có thể truy cập trên di động không?",
                                answer:
                                    "Có, nhiều CRM hiện đại có ứng dụng mobile cho sales team, giúp truy cập thông tin khách hàng và quản lý công việc mọi lúc, mọi nơi, tăng hiệu quả làm việc ngoài văn phòng.",
                            },
                            {
                                question: "CRM có thể tích hợp với các phần mềm hiện tại không?",
                                answer:
                                    "Có, CRM có thể tích hợp với các phần mềm ERP, kế toán, quản lý kho hoặc các công cụ khác qua API, đảm bảo dữ liệu đồng bộ và quy trình làm việc liền mạch.",
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
                                Hệ Thống CRM Quản Lý Khách Hàng Thông Minh
                            </h2>
                            <p className="text-lg mx-auto mb-4 text-white">Tối Ưu Quy Trình Bán Hàng - Nâng Cao Hiệu Quả Kinh Doanh &amp; Chăm Sóc Khách Hàng</p>
                            <p className="text-lg mb-8 mx-auto">
                                Hệ thống CRM hiện đại giúp doanh nghiệp quản lý khách hàng hiệu quả, tự động hóa quy trình bán hàng, tăng tỷ lệ chuyển đổi và xây dựng mối quan hệ bền vững với khách hàng. Giải pháp toàn diện cho doanh nghiệp muốn tối ưu hóa hoạt động kinh doanh.
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
    );
};

export default QuanLyKhachHangPage;
