import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowRight, Calendar, CheckSquare, CircleCheck, CircleCheckBig, Code, FileText, FlaskConical, GitBranch, LucideIcon, MessageSquare, Palette, Rocket, Search, Settings, Shield, Target, TrendingUp, Wrench, Zap } from "lucide-react"
import Link from "next/link";

const data = [
    {
        id: "01",
        icon: <Search />,
        duration: "3-5 ngày",
        title: "Phân Tích & Khảo Sát",
        subtitle: "Requirements Analysis",
        description: "Thu thập yêu cầu, phân tích nghiệp vụ và xác định phạm vi dự án",
        activities: [
            "Họp kick-off với stakeholders",
            "Phân tích yêu cầu chức năng & phi chức năng",
            "Nghiên cứu đối thủ cạnh tranh",
            "Xác định target audience",
            "Lập kế hoạch dự án chi tiết",
        ],
        deliverables: [
            "Business Requirements Document (BRD)",
            "Project Charter",
            "Risk Assessment",
        ],
    },
    {
        id: "02",
        icon: <FileText />,
        duration: "5-7 ngày",
        title: "Thiết Kế Hệ Thống",
        subtitle: "System Design & Architecture",
        description: "Thiết kế kiến trúc hệ thống, database và luồng xử lý",
        activities: [
            "Thiết kế kiến trúc tổng thể",
            "Thiết kế database schema",
            "Tạo system flow diagram",
            "Lập kế hoạch API endpoints",
            "Chọn công nghệ phù hợp",
        ],
        deliverables: [
            "System Architecture Document",
            "Database Design",
            "Technical Specification",
        ],
    },
    {
        id: "03",
        icon: <Palette />,
        duration: "7-10 ngày",
        title: "Thiết Kế UI/UX",
        subtitle: "User Interface & Experience Design",
        description: "Tạo wireframe, mockup và prototype tương tác",
        activities: [
            "User journey mapping",
            "Wireframe & mockup design",
            "Prototype tương tác",
            "Usability testing",
            "Design system creation",
        ],
        deliverables: [
            "UI/UX Design Files",
            "Interactive Prototype",
            "Design System Guide",
        ],
    },
    {
        id: "04",
        icon: <Code />,
        duration: "15-30 ngày",
        title: "Phát Triển",
        subtitle: "Development & Implementation",
        description: "Coding, tích hợp API và xây dựng tính năng",
        activities: [
            "Setup development environment",
            "Frontend development",
            "Backend API development",
            "Database implementation",
            "Third-party integrations",
        ],
        deliverables: [
            "Source Code",
            "API Documentation",
            "Development Build",
        ],
    },
    {
        id: "05",
        icon: <FlaskConical />,
        duration: "5-7 ngày",
        title: "Kiểm Thử",
        subtitle: "Quality Assurance & Testing",
        description: "Kiểm thử chức năng, hiệu suất và bảo mật",
        activities: [
            "Unit testing",
            "Integration testing",
            "Performance testing",
            "Security testing",
            "User acceptance testing (UAT)",
        ],
        deliverables: [
            "Test Reports",
            "Bug Reports",
            "Performance Metrics",
        ],
    },
    {
        id: "06",
        icon: <Rocket />,
        duration: "2-3 ngày",
        title: "Triển Khai",
        subtitle: "Deployment & Go-Live",
        description: "Deploy lên production và monitoring",
        activities: [
            "Production deployment",
            "DNS configuration",
            "SSL certificate setup",
            "Performance monitoring",
            "Go-live checklist",
        ],
        deliverables: [
            "Live Website",
            "Deployment Guide",
            "Monitoring Dashboard",
        ],
    },
    {
        id: "07",
        icon: <Wrench />,
        duration: "Liên tục",
        title: "Hỗ Trợ & Bảo Trì",
        subtitle: "Support & Maintenance",
        description: "Hỗ trợ kỹ thuật và bảo trì hệ thống",
        activities: [
            "24/7 monitoring",
            "Bug fixes & updates",
            "Performance optimization",
            "Security patches",
            "Feature enhancements",
        ],
        deliverables: [
            "Support Documentation",
            "Maintenance Reports",
            "Update Logs",
        ],
    },
];

