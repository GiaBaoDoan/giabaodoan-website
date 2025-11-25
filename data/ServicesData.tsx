// data/services.ts
import {
  Globe,
  ShoppingBag,
  Calendar,
  Heart,
  Users,
  Database,
  Book,
  Cpu,
} from "lucide-react";

export const services = [
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Website Doanh Nghiệp",
    subtitle: "Xây Dựng Thương Hiệu Chuyên Nghiệp",
    description:
      "Giải pháp website doanh nghiệp toàn diện, giúp xây dựng hình ảnh chuyên nghiệp và thu hút khách hàng.",
    features: [
      "Giao diện cao cấp, chuẩn UI/UX",
      "Tối ưu SEO toàn diện",
      "Tích hợp đầy đủ nội dung",
      "Responsive hoàn hảo",
      "Tốc độ tải nhanh (< 3s)",
      "CMS dễ quản lý",
      "Hỗ trợ đa ngôn ngữ",
    ],
    benefits: [
      "Tăng độ nhận diện thương hiệu",
      "Thu hút khách hàng tiềm năng",
      "Xây dựng lòng tin với đối tác",
    ],
    link: "/solutions/website-doanh-nghiep",
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Landing Page",
    subtitle: "Tối Ưu Chuyển Đổi & Quảng Cáo",
    description:
      "Landing page chuyên biệt cho chiến dịch marketing, tập trung 100% vào chuyển đổi khách hàng và tối ưu ROI quảng cáo.",
    features: [
      "Thiết kế tập trung vào CRO (Conversion Rate Optimization)",
      "Call-to-Action (CTA) mạnh mẽ, thu hút hành động",
      "Form đăng ký tối ưu, thu thập lead hiệu quả",
      "Tương thích hoàn hảo với Google Ads, Facebook Ads, TikTok Ads",
      "A/B Testing để tối ưu tỷ lệ chuyển đổi",
      "Tích hợp Pixel tracking, Google Analytics",
      "Tốc độ tải siêu nhanh, tối ưu mobile",
    ],
    benefits: [
      "Tăng tỷ lệ chuyển đổi 200-300%",
      "Giảm chi phí quảng cáo (CPA)",
      "Tối đa hóa ROI từ chiến dịch marketing",
    ],
    link: "/solutions/landing-page",
  },
  {
    icon: <ShoppingBag className="h-12 w-12" />,
    title: "Website Thương Mại Điện Tử",
    subtitle: "Bán Hàng Online Hiệu Quả",
    description:
      "Nền tảng E-commerce đầy đủ tính năng, giúp doanh nghiệp bán hàng online hiệu quả, quản lý dễ dàng và tăng trưởng doanh thu bền vững.",
    features: [
      "Thiết kế UI/UX tối ưu trải nghiệm mua sắm",
      "Giỏ hàng thông minh, checkout nhanh chóng",
      "Tích hợp đa cổng thanh toán: Momo, VNPay, ZaloPay, Stripe, PayPal",
      "Quản lý sản phẩm, đơn hàng, kho hàng tự động",
      "Hệ thống khuyến mãi, mã giảm giá linh hoạt",
      "Tích hợp vận chuyển: GHN, GHTK, Viettel Post",
      "Báo cáo doanh thu, phân tích chi tiết",
      "Bảo mật thanh toán chuẩn PCI DSS",
    ],
    benefits: [
      "Tăng doanh số bán hàng online",
      "Quản lý kinh doanh hiệu quả",
      "Mở rộng thị trường không giới hạn",
    ],
    link: "/solutions/ecommerce",
  },
  {
    icon: <Calendar className="h-12 w-12" />,
    title: "Website Đặt Lịch & Dịch Vụ",
    subtitle: "Quản Lý Khách Hàng Thông Minh",
    description:
      "Giải pháp website chuyên biệt cho ngành dịch vụ, tích hợp hệ thống đặt lịch thông minh, giúp tối ưu vận hành và nâng cao trải nghiệm khách hàng.",
    features: [
      "Hệ thống đặt lịch online tự động 24/7",
      "Quản lý lịch hẹn, nhân viên, phòng/bàn",
      "Gửi thông báo nhắc lịch tự động (SMS, Email)",
      "Tích hợp thanh toán đặt cọc online",
      "CRM quản lý thông tin khách hàng",
      "Báo cáo doanh thu, hiệu suất chi tiết",
      "Phù hợp: Spa, Salon, Phòng khám, Nhà hàng, Khách sạn",
    ],
    benefits: [
      "Tăng tỷ lệ đặt lịch thành công",
      "Giảm tình trạng no-show",
      "Tối ưu vận hành, tiết kiệm nhân sự",
    ],
    link: "/solutions/booking",
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Website Spa & Làm Đẹp",
    subtitle: "Nâng Tầm Trải Nghiệm Khách Hàng",
    description:
      "Website chuyên biệt cho spa, thẩm mỹ viện với thiết kế sang trọng, hệ thống đặt lịch và quản lý khách hàng toàn diện.",
    features: [
      "Thiết kế giao diện sang trọng, thư giãn",
      "Hệ thống đặt lịch spa online 24/7",
      "Quản lý liệu trình, gói dịch vụ",
      "CRM quản lý lịch sử khách hàng",
      "Tích hợp thanh toán & membership",
      "Gallery hình ảnh trước/sau chuyên nghiệp",
      "Tối ưu mobile cho khách hàng đặt lịch dễ dàng",
    ],
    benefits: [
      "Tăng số lượng booking online",
      "Quản lý khách hàng chuyên nghiệp",
      "Xây dựng thương hiệu cao cấp",
    ],
    link: "/solutions/spa-beauty",
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Hệ Thống CRM",
    subtitle: "Quản Lý Quan Hệ Khách Hàng",
    description:
      "Hệ thống CRM chuyên nghiệp giúp quản lý khách hàng, tăng doanh số bán hàng và tối ưu quy trình marketing tự động.",
    features: [
      "Quản lý thông tin khách hàng tập trung",
      "Theo dõi lịch sử tương tác, giao dịch",
      "Tự động hóa email marketing, SMS",
      "Phân tích hành vi khách hàng",
      "Quản lý pipeline bán hàng",
      "Báo cáo doanh số, hiệu suất team",
      "Tích hợp với website, social media",
    ],
    benefits: [
      "Tăng tỷ lệ chốt đơn hàng",
      "Giữ chân khách hàng hiệu quả",
      "Tối ưu quy trình bán hàng",
    ],
    link: "/solutions/crm",
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Hệ Thống ERP",
    subtitle: "Quản Lý Doanh Nghiệp Toàn Diện",
    description:
      "Giải pháp ERP tích hợp quản lý toàn bộ quy trình doanh nghiệp từ kế toán, nhân sự, kho hàng đến sản xuất.",
    features: [
      "Quản lý tài chính, kế toán tự động",
      "Quản lý nhân sự, chấm công, lương",
      "Quản lý kho hàng, tồn kho thông minh",
      "Quản lý sản xuất, đơn hàng",
      "Báo cáo tài chính, phân tích chi tiết",
      "Tích hợp đa chi nhánh",
      "Bảo mật dữ liệu cao cấp",
    ],
    benefits: [
      "Tối ưu vận hành doanh nghiệp",
      "Giảm chi phí quản lý",
      "Tăng hiệu suất làm việc",
    ],
    link: "/solutions/erp",
  },
  {
    icon: <Book className="h-12 w-12" />,
    title: "Hệ Thống Quản Lý Học Tập (LMS)",
    subtitle: "Giáo Dục Trực Tuyến Hiện Đại",
    description:
      "Nền tảng học trực tuyến đầy đủ tính năng, giúp tổ chức giáo dục và doanh nghiệp đào tạo nhân viên hiệu quả.",
    features: [
      "Quản lý khóa học, bài giảng trực tuyến",
      "Video streaming, live class",
      "Bài tập, kiểm tra tự động",
      "Theo dõi tiến độ học tập",
      "Cấp chứng chỉ tự động",
      "Diễn đàn thảo luận, Q&A",
      "Thanh toán khóa học online",
    ],
    benefits: [
      "Mở rộng quy mô đào tạo",
      "Tiết kiệm chi phí vận hành",
      "Theo dõi hiệu quả học tập",
    ],
    link: "/solutions/lms",
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "Giải Pháp AI & Tự Động Hóa",
    subtitle: "Công Nghệ Thông Minh Cho Doanh Nghiệp",
    description:
      "Ứng dụng AI vào kinh doanh với chatbot thông minh, phân tích dữ liệu và tự động hóa quy trình để tăng hiệu quả.",
    features: [
      "Chatbot AI tư vấn khách hàng 24/7",
      "Phân tích dữ liệu thông minh (Big Data)",
      "Dự đoán xu hướng, hành vi khách hàng",
      "Tự động hóa quy trình marketing",
      "Cá nhân hóa trải nghiệm người dùng",
      "Nhận diện hình ảnh, giọng nói",
      "Tích hợp API AI (OpenAI, Google AI)",
    ],
    benefits: [
      "Tăng hiệu quả vận hành 300%",
      "Giảm chi phí nhân sự",
      "Ra quyết định dựa trên dữ liệu",
    ],
    link: "/solutions/ai-automation",
  },
];
