"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    Smartphone,
    Users,
    Check,
    BarChart2,
    CalendarCheck,
    User,
    CreditCard,
    Bell,
    ShoppingCart,
    Briefcase,
    Wrench,
} from "lucide-react";
import Link from "next/link";

const UngDungMobilePage = () => {
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
                        <h1 className="text-2xl font-bold md:text-5xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Phát Triển Ứng Dụng Di Động iOS & Android

                        </h1>
                        <p className="text-lg mb-8 mx-auto">
                            Tiếp Cận Khách Hàng Mọi Lúc Mọi Nơi - Tăng Tương Tác & Doanh Thu Qua Mobile App
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
                            Tại Sao Doanh Nghiệp Cần Mobile App?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            ận dụng sức mạnh của thiết bị di động để tăng cường kết nối với khách hàng
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Kết nối khách hàng mọi lúc",
                                description:
                                    "Cho phép khách hàng truy cập dịch vụ, kiểm tra lịch hẹn và cập nhật thông tin cá nhân mọi lúc, mọi nơi.",
                                icon: Smartphone,
                            },
                            {
                                label: "Thông báo & nhắc nhở",
                                description:
                                    "Gửi thông báo đẩy, nhắc nhở lịch hẹn, ưu đãi, chương trình khuyến mãi ngay trên điện thoại của khách hàng.",
                                icon: Bell,
                            },
                            {
                                label: "Thanh toán trực tuyến",
                                description:
                                    "Hỗ trợ thanh toán online tiện lợi, nhanh chóng, an toàn và tích hợp nhiều phương thức thanh toán.",
                                icon: CreditCard,
                            },
                            {
                                label: "Quản lý dịch vụ & đặt lịch",
                                description:
                                    "Khách hàng có thể đặt lịch trực tuyến, chọn dịch vụ và nhân viên phục vụ ngay trên app.",
                                icon: CalendarCheck,
                            },
                            {
                                label: "Theo dõi hoạt động & báo cáo",
                                description:
                                    "Doanh nghiệp có thể theo dõi lịch hẹn, hiệu suất, doanh thu và các chỉ số quan trọng trực tiếp trên app.",
                                icon: BarChart2,
                            },
                            {
                                label: "Trải nghiệm cá nhân hóa",
                                description:
                                    "Giao diện thân thiện, đề xuất dịch vụ, ưu đãi phù hợp với từng khách hàng dựa trên hành vi và lịch sử sử dụng.",
                                icon: User,
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
                                title: "E-commerce App",
                                description: "Ứng dụng mua sắm trực tuyến với đầy đủ tính năng thương mại điện tử",
                                icon: ShoppingCart,
                                features: [
                                    "Catalog sản phẩm",
                                    "Giỏ hàng & thanh toán",
                                    "Theo dõi đơn hàng",
                                    "Đánh giá & review",
                                ],
                            },
                            {
                                id: 2,
                                title: "Social Media App",
                                description: "Ứng dụng mạng xã hội với tính năng kết nối và chia sẻ",
                                icon: Users,
                                features: [
                                    "Newsfeed & Timeline",
                                    "Chat & Messaging",
                                    "Photo & Video sharing",
                                    "Live streaming",
                                ],
                            },
                            {
                                id: 3,
                                title: "Business App",
                                description: "Ứng dụng doanh nghiệp cho quản lý và vận hành kinh doanh",
                                icon: Briefcase,
                                features: [
                                    "CRM mobile",
                                    "Task management",
                                    "Team collaboration",
                                    "Analytics dashboard",
                                ],
                            },
                            {
                                id: 4,
                                title: "Utility App",
                                description: "Ứng dụng tiện ích giải quyết các vấn đề cụ thể của người dùng",
                                icon: Wrench,
                                features: [
                                    "Calculator & Tools",
                                    "Weather & News",
                                    "Health & Fitness",
                                    "Education & Learning",
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
                        <h2 className="text-2xl text-center font-bold md:text-5xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính Năng Nổi Bật
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Giải pháp toàn diện cho cơ sở y tế hiện đại
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                label: "Kết nối khách hàng mọi lúc",
                                description:
                                    "Cho phép khách hàng truy cập dịch vụ, kiểm tra lịch hẹn và cập nhật thông tin cá nhân mọi lúc, mọi nơi.",
                                icon: Smartphone,
                            },
                            {
                                label: "Thông báo & nhắc nhở",
                                description:
                                    "Gửi thông báo đẩy, nhắc nhở lịch hẹn, ưu đãi, chương trình khuyến mãi ngay trên điện thoại của khách hàng.",
                                icon: Bell,
                            },
                            {
                                label: "Thanh toán trực tuyến",
                                description:
                                    "Hỗ trợ thanh toán online tiện lợi, nhanh chóng, an toàn và tích hợp nhiều phương thức thanh toán.",
                                icon: CreditCard,
                            },
                            {
                                label: "Quản lý dịch vụ & đặt lịch",
                                description:
                                    "Khách hàng có thể đặt lịch trực tuyến, chọn dịch vụ và nhân viên phục vụ ngay trên app.",
                                icon: CalendarCheck,
                            },
                            {
                                label: "Theo dõi hoạt động & báo cáo",
                                description:
                                    "Doanh nghiệp có thể theo dõi lịch hẹn, hiệu suất, doanh thu và các chỉ số quan trọng trực tiếp trên app.",
                                icon: BarChart2,
                            },
                            {
                                label: "Trải nghiệm cá nhân hóa",
                                description:
                                    "Giao diện thân thiện, đề xuất dịch vụ, ưu đãi phù hợp với từng khách hàng dựa trên hành vi và lịch sử sử dụng.",
                                icon: User,
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
                                question: "Mobile App là gì và tại sao doanh nghiệp cần phát triển ứng dụng di động?",
                                answer:
                                    "Mobile App là ứng dụng chạy trên thiết bị di động, giúp doanh nghiệp tương tác trực tiếp với khách hàng, cải thiện trải nghiệm, tăng tỷ lệ chuyển đổi và giữ chân khách hàng.",
                            },
                            {
                                question: "Làm sao để triển khai ứng dụng di động cho phòng khám/doanh nghiệp?",
                                answer:
                                    "Quy trình bao gồm phân tích nhu cầu, thiết kế UI/UX, phát triển tính năng, thử nghiệm, triển khai trên App Store/Google Play và duy trì bảo trì định kỳ.",
                            },
                            {
                                question: "Ứng dụng di động có thể tích hợp với hệ thống hiện tại không?",
                                answer:
                                    "Có, các mobile app hiện đại có thể tích hợp API với CRM, ERP, hệ thống quản lý phòng khám hoặc e-commerce, giúp đồng bộ dữ liệu và tối ưu quy trình vận hành.",
                            },
                            {
                                question: "Mobile App có hỗ trợ đặt lịch hẹn, quản lý hồ sơ hoặc giỏ hàng không?",
                                answer:
                                    "Có, tùy loại app: phòng khám có thể đặt lịch khám và truy xuất hồ sơ bệnh án; e-commerce app hỗ trợ giỏ hàng, thanh toán và theo dõi đơn hàng; business app hỗ trợ quản lý công việc, CRM.",
                            },
                            {
                                question: "Ứng dụng di động có thể gửi thông báo nhắc nhở hay alert tự động không?",
                                answer:
                                    "Có, mobile app có thể gửi push notification, email hoặc SMS nhắc nhở lịch hẹn, thanh toán, đơn hàng hoặc các thông báo quan trọng đến người dùng.",
                            },
                            {
                                question: "Làm sao đảm bảo bảo mật thông tin trên ứng dụng di động?",
                                answer:
                                    "Ứng dụng mobile cần tuân thủ các quy định bảo mật dữ liệu (ví dụ HIPAA cho y tế, PCI cho thanh toán), mã hóa dữ liệu, phân quyền truy cập và bảo vệ API khỏi các truy cập trái phép.",
                            },
                            {
                                question: "Mobile App có thể truy cập offline hoặc khi mạng yếu không?",
                                answer:
                                    "Một số tính năng có thể lưu cache offline như dữ liệu hồ sơ, giỏ hàng hoặc lịch hẹn. Khi có kết nối trở lại, dữ liệu sẽ đồng bộ với server.",
                            },
                            {
                                question: "Mobile App có sẵn trên iOS và Android không?",
                                answer:
                                    "Thông thường, các app hiện đại được phát triển cross-platform hoặc native, có thể chạy trên cả iOS và Android để phục vụ đa dạng khách hàng.",
                            },
                            {
                                questjion: "Chi phí phát triển ứng dụng di động là bao nhiêu?",
                                answer:
                                    "Chi phí phụ thuộc vào loại app, số lượng tính năng, mức độ phức tạp, nền tảng phát triển và UI/UX. Một app cơ bản có thể từ vài nghìn đến hàng chục nghìn USD.",
                            },
                            {
                                question: "Cần bao lâu để phát triển một ứng dụng di động hoàn chỉnh?",
                                answer:
                                    "Thời gian phát triển tùy vào phạm vi và tính năng. App cơ bản có thể mất 6-12 tuần, trong khi app phức tạp với nhiều tính năng và tích hợp có thể từ 3-6 tháng.",
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

export default UngDungMobilePage;