const page = () => {
    return (
        <div>
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-16">
                    <div className="text-center mb-12"><h1 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                        Quy Trình Làm Việc</h1><p className="text-lg text-gray-300 max-w-3xl mx-auto">Quy trình phát triển phần mềm chuẩn quốc tế, đảm bảo chất lượng và tiến độ dự án</p></div>
                </div>
            </section>
            <section className="py-16 px-4">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" >7 Bước Quy Trình Chuyên Nghiệp</h2>
                    <div className="space-y-8">
                        {data.map((step) => (
                            <div
                                key={step.id}
                                className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col space-y-1.5 p-4">
                                    {/* HEADER */}
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            {step.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-2xl font-bold text-primary">{step.id}</span>
                                                <ArrowRight className="h-5 w-5 text-primary" />
                                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-primary border-primary">
                                                    <Calendar className="h-3 w-3 mr-1" /> {step.duration}
                                                </div>
                                            </div>

                                            <div className="font-semibold tracking-tight text-xl mb-2">{step.title}</div>
                                            <p className="text-sm mb-4">{step.subtitle}</p>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* DETAILS */}
                                <div className="p-4 pt-0">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Hoạt động chính */}
                                        <div>
                                            <h4 className="font-semibold mb-3 text-primary">Hoạt động chính:</h4>
                                            <ul className="space-y-2">
                                                {step.activities.map((act, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CircleCheckBig className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                        {act}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Deliverables */}
                                        <div>
                                            <h4 className="font-semibold mb-3 text-primary">Deliverables:</h4>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <Target className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">Phương Pháp Luận Áp Dụng</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Agile/Scrum",
                                description: "Phát triển linh hoạt với sprint 2 tuần",
                                icon: Zap,
                            },
                            {
                                title: "DevOps",
                                description: "CI/CD pipeline tự động hóa",
                                icon: Settings,
                            },
                            {
                                title: "Code Review",
                                description: "Review code nghiêm ngặt trước merge",
                                icon: CheckSquare,
                            },
                            {
                                title: "Version Control",
                                description: "Git workflow với branch protection",
                                icon: GitBranch,
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">Tiêu Chuẩn Chất Lượng</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Code Quality",
                                icon: Code,
                                items: [
                                    "Clean Code principles",
                                    "SOLID design patterns",
                                    "Code coverage > 80%",
                                    "ESLint/Prettier standards",
                                ],
                            },
                            {
                                title: "Performance",
                                icon: TrendingUp,
                                items: [
                                    "Page load < 3 seconds",
                                    "Core Web Vitals optimization",
                                    "Mobile-first responsive",
                                    "SEO score > 90",
                                ],
                            },
                            {
                                title: "Security",
                                icon: Shield,
                                items: [
                                    "OWASP Top 10 compliance",
                                    "Data encryption",
                                    "Secure authentication",
                                    "Regular security audits",
                                ],
                            },
                            {
                                title: "Documentation",
                                icon: FileText,
                                items: [
                                    "API documentation",
                                    "Code comments",
                                    "User manuals",
                                    "Technical specifications",
                                ],
                            },
                        ].map((feature, idx) => {
                            const Icon = feature.icon as LucideIcon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            {feature.title}
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <ul className="space-y-2">
                                            {feature.items.map((item, id) => (
                                                <li key={id} className="flex items-center">
                                                    <CircleCheck className="h-4 w-4 text-primary mr-2 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">Giao Tiếp & Báo Cáo</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Daily Standup",
                                description: "Họp hàng ngày 15 phút để sync tiến độ và giải quyết blockers",
                                time: "Mỗi ngày 9:00 AM",
                                icon: MessageSquare,
                            },
                            {
                                title: "Sprint Planning",
                                description: "Demo sản phẩm và nhận feedback từ stakeholders",
                                time: "Mỗi thứ 2 10:00 AM",
                                icon: Calendar, // đổi icon khác nếu muốn
                            },
                            {
                                title: "Retrospective",
                                description: "Báo cáo tiến độ chi tiết với metrics và timeline",
                                time: "Mỗi thứ 6 4:00 PM",
                                icon: FileText,
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-lg transition-shadow text-center"
                                >
                                    <div className="flex flex-col space-y-1.5 p-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-2xl font-semibold leading-none tracking-tight">
                                            {item.title}
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <p className="mb-4">{item.description}</p>
                                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-primary border-primary">
                                            {item.time}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>
            <section className="pt-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto text-center">
                        <div className="p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-white">
                            <h2 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent not-italic">
                                Hợp tác ngay với Gia Bảo Digital
                            </h2>
                            <p className="text-lg mb-8 mx-auto">
                                Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây dựng thương hiệu số mạnh mẽ. Cung cấp dịch vụ thiết kế website trọn gói từ thiết kế đến tối ưu SEO. Hãy liên hệ ngay với Gia Bảo Digital để cùng tạo nên những giải pháp công nghệ đột phá, hiệu quả và bền vững cho doanh nghiệp của bạn tại Hồ Chí Minh
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
    )
}

export default page