"use client";

import {
    Zap,
    Shield,
    Code,
    Rocket,
    ArrowRight,
    Database,
    Quote,
    Star,
    Check,
    CircleCheck,
    CircleCheckBig,
} from "lucide-react";
import { OurProjects } from "@/components/home";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"; // đường dẫn component Accordion của bạn

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { designWebDataPage } from "@/data/services/web-design";

const page = () => {
    return (
        <div className="min-h-screen overflow-y-hidden">
            {/* Tiêu đề Trang  */}
            <section className="relative py-32 md:py-40">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Thiết Kế Website Chuyên Nghiệp
                    </motion.h1>

                    <motion.p
                        className="text-lg font-medium mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Tạo Lợi Thế Cạnh Tranh &amp; Tăng Trưởng Doanh Thu
                    </motion.p>

                    <motion.p
                        className="mx-auto mb-10 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Chúng tôi cung cấp dịch vụ thiết kế website chuyên nghiệp, chuẩn
                        SEO, tốc độ cao và tối ưu chuyển đổi, giúp doanh nghiệp của bạn nổi
                        bật trong thị trường số và thu hút khách hàng tiềm năng.
                    </motion.p>

                    <motion.div
                        className="mt-8 inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link href="/contact">
                            <InteractiveHoverButton>Liên hệ ngay</InteractiveHoverButton>
                        </Link>
                    </motion.div>
                </div>
            </section>
            {/* Chỉ số */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {designWebDataPage.stats.map((stat, i) => (
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
            {/* Rủi ro gặp phai */}
            <section className="py-20" id="thach-thuc">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                            Doanh Nghiệp Của Bạn Đang Gặp Phải Những Thách Thức Này?
                        </h2>
                        <p className="text-lg mx-auto max-w-3xl">
                            Trong thời đại số, một website kém chất lượng không chỉ làm mất
                            khách hàng mà còn ảnh hưởng nghiêm trọng đến doanh thu và uy tín
                            thương hiệu
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {designWebDataPage.risks.map((c, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                            >
                                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-4xl">{c.emoji}</span>
                                            <div className="flex-1">
                                                <div className="font-semibold tracking-tight text-lg mb-2">
                                                    {c.title}
                                                </div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-bold text-red-500">
                                                        {c.percent}
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">
                                                        {c.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                                            <span>⚠️</span>
                                            <span>{c.warning}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm max-w-5xl mx-auto border-none">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                                    <span>💡</span>
                                    <span>Giải Pháp Toàn Diện Từ Gia Bảo Digital</span>
                                </h3>
                                <p className="text-lg mb-4">
                                    Chúng tôi giúp bạn xây dựng website chuyên nghiệp, chuẩn SEO,
                                    tốc độ cao và tối ưu chuyển đổi - không chỉ đẹp mắt mà còn
                                    mang lại kết quả kinh doanh thực tế!
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                    <div className="flex items-center gap-2">
                                        <CircleCheckBig className="stroke-emerald-500 size-5" />
                                        <span className="font-medium">Tăng trưởng doanh thu</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CircleCheckBig className="stroke-emerald-500 size-5" />
                                        <span className="font-medium">
                                            Nâng cao uy tín thương hiệu
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CircleCheckBig className="stroke-emerald-500 size-5" />
                                        <span className="font-medium">
                                            Tối ưu trải nghiệm khách hàng
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Gói dịch vụ */}
            <section className="py-12">
                <div className="container mx-auto px-4 md:px-16 relative">
                    {/* 🎬 Heading animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-8 text-2xl text-center font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]"
                    >
                        <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Gói Dịch Vụ Của Chúng Tôi
                        </p>
                    </motion.h2>

                    {/* 🎬 Cards animation */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {designWebDataPage.packages.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm relative border flex flex-col border-zinc-800 hover:border-slate-100 transition-colors">
                                    {/* Title */}
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <h3 className="text-lg font-medium">{item.title}</h3>
                                    </div>

                                    {item.isPopular && (
                                        <div className="inline-flex items-center border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 absolute top-10 right-10 rotate-45 rounded-none px-10 uppercase translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-cyan-400 to-blue-500">
                                            Phổ Biến
                                        </div>
                                    )}

                                    {/* Description + Features */}
                                    <div className="p-4 pt-0 flex-1">
                                        <p className="text-sm">{item.description}</p>

                                        <ul className="mt-6 space-y-3">
                                            {item.features.map((item, i) => (
                                                <li key={i} className="flex text-sm space-x-2">
                                                    <CircleCheck className="shrink-0" size={24} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action */}
                                    <div className="flex items-center p-4 pt-0">
                                        <Button className="w-full">Đặt lịch demo</Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Tính năng được tích hợp vào trang web */}
            <section className="py-16" id="tinh-nang">
                <div className="container mx-auto rounded-3xl px-4 my-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tính năng nổi bật của website chuyên nghiệp
                        </h2>
                        <p className="text-lg mx-auto">
                            Chúng tôi tích hợp các tính năng hiện đại giúp website của bạn
                            không chỉ đẹp mắt mà còn hiệu quả trong việc thu hút và chuyển đổi
                            khách hàng
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {designWebDataPage.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                                {feature.icon}
                                            </div>
                                            <div className="tracking-tight text-lg font-semibold">
                                                {feature.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                                src="https://res.cloudinary.com/dtmxgrnfn/image/upload/v1743770315/tanphatdigital/djttnf2i9danbqgwn1dv.webp"
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
            {/* Lời cam kết */}
            <section className="py-16" id="cam-ket">
                <div className="container mx-auto px-4">
                    <div className="mx-auto">
                        <motion.h2
                            className="text-2xl font-bold md:text-4xl mb-10 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            🎯
                            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                                Cam Kết Của Chúng Tôi
                            </span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "100% website chuẩn SEO, UI/UX, tốc độ cao.",
                                "Thiết kế độc quyền, không dùng template.",
                                "Bảo trì & hỗ trợ lâu dài.",
                                "Chi phí hợp lý, tối ưu ngân sách doanh nghiệp.",
                            ].map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    className="p-6 rounded-lg border border-white/10 flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                                        <Check className="size-5" />
                                    </div>
                                    <p>{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Tại sao lại lựa chọn gia bảo */}
            <section className="py-16" id="tai-sao-chon-chung-toi">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold md:text-4xl mb-4">
                            🏆
                            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                                Tại sao khách hàng tin tưởng Gia Bảo Digital?
                            </span>
                        </h2>
                        <p className="text-lg mx-auto">
                            Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây
                            dựng thương hiệu số mạnh mẽ
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designWebDataPage.advantages.map(({ icon: Icon, title, desc }, idx) => (
                            <motion.div
                                key={idx}
                                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="flex flex-col space-y-1.5 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                            {Icon}
                                        </div>
                                        <div className="tracking-tight text-lg font-semibold">
                                            {title}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 pt-0">
                                    <p>{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Quy trình làm việc để desgin website */}
            <section className="py-16" id="quy-trinh">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Quy Trình Thiết Kế Website Chuyên Nghiệp
                        </h2>
                        <p className="text-lg mx-auto">
                            6 bước đơn giản để sở hữu website hoàn hảo cho doanh nghiệp của
                            bạn
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-16">
                        {designWebDataPage.process.map((step, idx) => {
                            const isReverse = idx % 2 === 1;
                            const StepIcon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={`flex flex-col items-center gap-8 md:flex-row ${isReverse ? "md:flex-row-reverse" : ""
                                        }`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                >
                                    {/* Circle Number */}
                                    <div className="relative shrink-0 w-full md:w-1/3">
                                        <div
                                            className={`relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg ${step.bgColor}`}
                                        >
                                            <div className="text-center">
                                                <div className="text-5xl font-bold">{step.number}</div>
                                                <div className="text-sm opacity-80">
                                                    {step.final ? "Final Step" : "Next Step →"}
                                                </div>
                                            </div>
                                        </div>
                                        {!step.final && (
                                            <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                            <div className="p-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div
                                                        className={`p-3 rounded-lg bg-secondary text-current`}
                                                    >
                                                        <StepIcon className="size-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-foreground">
                                                            {step.title}
                                                        </h3>
                                                        <p className="mt-2">{step.desc}</p>
                                                    </div>
                                                </div>
                                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                                                    Tìm hiểu thêm
                                                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Công nghê Toàn diện */}
            <section id="technologies" className="py-16 md:py-24 bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-2xl font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]">
                            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                                Công Nghệ Toàn Diện
                            </span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                            <strong className="text-white">Gia Bảo Digital</strong> thành thạo
                            mọi ngôn ngữ lập trình và công nghệ hiện đại - từ Website, Mobile
                            App đến Cloud Deploy. Chúng tôi là đối tác công nghệ đáng tin cậy
                            cho mọi dự án của bạn!
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {designWebDataPage.technologies.map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="mb-4">{card.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                    {card.description && (
                                        <p className="text-gray-400 mb-3">{card.description}</p>
                                    )}
                                    {card.items && (
                                        <div className="text-sm space-y-1">
                                            {card.items.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    <Code className="h-4 w-4 text-green-400" />
                                                    <span className="text-gray-300">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">
                            Cloud & DevOps Deployment
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Cloud Platforms",
                                    description: "AWS, GCP, Azure, Vercel, Netlify",
                                    icon: <Rocket className="h-6 w-6 text-white mx-auto" />,
                                },
                                {
                                    title: "DevOps & CI/CD",
                                    description: "Docker, Kubernetes, Jenkins, GitHub Actions",
                                    icon: <Shield className="h-6 w-6 text-white mx-auto" />,
                                },
                                {
                                    title: "Infrastructure",
                                    description: "Terraform, Ansible, Monitoring",
                                    icon: <Database className="h-6 w-6 text-white mx-auto" />,
                                },
                                {
                                    title: "Performance",
                                    description: "CDN, Caching, Load Balancing",
                                    icon: <Zap className="h-6 w-6 text-white mx-auto" />,
                                },
                            ].map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    className="rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 border-gray-800 bg-black text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="p-6 flex flex-col items-center text-center">
                                        <div className="mb-4">{card.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                        {card.description && (
                                            <p className="text-gray-400 mb-3">{card.description}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Đối tác công nghệ Uy tín */}
            <section>
                <motion.div
                    className="text-center bg-black border border-gray-800 rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            Gia Bảo Digital - Đối Tác Công Nghệ Toàn Diện
                        </h3>
                        <p className="text-lg text-gray-300 mb-6">
                            <strong className="text-white">
                                Không có giới hạn công nghệ!
                            </strong>
                            Chúng tôi thành thạo mọi ngôn ngữ lập trình, framework và
                            platform. Từ ý tưởng đến triển khai hoàn chỉnh - chúng tôi làm
                            được tất cả!
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {designWebDataPage.partners.map((list, idx) => (
                                <div key={idx} className="text-left">
                                    <h4 className={`font-bold mb-3 ${list.color}`}>
                                        {list.title}
                                    </h4>
                                    <ul className="text-sm space-y-1 text-gray-300">
                                        {list.items.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
                            <div className="flex items-center gap-2 bg-green-900 border border-green-800 px-4 py-2 rounded-full">
                                <Check className="stroke-green-400 size-4" />
                                <span className="text-green-300">Mọi ngôn ngữ lập trình</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-900 border border-blue-800 px-4 py-2 rounded-full">
                                <Check className="stroke-blue-400 size-4" />
                                <span className="text-blue-300">Full-stack development</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-900 border border-purple-800 px-4 py-2 rounded-full">
                                <Check className="stroke-purple-400 size-4" />
                                <span className="text-purple-300">Cloud deployment</span>
                            </div>
                            <div className="flex items-center gap-2 bg-orange-900 border border-orange-800 px-4 py-2 rounded-full">
                                <Check className="stroke-orange-400 size-4" />
                                <span className="text-orange-300">24/7 Support</span>
                            </div>
                        </div>
                        <p className="text-base font-medium text-gray-300">
                            💡
                            <em className="text-yellow-400">
                                "Bạn có ý tưởng - chúng tôi có công nghệ để hiện thực hóa!"
                            </em>
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* Những lời đánh giá của khách hàng */}
            <section className="py-16" id="danh-gia">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Khách Hàng Nói Gì Về Chúng Tôi
                        </h2>
                        <p className="text-lg mx-auto">
                            Hơn 100+ doanh nghiệp đã tin tưởng và hợp tác cùng Gia Bảo Digital
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {designWebDataPage.feedBacks.map((t) => (
                            <div
                                key={t.id}
                                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300 relative"
                            >
                                <div className="flex flex-col space-y-1.5 p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                            {t.initials}
                                        </div>
                                        <div className="flex-1">
                                            <div className="tracking-tight text-base font-semibold">
                                                {t.name}
                                            </div>
                                            <p className="text-xs">{t.title}</p>
                                            <div className="flex gap-1 mt-2">
                                                {Array.from({ length: t.stars }).map((_, i) => (
                                                    <Star key={i} className="size-4 text-yellow-500" />
                                                ))}
                                            </div>
                                        </div>
                                        <Quote className="size-8 text-yellow-500/20" />
                                    </div>
                                    <div className="pt-0">
                                        <p className="text-sm italic">{t.feedback}</p>
                                        {t.verified && (
                                            <div className="flex items-center gap-2 mt-4 text-xs">
                                                <Check className="size-4 text-green-500" />
                                                <span>Đã xác thực</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <OurProjects />
            <section className="py-16" id="FAQ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Câu hỏi thường gặp
                        </motion.h2>
                        <motion.p
                            className="text-lg mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Giải đáp những thắc mắc phổ biến về dịch vụ thiết kế website
                        </motion.p>
                    </div>

                    <Accordion type="single" collapsible>
                        {designWebDataPage.fqas.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx + 1}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <section className="pt-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto text-center">
                        <div className="p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-white">
                            <h2 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent not-italic">
                                Chuyển đổi doanh nghiệp với website chuyên nghiệp ngay hôm nay!
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Liên hệ ngay hôm nay để nhận tư vấn miễn phí và khám phá các
                                giải pháp website tối ưu cho doanh nghiệp của bạn. Chúng tôi sẽ
                                cung cấp báo giá nhanh chóng, phù hợp với nhu cầu và ngân sách
                                của bạn.
                            </p>
                            <div>
                                <Link href="/contact">
                                    <div className="group inline-block mt-6">
                                        <InteractiveHoverButton>
                                            <span className="relative z-10">Liên Hệ Ngay</span>
                                        </InteractiveHoverButton>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
