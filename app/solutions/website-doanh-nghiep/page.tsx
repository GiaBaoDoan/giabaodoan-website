"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { designWebDataPage } from "@/data/services/web-design";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
    Brain,
    Brush,
    Building2,
    CircleCheckBig,
    Layers,
    Palette,
    Search,
    Shield,
    ShoppingCart,
    TrendingUp,
    Tv2,
    UserCheck,
    Users,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WebSiteDoanhNghiepPage = () => {
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
                            Giải Pháp Website Doanh Nghiệp Chuyên Nghiệp
                        </h1>
                        <p className="text-lg mb-4 mx-auto">
                            Nền Tảng Vững Chắc Cho Sự Phát Triển Bền Vững &amp; Tối Ưu SEO
                        </p>
                        <p className="text-lg mb-10 mx-auto">
                            Trong kỷ nguyên số, một website không chỉ đơn thuần là bộ mặt
                            doanh nghiệp mà còn là công cụ chiến lược giúp tối ưu hoạt động,
                            nâng cao uy tín và thúc đẩy tăng trưởng doanh thu. Chúng tôi cung
                            cấp giải pháp website toàn diện, tối ưu SEO, giúp doanh nghiệp của
                            bạn dễ dàng tiếp cận khách hàng tiềm năng.
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
                            { label: "10 dự án thành công", value: 10, suffix: "+" },
                            { label: "Khách hàng hài lòng", value: 98, suffix: "%" },
                            { label: "Tăng lượng truy cập", value: 85, suffix: "%" },
                            { label: "Tăng tỷ lệ chuyển đổi", value: 65, suffix: "%" },
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
                            Tại sao doanh nghiệp cần một website chuyên nghiệp?
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Một website được đầu tư bài bản giúp doanh nghiệp:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Thiết Kế Độc Quyền, Không Dùng Template Có Sẵn",
                                desc: "Mỗi website được thiết kế riêng, phù hợp với ngành nghề & thương hiệu của bạn.",
                                icon: Brush,
                            },
                            {
                                title: "Website Chuẩn SEO – Dễ Dàng Lên Top Google",
                                desc: "Tối ưu tốc độ, nội dung, UI/UX, meta tags, sitemap, backlink… giúp website đạt thứ hạng cao trên Google.",
                                icon: Search,
                            },
                            {
                                title: "Tối Ưu Tốc Độ – Tải Trang Dưới 3 Giây",
                                desc: "Sử dụng công nghệ mới nhất Next.js, Tailwind CSS, CDN, Caching… để tăng tốc load web, giúp giữ chân khách hàng.",
                                icon: Zap,
                            },
                            {
                                title: "Bảo Mật Cao – Đảm Bảo An Toàn Tuyệt Đối",
                                desc: "Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp website an toàn trước mọi rủi ro.",
                                icon: Shield,
                            },
                            {
                                title: "Hỗ Trợ Lâu Dài – Update & Nâng Cấp Dễ Dàng",
                                desc: "Bảo trì website, cập nhật tính năng mới, tối ưu liên tục giúp website luôn hoạt động mượt mà & hiệu quả.",
                                icon: Layers,
                            },
                            {
                                title: "Tư Vấn Cá Nhân Hóa – Hiểu Rõ Nhu Cầu Khách Hàng",
                                desc: "Đội ngũ chuyên gia của chúng tôi lắng nghe và đưa ra giải pháp phù hợp nhất với mục tiêu kinh doanh của bạn.",
                                icon: Users,
                            },
                            {
                                title: "Tương Thích Đa Nền Tảng – Trải Nghiệm Mượt Mà",
                                desc: "Website được tối ưu hiển thị hoàn hảo trên mọi thiết bị: PC, tablet, điện thoại, đảm bảo trải nghiệm người dùng tốt nhất.",
                                icon: Tv2,
                            },
                            {
                                title: "Cam Kết Hiệu Quả – Tăng Chuyển Đổi Doanh Thu",
                                desc: "Thiết kế tập trung vào hành vi người dùng, kết hợp CTA mạnh mẽ giúp tăng tỷ lệ chuyển đổi và doanh thu.",
                                icon: TrendingUp,
                            },
                            {
                                title: "Tích Hợp Công Nghệ AI – Thông Minh & Hiện Đại",
                                desc: "Ứng dụng AI để phân tích dữ liệu người dùng, cá nhân hóa trải nghiệm và tối ưu hiệu suất website.",
                                icon: Brain,
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
                                src="https://tanphatdigital.com/_next/static/media/design.b6b473ad.webp"
                                alt="SEO Optimization for Websites"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        <div className="space-y-6">
                            {designWebDataPage.benfits.map((item, idx) => (
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
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Giải pháp phù hợp cho mọi loại hình doanh nghiệp
                        </h2>
                        <p className="text-lg">
                            Chúng tôi cung cấp giải pháp website tùy chỉnh cho từng loại hình
                            doanh nghiệp, đáp ứng mọi nhu cầu kinh doanh
                        </p>
                    </div>

                    <Tabs defaultValue="sme" className="w-full max-w-4xl mx-auto">
                        <TabsList className="flex flex-wrap justify-between w-full bg-transparent ">
                            <TabsTrigger value="sme">SME</TabsTrigger>
                            <TabsTrigger value="ecommerce">Thương mại điện tử</TabsTrigger>
                            <TabsTrigger value="service">Doanh nghiệp dịch vụ</TabsTrigger>
                            <TabsTrigger value="corporate">Tập đoàn lớn</TabsTrigger>
                        </TabsList>

                        <TabsContent value="sme" className="border rounded-lg mt-4">
                            <div className="flex items-center gap-4 p-4">
                                <Building2 className="size-8" />
                                <h3 className="text-xl font-semibold">
                                    Doanh nghiệp vừa và nhỏ (SME)
                                </h3>
                            </div>

                            <div className="p-4 pt-0 space-y-4">
                                <p>
                                    Giải pháp tối ưu chi phí, dễ dàng quản lý, nâng cao độ nhận
                                    diện thương hiệu.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Website giới thiệu doanh nghiệp chuyên nghiệp</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Tối ưu SEO cơ bản</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Giao diện responsive đa thiết bị</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Hệ thống quản trị nội dung dễ sử dụng</span>
                                    </div>
                                </div>
                                <Button className="w-full h-11">Tìm hiểu thêm</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="ecommerce" className="border rounded-lg mt-4">
                            <div className="flex items-center gap-4 p-4">
                                <ShoppingCart className="size-8" />
                                <h3 className="text-xl font-semibold">
                                    Thương mại điện tử
                                </h3>
                            </div>

                            <div className="p-4 pt-0 space-y-4">
                                <p>
                                    Hệ thống website bán hàng chuyên nghiệp, tích hợp thanh toán, quản lý đơn hàng, hỗ trợ logistics.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Hệ thống quản lý sản phẩm toàn diện</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Tích hợp đa cổng thanh toán</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Tích hợp đa cổng thanh toán</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Tích hợp đa cổng thanh toán</span>
                                    </div>
                                </div>
                                <Button className="w-full h-11">Tìm hiểu thêm</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="corporate" className="border rounded-lg mt-4">
                            <div className="flex items-center gap-4 p-4">
                                <Palette className="size-8" />
                                <h3 className="text-xl font-semibold">
                                    Xây dựng thương hiệu
                                </h3>
                            </div>

                            <div className="p-4 pt-0 space-y-4">
                                <p>
                                    Giúp doanh nghiệp nổi bật trên thị trường, tạo dấu ấn riêng và ghi nhớ thương hiệu lâu dài.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Thiết kế logo & bộ nhận diện thương hiệu</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Chiến lược thương hiệu dài hạn</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Packaging & vật phẩm truyền thông</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Định vị thương hiệu trên thị trường</span>
                                    </div>
                                </div>
                                <Button className="w-full h-11">Tìm hiểu thêm</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="service" className="border rounded-lg mt-4">
                            <div className="flex items-center gap-4 p-4">
                                <UserCheck className="size-8" />
                                <h3 className="text-xl font-semibold">
                                    Tư vấn phát triển doanh nghiệp
                                </h3>
                            </div>

                            <div className="p-4 pt-0 space-y-4">
                                <p>
                                    Hỗ trợ doanh nghiệp tối ưu quy trình kinh doanh, quản lý nhân sự và mở rộng thị trường.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Phân tích thị trường & đối thủ cạnh tranh</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Tối ưu quy trình vận hành</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Đào tạo & phát triển đội ngũ nhân sự</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CircleCheckBig className="size-5 shrink-0" />
                                        <span>Chiến lược mở rộng kinh doanh</span>
                                    </div>
                                </div>
                                <Button className="w-full h-11">Tìm hiểu thêm</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            {/* Tại sao cần website chuyên nghiệp */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-center font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính năng nổi bật giúp doanh nghiệp phát triển bền vững
                        </h2>
                        <p className="text-lg text-center max-w-3xl mx-auto">
                            Chúng tôi tích hợp các tính năng hiện đại giúp website của bạn
                            không chỉ đẹp mắt mà còn hiệu quả trong việc thu hút và chuyển đổi
                            khách hàng
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Thiết kế giao diện chuyên nghiệp",
                                desc: "Tối ưu nhận diện thương hiệu, tạo ấn tượng mạnh mẽ với khách hàng, tăng thời gian lưu trú trên trang.",
                                icon: Brush,
                            },
                            {
                                title: "Website Chuẩn SEO – Dễ Dàng Lên Top Google",
                                desc: "Tối ưu tốc độ, nội dung, UI/UX, meta tags, sitemap, backlink… giúp website đạt thứ hạng cao trên Google.",
                                icon: Search,
                            },
                            {
                                title: "Tích hợp đa ngôn ngữ",
                                desc: "Giúp doanh nghiệp tiếp cận thị trường quốc tế một cách dễ dàng, mở rộng cơ hội kinh doanh toàn cầu.",
                                icon: Zap,
                            },
                            {
                                title: "Bảo Mật Cao – Đảm Bảo An Toàn Tuyệt Đối",
                                desc: "Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp website an toàn trước mọi rủi ro.",
                                icon: Shield,
                            },
                            {
                                title: "Hỗ Trợ Lâu Dài – Update & Nâng Cấp Dễ Dàng",
                                desc: "Bảo trì website, cập nhật tính năng mới, tối ưu liên tục giúp website luôn hoạt động mượt mà & hiệu quả.",
                                icon: Layers,
                            },
                            {
                                title: "Tư Vấn Cá Nhân Hóa – Hiểu Rõ Nhu Cầu Khách Hàng",
                                desc: "Đội ngũ chuyên gia của chúng tôi lắng nghe và đưa ra giải pháp phù hợp nhất với mục tiêu kinh doanh của bạn.",
                                icon: Users,
                            },
                            {
                                title: "Tương Thích Đa Nền Tảng – Trải Nghiệm Mượt Mà",
                                desc: "Website được tối ưu hiển thị hoàn hảo trên mọi thiết bị: PC, tablet, điện thoại, đảm bảo trải nghiệm người dùng tốt nhất.",
                                icon: Tv2,
                            },
                            {
                                title: "Cam Kết Hiệu Quả – Tăng Chuyển Đổi Doanh Thu",
                                desc: "Thiết kế tập trung vào hành vi người dùng, kết hợp CTA mạnh mẽ giúp tăng tỷ lệ chuyển đổi và doanh thu.",
                                icon: TrendingUp,
                            },
                            {
                                title: "Tích Hợp Công Nghệ AI – Thông Minh & Hiện Đại",
                                desc: "Ứng dụng AI để phân tích dữ liệu người dùng, cá nhân hóa trải nghiệm và tối ưu hiệu suất website.",
                                icon: Brain,
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
                            Giải đáp những thắc mắc phổ biến về giải pháp website doanh nghiệp
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                question:
                                    "Chi phí phát triển một website doanh nghiệp là bao nhiêu?",
                                answer:
                                    "Chi phí phát triển website doanh nghiệp phụ thuộc vào nhiều yếu tố như quy mô, tính năng, độ phức tạp của dự án. Chúng tôi cung cấp nhiều gói dịch vụ phù hợp với ngân sách của từng doanh nghiệp, từ gói cơ bản đến gói cao cấp với đầy đủ tính năng. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết.",
                            },
                            {
                                question:
                                    "Thời gian phát triển một website doanh nghiệp mất bao lâu?",
                                answer:
                                    "Thời gian phát triển website thông thường từ 2-8 tuần tùy thuộc vào quy mô và yêu cầu cụ thể. Website cơ bản có thể hoàn thành trong 2-3 tuần, trong khi các dự án phức tạp hơn với nhiều tính năng tùy chỉnh có thể mất 6-8 tuần hoặc lâu hơn.",
                            },
                            {
                                question:
                                    "Làm thế nào để website của tôi xuất hiện trên trang đầu Google?",
                                answer:
                                    "Để website xuất hiện trên trang đầu Google cần một chiến lược SEO toàn diện bao gồm: tối ưu hóa cấu trúc website, nghiên cứu từ khóa, tạo nội dung chất lượng, xây dựng backlink uy tín, và cải thiện trải nghiệm người dùng. Chúng tôi cung cấp dịch vụ SEO chuyên nghiệp giúp website của bạn đạt thứ hạng cao trên các công cụ tìm kiếm.",
                            },
                            {
                                question:
                                    "Tôi có thể tự quản lý nội dung website sau khi hoàn thành không?",
                                answer:
                                    "Có, tất cả các website do chúng tôi phát triển đều được tích hợp hệ thống quản trị nội dung (CMS) thân thiện với người dùng. Chúng tôi sẽ cung cấp hướng dẫn chi tiết và đào tạo để bạn có thể dễ dàng cập nhật nội dung, hình ảnh, sản phẩm và các thông tin khác trên website.",
                            },
                            {
                                question: "Dịch vụ bảo trì website bao gồm những gì?",
                                answer:
                                    "Dịch vụ bảo trì website của chúng tôi bao gồm: cập nhật phần mềm và bảo mật thường xuyên, sao lưu dữ liệu định kỳ, khắc phục sự cố kỹ thuật, hỗ trợ kỹ thuật 24/7, tối ưu hiệu suất website, và báo cáo phân tích định kỳ về hiệu quả hoạt động của website.",
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
    );
};

export default WebSiteDoanhNghiepPage;
