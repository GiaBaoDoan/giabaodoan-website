import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureData } from "@/data/FeatureData";
import AiGenerate from '@/components/share/AiGenerate'
import { cn, formatPrice } from "@/lib/utils";
import {
  FileText,
  Building,
  ShoppingCart,
  Coffee,
  Sparkles,
  Home,
  GraduationCap,
  Stethoscope,
  Newspaper,
  Image,
  Briefcase,
  Calendar,
  Hotel,
  ShoppingBag,
  Smartphone,
  Settings,
  Check,
} from "lucide-react";

const page = () => {
  return (
    <div>
      <article className="py-16 md:py-20 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Tính Giá Thiết Kế Website
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Công cụ tính giá tự động, minh bạch. Chọn loại website và tính
              năng để nhận báo giá ngay lập tức.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Báo giá tức thì</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Minh bạch 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Tư vấn miễn phí</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="container mx-auto px-4 py-12 pb-24">
        <AiGenerate />
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Chọn Loại Website</h2>
            <p>Chọn loại website phù hợp với nhu cầu của bạn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              {
                icon: <FileText className="h-12 w-12 text-primary" />,
                title: "Landing Page",
                description: "Trang đích tối ưu chuyển đổi cho chiến dịch marketing",
                price: "5.000.000",
                features: [
                  "1 trang thiết kế chuyên nghiệp",
                  "Tối ưu tốc độ tải",
                  "Responsive mobile",
                  "Form liên hệ cơ bản",
                  "Tích hợp Google Analytics",
                ],
              },
              {
                icon: <Building className="h-12 w-12 text-primary" />,
                title: "Website Doanh Nghiệp",
                description: "Website giới thiệu công ty, dịch vụ chuyên nghiệp",
                price: "12.000.000",
                features: [
                  "5-10 trang nội dung",
                  "Thiết kế theo thương hiệu",
                  "CMS quản lý nội dung",
                  "Blog tích hợp",
                  "SEO cơ bản",
                  "Bảo trì 6 tháng",
                ],
              },
              {
                icon: <ShoppingCart className="h-12 w-12 text-primary" />,
                title: "Website Thương Mại Điện Tử",
                description: "Giải pháp bán hàng online hoàn chỉnh",
                price: "25.000.000",
                features: [
                  "Quản lý sản phẩm không giới hạn",
                  "Giỏ hàng & thanh toán",
                  "Quản lý đơn hàng",
                  "Tích hợp payment gateway",
                  "Quản lý kho hàng",
                  "Báo cáo doanh thu",
                  "Bảo trì 12 tháng",
                ],
              },
              {
                icon: <Coffee className="h-12 w-12 text-primary" />,
                title: "Website Nhà Hàng & F&B",
                description: "Website cho nhà hàng, quán cafe, food delivery",
                price: "15.000.000",
                features: [
                  "Menu điện tử với hình ảnh",
                  "Đặt bàn online",
                  "Order & Delivery",
                  "Quản lý chi nhánh",
                  "Tích hợp bản đồ",
                  "Review & Rating",
                ],
              },
              {
                icon: <Sparkles className="h-12 w-12 text-primary" />,
                title: "Website Spa & Làm Đẹp",
                description: "Website cho spa, salon, clinic thẩm mỹ",
                price: "14.000.000",
                features: [
                  "Giới thiệu dịch vụ",
                  "Đặt lịch hẹn online",
                  "Quản lý khách hàng",
                  "Gallery trước/sau",
                  "Tư vấn online",
                  "Chương trình khuyến mãi",
                ],
              },
              {
                icon: <Home className="h-12 w-12 text-primary" />,
                title: "Website Bất Động Sản",
                description: "Website môi giới, quản lý bất động sản",
                price: "20.000.000",
                features: [
                  "Danh sách BĐS với filter",
                  "Tìm kiếm nâng cao",
                  "Tích hợp bản đồ",
                  "Virtual tour 360",
                  "So sánh BĐS",
                  "Quản lý agent",
                ],
              },
              {
                icon: <GraduationCap className="h-12 w-12 text-primary" />,
                title: "Website Giáo Dục & E-Learning",
                description: "Website trường học, khóa học online",
                price: "18.000.000",
                features: [
                  "Quản lý khóa học",
                  "Video lessons",
                  "Quiz & Assignment",
                  "Student portal",
                  "Certificate system",
                  "Payment & Subscription",
                ],
              },
              {
                icon: <Stethoscope className="h-12 w-12 text-primary" />,
                title: "Website Y Tế & Phòng Khám",
                description: "Website bệnh viện, phòng khám, nha khoa",
                price: "16.000.000",
                features: [
                  "Đặt lịch khám online",
                  "Quản lý bệnh nhân",
                  "Hồ sơ y tế điện tử",
                  "Tư vấn trực tuyến",
                  "Thanh toán viện phí",
                  "Tra cứu kết quả",
                ],
              },
              {
                icon: <Newspaper className="h-12 w-12 text-primary" />,
                title: "Website Tin Tức & Magazine",
                description: "Website báo điện tử, tạp chí online",
                price: "13.000.000",
                features: [
                  "Hệ thống bài viết",
                  "Categories & Tags",
                  "Comment system",
                  "Newsletter",
                  "Quảng cáo banner",
                  "SEO tối ưu",
                ],
              },
              {
                icon: <Image className="h-12 w-12 text-primary" />,
                title: "Website Portfolio & Nghệ Thuật",
                description: "Website cá nhân, nghệ sĩ, nhiếp ảnh",
                price: "8.000.000",
                features: [
                  "Gallery hình ảnh",
                  "Video showcase",
                  "About & Bio",
                  "Contact form",
                  "Blog cá nhân",
                  "Social integration",
                ],
              },
              {
                icon: <Briefcase className="h-12 w-12 text-primary" />,
                title: "Website Tuyển Dụng",
                description: "Website tìm việc, đăng tin tuyển dụng",
                price: "17.000.000",
                features: [
                  "Đăng tin tuyển dụng",
                  "Tìm kiếm việc làm",
                  "CV management",
                  "Ứng tuyển online",
                  "Employer dashboard",
                  "Matching algorithm",
                ],
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary" />,
                title: "Website Sự Kiện",
                description: "Website tổ chức sự kiện, bán vé",
                price: "14.000.000",
                features: [
                  "Quản lý sự kiện",
                  "Bán vé online",
                  "Check-in QR code",
                  "Agenda & Schedule",
                  "Speaker profiles",
                  "Live streaming",
                ],
              },
              {
                icon: <Hotel className="h-12 w-12 text-primary" />,
                title: "Website Khách Sạn & Du Lịch",
                description: "Website đặt phòng, tour du lịch",
                price: "22.000.000",
                features: [
                  "Đặt phòng online",
                  "Quản lý phòng",
                  "Calendar availability",
                  "Payment gateway",
                  "Review system",
                  "Multi-language",
                ],
              },
              {
                icon: <ShoppingBag className="h-12 w-12 text-primary" />,
                title: "Website Marketplace",
                description: "Sàn thương mại đa nhà cung cấp",
                price: "35.000.000",
                features: [
                  "Multi-vendor system",
                  "Vendor dashboard",
                  "Commission management",
                  "Product approval",
                  "Payment split",
                  "Advanced analytics",
                ],
              },
              {
                icon: <Smartphone className="h-12 w-12 text-primary" />,
                title: "Mobile App iOS",
                description: "Ứng dụng di động cho iPhone & iPad",
                price: "40.000.000",
                features: [
                  "Native iOS development (Swift)",
                  "App Store deployment",
                  "Push notifications",
                  "Offline mode",
                  "In-app purchases",
                  "Face ID / Touch ID",
                  "Bảo trì 12 tháng",
                ],
              },
              {
                icon: <Smartphone className="h-12 w-12 text-primary" />,
                title: "Mobile App Android",
                description: "Ứng dụng di động cho Android",
                price: "38.000.000",
                features: [
                  "Native Android development (Kotlin)",
                  "Google Play deployment",
                  "Push notifications",
                  "Offline mode",
                  "In-app purchases",
                  "Biometric authentication",
                  "Bảo trì 12 tháng",
                ],
              },
              {
                icon: <FileText className="h-12 w-12 text-primary" />,
                title: "Mobile App Cross-Platform",
                description: "App đa nền tảng iOS & Android",
                price: "60.000.000",
                features: [
                  "React Native / Flutter",
                  "iOS & Android cùng lúc",
                  "Shared codebase (70-80%)",
                  "App Store & Google Play",
                  "Push notifications",
                  "Offline sync",
                  "Native performance",
                  "Bảo trì 12 tháng",
                ],
              },
              {
                icon: <Settings className="h-12 w-12 text-primary" />,
                title: "Giải Pháp Tùy Chỉnh",
                description: "Phát triển theo yêu cầu đặc biệt",
                price: "50.000.000",
                features: [
                  "Phân tích yêu cầu chi tiết",
                  "Thiết kế & phát triển riêng",
                  "Tích hợp hệ thống phức tạp",
                  "Web/Mobile app",
                  "API & Automation",
                  "Hỗ trợ dài hạn",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-lg shadow-sm relative cursor-pointer transition-all duration-300 h-full hover:shadow-lg border-2 border-border hover:border-white hover:bg-card",
                )}
              >
                <div className="flex flex-col space-y-1.5 p-4">
                  <div className="mb-4">{item.icon}</div>

                  <div className="font-semibold tracking-tight text-xl">{item.title}</div>

                  <div className="text-sm">{item.description}</div>
                </div>

                <div className="p-4 pt-0 space-y-4">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </div>

                  <ul className="space-y-2">
                    {item.features.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 max-w-7xl w-full mx-auto mt-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Tính Năng Bổ Sung</h2>
            <p>Chọn các tính năng để tùy chỉnh website của bạn</p>
          </div>
          <Tabs defaultValue="thiet-ke" className="w-full space-y-6">
            <TabsList className="grid grid-cols-5 w-full bg-transparent">
              {FeatureData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  className="text-white"
                  value={tab.value}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {FeatureData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {tab.features.map((feature, idx) => (
                    <div className="flex flex-col gap-3 p-4 rounded-lg border-2 hover:border-white transition-all h-full hover:bg-card hover:shadow-md border-border cursor-pointer">
                      <div className="flex items-start justify-between gap-2">
                        {/* Checkbox */}
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        ></button>

                        {/* Icon */}
                        <div className="shrink-0 text-primary h-6 w-6">{feature?.icon}</div>
                      </div>

                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer text-sm leading-tight">
                            {feature?.title}
                          </label>
                        </div>

                        <p className="text-xs line-clamp-2">{feature?.desc}</p>

                        <div className="mt-auto pt-2 border-t">
                          <span className="text-sm font-semibold text-primary">
                            +{formatPrice(feature?.price as number)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
