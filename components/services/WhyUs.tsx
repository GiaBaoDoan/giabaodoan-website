import {
  Brain,
  Clock,
  Layers,
  Rocket,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-16" id="tai-sao-chon-chung-toi">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold md:text-4xl mb-4">
            🏆{" "}
            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tại sao khách hàng tin tưởng Gia Bảo Digital?
            </span>
          </h2>
          <p className="text-lg mx-auto">
            Chúng tôi không chỉ thiết kế website, mà còn giúp doanh nghiệp xây
            dựng thương hiệu số mạnh mẽ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Sparkles className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Thiết Kế Độc Quyền
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Mỗi website được thiết kế riêng, phù hợp với ngành nghề &amp;
                  thương hiệu của bạn, không dùng template có sẵn.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Rocket className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Chuẩn SEO - Lên Top Google
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Tối ưu tốc độ, nội dung, UI/UX, meta tags, sitemap giúp
                  website đạt thứ hạng cao trên Google.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tốc Độ Tải Nhanh
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Sử dụng công nghệ Next.js, Tailwind CSS, CDN, Caching để tăng
                  tốc load web dưới 3 giây.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="size-10 shrink-0" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Bảo Mật Cao Cấp
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp
                  website an toàn trước mọi rủi ro.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Layers className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Hỗ Trợ Lâu Dài
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Bảo trì website, cập nhật tính năng mới, tối ưu liên tục giúp
                  website luôn hoạt động hiệu quả.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Users className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tư Vấn Cá Nhân Hóa
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Đội ngũ chuyên gia lắng nghe và đưa ra giải pháp phù hợp nhất
                  với mục tiêu kinh doanh của bạn.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Smartphone className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Responsive Hoàn Hảo
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Website tối ưu hiển thị trên mọi thiết bị: PC, tablet, điện
                  thoại, đảm bảo trải nghiệm tốt nhất.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <TrendingUp className="size-10" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tăng Chuyển Đổi
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Thiết kế tập trung vào hành vi người dùng, kết hợp CTA mạnh mẽ
                  giúp tăng tỷ lệ chuyển đổi.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Brain className="size-10 shrink-0" />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Công Nghệ AI
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>
                  Ứng dụng AI để phân tích dữ liệu người dùng, cá nhân hóa trải
                  nghiệm và tối ưu hiệu suất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
