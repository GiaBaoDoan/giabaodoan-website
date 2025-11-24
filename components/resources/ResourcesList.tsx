import ResourceCard from "@/components/resources/ResourcesCard";
import {
  Briefcase,
  ChartNoAxesColumnIncreasing,
  FileText,
  Link,
  Mail,
  Search,
  Share2,
  Target,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";

const ResourcesList = () => {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ResourceCard
          type="Course"
          title="Cẩm Nang SEO Toàn Diện 2025"
          description="Bí quyết đưa website lên TOP 3 Google trong 90 ngày - Từ zero đến hero với chiến lược SEO thực chiến"
          time="45 phút"
          learners="2.5K"
          status="new"
          icon={<Search />}
          href="#"
        />
        <ResourceCard
          type="Strategy"
          title="Chiến Lược Content Marketing"
          description="Công thức tạo nội dung viral thu hút 10K+ khách hàng tiềm năng mỗi tháng"
          time="30 phút"
          learners="1.8k"
          status="popular"
          icon={<FileText />}
          href="#"
        />
        <ResourceCard
          type="Guide"
          title="Nghiên Cứu Từ Khóa Chuyên Sâu"
          description="Phát hiện từ khóa 'vàng' ít cạnh tranh nhưng traffic cao - Bí mật của các SEO expert"
          time="30 Phút"
          learners="1.2k"
          status="popular"
          icon={<Target />}
          href="#"
        />
        <ResourceCard
          type="Strategy"
          title="Chiến Lược Backlink Bền Vững"
          description="Hệ thống backlink chất lượng giúp tăng Domain Authority 50+ điểm trong 6 tháng"
          time="35 Phút"
          learners="950"
          status="popular"
          icon={<Link />}
          href="#"
        />
        <ResourceCard
          type="Technical"
          title="Tối Ưu Tốc Độ Website"
          description="Tăng tốc website lên 95+ điểm PageSpeed - Giảm bounce rate 40% và tăng conversion"
          time="40 Phút"
          learners="1.1k"
          status="popular"
          icon={<Zap />}
          href="#"
        />
        <ResourceCard
          type="Course"
          title="Hướng Dẫn Facebook Ads"
          description="Công thức chạy Facebook Ads ROI 500%+ - Từ 1 triệu budget thu về 5 triệu doanh thu"
          time="60 Phút"
          learners="2.1k"
          icon={<Share2 />}
          href="#"
        />
        <ResourceCard
          type="Course"
          title="TikTok Ads Mastery"
          description="Bí quyết tạo TikTok Ads viral 1M+ views - Chinh phục Gen Z với chi phí siêu thấp"
          time="45 Phút"
          learners="800"
          icon={<Video />}
          href="#"
        />
        <ResourceCard
          type="Guide"
          title="Email Marketing Hiệu Quả"
          description="Hệ thống email tự động hóa tăng doanh thu 300% - Từ welcome series đến win-back campaign"
          time="35 Phút"
          learners="1.3k"
          icon={<Mail />}
          href="#"
        />
        <ResourceCard
          type="Ebook"
          title="SEO & Digital Marketing Ebook"
          description="Bộ sưu tập 200+ chiến lược marketing đã được verify - Từ startup đến enterprise"
          time="120 phút"
          learners="3.2k"
          icon={<TrendingUp />}
          href="#"
        />
        <ResourceCard
          type="Tutorial"
          title="Google Analytics & Search Console"
          description="Thiết lập tracking hoàn hảo - Đo lường ROI chính xác từng chiến dịch marketing"
          time="50 phút"
          learners="1.5k"
          icon={<ChartNoAxesColumnIncreasing />}
          href="#"
        />
        <ResourceCard
          type="Tookit"
          title="Bộ Công Cụ Doanh Nghiệp"
          description="50+ tools và templates giúp tăng productivity 200% - Từ planning đến execution"
          time="40 phút"
          learners="900"
          status="new"
          icon={<Briefcase />}
          href="#"
        />
      </div>
    </section>
  );
};

export default ResourcesList;
