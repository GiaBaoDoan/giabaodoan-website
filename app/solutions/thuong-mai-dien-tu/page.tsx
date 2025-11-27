'use client'

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
    BarChart3,
    Bot,
    Box,
    Boxes,
    ChartNoAxesColumn,
    CircleCheckBig,
    Clock,
    CreditCard,
    Languages,
    LayoutDashboard,
    Search,
    SearchCheck,
    Shield,
    ShieldCheck,
    Shirt,
    Smartphone,
    Store,
    User,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const ThuongMaiDienTuPage = () => {
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
                            Giải Pháp Website Bán Hàng Chuyên Nghiệp
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Tối Ưu Hiệu Suất, Tăng Trưởng Doanh Thu & Xếp Hạng SEO
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Một website bán hàng chuyên nghiệp không chỉ giúp doanh nghiệp mở rộng thị trường mà còn tối ưu hóa quy trình kinh doanh, nâng cao trải nghiệm khách hàng và gia tăng doanh số. Chúng tôi cung cấp giải pháp toàn diện, tối ưu SEO, giúp doanh nghiệp của bạn dễ dàng tiếp cận khách hàng tiềm năng.
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
                            { label: "Website bán hàng", value: 30, suffix: "+" },
                            { label: "Khách hàng hài lòng", value: 95, suffix: "%" },
                            { label: "Tăng tỷ lệ chuyển đổi", value: 70, suffix: "%" },
                            { label: "Giảm chi phí vận hành", value: 50, suffix: "%" },
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
                            Vì sao doanh nghiệp cần một website bán hàng chuyên nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            ột website bán hàng chuyên nghiệp mang lại nhiều lợi ích vượt trội cho doanh nghiệp trong kỷ nguyên số
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Bán hàng 24/7",
                                desc: "Tiếp cận khách hàng mọi lúc, mọi nơi mà không bị giới hạn bởi không gian và thời gian, tăng cơ hội bán hàng.",
                                icon: Clock,
                            },
                            {
                                title: "Tối ưu trải nghiệm mua sắm",
                                desc: "Giao diện thân thiện, tốc độ tải trang nhanh, quy trình thanh toán mượt mà giúp tăng tỷ lệ chuyển đổi và giảm tỷ lệ bỏ giỏ hàng.",
                                icon: Users,
                            },
                            {
                                title: "Tích hợp công nghệ hiện đại",
                                desc: "Hỗ trợ AI chatbot, quản lý kho hàng, phân tích dữ liệu, nâng cao hiệu suất kinh doanh và tự động hóa quy trình.",
                                icon: ChartNoAxesColumn,
                            },
                            {
                                title: "Bảo Mật Cao – Đảm Bảo An Toàn Tuyệt Đối",
                                desc: "Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp website an toàn trước mọi rủi ro.",
                                icon: Shield,
                            },
                            {
                                title: "Chuẩn SEO & Marketing",
                                desc: "Dễ dàng xuất hiện trên Google, kết nối với Facebook Ads, Google Ads để gia tăng lượt truy cập và thu hút khách hàng tiềm năng.",
                                icon: Search,
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
                                src="https://tanphatdigital.com/_next/static/media/ecommerce.101120a6.webp"
                                alt="SEO Optimization for Websites"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tối ưu cấu trúc website thương mại điện tử",
                                    desc: "Thiết kế cấu trúc danh mục sản phẩm, URL thân thiện, breadcrumbs và sitemap nhằm giúp Google thu thập dữ liệu hiệu quả hơn."
                                },
                                {
                                    title: "Schema Markup cho sản phẩm",
                                    desc: "Tích hợp dữ liệu có cấu trúc (Structured Data) để hiển thị rich snippets như đánh giá, giá cả và tình trạng kho hàng trên Google."
                                },
                                {
                                    title: "Tối ưu tốc độ tải trang",
                                    desc: "Áp dụng tối ưu hóa hình ảnh, lazy loading và caching để tăng tốc độ tải trang, cải thiện trải nghiệm người dùng và điểm Core Web Vitals."
                                },
                                {
                                    title: "Tối ưu cho thiết bị di động",
                                    desc: "Thiết kế responsive theo chuẩn Mobile-First Indexing của Google, giúp website hoạt động mượt mà và nâng cao trải nghiệm mua sắm trên di động."
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
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Giải pháp phù hợp cho mọi mô hình kinh doanh
                        </h2>
                        <p className="text-lg">
                            Chúng tôi cung cấp giải pháp website bán hàng tùy chỉnh cho từng loại hình kinh doanh, đáp ứng mọi nhu cầu từ cá nhân đến doanh nghiệp lớn
                        </p>
                    </div>

                    <Tabs defaultValue="e-commerce" className="w-full max-w-4xl mx-auto">
                        <TabsList className="flex flex-wrap justify-between w-full bg-transparent ">
                            <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
                            <TabsTrigger value="retail">Bán lẻ</TabsTrigger>
                            <TabsTrigger value="wholesale">Bán buôn</TabsTrigger>
                            <TabsTrigger value="startup">Khởi nghiệp</TabsTrigger>
                        </TabsList>

                        {[
                            {
                                value: "e-commerce",
                                icon: Store,
                                title: "Thương mại điện tử",
                                desc: "Hệ thống bán hàng chuyên nghiệp, tích hợp thanh toán online, quản lý kho và vận chuyển.",
                                features: [
                                    "Giỏ hàng thông minh, đề xuất sản phẩm",
                                    "Đa dạng phương thức thanh toán",
                                    "Quản lý vận chuyển tự động",
                                    "Tích hợp đa kênh bán hàng",
                                ],
                            },
                            {
                                value: "retail",
                                icon: Shirt,
                                title: "Thương mại điện tử",
                                desc: "Hệ thống website bán hàng chuyên nghiệp, tích hợp thanh toán, quản lý đơn hàng, hỗ trợ logistics.",
                                features: [
                                    "Hệ thống quản lý sản phẩm toàn diện",
                                    "Tích hợp đa cổng thanh toán",
                                    "Quản lý tồn kho và vận chuyển",
                                    "Tự động hóa quy trình bán hàng",
                                ],
                            },
                            {
                                value: "wholesale",
                                icon: Box,
                                title: "Doanh nghiệp bán buôn & phân phối",
                                desc: "Website tích hợp hệ thống quản lý đơn hàng, kết nối đối tác, tự động hóa quy trình vận hành.",
                                features: [
                                    "Báo cáo và phân tích dữ liệu",
                                    "Quản lý kho hàng thông minh",
                                    "Quản lý đối tác & khách hàng",
                                    "Bảng giá theo cấp độ khách hàng",
                                ],
                            },
                            {
                                value: "startup",
                                icon: User,
                                title: "Kinh doanh cá nhân & khởi nghiệp",
                                desc: "Giải pháp tiết kiệm chi phí nhưng vẫn chuyên nghiệp, giúp bạn bắt đầu kinh doanh online hiệu quả.",
                                features: [
                                    "Triển khai nhanh chóng",
                                    "Chi phí hợp lý, dễ quản lý",
                                    "Dễ dàng mở rộng theo thời gian",
                                    "Tích hợp mạng xã hội và marketing",
                                ],
                            },
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
                </div>
            </section>
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính năng nổi bật của giải pháp website bán hàng
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Chúng tôi tích hợp các tính năng hiện đại giúp website bán hàng của bạn không chỉ đẹp mắt mà còn hiệu quả trong việc thu hút và chuyển đổi khách hàng
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Giao diện đẹp",
                                desc: "Tùy chỉnh theo nhận diện thương hiệu, tối ưu trải nghiệm người dùng.",
                                icon: LayoutDashboard
                            },
                            {
                                title: "Thanh toán online",
                                desc: "Hỗ trợ nhiều cổng thanh toán: Visa, MasterCard, Momo, ZaloPay, VNPay.",
                                icon: CreditCard
                            },
                            {
                                title: "Quản lý kho hàng",
                                desc: "Quản lý đơn hàng, khách hàng, tồn kho thông minh, cảnh báo hết hàng.",
                                icon: Boxes
                            },
                            {
                                title: "Chatbot AI",
                                desc: "Chăm sóc khách hàng tự động 24/7, tư vấn sản phẩm thông minh.",
                                icon: Bot
                            },
                            {
                                title: "Chuẩn SEO",
                                desc: "Tốc độ tải trang nhanh, cấu trúc dữ liệu chuẩn, tối ưu quảng cáo.",
                                icon: SearchCheck
                            },
                            {
                                title: "Bảo mật cao cấp",
                                desc: "Đảm bảo an toàn giao dịch và dữ liệu khách hàng với chứng chỉ SSL.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Tương thích di động",
                                desc: "Hiển thị hoàn hảo trên mọi thiết bị, tối ưu trải nghiệm mua sắm.",
                                icon: Smartphone
                            },
                            {
                                title: "Đa ngôn ngữ",
                                desc: "Hỗ trợ nhiều ngôn ngữ, mở rộng thị trường quốc tế dễ dàng.",
                                icon: Languages
                            },
                            {
                                title: "Phân tích dữ liệu",
                                desc: "Báo cáo chi tiết về hành vi khách hàng, tối ưu chiến lược bán hàng.",
                                icon: BarChart3
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
                            Giải đáp những thắc mắc phổ biến về giải pháp website bán hàng
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                question: "Chi phí phát triển một website bán hàng là bao nhiêu?",
                                answer:
                                    "Chi phí phát triển website bán hàng phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết."
                            },
                            {
                                question: "Thời gian phát triển một website bán hàng mất bao lâu?",
                                answer:
                                    "Thời gian phát triển website bán hàng thông thường từ 2-8 tuần tùy thuộc vào quy mô và yêu cầu cụ thể. Website cơ bản có thể hoàn thành trong 2-3 tuần, trong khi các dự án phức tạp hơn với nhiều tính năng tùy chỉnh có thể mất 6-8 tuần."
                            },
                            {
                                question: "Website bán hàng có tích hợp được với các nền tảng khác không?",
                                answer:
                                    "Có, chúng tôi hỗ trợ tích hợp website bán hàng với nhiều nền tảng khác như: hệ thống quản lý kho (WMS), phần mềm kế toán, các cổng thanh toán, đơn vị vận chuyển, và các nền tảng mạng xã hội (Facebook, Instagram, TikTok Shop). Điều này giúp doanh nghiệp vận hành hiệu quả và đồng bộ dữ liệu giữa các kênh."
                            },
                            {
                                question:
                                    "Làm thế nào để website bán hàng của tôi xuất hiện trên trang đầu Google?",
                                answer:
                                    "Để website bán hàng xuất hiện trên trang đầu Google cần một chiến lược SEO toàn diện bao gồm: tối ưu hóa cấu trúc website, nghiên cứu từ khóa, tạo nội dung chất lượng về sản phẩm, xây dựng backlink uy tín, và cải thiện trải nghiệm người dùng. Chúng tôi cung cấp dịch vụ SEO chuyên nghiệp cho website thương mại điện tử."
                            },
                            {
                                question:
                                    "Tôi có thể tự quản lý sản phẩm và đơn hàng sau khi hoàn thành không?",
                                answer:
                                    "Có, tất cả các website bán hàng do chúng tôi phát triển đều được tích hợp hệ thống quản trị thân thiện với người dùng. Chúng tôi sẽ cung cấp hướng dẫn chi tiết và đào tạo để bạn có thể dễ dàng quản lý sản phẩm, đơn hàng, khách hàng và các thông tin khác trên website."
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
                                Sẵn sàng để nâng tầm doanh nghiệp của bạn?
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Hãy đầu tư ngay vào một website chuyên nghiệp – nền tảng giúp
                                doanh nghiệp của bạn bứt phá trong thời đại số.
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

export default ThuongMaiDienTuPage