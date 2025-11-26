"use client";
import FeedBack from "@/components/share/FeedBack";
import { motion } from "framer-motion";
import { Brain, Brush, Check, Layers, Quote, Search, Shield, Star, TrendingUp, Tv2, Users, Zap } from "lucide-react";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const ReviewsPage = () => {
    return (
        <div className="py-12">
            <FeedBack />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto mb-16">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                        >
                            {[
                                { value: "127+", label: "Đánh Giá Tích Cực" },
                                { value: "4.9/5", label: "Rating Trung Bình" },
                                { value: "100+", label: "Dự Án Hoàn Thành" },
                                { value: "98%", label: "Khách Hàng Hài Lòng" },
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="p-6 rounded-xl border-yellow-100 border"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-4xl font-bold bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm mt-2">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Đánh giá của người tiêu dùng */}
            <section className="py-16" id="danh-gia">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Khách Hàng Nói Gì Về Chúng Tôi
                        </h2>
                        <p className="text-lg mx-auto">
                            Hơn 100+ doanh nghiệp đã tin tưởng và hợp tác cùng Gia Bảo
                            Digital
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        {[
                            {
                                id: 1,
                                name: "Nguyễn Thanh Tâm",
                                initials: "TT",
                                title: "Chủ Spa Tâm Beauty",
                                stars: 5,
                                feedback:
                                    "Dịch vụ của Gia Bảo Digital rất chuyên nghiệp. Website được thiết kế đúng ý, tốc độ nhanh và tối ưu SEO tốt.",
                                verified: true,
                            },
                            {
                                id: 2,
                                name: "Lê Hoàng Phúc",
                                initials: "HP",
                                title: "Founder Phúc Mobile",
                                stars: 5,
                                feedback:
                                    "Làm việc nhanh chóng, hỗ trợ tận tâm. Mình rất thích cách team tư vấn giải pháp phù hợp ngân sách.",
                                verified: true,
                            },
                            {
                                id: 3,
                                name: "Trần Bích Trâm",
                                initials: "BT",
                                title: "Chủ Shop Mỹ Phẩm",
                                stars: 4,
                                feedback:
                                    "Giao diện đẹp, dễ dùng. Team support nhiệt tình khi mình cần chỉnh sửa. Giá cả rất hợp lý.",
                                verified: true,
                            },
                            {
                                id: 4,
                                name: "Đặng Minh Tài",
                                initials: "MT",
                                title: "CEO Minh Tài Decor",
                                stars: 5,
                                feedback:
                                    "Website chạy ổn định, có tích hợp form báo giá tiện lợi. Đội ngũ làm nhanh và chuyên nghiệp.",
                                verified: true,
                            },
                            {
                                id: 5,
                                name: "Phạm Khánh Duy",
                                initials: "KD",
                                title: "Chủ cửa hàng nội thất",
                                stars: 5,
                                feedback:
                                    "Mình ấn tượng nhất là phần UI/UX rất hiện đại. Khách vào web ai cũng khen đẹp và dễ xem.",
                                verified: true,
                            },
                            {
                                id: 6,
                                name: "Mai Nhật Huy",
                                initials: "NH",
                                title: "Chủ tiệm cà phê Cozy",
                                stars: 4,
                                feedback:
                                    "Web ổn, load nhanh, hình ảnh sắc nét. Nếu team làm thêm app mobile thì tuyệt vời.",
                                verified: true,
                            },
                            {
                                id: 7,
                                name: "Võ Công Khang",
                                initials: "CK",
                                title: "Freelancer",
                                stars: 5,
                                feedback:
                                    "Rất hài lòng với chất lượng và tiến độ. Team có kiến thức kỹ thuật sâu, giải thích dễ hiểu.",
                                verified: true,
                            },
                            {
                                id: 8,
                                name: "Bùi Minh Châu",
                                initials: "MC",
                                title: "Giảng viên Marketing",
                                stars: 5,
                                feedback:
                                    "Website chuẩn SEO, lên top Google nhanh. Content layout rõ ràng, chuẩn bố cục marketing.",
                                verified: true,
                            },
                            {
                                id: 9,
                                name: "Huỳnh Đức Thịnh",
                                initials: "ĐT",
                                title: "Chủ tiệm ảnh Thịnh Studio",
                                stars: 5,
                                feedback:
                                    "Website portfolio quá đẹp, tối ưu hình ảnh tốt. Khách đặt lịch tăng rõ rệt sau khi lên web.",
                                verified: true,
                            },
                            {
                                id: 10,
                                name: "Ngô Quỳnh Nhi",
                                initials: "QN",
                                title: "Chủ shop thời trang",
                                stars: 4,
                                feedback:
                                    "Mình thích phong cách thiết kế tinh tế. Team làm việc đúng deadline và thân thiện.",
                                verified: true,
                            },
                        ].map((t) => (
                            <motion.div
                                key={t.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300 relative"
                            >
                                {/* phần content giữ nguyên */}
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
                                                    <Star
                                                        key={i}
                                                        className="size-4 text-yellow-500 fill-yellow-500"
                                                    />
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
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* Tại sao lại chọn gia bảo */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold md:text-4xl mb-12 text-center ">
                        🎯
                        <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                            Tại sao khách hàng tin tưởng Gia Bảo Digital?
                        </span>
                    </h1>
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

                            )
                        })}

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
                                Hợp tác ngay với Gia Bảo Digital
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây dựng thương hiệu số mạnh mẽ. Cung cấp dịch vụ thiết kế website trọn gói từ thiết kế đến tối ưu SEO. Hãy liên hệ ngay với Gia Bảo Digital để cùng tạo nên những giải pháp công nghệ đột phá, hiệu quả và bền vững cho doanh nghiệp của bạn tại Hồ Chí Minh
                            </p>
                            <div className="inline-block mt-6">
                                <Link href="/contact">
                                    <motion.div
                                        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
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

export default ReviewsPage;
