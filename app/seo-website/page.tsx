import { OurProjects } from "@/components/home";
import BestTechnologies from "@/components/services/BestTechnologies";
import FAQ from "@/components/services/FAQ";
import ProccessDesignProduct from "@/components/services/ProccessDesignProduct";
import Testimonials from "@/components/services/Testimonials";
import WhyUs from "@/components/services/WhyUs";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  Globe,
  MapPin,
  ShoppingCart,
  FileText,
  Settings,
  Search,
  Shield,
  ChartNoAxesColumn,
  Target,
  Clock,
} from "lucide-react";

import {
  ArrowRight,
  Check,
  CircleCheckBig,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="relative py-32 md:py-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto text-center">
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Dịch Vụ SEO Website Chuyên Nghiệp
            </h1>
            <p className="text-lg font-medium mb-8">
              Lên Top Google Bền Vững - Tăng Traffic Tự Nhiên
            </p>
            <p className="mx-auto mb-10">
              Chúng tôi cung cấp dịch vụ SEO website toàn diện với chiến lược
              white-hat, giúp doanh nghiệp của bạn lên top Google, tăng lượng
              truy cập tự nhiên và tăng trưởng doanh thu bền vững.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <InteractiveHoverButton>Liên hệ ngay</InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={300} />+
              </p>
              <p className="text-sm md:text-base">Tăng lượng truy cập</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={150} />%
              </p>
              <p className="text-sm md:text-base">Cải thiện thứ hạng</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={100} />%
              </p>
              <p className="text-sm md:text-base">Website SEO thành công</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={98} />%
              </p>
              <p className="text-sm md:text-base">Khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="tro-ngai">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                Doanh Nghiệp Của Bạn Đang Gặp Phải Những Thách Thức Này?
              </h2>
              <p className="text-lg mx-auto max-w-3xl">
                Trong thời đại số, một website kém chất lượng không chỉ làm mất
                khách hàng mà còn ảnh hưởng nghiêm trọng đến doanh thu và uy tín
                thương hiệu
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📉",
                  title: "Không Xuất Hiện Trên Google",
                  percent: "93%",
                  description:
                    "khách hàng tìm kiếm sản phẩm/dịch vụ trên Google nhưng không tìm thấy doanh nghiệp của bạn.",
                  warning: "Mất khách hàng tiềm năng",
                },
                {
                  icon: "⚡",
                  title: "Thứ Hạng Thấp",
                  percent: "75%",
                  description:
                    "người dùng chỉ click vào kết quả trang đầu tiên, website ở trang 2-3 gần như vô hình.",
                  warning: "Lưu lượng truy cập thấp",
                },
                {
                  icon: "🔍",
                  title: "Chi Phí Quảng Cáo Cao",
                  percent: "60%",
                  description:
                    "doanh nghiệp phụ thuộc hoàn toàn vào quảng cáo trả phí, chi phí ngày càng tăng.",
                  warning: "Lợi nhuận giảm",
                },
                {
                  icon: "💼",
                  title: "Đối Thủ Vượt Mặt",
                  percent: "80%",
                  description:
                    "đối thủ cạnh tranh đã đầu tư SEO và chiếm lĩnh thị trường trực tuyến.",
                  warning: "Khó thu hút khách hàng",
                },
                {
                  icon: "⚡️",
                  title: "Website Chậm & Lỗi",
                  percent: "53%",
                  description:
                    "người dùng rời bỏ website nếu tải chậm quá 3 giây, ảnh hưởng đến SEO.",
                  warning: "Tỷ lệ thoát cao",
                },
                {
                  icon: "📱",
                  title: "Không Tối Ưu Mobile",
                  percent: "60%",
                  description:
                    "lượng tìm kiếm đến từ mobile nhưng website không thân thiện với thiết bị di động.",
                  warning: "Mất nửa khách hàng",
                },
              ].map((it, index) => (
                <div key={index}>
                  <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                    <div className="flex flex-col space-y-1.5 p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{it.icon}</span>
                        <div className="flex-1">
                          <div className="font-semibold tracking-tight text-lg mb-2">
                            {it.title}
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-red-500">
                              {it.percent}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {it.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                        <span>⚠️</span>
                        <span>{it.warning}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm max-w-5xl mx-auto border-none">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                    <span>💡</span>
                    <span>Giải Pháp Toàn Diện Từ Gia Bảo Digital</span>
                  </h3>
                  <p className="text-lg mb-4">
                    Chúng tôi giúp bạn xây dựng website chuyên nghiệp, chuẩn
                    SEO, tốc độ cao và tối ưu chuyển đổi - không chỉ đẹp mắt mà
                    còn mang lại kết quả kinh doanh thực tế!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="stroke-emerald-500 size-5" />
                      <span className="font-medium">
                        Lên top Google bền vững
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="stroke-emerald-500 size-5" />
                      <span className="font-medium">Tăng traffic tự nhiên</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="stroke-emerald-500 size-5" />
                      <span className="font-medium">
                        Tiết kiệm chi phí quảng cáo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" id="dich-vu-seo">
        <div className="mx-auto px-4 container">
          <h2 className="text-2xl font-bold md:text-4xl mb-12 text-center">
            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Dịch Vụ Thiết Kế Website Của Chúng Tôi
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="size-6 text-primary" />,
                title: "SEO Tổng Thể (Full SEO)",
                subtitle: "Giải Pháp SEO Toàn Diện",
                description:
                  "Dịch vụ SEO tổng thể bao gồm tất cả các yếu tố On-page, Off-page và Technical SEO giúp website lên top Google bền vững.",
                features: [
                  "Nghiên cứu từ khóa chuyên sâu theo ngành",
                  "Tối ưu On-page: Content, Meta, Heading, Internal Link",
                  "Xây dựng backlink chất lượng cao",
                  "Technical SEO: Tốc độ, Mobile, Schema",
                  "Content Marketing & Link Building",
                  "Báo cáo tiến độ hàng tháng chi tiết",
                  "Hỗ trợ & tư vấn liên tục",
                ],
                benefits: [
                  "Tăng thứ hạng toàn diện",
                  "Lưu lượng truy cập tự nhiên cao",
                  "ROI tốt nhất",
                ],
                link: "/lien-he",
              },

              {
                icon: <MapPin className="size-6 text-primary" />,
                title: "SEO Local",
                subtitle: "Thống Trị Tìm Kiếm Địa Phương",
                description:
                  "Tối ưu website để xuất hiện trên Google Maps và kết quả tìm kiếm địa phương, thu hút khách hàng gần bạn.",
                features: [
                  "Tối ưu Google Business Profile",
                  "Xây dựng NAP Citations nhất quán",
                  "Tối ưu từ khóa địa phương",
                  "Quản lý đánh giá khách hàng",
                  "Local Link Building",
                  "Tối ưu Google Maps",
                  "Báo cáo hiệu suất địa phương",
                ],
                benefits: [
                  "Tăng khách hàng địa phương",
                  "Xuất hiện trên Google Maps",
                  "Tăng lượt gọi & ghé thăm",
                ],
                link: "/lien-he",
              },

              {
                icon: <ShoppingCart className="size-6 text-primary" />,
                title: "SEO E-commerce",
                subtitle: "Tăng Doanh Số Bán Hàng Online",
                description:
                  "SEO chuyên biệt cho website thương mại điện tử, tối ưu trang sản phẩm và danh mục để tăng doanh số.",
                features: [
                  "Tối ưu trang sản phẩm & danh mục",
                  "Schema Markup cho sản phẩm",
                  "Tối ưu hình ảnh sản phẩm",
                  "Xây dựng nội dung mô tả SEO",
                  "Tối ưu tốc độ tải trang",
                  "Internal linking chiến lược",
                  "Theo dõi chuyển đổi & doanh số",
                ],
                benefits: [
                  "Tăng doanh số trực tuyến",
                  "Chi phí quảng cáo giảm",
                  "Khách hàng chất lượng cao",
                ],
                link: "/lien-he",
              },

              {
                icon: <FileText className="size-6 text-primary" />,
                title: "SEO Content",
                subtitle: "Nội Dung Chuẩn SEO",
                description:
                  "Dịch vụ viết và tối ưu nội dung chuẩn SEO, thu hút cả người dùng và công cụ tìm kiếm.",
                features: [
                  "Nghiên cứu từ khóa cho nội dung",
                  "Viết bài chuẩn SEO, dễ đọc",
                  "Tối ưu heading, meta, alt text",
                  "Internal & external linking",
                  "Content cluster strategy",
                  "Cập nhật nội dung định kỳ",
                  "Phân tích hiệu quả nội dung",
                ],
                benefits: [
                  "Tăng traffic tự nhiên",
                  "Xây dựng uy tín chuyên môn",
                  "Tăng thời gian ở lại trang",
                ],
                link: "/lien-he",
              },

              {
                icon: <Settings className="size-6 text-primary" />,
                title: "Technical SEO",
                subtitle: "Tối Ưu Kỹ Thuật Website",
                description:
                  "Khắc phục các vấn đề kỹ thuật ảnh hưởng đến SEO, tối ưu tốc độ và trải nghiệm người dùng.",
                features: [
                  "Audit kỹ thuật toàn diện",
                  "Tối ưu tốc độ tải trang",
                  "Sửa lỗi crawl & index",
                  "Tối ưu cấu trúc URL",
                  "Cài đặt Schema Markup",
                  "Tối ưu Mobile-First",
                  "Bảo mật HTTPS & SSL",
                ],
                benefits: [
                  "Website tải nhanh hơn",
                  "Crawl budget tối ưu",
                  "Trải nghiệm người dùng tốt",
                ],
                link: "/lien-he",
              },

              {
                icon: <Search className="size-6 text-primary" />,
                title: "SEO Audit & Consulting",
                subtitle: "Phân Tích & Tư Vấn SEO",
                description:
                  "Dịch vụ phân tích website toàn diện và tư vấn chiến lược SEO phù hợp với mục tiêu kinh doanh.",
                features: [
                  "SEO Audit chi tiết 100+ điểm",
                  "Phân tích đối thủ cạnh tranh",
                  "Nghiên cứu từ khóa tiềm năng",
                  "Đề xuất chiến lược SEO",
                  "Roadmap triển khai cụ thể",
                  "Tư vấn 1-1 với chuyên gia",
                  "Báo cáo & khuyến nghị",
                ],
                benefits: [
                  "Hiểu rõ vấn đề SEO",
                  "Chiến lược rõ ràng",
                  "Tiết kiệm thời gian & chi phí",
                ],
                link: "/lien-he",
              },
            ].map((s, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary"
              >
                <div className="flex-1 space-y-1.5 p-4">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <div className="tracking-tight text-xl font-bold mb-1">
                        {s.title}
                      </div>
                      <p className="text-sm text-primary font-medium">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-base">{s.description}</div>
                </div>
                <div className="p-4 pt-0 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="size-4" />
                      Tính năng nổi bật:
                    </h4>
                    <ul className="space-y-2">
                      {s.features.map((ft, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="size-4 stroke-green-500 shrink-0" />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="size-4 shrink-0" />
                      Lợi ích:
                    </h4>
                    <ul className="space-y-1">
                      {s.benefits.map((bt, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CircleCheckBig className="size-4 shrink-0" />
                          <span>{bt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={s.link}>
                    <div className="group inline-block w-full">
                      <Button
                        variant="outline"
                        className="w-full h-12 hover:bg-white! hover:text-black"
                      >
                        <span className="relative z-10 text-sm font-medium">
                          Xem chi tiết giải pháp
                        </span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" id="tinh-nang-seo">
        <div className="container mx-auto rounded-3xl px-4 my-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tính năng nổi bật của dịch vụ SEO
            </h2>
            <p className="text-lg mx-auto">
              Chúng tôi cung cấp giải pháp SEO toàn diện giúp website của bạn
              lên top Google bền vững
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Search />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Nghiên cứu từ khóa
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Phân tích từ khóa tiềm năng cao</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <TrendingUp />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Tối ưu On-page
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Content, Meta, Heading chuẩn SEO</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Globe />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Link Building
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Xây dựng backlink chất lượng</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Zap />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Technical SEO
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Tối ưu tốc độ & cấu trúc</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Target />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Local SEO
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Thống trị tìm kiếm địa phương</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <ChartNoAxesColumn />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Báo cáo chi tiết
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Theo dõi tiến độ minh bạch</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Shield />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      White-hat SEO
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Tuân thủ Google Guidelines</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock />
                    </div>
                    <div className="tracking-tight text-lg font-semibold">
                      Hỗ trợ liên tục
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <p>Tư vấn & cập nhật thuật toán</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" id="cam-ket">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold md:text-4xl mb-10 text-center ">
              🎯
              <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                Cam Kết Của Chúng Tôi
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-white/10 flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ">
                  <Check className="size-5" />
                </div>
                <p>100% website chuẩn SEO, UI/UX, tốc độ cao.</p>
              </div>
              <div className="p-6 rounded-lg border border-white/10 flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ">
                  <Check className="size-5" />
                </div>
                <p>Thiết kế độc quyền, không dùng template.</p>
              </div>
              <div className="p-6 rounded-lg border border-white/10 flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ">
                  <Check className="size-5" />
                </div>
                <p>Bảo trì &amp; hỗ trợ lâu dài.</p>
              </div>
              <div className="p-6 rounded-lg border border-white/10 flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ">
                  <Check className="size-5" />
                </div>
                <p>Chi phí hợp lý, tối ưu ngân sách doanh nghiệp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <ProccessDesignProduct />
      <BestTechnologies />
      <div className="text-center bg-black border border-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Gia Bảo Digital - Đối Tác Công Nghệ Toàn Diện
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            <strong className="text-white">Không có giới hạn công nghệ!</strong>
            Chúng tôi thành thạo mọi ngôn ngữ lập trình, framework và platform.
            Từ ý tưởng đến triển khai hoàn chỉnh - chúng tôi làm được tất cả!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="font-bold mb-3 text-blue-400">
                🌐 Website & Web Apps
              </h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• Landing Page, Corporate Website</li>
                <li>• E-commerce, CMS, Blog</li>
                <li>• Web Application, Dashboard</li>
                <li>• API Development & Integration</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-3 text-green-400">
                📱 Mobile Applications
              </h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• iOS & Android Native Apps</li>
                <li>• Cross-platform (React Native, Flutter)</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• App Store Deployment</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-2 bg-green-900 border border-green-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4 text-green-400"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-green-300">Mọi ngôn ngữ lập trình</span>
            </div>

            <div className="flex items-center gap-2 bg-blue-900 border border-blue-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4 text-blue-400"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-blue-300">Full-stack development</span>
            </div>

            <div className="flex items-center gap-2 bg-purple-900 border border-purple-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4 text-purple-400"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-purple-300">Cloud deployment</span>
            </div>

            <div className="flex items-center gap-2 bg-orange-900 border border-orange-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check h-4 w-4 text-orange-400"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-orange-300">24/7 Support</span>
            </div>
          </div>

          <p className="text-base font-medium text-gray-300">
            💡{" "}
            <em className="text-yellow-400">
              "Bạn có ý tưởng - chúng tôi có công nghệ để hiện thực hóa!"
            </em>
          </p>
        </div>
      </div>
      <Testimonials />
      <OurProjects />
      <FAQ />
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center">
            <div className="p-8 md:p-12 rounded-2xl shadow-lg border-t-4 border-white">
              <h2 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent not-italic">
                Bắt đầu hành trình lên top Google cùng chúng tôi ngay hôm nay!
              </h2>
              <p className="text-lg mb-8 mx-auto">
                Liên hệ ngay để nhận tư vấn miễn phí và báo giá SEO phù hợp với
                nhu cầu của bạn. Chúng tôi sẽ phân tích website và đưa ra chiến
                lược SEO tối ưu nhất.
              </p>
              <div>
                <Link href="/contact">
                  <div className="group inline-block mt-6">
                    <InteractiveHoverButton>
                      <span className="relative z-10">
                        Liên hệ tư vấn miễn phí
                      </span>
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
