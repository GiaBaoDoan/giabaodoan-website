'use client'

import {
  Search,
  FileText,
  Target,
  Zap,
  Share2,
  Video,
  Mail,
  Link as LinkIcon,
  TrendingUp,
  ChartNoAxesColumnIncreasing,
  Briefcase,
} from "lucide-react";


import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export const data = [
  {
    type: "Course",
    title: "Cẩm Nang SEO Toàn Diện 2025",
    description:
      "Bí quyết đưa website lên TOP 3 Google trong 90 ngày - Từ zero đến hero với chiến lược SEO thực chiến",
    time: "45 phút",
    learners: "2.5K",
    status: "new",
    icon: <Search className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Strategy",
    title: "Chiến Lược Content Marketing",
    description:
      "Công thức tạo nội dung viral thu hút 10K+ khách hàng tiềm năng mỗi tháng",
    time: "30 phút",
    learners: "1.8k",
    status: "popular",
    icon: <FileText className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Guide",
    title: "Nghiên Cứu Từ Khóa Chuyên Sâu",
    description:
      "Phát hiện từ khóa 'vàng' ít cạnh tranh nhưng traffic cao - Bí mật của các SEO expert",
    time: "30 Phút",
    learners: "1.2k",
    status: "popular",
    icon: <Target className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Strategy",
    title: "Chiến Lược Backlink Bền Vững",
    description:
      "Hệ thống backlink chất lượng giúp tăng Domain Authority 50+ điểm trong 6 tháng",
    time: "35 Phút",
    learners: "950",
    status: "popular",
    icon: <LinkIcon className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Technical",
    title: "Tối Ưu Tốc Độ Website",
    description:
      "Tăng tốc website lên 95+ điểm PageSpeed - Giảm bounce rate 40% và tăng conversion",
    time: "40 Phút",
    learners: "1.1k",
    status: "popular",
    icon: <Zap className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Course",
    title: "Hướng Dẫn Facebook Ads",
    description:
      "Công thức chạy Facebook Ads ROI 500%+ - Từ 1 triệu budget thu về 5 triệu doanh thu",
    time: "60 Phút",
    learners: "2.1k",
    icon: <Share2 className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Course",
    title: "TikTok Ads Mastery",
    description:
      "Bí quyết tạo TikTok Ads viral 1M+ views - Chinh phục Gen Z với chi phí siêu thấp",
    time: "45 Phút",
    learners: "800",
    icon: <Video className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Guide",
    title: "Email Marketing Hiệu Quả",
    description:
      "Hệ thống email tự động hóa tăng doanh thu 300% - Từ welcome series đến win-back campaign",
    time: "35 Phút",
    learners: "1.3k",
    icon: <Mail className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Ebook",
    title: "SEO & Digital Marketing Ebook",
    description:
      "Bộ sưu tập 200+ chiến lược marketing đã được verify - Từ startup đến enterprise",
    time: "120 phút",
    learners: "3.2k",
    icon: <TrendingUp className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Tutorial",
    title: "Google Analytics & Search Console",
    description:
      "Thiết lập tracking hoàn hảo - Đo lường ROI chính xác từng chiến dịch marketing",
    time: "50 phút",
    learners: "1.5k",
    icon: <ChartNoAxesColumnIncreasing className="w-6 h-6" />,
    href: "#",
  },
  {
    type: "Toolkit",
    title: "Bộ Công Cụ Doanh Nghiệp",
    description:
      "50+ tools và templates giúp tăng productivity 200% - Từ planning đến execution",
    time: "40 phút",
    learners: "900",
    status: "new",
    icon: <Briefcase className="w-6 h-6" />,
    href: "#",
  },
];


const page = () => {
  return (
    <section>
      {/* Header */}
      <div className="relative py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tài Nguyên Marketing Miễn Phí
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Thư viện tài nguyên marketing chuyên sâu được biên soạn bởi đội ngũ chuyên gia
            </p>
          </motion.div>

          <motion.p
            className="text-lg mb-10 mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Tất cả đều miễn phí và được cập nhật thường xuyên với những xu hướng marketing mới nhất.
          </motion.p>
        </div>
      </div>

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
              <Card className="border hover:border-white rounded-lg p-4 transition bg-transparent">
                <CardContent className="flex flex-col flex-1 p-0 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-2 bg-primary/10 rounded-lg">{item.icon}</div>

                    <div className="flex justify-between w-full items-start">
                      <div>
                        <Badge variant="outline" className="font-medium border border-white">
                          {item.type}
                        </Badge>
                        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                      </div>

                      {item.status === "popular" && <Badge className="font-medium">Phổ biến</Badge>}
                      {item.status === "new" && <Badge className="bg-emerald-600 text-white font-medium">Mới</Badge>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="flex-1 mb-4">{item.description}</p>

                  {/* Stats */}
                  <div className="flex justify-between items-center text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </div>

                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {item.learners}
                    </div>
                  </div>

                  {/* Button */}
                  <Link href={item.href}>
                    <Button className="w-full rounded-sm flex items-center justify-center gap-2 h-10">
                      <span>Tìm hiểu thêm</span>
                      <SquareArrowOutUpRight className="size-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default page;
