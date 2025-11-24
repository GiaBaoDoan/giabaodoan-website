import {
  ArrowRight,
  ChartLine,
  ClipboardCheck,
  Code,
  Monitor,
  Rocket,
  Settings,
} from "lucide-react";

const ProccessDesignProduct = () => {
  return (
    <section className="py-16" id="quy-trinh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Quy Trình Thiết Kế Website Chuyên Nghiệp
          </h2>
          <p className="text-lg mx-auto">
            6 bước đơn giản để sở hữu website hoàn hảo cho doanh nghiệp của bạn
          </p>
        </div>
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">01</div>
                    <div className="text-sm opacity-80">Next Step →</div>
                  </div>
                </div>
                <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <ChartLine className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Tư vấn &amp; phân tích nhu cầu
                        </h3>
                        <p className=" mt-2">
                          Chúng tôi tìm hiểu kỹ về doanh nghiệp, mục tiêu kinh
                          doanh và đối tượng khách hàng để đề xuất giải pháp
                          website phù hợp nhất.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row-reverse">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-secondary text-secondary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">02</div>
                    <div className="text-sm opacity-80">Next Step →</div>
                  </div>
                </div>
                <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                        <Monitor />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Thiết kế giao diện UI/UX
                        </h3>
                        <p className=" mt-2">
                          Đội ngũ thiết kế sẽ xây dựng bản phác thảo và thiết kế
                          giao diện theo đúng nhận diện thương hiệu và mục tiêu
                          của bạn.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">03</div>
                    <div className="text-sm opacity-80">Next Step →</div>
                  </div>
                </div>
                <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Code className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Lập trình &amp; phát triển
                        </h3>
                        <p className=" mt-2">
                          Các lập trình viên chuyên nghiệp sẽ biến thiết kế
                          thành website hoàn chỉnh với tốc độ tải trang nhanh và
                          chuẩn SEO.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row-reverse">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-secondary text-secondary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">04</div>
                    <div className="text-sm opacity-80">Next Step →</div>
                  </div>
                </div>
                <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                        <ClipboardCheck className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Kiểm thử &amp; tối ưu
                        </h3>
                        <p className=" mt-2">
                          Website được kiểm tra kỹ lưỡng trên nhiều thiết bị và
                          trình duyệt khác nhau để đảm bảo hoạt động ổn định.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">05</div>
                    <div className="text-sm opacity-80">Next Step →</div>
                  </div>
                </div>
                <div className="absolute hidden md:block h-24 w-1 bg-linear-to-b from-muted to-transparent left-1/2 transform -translate-x-1/2 top-full"></div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Rocket className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Triển khai &amp; bàn giao
                        </h3>
                        <p className=" mt-2">
                          Chúng tôi bàn giao website và hướng dẫn chi tiết cách
                          quản trị, cập nhật nội dung và sử dụng các tính năng.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row-reverse">
              <div className="relative shrink-0 w-full md:w-1/3">
                <div className="relative z-10 mx-auto md:mx-0 w-40 h-40 rounded-full flex items-center justify-center shadow-lg bg-secondary text-secondary-foreground">
                  <div className="text-center">
                    <div className="text-5xl font-bold">06</div>
                    <div className="text-sm opacity-80">Final Step</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                        <Settings className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Hỗ trợ &amp; bảo trì
                        </h3>
                        <p className=" mt-2">
                          Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ, bảo trì và nâng
                          cấp website của bạn trong suốt quá trình sử dụng.
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 mt-2 group">
                      Tìm hiểu thêm
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProccessDesignProduct;
