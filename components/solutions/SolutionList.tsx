import SolutionCard from "@/components/solutions/SolutionCard";
import {
  Briefcase,
  Calendar,
  Cpu,
  Hospital,
  Layers,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const SolutionList = () => {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <SolutionCard
          href="/"
          icon={<Briefcase />}
          title="Website Doanh Nghiệp"
          status="new"
          features={[
            "Tốc độ tải < 2s",
            "SEO tự động tối ưu",
            "Admin Dashboard",
            "Bảo mật enterprise",
            "Responsive design",
            "Cloud hosting",
          ]}
          desc="Ứng dụng web hiện đại được xây dựng với Next.js, TypeScript và Admin Dashboard tùy chỉnh Tính năng chính:"
        />
        <SolutionCard
          href="/"
          icon={<ShoppingCart />}
          title="Nền Tảng Ecommerce"
          status="popular"
          desc="Hệ thống thương mại điện tử full-stack với React/Next.js và backend API hiện đại"
          features={[
            "Xử lý 10K+ đơn/ngày",
            "Thanh toán đa kênh",
            "Inventory real-time",
            "Multi-vendor",
            "Analytics dashboard",
            "Mobile app",
          ]}
        />
        <SolutionCard
          href="/"
          icon={<ShoppingCart />}
          title="Nền Tảng Ecommerce"
          status="popular"
          desc="Hệ thống thương mại điện tử full-stack với React/Next.js và backend API hiện đại"
          features={[
            "Xử lý 10K+ đơn/ngày",
            "Thanh toán đa kênh",
            "Inventory real-time",
            "Multi-vendor",
            "Analytics dashboard",
            "Mobile app",
          ]}
        />
        <SolutionCard
          href="/"
          icon={<Rocket />} // hoặc icon bạn chọn
          title="Landing Page Tối Ưu"
          status="popular"
          desc="Single Page Application (SPA) với hiệu suất cao và conversion tracking"
          features={[
            "Conversion rate > 15%",
            "A/B testing tự động",
            "Lead scoring AI",
            "Pixel tracking",
            "Form builder",
            "CRM integration",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Calendar />} // đổi icon theo ý bạn
          title="Hệ Thống Booking"
          status="new"
          desc="Ứng dụng web real-time với WebSocket và database tối ưu cho booking"
          features={[
            "Đồng bộ real-time",
            "Auto reminder SMS",
            "Smart scheduling",
            "Payment integration",
            "Calendar sync",
            "Multi-location",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Sparkles />} // thay icon nếu bạn muốn
          title="Spa & Salon Platform"
          status="popular"
          desc="Nền tảng quản lý spa/salon với microservices architecture và cloud infrastructure"
          features={[
            "Quản lý đa chi nhánh",
            "Loyalty program",
            "AI staff scheduling",
            "Customer portal",
            "Inventory tracking",
            "Revenue analytics",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Users />} // đổi icon tùy ý
          title="CRM Enterprise"
          status="popular"
          desc="Hệ thống CRM được phát triển với Node.js/Python backend và React frontend"
          features={[
            "Tăng sales 40%",
            "Lead scoring AI",
            "Pipeline forecasting",
            "360° customer view",
            "Email automation",
            "Mobile CRM app",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Hospital />} // đổi icon tùy ý
          title="Healthcare Management"
          status="popular"
          desc="Nền tảng quản lý y tế với HIPAA compliance và cloud security"
          features={[
            "Giảm thời gian chờ 60%",
            "Hồ sơ bệnh án điện tử",
            "Telemedicine",
            "Appointment scheduling",
            "Prescription management",
            "Insurance integration",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Smartphone />} // đổi icon tùy ý
          title="Mobile Application"
          status="popular"
          desc="Ứng dụng di động cross-platform với React Native và backend API"
          features={[
            "Native performance",
            "Offline-first design",
            "Biometric authentication",
            "Push notifications",
            "Real-time sync",
            "App store optimization",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Layers />} // đổi icon tùy ý
          title="ERP Enterprise"
          status="popular"
          desc="Hệ thống ERP với microservices architecture và containerized deployment"
          features={[
            "Tối ưu workflow 50%",
            "Real-time reporting",
            "Multi-company support",
            "Custom modules",
            "API integrations",
            "Cloud deployment",
          ]}
        />

        <SolutionCard
          href="/"
          icon={<Cpu />} // đổi icon tùy ý
          title="AI & Machine Learning"
          status="popular"
          desc="Giải pháp AI/ML với Python, TensorFlow và cloud ML services"
          features={[
            "Predictive analytics",
            "Computer vision",
            "Natural language processing",
            "AutoML pipeline",
            "Model deployment",
            "Data visualization",
          ]}
        />
      </div>
    </section>
  );
};

export default SolutionList;
