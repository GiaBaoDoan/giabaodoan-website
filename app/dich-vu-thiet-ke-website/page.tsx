import { OurProjects } from "@/components/home";
import BestTechnologies from "@/components/services/BestTechnologies";
import FAQ from "@/components/services/FAQ";
import HightLightFeature from "@/components/services/HightLightFeature";
import OurServices from "@/components/services/OurServices";
import ProccessDesignProduct from "@/components/services/ProccessDesignProduct";
import ServicePackages from "@/components/services/ServicePackages";
import Testimonials from "@/components/services/Testimonials";
import WhyUs from "@/components/services/WhyUs";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Check, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <section className="relative py-32 md:py-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto text-center">
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
              Thiết Kế Website Chuyên Nghiệp
            </h1>
            <p className="text-lg font-medium mb-8">
              Tạo Lợi Thế Cạnh Tranh &amp; Tăng Trưởng Doanh Thu
            </p>
            <p className="mx-auto mb-10">
              Chúng tôi cung cấp dịch vụ thiết kế website chuyên nghiệp, chuẩn
              SEO, tốc độ cao và tối ưu chuyển đổi, giúp doanh nghiệp của bạn
              nổi bật trong thị trường số và thu hút khách hàng tiềm năng.
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
                <NumberTicker value={50} />+
              </p>
              <p className="text-sm md:text-base">Dự án thành công</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={98} />%
              </p>
              <p className="text-sm md:text-base">Khách hàng hài lòng</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={85} />%
              </p>
              <p className="text-sm md:text-base">Tăng lượng truy cập</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <NumberTicker value={65} />%
              </p>
              <p className="text-sm md:text-base">Tăng tỷ lệ chuyển đổ</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="thach-thuc">
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
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">📉</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Mất Khách Hàng Tiềm Năng
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            88%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            khách hàng sẽ không quay lại nếu website có trải
                            nghiệm kém, giao diện lỗi thời hoặc khó sử dụng.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Mất cơ hội kinh doanh</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">⚡</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Tốc Độ Tải Chậm
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            53%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            khách hàng rời bỏ website nếu thời gian tải trang
                            vượt quá 3 giây, ảnh hưởng trực tiếp đến doanh số.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Giảm tỷ lệ chuyển đổi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">🔍</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Không Xuất Hiện Trên Google
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            75%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            doanh nghiệp không được tìm thấy trên Google do
                            website không tối ưu SEO, mất đi nguồn khách hàng
                            miễn phí.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Thua kém đối thủ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">💼</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Thiếu Uy Tín Thương Hiệu
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            94%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            người dùng đánh giá độ tin cậy của doanh nghiệp dựa
                            trên thiết kế website chuyên nghiệp hay không.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Khó thu hút khách hàng</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">📱</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Không Tương Thích Mobile
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            60%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            lượng truy cập đến từ thiết bị di động, nhưng nhiều
                            website không hiển thị tốt trên mobile.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Mất nửa thị trường</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">🔒</span>
                      <div className="flex-1">
                        <div className="font-semibold tracking-tight text-lg mb-2">
                          Bảo Mật Yếu Kém
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-red-500">
                            43%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            website bị tấn công mỗi ngày do không có biện pháp
                            bảo mật đầy đủ, gây thiệt hại về dữ liệu và uy tín.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                      <span>⚠️</span>
                      <span>Rủi ro pháp lý</span>
                    </div>
                  </div>
                </div>
              </div>
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
                      <span className="font-medium">Tăng trưởng doanh thu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="stroke-emerald-500 size-5" />
                      <span className="font-medium">
                        Nâng cao uy tín thương hiệu
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleCheckBig className="stroke-emerald-500 size-5" />
                      <span className="font-medium">
                        Tối ưu trải nghiệm khách hàng
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <HightLightFeature />
      <section className="py-20" id="seo-advantages">
        <div className="px-4 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Lợi thế SEO vượt trội
            </h2>
            <p className="text-lg mx-auto">
              Chúng tôi áp dụng các chiến lược SEO tiên tiến giúp website của
              bạn dễ dàng được tìm thấy trên công cụ tìm kiếm
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://res.cloudinary.com/dtmxgrnfn/image/upload/v1743770315/tanphatdigital/djttnf2i9danbqgwn1dv.webp"
                alt="SEO Optimization for Websites"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <CircleCheckBig className="size-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cấu trúc website tối ưu cho SEO
                    </h3>
                    <p>
                      Thiết kế cấu trúc URL thân thiện, tối ưu hóa thẻ meta,
                      heading và nội dung theo từ khóa mục tiêu.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckBig className="size-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Tốc độ tải trang vượt trội
                    </h3>
                    <p>
                      Tối ưu hóa mã nguồn, hình ảnh và tài nguyên để đạt điểm
                      PageSpeed Insights cao, cải thiện trải nghiệm người dùng.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckBig className="size-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Schema Markup tích hợp
                    </h3>
                    <p>
                      Cung cấp dữ liệu có cấu trúc giúp Google hiểu rõ nội dung
                      website, tăng khả năng hiển thị rich snippets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckBig className="size-6 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Tương thích thiết bị di động
                    </h3>
                    <p>
                      Thiết kế responsive hoàn hảo, đáp ứng tiêu chí
                      Mobile-First Indexing của Google, tăng trải nghiệm người
                      dùng trên mọi thiết bị.
                    </p>
                  </div>
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
      <ServicePackages />
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
                Chuyển đổi doanh nghiệp với website chuyên nghiệp ngay hôm nay!
              </h2>
              <p className="text-lg mb-8 mx-auto">
                Liên hệ ngay hôm nay để nhận tư vấn miễn phí và khám phá các
                giải pháp website tối ưu cho doanh nghiệp của bạn. Chúng tôi sẽ
                cung cấp báo giá nhanh chóng, phù hợp với nhu cầu và ngân sách
                của bạn.
              </p>
              <div>
                <Link href="/contact">
                  <div className="group inline-block mt-6">
                    <InteractiveHoverButton>
                      <span className="relative z-10">Liên Hệ Ngay</span>
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
