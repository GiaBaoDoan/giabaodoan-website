'use client'

import { Calendar, ExternalLink, Users } from "lucide-react";
import { motion } from 'framer-motion'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";


const projects = [
    {
        value: "spa-wellness",
        title: "Website Amor Spa",
        description: "Website thương mại điện tử cho dịch vụ spa cao cấp",
        url: "https://amorspa.vn",
        duration: "6 tuần",
        client: "Doanh nghiệp nhỏ",
        image: "/amor-spa.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "React", "TypeScript", "+3"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
    {
        value: "thuong-mai-dien-tu",
        title: "Hệ thống đặt lịch Spa Queen",
        description: "Nền tảng đặt lịch và quản lý liệu trình spa từ A–Z",
        url: "https://spaqueen.vn",
        duration: "4 tuần",
        client: "Spa tư nhân",
        image: "/echomedi.png",
        category: "Dịch vụ Spa & Wellness",
        tech: ["Next.js", "Node.js", "MongoDB", "+2"]
    },
]

const categories = [
    { label: "Tất Cả", count: 25, value: "tat-ca" },
    { label: "Dịch vụ Spa & Wellness", count: 2, value: "spa-wellness" },
    { label: "Thương mại điện tử", count: 5, value: "thuong-mai-dien-tu" },
    { label: "Dịch vụ Giáo dục", count: 1, value: "dich-vu-giao-duc" },
    { label: "Landing Page", count: 1, value: "landing-page" },
    { label: "Website Doanh Nghiệp", count: 8, value: "website-doanh-nghiep" },
    { label: "Phần mềm Quản lý", count: 3, value: "phan-mem-quan-ly" },
    { label: "Ứng dụng Web", count: 1, value: "ung-dung-web" },
    { label: "Giáo dục Trực tuyến", count: 2, value: "giao-duc-truc-tuyen" },
    { label: "Dịch vụ Y tế", count: 1, value: "dich-vu-y-te" },
    { label: "Giáo dục", count: 1, value: "giao-duc" },
];



const page = () => {
    const [active, setActive] = useState("tat-ca")

    const activeProjects = active === 'tat-ca' ? projects : projects.filter(c => c.value === active);

    return (
        <section className="py-16 md:py-24 text-white">

            {/* PROJECT SECTION */}
            <div className="container px-4 md:px-16">
                {/* HEADER */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                        Dự Án Tiêu Biểu
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Khám phá các dự án thành công của Gia Bảo Digital - Từ website thương mại điện tử đến ứng dụng di động và hệ thống quản lý
                    </p>
                </motion.div>

                {/* CATEGORY BUTTONS */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((cat) => (
                        <Button
                            variant='outline'
                            key={cat.value}
                            onClick={() => setActive(cat.value)}
                            className={`rounded-full ${active === cat.value ? "bg-yellow-500! text-black border-yellow-500" : "hover:bg-white/10"}`}
                        >
                            {cat.label} ({cat.count})
                        </Button>
                    ))}
                </div>

                {/* PROJECT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {activeProjects.map((prj, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border text-card-foreground shadow-sm overflow-hidden cursor-pointer h-full flex flex-col bg-white/5 border-white/10 hover:border-yellow-500/50"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* IMAGE + TAG */}
                            <motion.div
                                className="relative h-48 overflow-hidden bg-gray-800"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src={prj.image}
                                    fill
                                    className="object-cover transition-transform duration-300"
                                    alt={prj.title}
                                />
                                {/* CATEGORY TAG */}
                                <div className="absolute top-3 right-3">
                                    <span className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium bg-yellow-500 text-black">
                                        {prj.category}
                                    </span>
                                </div>
                                {/* LIVE BUTTON */}
                                <motion.div
                                    className="absolute bottom-3 right-3"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a href={prj.url} target="_blank" rel="noopener noreferrer">
                                        <button className="inline-flex items-center gap-1 h-9 px-3 rounded-md text-sm font-medium bg-black/80 hover:bg-black text-white transition">
                                            <ExternalLink className="w-3 h-3" /> Live
                                        </button>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* CONTENT */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold mb-2 line-clamp-2 text-white">{prj.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{prj.description}</p>
                                {/* TECH TAGS */}
                                <div className="mb-4 flex flex-wrap gap-2 text-xs">
                                    {prj.tech.map((t, idx) => (
                                        <motion.span
                                            key={idx}
                                            className="inline-flex items-center rounded-full px-2 py-1 font-me border border-yellow-500/30 bg-yellow-500/10 text-yellow-500"
                                            initial={{ opacity: 0, y: 5 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>
                                {/* FOOTER */}
                                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between text-sm text-gray-400">
                                    <motion.div
                                        className="flex items-center gap-1"
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Calendar className="h-3 w-3" /> <span>{prj.duration}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center gap-1"
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Users className="h-3 w-3" /> <span>{prj.client}</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="container px-4 md:px-16 mt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
                    {[
                        { value: "25", label: "Dự Án Hoàn Thành" },
                        { value: "10", label: "Danh Mục Dịch Vụ" },
                        { value: "31", label: "Công Nghệ Sử Dụng" },
                        { value: "100%", label: "Khách Hàng Hài Lòng" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <p className="text-3xl md:text-4xl font-bold text-yellow-500">{stat.value}</p>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Bạn Muốn Có Một Dự Án Tương Tự?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href='/contact' className="flex justify-center">
                            <InteractiveHoverButton>
                                Liên hệ ngay
                            </InteractiveHoverButton>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>

        </section>
    )
}

export default page