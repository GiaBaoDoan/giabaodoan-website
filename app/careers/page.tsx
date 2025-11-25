'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { UsersRound, Briefcase, GraduationCap } from "lucide-react";

export const data = [
  {
    icon: <UsersRound className="w-6 h-6" />,
    title: "Collaborator",
    subtitle: "Đối tác chiến lược",
    description:
      "Trở thành đối tác chiến lược trong các dự án lớn với mức hoa hồng hấp dẫn và cơ hội phát triển dài hạn",
    tag: "Partnership",
    location: "Remote/Hybrid",
    highlights: [
      "Hoa hồng 15-30%",
      "Hỗ trợ marketing",
      "Dự án dài hạn",
      "Đào tạo chuyên sâu",
    ],
    status: "popular",
    href: "#",
  },

  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Freelancer",
    subtitle: "Chuyên gia tự do",
    description:
      "Làm việc linh hoạt với các dự án đa dạng, phát triển kỹ năng và xây dựng portfolio chuyên nghiệp",
    tag: "Contract",
    location: "Remote",
    highlights: [
      "Linh hoạt thời gian",
      "Mức lương cạnh tranh",
      "Dự án đa dạng",
      "Skill development",
    ],
    status: "popular",
    href: "#",
  },

  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Thực Tập Sinh",
    subtitle: "IT & Marketing",
    description:
      "Chương trình thực tập chuyên nghiệp cho sinh viên IT và Marketing với mentor 1-1 và cơ hội full-time",
    tag: "Internship",
    location: "Office/Remote",
    highlights: [
      "Mentor 1-1",
      "Chứng chỉ hoàn thành",
      "Dự án thực tế",
      "Cơ hội full-time",
    ],
    status: "new",
    href: "#",
  },
];


const page = () => {
  return (
    <section className="container mx-auto px-4 pb-20">
      <section className="py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tham Gia Đội Ngũ Chuyên Gia
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Cơ hội nghề nghiệp hấp dẫn trong lĩnh vực công nghệ và marketing
            </p>
          </motion.div>

          <motion.p
            className="text-lg mb-10 mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng xây dựng các
            sản phẩm công nghệ tiên tiến và chiến lược marketing đột phá.
          </motion.p>
        </div>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="bg-black border hover:border-white rounded-2xl p-6 text-white hover:bg-card transition">
              <CardContent className="p-0 space-y-5 flex flex-col">

                {/* Header */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.subtitle}</p>
                    </div>
                  </div>

                  {item.status === "popular" && (
                    <Badge className="bg-white border-white text-black px-3">
                      Phổ biến
                    </Badge>
                  )}
                  {item.status === "new" && (
                    <Badge className="bg-emerald-600 text-white px-3">Mới</Badge>
                  )}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex items-center justify-between gap-4 flex-wrap"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Badge variant="outline" className="rounded-full border-white">
                    {item.tag}
                  </Badge>

                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin className="w-4 h-4 stroke-blue-400" />
                    {item.location}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-semibold text-sm">Highlights:</p>
                  <div className="grid grid-cols-2 gap-y-2 text-white/80">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs">{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <Link href={item.href} className="mt-4">
                    <Button className="w-full h-10">
                      Tìm hiểu thêm
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default page;
