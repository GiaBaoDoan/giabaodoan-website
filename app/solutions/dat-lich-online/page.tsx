'use client'

import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
    BarChart,
    CircleCheckBig,
    Clock,
    FileText,
    Hash,
    Megaphone,
    MousePointerClick,
    SearchCheck,
    SearchCode,
    ServerCog,
    Smartphone,
    Target,
    TrendingUp,
    Smile,
    Search,
    Zap,
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
    BookOpenCheck,
    Settings2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const BookingOnlinePage = () => {
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
                            Giải Pháp Website Đặt Lịch & Dịch Vụ Chuyên Nghiệp
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Tăng Hiệu Suất, Tối Ưu Trải Nghiệm Khách Hàng & Tăng Trưởng Doanh Thu
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Trong lĩnh vực kinh doanh dịch vụ, một hệ thống đặt lịch chuyên nghiệp không chỉ giúp nâng cao trải nghiệm khách hàng mà còn tối ưu quy trình vận hành, giảm thiểu chi phí quản lý và tăng doanh thu. Chúng tôi cung cấp giải pháp toàn diện giúp doanh nghiệp dịch vụ vận hành hiệu quả hơn trong kỷ nguyên số.
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
                            { label: "Giảm thời gian quản lý", value: 95, suffix: "%" },
                            { label: "Giảm tỷ lệ đặt lịch trễ", value: 60, suffix: "%" },
                            { label: "Dự án thành công", value: 30, suffix: "+" },
                            { label: "Tăng doanh thu", value: 30, suffix: "%" }
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
                            Vì sao doanh nghiệp cần một website đặt lịch chuyên nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Vì sao doanh nghiệp cần một website đặt lịch chuyên nghiệp?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Tự động hóa quy trình đặt lịch",
                                desc: "Khách hàng có thể đặt lịch mọi lúc, mọi nơi mà không cần gọi điện hay nhắn tin thủ công, tiết kiệm thời gian và công sức cho cả hai bên.",
                                icon: CalendarCheck
                            },
                            {
                                title: "Giảm tải công việc cho nhân viên",
                                desc: "Hệ thống tự động cập nhật, nhắc nhở, tránh tình trạng đặt trùng lịch, giúp nhân viên tập trung vào chất lượng dịch vụ thay vì công việc hành chính.",
                                icon: UserCheck
                            },
                            {
                                title: "Tích hợp thanh toán online",
                                desc: "Tăng tỷ lệ chốt đơn với nhiều phương thức thanh toán tiện lợi, giúp đảm bảo khách hàng cam kết với lịch hẹn đã đặt và giảm tỷ lệ hủy lịch.",
                                icon: CreditCard
                            },
                            {
                                title: "Nâng cao trải nghiệm khách hàng",
                                desc: "Dễ dàng tra cứu lịch sử đặt hẹn, nhận thông báo nhắc nhở, giúp khách hàng chủ động hơn và cảm thấy được quan tâm, từ đó tăng sự hài lòng và lòng trung thành.",
                                icon: Smile
                            },
                            {
                                title: "Quản lý & tối ưu hiệu suất kinh doanh",
                                desc: "Theo dõi số lượng đặt lịch, doanh thu, phản hồi khách hàng ngay trên hệ thống, tạo ra báo cáo chi tiết giúp ra quyết định kinh doanh chính xác hơn.",
                                icon: BarChart3
                            },
                            {
                                title: "Tăng cơ hội tìm kiếm và marketing",
                                desc: "Website đặt lịch được tối ưu SEO giúp doanh nghiệp dễ dàng được tìm thấy trên Google, tích hợp với các kênh marketing digital để thu hút khách hàng tiềm năng.",
                                icon: Search
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
                            Lợi thế SEO cho website đặt lịch
                        </h2>
                        <p className="text-lg mx-auto">
                            Chúng tôi áp dụng các chiến lược SEO tiên tiến giúp website đặt lịch của bạn dễ dàng được tìm thấy trên công cụ tìm kiếm
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
                                src="https://tanphatdigital.com/_next/static/media/booking.6e5b85f4.jpg"
                                alt="SEO Optimization for Websites"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tối ưu tìm kiếm địa phương (Local SEO)",
                                    desc: "Tối ưu hóa cho tìm kiếm địa phương với Google My Business, schema markup địa điểm và thông tin doanh nghiệp nhất quán trên các nền tảng trực tuyến."
                                },
                                {
                                    title: "Schema Markup cho dịch vụ",
                                    desc: "Tích hợp dữ liệu có cấu trúc giúp Google hiểu rõ về các dịch vụ, giá cả, đánh giá và thời gian hoạt động của doanh nghiệp."
                                },
                                {
                                    title: "Cấu trúc URL tối ưu",
                                    desc: "Thiết kế cấu trúc URL thân thiện, dễ đọc cho cả người dùng và công cụ tìm kiếm, với từ khóa phù hợp cho từng dịch vụ và ngành nghề."
                                },
                                {
                                    title: "Tối ưu cho thiết bị di động",
                                    desc: "Thiết kế responsive hoàn hảo, đáp ứng tiêu chí Mobile-First Indexing của Google, tăng trải nghiệm đặt lịch trên điện thoại."
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
            {/*  */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Giải pháp phù hợp cho mọi mô hình kinh doanh
                        </h2>
                        <p className="text-lg">
                            Chúng tôi cung cấp giải pháp đặt lịch tùy chỉnh phù hợp với đặc thù của từng ngành nghề
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="e-commerce" className="w-full max-w-4xl mx-auto">
                    <TabsList className="flex flex-wrap justify-between w-full bg-transparent ">
                        <TabsTrigger value="beauty">Làm đẹp</TabsTrigger>
                        <TabsTrigger value="medical">Y tế</TabsTrigger>
                        <TabsTrigger value="education">Đào tạo</TabsTrigger>
                        <TabsTrigger value="technical">Dịch vụ kỹ thuật</TabsTrigger>
                    </TabsList>

                    {[
                        {
                            value: "beauty",
                            icon: CalendarCheck,
                            title: "Spa, Thẩm mỹ viện & Salon",
                            desc: "Giải pháp đặt lịch tiện lợi cho các dịch vụ làm đẹp, quản lý nhân viên và khách hàng dễ dàng.",
                            features: [
                                "Đặt lịch tự động mọi lúc, mọi nơi",
                                "Chọn nhân viên yêu thích",
                                "Quản lý lịch trình linh hoạt",
                                "Tích hợp thẻ thành viên & ưu đãi"
                            ]
                        },
                        {
                            value: "medical",
                            icon: HeartPulse,
                            title: "Phòng khám & Bệnh viện",
                            desc: "Hệ thống đặt lịch khám, tư vấn trực tuyến, nhắc nhở lịch hẹn cho bệnh nhân.",
                            features: [
                                "Đặt lịch khám online",
                                "Quản lý bác sĩ & lịch trình",
                                "Nhắc nhở hẹn tự động",
                                "Tích hợp với hồ sơ bệnh nhân"
                            ]
                        },
                        {
                            value: "education",
                            icon: BookOpenCheck,
                            title: "Trung tâm đào tạo & lớp học",
                            desc: "Đặt lịch học, quản lý lớp, giáo viên và học viên, tích hợp thanh toán trực tuyến.",
                            features: [
                                "Đặt lịch học linh hoạt",
                                "Quản lý giáo viên & lớp học",
                                "Thanh toán trực tuyến tích hợp",
                                "Theo dõi tiến trình học viên"
                            ]
                        },
                        {
                            value: "technical",
                            icon: Settings2,
                            title: "Dịch vụ kỹ thuật & bảo trì",
                            desc: "Đặt lịch dịch vụ, phân công kỹ thuật viên, theo dõi tiến độ và nhắc nhở khách hàng.",
                            features: [
                                "Đặt lịch dịch vụ trực tuyến",
                                "Phân công kỹ thuật viên",
                                "Cập nhật tiến độ và trạng thái",
                                "Nhắc nhở khách hàng tự động"
                            ]
                        }
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <TabsContent
                                key={item.value}
                                value={item.value}
                                className="border rounded-lg mt-4"
                            >
                                <div className="flex items-center gap-4 p-4">
                                    <Icon className="size-8" />
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>

                                <div className="p-4 pt-0 space-y-4">
                                    <p>{item.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {item.features.map((f, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CircleCheckBig className="size-5 shrink-0" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-full h-11">Tìm hiểu thêm</Button>
                                </div>
                            </TabsContent>
                        );
                    })}

                </Tabs>
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
                                title: "Giao diện trực quan",
                                desc: "Tối ưu trên mọi thiết bị, dễ dàng sử dụng",
                                icon: LayoutDashboard
                            },
                            {
                                title: "Hệ thống đặt lịch tự động",
                                desc: "Quản lý thời gian hiệu quả, tránh trùng lịch",
                                icon: CalendarCheck
                            },
                            {
                                title: "Thanh toán online",
                                desc: "Hỗ trợ nhiều phương thức thanh toán: Visa, MasterCard, Momo, VNPay",
                                icon: CreditCard
                            },
                            {
                                title: "Hệ thống nhắc nhở",
                                desc: "Nhắc nhở qua email, SMS, hoặc ứng dụng chat",
                                icon: Bell
                            },
                            {
                                title: "Quản lý khách hàng",
                                desc: "Theo dõi lịch sử, tạo chương trình khách hàng thân thiết",
                                icon: UserCheck
                            },
                            {
                                title: "Hỗ trợ đa ngôn ngữ",
                                desc: "Phục vụ khách hàng quốc tế, mở rộng đối tượng",
                                icon: Globe
                            },
                            {
                                title: "Bảo mật cao cấp",
                                desc: "Đảm bảo an toàn thông tin khách hàng, SSL chứng chỉ",
                                icon: ShieldCheck
                            },
                            {
                                title: "Báo cáo thống kê",
                                desc: "Phân tích dữ liệu đặt lịch, hỗ trợ ra quyết định",
                                icon: BarChart3
                            },
                            {
                                title: "Tích hợp chat trực tuyến",
                                desc: "Hỗ trợ khách hàng ngay lập tức, tăng tỷ lệ chuyển đổi",
                                icon: MessageSquare
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
                                question: "Chi phí phát triển một website đặt lịch là bao nhiêu?",
                                answer: "Chi phí phát triển website đặt lịch phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết."
                            },
                            {
                                question: "Thời gian phát triển một website đặt lịch mất bao lâu?",
                                answer: "Thời gian phát triển website đặt lịch thông thường từ 2-6 tuần tùy thuộc vào quy mô và yêu cầu cụ thể. Website cơ bản có thể hoàn thành trong 2-3 tuần, trong khi các dự án phức tạp hơn với nhiều tính năng tùy chỉnh có thể mất 4-6 tuần."
                            },
                            {
                                question: "Website đặt lịch có tích hợp được với phần mềm quản lý hiện tại của tôi không?",
                                answer: "Có, chúng tôi hỗ trợ tích hợp website đặt lịch với nhiều phần mềm quản lý phổ biến như ERP, CRM, phần mềm kế toán, và các công cụ quản lý khách hàng. Chúng tôi cũng có thể phát triển API riêng để kết nối với hệ thống hiện có của bạn, đảm bảo dữ liệu đồng bộ và quy trình làm việc liền mạch."
                            },
                            {
                                question: "Hệ thống đặt lịch có hoạt động trên thiết bị di động không?",
                                answer: "Có, tất cả các website đặt lịch của chúng tôi đều được thiết kế theo nguyên tắc responsive và mobile-first, đảm bảo hoạt động mượt mà trên mọi thiết bị từ máy tính để bàn đến điện thoại di động. Ngoài ra, chúng tôi cũng cung cấp tùy chọn phát triển ứng dụng di động riêng cho hệ thống đặt lịch của bạn."
                            },
                            {
                                question: "Khách hàng có nhận được thông báo nhắc lịch hẹn tự động không?",
                                answer: "Có, hệ thống đặt lịch của chúng tôi tích hợp tính năng nhắc nhở tự động qua nhiều kênh như email, SMS, và thông báo đẩy trên ứng dụng di động (nếu có). Bạn có thể tùy chỉnh thời gian gửi nhắc nhở nội dung thông báo, và tần suất nhắc nhở theo nhu cầu của doanh nghiệp."
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
                                Nâng cấp dịch vụ của bạn ngay hôm nay!
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Website đặt lịch chuyên nghiệp giúp bạn nâng cao hiệu suất, cải thiện dịch vụ và mang đến trải nghiệm tốt nhất cho khách hàng. Hãy để chúng tôi đồng hành cùng bạn trong hành trình số hóa doanh nghiệp.
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

export default BookingOnlinePage