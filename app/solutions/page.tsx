'use client'

import {
  Briefcase,
  ShoppingCart,
  Rocket,
  Calendar,
  Sparkles,
  Users,
  Hospital,
  Smartphone,
  Layers,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheckBigIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion'

const data = [
  {
    href: "/solutions/website-doanh-nghiep",
    icon: <Briefcase className="w-6 h-6" />,
    title: "Website Doanh Nghiệp",
    status: "new",
    desc: "Ứng dụng web hiện đại được xây dựng với Next.js, TypeScript và Admin Dashboard tùy chỉnh Tính năng chính:",
    features: [
      "Tốc độ tải < 2s",
      "SEO tự động tối ưu",
      "Admin Dashboard",
      "Bảo mật enterprise",
      "Responsive design",
      "Cloud hosting",
    ],
  },
  {
    href: "/solutions/thuong-mai-dien-tu",
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Nền Tảng Ecommerce",
    status: "popular",
    desc: "Hệ thống thương mại điện tử full-stack với React/Next.js và backend API hiện đại",
    features: [
      "Xử lý 10K+ đơn/ngày",
      "Thanh toán đa kênh",
      "Thanh toán đa kênh",
      "Inventory real-time",
      "Multi-vendor",
      "Analytics dashboard",
      "Mobile app",
    ],
  },
  {
    href: "/solutions/landing-page",
    icon: <Rocket className="w-6 h-6" />,
    title: "Landing Page Tối Ưu",
    status: "popular",
    desc: "Single Page Application (SPA) với hiệu suất cao và conversion tracking",
    features: [
      "Conversion rate > 15%",
      "A/B testing tự động",
      "A/B testing tự động",
      "Lead scoring AI",
      "Pixel tracking",
      "Form builder",
      "CRM integration",
    ],
  },
  {
    href: "/solutions/dat-lich-online",
    icon: <Calendar className="w-6 h-6" />,
    title: "Hệ Thống Booking",
    status: "new",
    desc: "Ứng dụng web real-time với WebSocket và database tối ưu cho booking",
    features: [
      "Đồng bộ real-time",
      "Auto reminder SMS",
      "Smart scheduling",
      "Payment integration",
      "Calendar sync",
      "Multi-location",
    ],
  },
  {
    href: "/solutions/website-spa",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Spa & Salon Platform",
    status: "popular",
    desc: "Nền tảng quản lý spa/salon với microservices architecture và cloud infrastructure",
    features: [
      "Quản lý đa chi nhánh",
      "Loyalty program",
      "AI staff scheduling",
      "Customer portal",
      "Inventory tracking",
      "Revenue analytics",
    ],
  },
  {
    href: "/solutions/quan-ly-khach-hang",
    icon: <Users className="w-6 h-6" />,
    title: "CRM Enterprise",
    status: "popular",
    desc: "Hệ thống CRM được phát triển với Node.js/Python backend và React frontend",
    features: [
      "Tăng sales 40%",
      "Lead scoring AI",
      "Pipeline forecasting",
      "360° customer view",
      "Email automation",
      "Mobile CRM app",
    ],
  },
  {
    href: "/solutions/quan-ly-phong-kham",
    icon: <Hospital className="w-6 h-6" />,
    title: "Healthcare Management",
    status: "popular",
    desc: "Nền tảng quản lý y tế với HIPAA compliance và cloud security",
    features: [
      "Giảm thời gian chờ 60%",
      "Hồ sơ bệnh án điện tử",
      "Telemedicine",
      "Appointment scheduling",
      "Prescription management",
      "Insurance integration",
    ],
  },
  {
    href: "/solutions/ung-dung-mobile",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Application",
    status: "popular",
    desc: "Ứng dụng di động cross-platform với React Native và backend API",
    features: [
      "Native performance",
      "Offline-first design",
      "Biometric authentication",
      "Push notifications",
      "Real-time sync",
      "App store optimization",
    ],
  },
  {
    href: "/solutions/quan-ly-doanh-nghiep",
    icon: <Layers className="w-6 h-6" />,
    title: "ERP Enterprise",
    status: "popular",
    desc: "Hệ thống ERP với microservices architecture và containerized deployment",
    features: [
      "Tối ưu workflow 50%",
      "Real-time reporting",
      "Multi-company support",
      "Custom modules",
      "API integrations",
      "Cloud deployment",
    ],
  },
  {
    href: "/solutions/giap-phap-ai",
    icon: <Cpu className="w-6 h-6" />,
    title: "AI & Machine Learning",
    status: "popular",
    desc: "Giải pháp AI/ML với Python, TensorFlow và cloud ML services",
    features: [
      "Predictive analytics",
      "Computer vision",
      "Natural language processing",
      "AutoML pipeline",
      "Model deployment",
      "Data visualization",
    ],
  },
];

const SolutionPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="relative py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Giải Pháp Website &amp; Phần Mềm Chuyên Nghiệp
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Khám phá các giải pháp website và phần mềm được thiết kế riêng cho
              doanh nghiệp của bạn
            </p>
          </motion.div>

          <motion.p
            className="text-lg mb-10 mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Từ website doanh nghiệp đến hệ thống quản lý phức tạp, chúng tôi
            cung cấp giải pháp toàn diện cho mọi nhu cầu kinh doanh.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="hover:border-white rounded-lg shadow-sm border transition-all">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>

                    {item.status === "popular" && (
                      <Badge className="font-medium">Phổ biến</Badge>
                    )}

                    {item.status === "new" && (
                      <Badge className="font-medium bg-emerald-600 text-white">Mới</Badge>
                    )}
                  </div>

                  <p className="mb-4">{item.desc}</p>

                  <div className="space-y-2 mb-6 flex-1">
                    <h5 className="font-medium text-sm">Tính năng chính:</h5>
                    <ul className="space-y-1">
                      {item.features.map((ft, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CircleCheckBigIcon className="stroke-emerald-500 shrink-0 w-4 h-4 mr-2" />
                          {ft}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={item.href}>
                    <Button className="w-full rounded-sm h-10 flex items-center justify-center gap-2">
                      <span>Tìm hiểu thêm</span>
                      <SquareArrowOutUpRightIcon className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
