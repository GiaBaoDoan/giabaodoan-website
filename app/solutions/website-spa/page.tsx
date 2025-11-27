"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import {
    Megaphone,
    Smartphone,
    LayoutDashboard,
    CalendarCheck,
    CreditCard,
    Bell,
    UserCheck,
    Globe,
    ShieldCheck,
    BarChart3,
    MessageSquare,
    HeartPulse,
    Layers,
    Users,
    Star,
    Check,
    Scissors,
    BookOpen,
    Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WebsiteSpaPage = () => {
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
                            Giải Pháp Website Spa & Làm Đẹp Chuyên Nghiệp
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Nâng Tầm Thương Hiệu Spa - Tối Ưu Trải Nghiệm Khách Hàng & Quản Lý
                            Hiệu Quả
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Trong ngành spa và làm đẹp, một website chuyên nghiệp không chỉ
                            giúp thu hút khách hàng mà còn tối ưu quy trình đặt lịch, quản lý
                            dịch vụ và nâng cao trải nghiệm khách hàng. Chúng tôi cung cấp
                            giải pháp toàn diện giúp spa của bạn phát triển mạnh mẽ trong kỷ
                            nguyên số.
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
                                label: "Khách hàng hài lòng",
                                value: 95,
                                suffix: "%",
                            },
                            {
                                label: "Tăng lượng đặt lịch",
                                value: 80,
                                suffix: "%",
                            },
                            {
                                label: "Spa đã triển khai",
                                value: 50,
                                suffix: "+",
                            },
                            {
                                label: "Tăng doanh thu",
                                value: 40,
                                suffix: "%",
                            },
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
                            Vì sao spa cần một website chuyên nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Một giải pháp website spa toàn diện mang lại nhiều lợi ích vượt
                            trội cho doanh nghiệp làm đẹp
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Hệ thống đặt lịch thông minh",
                                desc: "Khách hàng có thể đặt lịch spa mọi lúc, mọi nơi mà không cần gọi điện, tiết kiệm thời gian cho cả hai bên.",
                                icon: CalendarCheck,
                            },
                            {
                                title: "Catalog dịch vụ spa",
                                desc: "Giới thiệu đầy đủ các liệu trình, massage, chăm sóc da với hình ảnh và giá cả chi tiết, thu hút khách hàng.",
                                icon: Layers,
                            },
                            {
                                title: "Quản lý khách hàng CRM",
                                desc: "Lưu trữ thông tin cá nhân, lịch sử dịch vụ, sở thích, chương trình khách hàng thân thiết.",
                                icon: Users,
                            },
                            {
                                title: "Tối ưu mobile",
                                desc: "Giao diện responsive, trải nghiệm mượt mà trên mọi thiết bị di động, tăng tỷ lệ đặt lịch.",
                                icon: Smartphone,
                            },
                            {
                                title: "Đánh giá & phản hồi",
                                desc: "Hệ thống đánh giá dịch vụ, thu thập phản hồi khách hàng, nâng cao chất lượng dịch vụ spa.",
                                icon: Star,
                            },
                            {
                                title: "Tăng cơ hội marketing",
                                desc: "Website được tối ưu SEO giúp spa dễ dàng được tìm thấy trên Google, thu hút khách hàng tiềm năng.",
                                icon: Megaphone,
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
                                        <p>{item.desc}</p>
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
                                title: "Spa Làm Đẹp & Thẩm Mỹ",
                                description: "Giải pháp chuyên biệt cho spa chăm sóc da và làm đẹp",
                                icon: Scissors,
                                features: [
                                    { text: "Catalog liệu trình làm đẹp" },
                                    { text: "Đặt lịch chăm sóc da" },
                                    { text: "Gallery trước/sau" },
                                    { text: "Tư vấn online" }
                                ]
                            },
                            {
                                id: 2,
                                title: "Phòng Khám & Y Tế",
                                description: "Quản lý lịch khám, bác sĩ và nhắc hẹn bệnh nhân tự động",
                                icon: HeartPulse,
                                features: [
                                    { text: "Đặt lịch khám online" },
                                    { text: "Quản lý bác sĩ & lịch trình" },
                                    { text: "Nhắc hẹn tự động" },
                                    { text: "Hồ sơ bệnh nhân trực tuyến" }
                                ]
                            },
                            {
                                id: 3,
                                title: "Trung Tâm Đào Tạo & Lớp Học",
                                description: "Đặt lịch học, quản lý giáo viên và học viên, thanh toán trực tuyến",
                                icon: BookOpen,
                                features: [
                                    { text: "Đặt lịch học linh hoạt" },
                                    { text: "Quản lý lớp học & giáo viên" },
                                    { text: "Thanh toán online tích hợp" },
                                    { text: "Theo dõi tiến trình học viên" }
                                ]
                            },
                            {
                                id: 4,
                                title: "Dịch Vụ Kỹ Thuật & Bảo Trì",
                                description: "Đặt lịch dịch vụ, phân công kỹ thuật viên, nhắc nhở khách hàng tự động",
                                icon: Wrench,
                                features: [
                                    { text: "Đặt lịch dịch vụ trực tuyến" },
                                    { text: "Phân công kỹ thuật viên" },
                                    { text: "Cập nhật tiến độ & trạng thái" },
                                    { text: "Nhắc nhở khách hàng tự động" }
                                ]
                            }
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
                                                <span className="text-white">{feature.text}</span>
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
                            Tính năng nổi bật của website spa
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Chúng tôi tích hợp các tính năng hiện đại giúp website spa của bạn
                            không chỉ đẹp mắt mà còn hiệu quả
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Giao diện trực quan",
                                desc: "Tối ưu trên mọi thiết bị, dễ dàng sử dụng",
                                icon: LayoutDashboard,
                            },
                            {
                                title: "Hệ thống đặt lịch tự động",
                                desc: "Quản lý thời gian hiệu quả, tránh trùng lịch",
                                icon: CalendarCheck,
                            },
                            {
                                title: "Thanh toán online",
                                desc: "Hỗ trợ nhiều phương thức thanh toán: Visa, MasterCard, Momo, VNPay",
                                icon: CreditCard,
                            },
                            {
                                title: "Hệ thống nhắc nhở",
                                desc: "Nhắc nhở qua email, SMS, hoặc ứng dụng chat",
                                icon: Bell,
                            },
                            {
                                title: "Quản lý khách hàng",
                                desc: "Theo dõi lịch sử, tạo chương trình khách hàng thân thiết",
                                icon: UserCheck,
                            },
                            {
                                title: "Hỗ trợ đa ngôn ngữ",
                                desc: "Phục vụ khách hàng quốc tế, mở rộng đối tượng",
                                icon: Globe,
                            },
                            {
                                title: "Bảo mật cao cấp",
                                desc: "Đảm bảo an toàn thông tin khách hàng, SSL chứng chỉ",
                                icon: ShieldCheck,
                            },
                            {
                                title: "Báo cáo thống kê",
                                desc: "Phân tích dữ liệu đặt lịch, hỗ trợ ra quyết định",
                                icon: BarChart3,
                            },
                            {
                                title: "Tích hợp chat trực tuyến",
                                desc: "Hỗ trợ khách hàng ngay lập tức, tăng tỷ lệ chuyển đổi",
                                icon: MessageSquare,
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
                            Hãy để chúng tôi giúp bạn xây dựng landing page chuyên nghiệp, thu
                            hút khách hàng và tăng tỷ lệ chuyển đổi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                question:
                                    "Chi phí phát triển một website đặt lịch là bao nhiêu?",
                                answer:
                                    "Chi phí phát triển website đặt lịch phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết.",
                            },
                            {
                                question:
                                    "Thời gian phát triển một website đặt lịch mất bao lâu?",
                                answer:
                                    "Thời gian phát triển website đặt lịch thông thường từ 2-6 tuần tùy thuộc vào quy mô và yêu cầu cụ thể. Website cơ bản có thể hoàn thành trong 2-3 tuần, trong khi các dự án phức tạp hơn với nhiều tính năng tùy chỉnh có thể mất 4-6 tuần.",
                            },
                            {
                                question:
                                    "Website đặt lịch có tích hợp được với phần mềm quản lý hiện tại của tôi không?",
                                answer:
                                    "Có, chúng tôi hỗ trợ tích hợp website đặt lịch với nhiều phần mềm quản lý phổ biến như ERP, CRM, phần mềm kế toán, và các công cụ quản lý khách hàng. Chúng tôi cũng có thể phát triển API riêng để kết nối với hệ thống hiện có của bạn, đảm bảo dữ liệu đồng bộ và quy trình làm việc liền mạch.",
                            },
                            {
                                question:
                                    "Hệ thống đặt lịch có hoạt động trên thiết bị di động không?",
                                answer:
                                    "Có, tất cả các website đặt lịch của chúng tôi đều được thiết kế theo nguyên tắc responsive và mobile-first, đảm bảo hoạt động mượt mà trên mọi thiết bị từ máy tính để bàn đến điện thoại di động. Ngoài ra, chúng tôi cũng cung cấp tùy chọn phát triển ứng dụng di động riêng cho hệ thống đặt lịch của bạn.",
                            },
                            {
                                question:
                                    "Khách hàng có nhận được thông báo nhắc lịch hẹn tự động không?",
                                answer:
                                    "Có, hệ thống đặt lịch của chúng tôi tích hợp tính năng nhắc nhở tự động qua nhiều kênh như email, SMS, và thông báo đẩy trên ứng dụng di động (nếu có). Bạn có thể tùy chỉnh thời gian gửi nhắc nhở nội dung thông báo, và tần suất nhắc nhở theo nhu cầu của doanh nghiệp.",
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
                                Nâng cấp spa của bạn ngay hôm nay!
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Website spa chuyên nghiệp giúp bạn nâng cao hiệu suất, cải thiện
                                dịch vụ và mang đến trải nghiệm tốt nhất cho khách hàng. Hãy để
                                chúng tôi đồng hành cùng bạn trong hành trình số hóa spa.
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

export default WebsiteSpaPage;
