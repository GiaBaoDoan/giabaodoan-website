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
    FileText,
    CalendarCheck,
    Activity,
    UserCheck,
    FlaskConical,
    Hospital,
    Heart,
} from "lucide-react";
import Link from "next/link";

const QuanLyPhongKhamPage = () => {
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
                            Hệ Thống Quản Lý Phòng Khám & Bệnh Viện (CLS)

                        </h1>
                        <p className="text-lg mb-8 mx-auto">
                            Số Hóa Quy Trình Y Tế - Nâng Cao Chất Lượng Chăm Sóc Sức Khỏe & Quản Lý Hiệu Quả
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
                            Tại Sao Cần Hệ Thống CLS Chuyên Nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Tối ưu hóa quy trình y tế, nâng cao chất lượng chăm sóc bệnh nhân và quản lý hiệu quả
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Quản lý hồ sơ bệnh án",
                                description:
                                    "Số hóa hồ sơ bệnh án, lưu trữ an toàn, truy xuất nhanh chóng, chia sẻ thông tin hiệu quả.",
                                icon: FileText,
                            },
                            {
                                label: "Đặt lịch khám thông minh",
                                description:
                                    "Hệ thống đặt lịch trực tuyến, quản lý lịch bác sĩ, tránh trùng lịch, nhắc nhở tự động.",
                                icon: CalendarCheck,
                            },
                            {
                                label: "Theo dõi sức khỏe",
                                description:
                                    "Theo dõi chỉ số sức khỏe, lịch sử khám bệnh, kết quả xét nghiệm, đơn thuốc điện tử.",
                                icon: Activity,
                            },
                            {
                                label: "Bảo mật thông tin",
                                description:
                                    "Tuân thủ quy định bảo mật y tế, mã hóa dữ liệu, phân quyền truy cập chi tiết.",
                                icon: Shield,
                            },
                            {
                                label: "Báo cáo & thống kê",
                                description:
                                    "Dashboard tổng quan, báo cáo doanh thu, thống kê bệnh nhân, hiệu suất hoạt động.",
                                icon: BarChart2,
                            },
                            {
                                label: "Ứng dụng di động",
                                description:
                                    "App cho bệnh nhân đặt lịch, xem kết quả. App cho bác sĩ truy cập hồ sơ mọi lúc.",
                                icon: Smartphone,
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
                            className="text-3xl font-bold md:text-5xl mb-4 bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent"
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
                                title: "Phòng khám nhỏ & vừa",
                                description: "Giải pháp tối ưu cho phòng khám nhỏ và vừa với đầy đủ tính năng cần thiết",
                                icon: Hospital,
                                features: [
                                    "Quản lý lịch hẹn",
                                    "Hồ sơ bệnh án điện tử",
                                    "Kê đơn thuốc",
                                    "Thanh toán & hóa đơn",
                                ],
                            },
                            {
                                id: 2,
                                title: "Bệnh Viện Đa Khoa",
                                description: "Hệ thống toàn diện cho bệnh viện lớn với nhiều khoa phòng chuyên biệt",
                                icon: Activity,
                                features: [
                                    "Quản lý nhiều khoa",
                                    "Hệ thống giường bệnh",
                                    "Quản lý phẫu thuật",
                                    "Báo cáo tổng hợp",
                                ],
                            },
                            {
                                id: 3,
                                title: "Phòng Khám Nha Khoa",
                                description: "Chuyên biệt cho phòng khám nha khoa với tính năng đặc thù",
                                icon: Heart,
                                features: [
                                    "Sơ đồ răng điện tử",
                                    "Lịch điều trị",
                                    "Hình ảnh X-quang",
                                    "Báo giá điều trị",
                                ],
                            },
                            {
                                id: 4,
                                title: "Phòng Xét Nghiệm",
                                description: "Quản lý chuyên sâu cho phòng xét nghiệm và chẩn đoán hình ảnh",
                                icon: FlaskConical,
                                features: [
                                    "Quản lý mẫu xét nghiệm",
                                    "Kết quả tự động",
                                    "Chất lượng kiểm soát",
                                    "Báo cáo chuyên sâu",
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
                            Giải pháp toàn diện cho cơ sở y tế hiện đại
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Quản lý bệnh nhân",
                                description:
                                    "Hồ sơ bệnh nhân chi tiết, lịch sử khám bệnh, thông tin liên hệ, bảo hiểm y tế.",
                                icon: Users,
                            },
                            {
                                label: "Quản lý bác sĩ & nhân viên",
                                description:
                                    "Lịch làm việc, chuyên khoa, thông tin liên hệ, đánh giá hiệu suất làm việc.",
                                icon: UserCheck,
                            },
                            {
                                label: "Kê đơn thuốc điện tử",
                                description:
                                    "Kê đơn thuốc số, kiểm tra tương tác thuốc, quản lý kho thuốc, cảnh báo hết hạn.",
                                icon: FileText,
                            },
                            {
                                label: "Xét nghiệm & chẩn đoán",
                                description:
                                    "Quản lý kết quả xét nghiệm, hình ảnh y khoa, báo cáo chẩn đoán, theo dõi chỉ số.",
                                icon: Activity,
                            },
                            {
                                label: "Báo cáo & thống kê",
                                description:
                                    "Dashboard tổng quan, báo cáo doanh thu, thống kê bệnh nhân, hiệu suất hoạt động.",
                                icon: BarChart2,
                            },
                            {
                                label: "Ứng dụng di động",
                                description:
                                    "App cho bệnh nhân đặt lịch, xem kết quả. App cho bác sĩ truy cập hồ sơ mọi lúc.",
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
                                question: "Hệ thống quản lý phòng khám là gì?",
                                answer:
                                    "Hệ thống quản lý phòng khám (Clinic Management System) là phần mềm giúp tự động hóa quy trình quản lý bệnh nhân, lịch hẹn, hồ sơ bệnh án, kê đơn thuốc, thanh toán và báo cáo thống kê. Giúp tối ưu hóa vận hành phòng khám.",
                            },
                            {
                                question: "Làm thế nào để quản lý hồ sơ bệnh án hiệu quả?",
                                answer:
                                    "Phòng khám nên sử dụng hồ sơ bệnh án điện tử để lưu trữ đầy đủ thông tin bệnh nhân, lịch sử khám chữa bệnh, đơn thuốc và kết quả xét nghiệm. Dữ liệu được truy xuất nhanh chóng và bảo mật.",
                            },
                            {
                                question: "Hệ thống có hỗ trợ đặt lịch khám trực tuyến không?",
                                answer:
                                    "Có, hầu hết hệ thống quản lý phòng khám hiện đại đều tích hợp tính năng đặt lịch khám trực tuyến, nhắc hẹn tự động và tránh trùng lịch bác sĩ.",
                            },
                            {
                                question: "Làm sao để quản lý lịch làm việc của bác sĩ và nhân viên?",
                                answer:
                                    "Hệ thống cho phép lập lịch làm việc, phân công nhiệm vụ, theo dõi ca trực của bác sĩ và nhân viên, giúp tối ưu hóa hiệu suất làm việc và tránh trùng lịch.",
                            },
                            {
                                question: "Có thể kê đơn thuốc điện tử và quản lý kho thuốc không?",
                                answer:
                                    "Có, phần mềm cho phép kê đơn điện tử, kiểm tra tương tác thuốc, quản lý tồn kho và cảnh báo thuốc sắp hết hạn, đảm bảo an toàn cho bệnh nhân và thuận tiện cho nhà thuốc.",
                            },
                            {
                                question: "Hệ thống có hỗ trợ quản lý xét nghiệm và kết quả chẩn đoán không?",
                                answer:
                                    "Có, các kết quả xét nghiệm và hình ảnh y khoa được lưu trữ trực tuyến, cho phép theo dõi chỉ số sức khỏe và báo cáo chẩn đoán nhanh chóng.",
                            },
                            {
                                question: "Báo cáo và thống kê của phòng khám được cung cấp như thế nào?",
                                answer:
                                    "Hệ thống cung cấp dashboard trực quan, báo cáo doanh thu, số lượng bệnh nhân, hiệu suất bác sĩ và các chỉ số quan trọng khác, hỗ trợ ra quyết định nhanh chóng.",
                            },
                            {
                                question: "Có thể truy cập hệ thống trên di động không?",
                                answer:
                                    "Có, nhiều hệ thống quản lý phòng khám hiện đại có ứng dụng mobile, giúp bác sĩ và nhân viên truy cập thông tin bệnh nhân, quản lý công việc mọi lúc, mọi nơi.",
                            },
                            {
                                question: "Hệ thống có đảm bảo bảo mật thông tin bệnh nhân không?",
                                answer:
                                    "Có, các hệ thống quản lý phòng khám tuân thủ quy định bảo mật y tế, mã hóa dữ liệu, phân quyền truy cập và lưu trữ an toàn thông tin bệnh nhân.",
                            },
                            {
                                question: "Hệ thống có thể tích hợp với các phần mềm hiện tại không?",
                                answer:
                                    "Có, hệ thống có thể tích hợp với phần mềm quản lý bệnh viện, ERP, kế toán hoặc các công cụ khác qua API, đảm bảo dữ liệu đồng bộ và quy trình liền mạch.",
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
                                Sẵn Sàng Số Hóa Cơ Sở Y Tế?
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Liên hệ ngay để nhận tư vấn miễn phí và demo hệ thống CLS
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

export default QuanLyPhongKhamPage;
