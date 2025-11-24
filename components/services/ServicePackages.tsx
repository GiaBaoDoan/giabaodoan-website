import { PricingCard } from "@/components/home";

const ServicePackages = () => {
  return (
    <div>
      {" "}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-16 relative">
          <h2 className="mb-8 text-2xl text-center font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]">
            <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Gói Dịch Vụ Của Chúng Tôi
            </p>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard
              title="Cơ Bản"
              description="Dành cho cá nhân hoặc doanh nghiệp nhỏ cần website cơ bản với SEO tối ưu và tốc độ tải nhanh."
              features={[
                "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
                "Giao diện thiết kế riêng theo thương hiệu",
                "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
                "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
                "Tích hợp Google Maps, Form liên hệ nâng cao",
                "Bảo trì miễn phí 6 tháng",
                "Miễn phí domain 1 năm",
              ]}
            />
            <PricingCard
              title="Chuyên Nghiệp"
              description="Phù hợp doanh nghiệp cần website chuyên nghiệp với tính năng nâng cao và SEO mạnh mẽ."
              features={[
                "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
                "Giao diện thiết kế riêng theo thương hiệu",
                "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
                "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
                "Tích hợp Google Maps, Form liên hệ nâng cao",
                "Bảo trì miễn phí 6 tháng",
                "Miễn phí domain 1 năm",
              ]}
            />
            <PricingCard
              isPopular={true}
              title="Thương Mại Điện Tử"
              description="Thương Mại Điện Tử
                Giải pháp thiết kế website thương mại điện tử chuẩn SEO, tối ưu tốc độ, hỗ trợ thanh toán và quản lý đơn hàng hiệu quả."
              features={[
                "Thiết kế UI/UX chuyên nghiệp, tối ưu trải nghiệm mua sắm",
                "Tích hợp giỏ hàng, thanh toán Momo, VNPay, Stripe, PayPal",
                "Quản lý sản phẩm, đơn hàng, khách hàng & kho hàng",
                "Tích hợp chatbot tư vấn, hệ thống mã giảm giá",
                "Đa ngôn ngữ, đa tiền tệ",
                "Bảo trì miễn phí 12 tháng",
                "Miễn phí domain 1 năm",
              ]}
            />
            <PricingCard
              title="Giải Pháp Tùy Chỉnh"
              description="Phát triển ứng dụng web/mobile theo yêu cầu đặc biệt."
              features={[
                "Thiết kế & lập trình theo yêu cầu đặc thù",
                "Ứng dụng Web App, Mobile App (iOS & Android)",
                "Hệ thống web app (CRM, ERP, SaaS...)",
                "Tích hợp API, hệ thống tự động hóa, quản lý nội bộ",
                "Hỗ trợ AI & Machine Learning nếu cần",
                "Hỗ trợ & bảo trì theo hợp đồng riêng",
                "Miễn phí domain 1 năm",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePackages;
