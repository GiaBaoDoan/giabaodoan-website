import {
  ChartNoAxesColumn,
  Code,
  MessageSquare,
  PanelLeft,
  Search,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const HightLightFeature = () => {
  return (
    <section className="py-16" id="tinh-nange">
      <div className="container mx-auto rounded-3xl px-4 my-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Tính năng nổi bật của website chuyên nghiệp
          </h2>
          <p className="text-lg mx-auto">
            Chúng tôi tích hợp các tính năng hiện đại giúp website của bạn không
            chỉ đẹp mắt mà còn hiệu quả trong việc thu hút và chuyển đổi khách
            hàng
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <PanelLeft />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Thiết kế UI/UX chuyên nghiệp
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Giao diện đẹp mắt, thân thiện người dùng</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Search />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tối ưu SEO toàn diện
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Dễ dàng được tìm thấy trên Google</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Smartphone />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tương thích đa thiết bị
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Hiển thị hoàn hảo trên mọi màn hình</p>
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
                    Tốc độ tải trang nhanh
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Tối ưu trải nghiệm người dùng</p>
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
                    Bảo mật cao cấp
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Chứng chỉ SSL và các biện pháp bảo vệ</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <Code />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Mã nguồn sạch
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Dễ dàng bảo trì và nâng cấp</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <MessageSquare />
                  </div>
                  <div className="tracking-tight text-lg font-semibold">
                    Tích hợp chat trực tuyến
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Hỗ trợ khách hàng tức thì</p>
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
                    Phân tích dữ liệu
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p>Theo dõi và tối ưu hiệu suất</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HightLightFeature;
