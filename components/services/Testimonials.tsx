const testimonials = [
  {
    id: 1,
    initials: "A",
    name: "Anh Minh Hoàng",
    title: "CEO Công ty Thời Trang MH",
    stars: 5,
    feedback:
      "Gia Bảo Digital đã thiết kế website thương mại điện tử rất chuyên nghiệp cho công ty thời trang của chúng tôi. Giao diện đẹp, tốc độ nhanh, SEO hiệu quả.",
    verified: true,
  },
  {
    id: 2,
    initials: "C",
    name: "Chị Lan Phương",
    title: "Giám đốc Marketing Công ty Du Lịch Việt",
    stars: 5,
    feedback:
      "Website du lịch được thiết kế rất đẹp và chuẩn SEO. Sau khi launch, traffic tăng 300% và booking online tăng đáng kể.",
    verified: true,
  },
  {
    id: 3,
    initials: "A",
    name: "Anh Tuấn Minh",
    title: "Founder Startup EdTech VietLearn",
    stars: 5,
    feedback:
      "Gia Bảo Digital đã tư vấn và thiết kế website học trực tuyến rất phù hợp. Hệ thống quản lý khóa học, thanh toán online đều hoạt động mượt mà.",
    verified: true,
  },
  {
    id: 4,
    initials: "C",
    name: "Chị Thu Hà",
    title: "Giám đốc Marketing Công ty Mỹ Phẩm Natural",
    stars: 5,
    feedback:
      "Website đẹp, thân thiện và dễ quản lý. Các tính năng SEO và tối ưu hiệu suất giúp tăng doanh thu online nhanh chóng.",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16" id="danh-gia">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg mx-auto">
            Hơn 100+ doanh nghiệp đã tin tưởng và hợp tác cùng Gia Bảo Digital
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full hover:shadow-xl transition-shadow duration-300 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote absolute top-4 right-4 h-8 w-8 text-yellow-500/20"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>

              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <div className="tracking-tight text-base font-semibold">
                      {t.name}
                    </div>
                    <p className="text-xs">{t.title}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star h-4 w-4 text-yellow-500"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-0">
                  <p className="text-sm italic">{t.feedback}</p>
                  {t.verified && (
                    <div className="flex items-center gap-2 mt-4 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-check h-4 w-4 text-green-500"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>Đã xác thực</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
