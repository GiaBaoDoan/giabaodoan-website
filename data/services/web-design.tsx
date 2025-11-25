import { Brain, ChartLine, ChartNoAxesColumn, ClipboardCheck, Clock, Cloud, Code, Database, Layers, MessageSquare, Monitor, PanelLeft, Rocket, Search, Settings, Shield, Smartphone, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export const designWebDataPage = {
  stats: [
    { label: "Dự án thành công", value: 50, suffix: "+" },
    { label: "Khách hàng hài lòng", value: 98, suffix: "%" },
    { label: "Tăng lượng truy cập", value: 85, suffix: "%" },
    { label: "Tăng tỷ lệ chuyển đổi", value: 65, suffix: "%" },
  ],
  risks: [
    {
      emoji: "📉",
      title: "Mất Khách Hàng Tiềm Năng",
      percent: "88%",
      description:
        "khách hàng sẽ không quay lại nếu website có trải nghiệm kém, giao diện lỗi thời hoặc khó sử dụng.",
      warning: "Mất cơ hội kinh doanh",
    },
    {
      emoji: "⚡",
      title: "Tốc Độ Tải Chậm",
      percent: "53%",
      description:
        "khách hàng rời bỏ website nếu thời gian tải trang vượt quá 3 giây, ảnh hưởng trực tiếp đến doanh số.",
      warning: "Giảm tỷ lệ chuyển đổi",
    },
    {
      emoji: "🔍",
      title: "Không Xuất Hiện Trên Google",
      percent: "75%",
      description:
        "doanh nghiệp không được tìm thấy trên Google do website không tối ưu SEO, mất đi nguồn khách hàng miễn phí.",
      warning: "Thua kém đối thủ",
    },
    {
      emoji: "💼",
      title: "Thiếu Uy Tín Thương Hiệu",
      percent: "94%",
      description:
        "người dùng đánh giá độ tin cậy của doanh nghiệp dựa trên thiết kế website chuyên nghiệp hay không.",
      warning: "Khó thu hút khách hàng",
    },
    {
      emoji: "📱",
      title: "Không Tương Thích Mobile",
      percent: "60%",
      description:
        "lượng truy cập đến từ thiết bị di động, nhưng nhiều website không hiển thị tốt trên mobile.",
      warning: "Mất nửa thị trường",
    },
    {
      emoji: "🔒",
      title: "Bảo Mật Yếu Kém",
      percent: "43%",
      description:
        "website bị tấn công mỗi ngày do không có biện pháp bảo mật đầy đủ, gây thiệt hại về dữ liệu và uy tín.",
      warning: "Rủi ro pháp lý",
    },
  ],
  packages: [
    {
      title: "Cơ Bản",
      description:
        "Dành cho cá nhân hoặc doanh nghiệp nhỏ cần website cơ bản với SEO tối ưu và tốc độ tải nhanh.",
      features: [
        "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
        "Giao diện thiết kế riêng theo thương hiệu",
        "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
        "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
        "Tích hợp Google Maps, Form liên hệ nâng cao",
        "Bảo trì miễn phí 6 tháng",
        "Miễn phí domain 1 năm",
      ],
    },
    {
      title: "Chuyên Nghiệp",
      description:
        "Phù hợp doanh nghiệp cần website chuyên nghiệp với tính năng nâng cao và SEO mạnh mẽ.",
      features: [
        "Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)",
        "Giao diện thiết kế riêng theo thương hiệu",
        "Tối ưu SEO nâng cao, hỗ trợ đẩy top Google",
        "Tích hợp CMS giúp dễ dàng cập nhật nội dung",
        "Tích hợp Google Maps, Form liên hệ nâng cao",
        "Bảo trì miễn phí 6 tháng",
        "Miễn phí domain 1 năm",
      ],
    },
    {
      title: "Thương Mại Điện Tử",
      isPopular: true,
      description:
        "Giải pháp thiết kế website thương mại điện tử chuẩn SEO, tối ưu tốc độ, hỗ trợ thanh toán và quản lý đơn hàng hiệu quả.",
      features: [
        "Thiết kế UI/UX chuyên nghiệp, tối ưu trải nghiệm mua sắm",
        "Tích hợp giỏ hàng, thanh toán Momo, VNPay, Stripe, PayPal",
        "Quản lý sản phẩm, đơn hàng, khách hàng & kho hàng",
        "Tích hợp chatbot tư vấn, hệ thống mã giảm giá",
        "Đa ngôn ngữ, đa tiền tệ",
        "Bảo trì miễn phí 12 tháng",
        "Miễn phí domain 1 năm",
      ],
    },
    {
      title: "Giải Pháp Tùy Chỉnh",
      description: "Phát triển ứng dụng web/mobile theo yêu cầu đặc biệt.",
      features: [
        "Thiết kế & lập trình theo yêu cầu đặc thù",
        "Ứng dụng Web App, Mobile App (iOS & Android)",
        "Hệ thống web app (CRM, ERP, SaaS...)",
        "Tích hợp API, hệ thống tự động hóa, quản lý nội bộ",
        "Hỗ trợ AI & Machine Learning nếu cần",
        "Hỗ trợ & bảo trì theo hợp đồng riêng",
        "Miễn phí domain 1 năm",
      ],
    },
  ],
  process: [
    {
      number: "01",
      title: "Tư vấn & phân tích nhu cầu",
      desc: "Chúng tôi tìm hiểu kỹ về doanh nghiệp, mục tiêu kinh doanh và đối tượng khách hàng để đề xuất giải pháp website phù hợp nhất.",
      icon: ChartLine,
      bgColor: "bg-primary text-primary-foreground",
    },
    {
      number: "02",
      title: "Thiết kế giao diện UI/UX",
      desc: "Đội ngũ thiết kế sẽ xây dựng bản phác thảo và thiết kế giao diện theo đúng nhận diện thương hiệu và mục tiêu của bạn.",
      icon: Monitor,
      bgColor: "bg-secondary text-secondary-foreground",
    },
    {
      number: "03",
      title: "Lập trình & phát triển",
      desc: "Các lập trình viên chuyên nghiệp sẽ biến thiết kế thành website hoàn chỉnh với tốc độ tải trang nhanh và chuẩn SEO.",
      icon: Code,
      bgColor: "bg-primary text-primary-foreground",
    },
    {
      number: "04",
      title: "Kiểm thử & tối ưu",
      desc: "Website được kiểm tra kỹ lưỡng trên nhiều thiết bị và trình duyệt khác nhau để đảm bảo hoạt động ổn định.",
      icon: ClipboardCheck,
      bgColor: "bg-secondary text-secondary-foreground",
    },
    {
      number: "05",
      title: "Triển khai & bàn giao",
      desc: "Chúng tôi bàn giao website và hướng dẫn chi tiết cách quản trị, cập nhật nội dung và sử dụng các tính năng.",
      icon: Rocket,
      bgColor: "bg-primary text-primary-foreground",
    },
    {
      number: "06",
      title: "Hỗ trợ & bảo trì",
      desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ, bảo trì và nâng cấp website của bạn trong suốt quá trình sử dụng.",
      icon: Settings,
      bgColor: "bg-secondary text-secondary-foreground",
      final: true,
    },
  ],
  cloudDevsOf: [
    {
      title: "Cloud Platforms",
      description: "AWS, GCP, Azure, Vercel, Netlify",
      icon: <Rocket className="h-6 w-6 text-white mx-auto" />,
    },
    {
      title: "DevOps & CI/CD",
      description: "Docker, Kubernetes, Jenkins, GitHub Actions",
      icon: <Shield className="h-6 w-6 text-white mx-auto" />,
    },
    {
      title: "Infrastructure",
      description: "Terraform, Ansible, Monitoring",
      icon: <Database className="h-6 w-6 text-white mx-auto" />,
    },
    {
      title: "Performance",
      description: "CDN, Caching, Load Balancing",
      icon: <Zap className="h-6 w-6 text-white mx-auto" />,
    },
  ],
  advantages: [
    {
      icon: <Sparkles />,
      title: "Thiết Kế Độc Quyền",
      desc: "Mỗi website được thiết kế riêng, phù hợp với ngành nghề & thương hiệu của bạn, không dùng template có sẵn.",
    },
    {
      icon: <Rocket />,
      title: "Chuẩn SEO - Lên Top Google",
      desc: "Tối ưu tốc độ, nội dung, UI/UX, meta tags, sitemap giúp website đạt thứ hạng cao trên Google.",
    },
    {
      icon: <Zap />,
      title: "Tốc Độ Tải Nhanh",
      desc: "Sử dụng công nghệ Next.js, Tailwind CSS, CDN, Caching để tăng tốc load web dưới 3 giây.",
    },
    {
      icon: <Clock />,
      title: "Bảo Mật Cao Cấp",
      desc: "Tích hợp SSL, chống DDoS, bảo vệ dữ liệu khách hàng, giúp website an toàn trước mọi rủi ro.",
    },
    {
      icon: <Layers />,
      title: "Hỗ Trợ Lâu Dài",
      desc: "Bảo trì website, cập nhật tính năng mới, tối ưu liên tục giúp website luôn hoạt động hiệu quả.",
    },
    {
      icon: <Users />,
      title: "Tư Vấn Cá Nhân Hóa",
      desc: "Đội ngũ chuyên gia lắng nghe và đưa ra giải pháp phù hợp nhất với mục tiêu kinh doanh của bạn.",
    },
    {
      icon: <Smartphone />,
      title: "Responsive Hoàn Hảo",
      desc: "Website tối ưu hiển thị trên mọi thiết bị: PC, tablet, điện thoại, đảm bảo trải nghiệm tốt nhất.",
    },
    {
      icon: <TrendingUp />,
      title: "Tăng Chuyển Đổi",
      desc: "Thiết kế tập trung vào hành vi người dùng, kết hợp CTA mạnh mẽ giúp tăng tỷ lệ chuyển đổi.",
    },
    {
      icon: <Brain />,
      title: "Công Nghệ AI",
      desc: "Ứng dụng AI để phân tích dữ liệu người dùng, cá nhân hóa trải nghiệm và tối ưu hiệu suất.",
    },
  ],
  features: [
    {
      icon: <PanelLeft />,
      title: "Thiết kế UI/UX chuyên nghiệp",
      description: "Giao diện đẹp mắt, thân thiện người dùng",
    },
    {
      icon: <Search />,
      title: "Tối ưu SEO toàn diện",
      description: "Dễ dàng được tìm thấy trên Google",
    },
    {
      icon: <Smartphone />,
      title: "Tương thích đa thiết bị",
      description: "Hiển thị hoàn hảo trên mọi màn hình",
    },
    {
      icon: <Zap />,
      title: "Tốc độ tải trang nhanh",
      description: "Tối ưu trải nghiệm người dùng",
    },
    {
      icon: <Shield />,
      title: "Bảo mật cao cấp",
      description: "Chứng chỉ SSL và các biện pháp bảo vệ",
    },
    {
      icon: <Code />,
      title: "Mã nguồn sạch",
      description: "Dễ dàng bảo trì và nâng cấp",
    },
    {
      icon: <MessageSquare />,
      title: "Tích hợp chat trực tuyến",
      description: "Hỗ trợ khách hàng tức thì",
    },
    {
      icon: <ChartNoAxesColumn />,
      title: "Phân tích dữ liệu",
      description: "Theo dõi và tối ưu hiệu suất",
    }],
  benfits: [
    {
      title: "Cấu trúc website tối ưu cho SEO",
      description:
        "Thiết kế cấu trúc URL thân thiện, tối ưu hóa thẻ meta, heading và nội dung theo từ khóa mục tiêu.",
    },
    {
      title: "Tốc độ tải trang vượt trội",
      description:
        "Tối ưu hóa mã nguồn, hình ảnh và tài nguyên để đạt điểm PageSpeed Insights cao, cải thiện trải nghiệm người dùng.",
    },
    {
      title: "Schema Markup tích hợp",
      description:
        "Cung cấp dữ liệu có cấu trúc giúp Google hiểu rõ nội dung website, tăng khả năng hiển thị rich snippets.",
    },
    {
      title: "Tương thích thiết bị di động",
      description:
        "Thiết kế responsive hoàn hảo, đáp ứng tiêu chí Mobile-First Indexing của Google, tăng trải nghiệm người dùng trên mọi thiết bị.",
    },
  ],
  technologies: [
    {
      title: "Frontend & Web",
      description: "Mọi framework & ngôn ngữ web",
      items: [
        "React, Vue, Angular, Svelte",
        "Next.js, Nuxt.js, SvelteKit",
        "HTML5, CSS3, JavaScript, TypeScript",
        "TailwindCSS, Bootstrap, SCSS",
      ],
      icon: <Code className="h-8 w-8 text-white mx-auto" />,
    },
    {
      title: "Backend & Database",
      description: "Đa dạng ngôn ngữ lập trình",
      items: [
        "Node.js, Python, PHP, Java",
        "C#, Go, Ruby, Rust",
        "MySQL, PostgreSQL, MongoDB",
        "Redis, Firebase, Supabase",
      ],
      icon: <Database className="h-8 w-8 text-white mx-auto" />,
    },
    {
      title: "Mobile Development",
      description: "Native & Cross-platform",
      items: [
        "React Native, Flutter",
        "iOS (Swift), Android (Kotlin)",
        "Ionic, Xamarin",
        "Progressive Web Apps",
      ],
      icon: <Smartphone className="h-8 w-8 text-white mx-auto" />,
    },
  ],
  partners: [
    {
      title: "🌐 Website & Web Apps",
      color: "text-blue-400",
      items: [
        "Landing Page, Corporate Website",
        "E-commerce, CMS, Blog",
        "Web Application, Dashboard",
        "API Development & Integration",
      ],
    },
    {
      title: "📱 Mobile Applications",
      color: "text-green-400",
      items: [
        "iOS & Android Native Apps",
        "Cross-platform (React Native, Flutter)",
        "Progressive Web Apps (PWA)",
        "App Store Deployment",
      ],
    },
  ],
  feedBacks: [
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
  ],
  fqas: [
    {
      question: "Chi phí thiết kế website là bao nhiêu?",
      answer:
        "Chi phí thiết kế website phụ thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui lòng liên hệ để nhận báo giá chi tiết.",
    },
    {
      question:
        "Tôi có thể thiết kế website theo ngân sách riêng không?",
      answer:
        "Có. Chúng tôi luôn linh hoạt tư vấn giải pháp phù hợp với ngân sách và mục tiêu kinh doanh của bạn, đảm bảo tối ưu chi phí và hiệu quả.",
    },
    {
      question:
        "Gia Bảo Digital có gói thiết kế website trọn gói không?",
      answer:
        "Chúng tôi cung cấp các gói thiết kế website trọn gói bao gồm tên miền, hosting, giao diện, tối ưu tốc độ và SEO cơ bản, giúp bạn tiết kiệm thời gian và chi phí.",
    },
    {
      question: "Phí duy trì website hàng năm gồm những gì?",
      answer:
        "Phí duy trì hàng năm thường bao gồm chi phí tên miền, hosting, chứng chỉ SSL và bảo trì kỹ thuật cơ bản. Chúng tôi sẽ báo giá cụ thể tùy theo nhu cầu.",
    },
    {
      question: "Thời gian thiết kế một website mất bao lâu?",
      answer:
        "Thời gian thiết kế website thường từ 2-6 tuần tùy vào quy mô, tính năng và yêu cầu thiết kế. Chúng tôi luôn đảm bảo tiến độ và chất lượng.",
    },
    {
      question: "Tôi có thể yêu cầu website chuẩn SEO không?",
      answer:
        "Có. Chúng tôi thiết kế website chuẩn SEO, tối ưu tốc độ, trải nghiệm người dùng và hỗ trợ các công cụ tìm kiếm để nâng cao thứ hạng trên Google.",
    },
    {
      question:
        "Website có thể tích hợp với fanpage Facebook hoặc Zalo không?",
      answer:
        "Chúng tôi hỗ trợ tích hợp website với fanpage Facebook, Zalo, và các nền tảng khác để đồng bộ dữ liệu và tăng trải nghiệm khách hàng.",
    },
    {
      question: "Tôi có thể tự cập nhật nội dung trên website không?",
      answer:
        "Có. Chúng tôi thiết kế website với hệ thống quản trị nội dung (CMS) dễ sử dụng, giúp bạn tự cập nhật thông tin, hình ảnh và bài viết mà không cần kỹ thuật viên.",
    },
    {
      question:
        "Có hỗ trợ bảo trì và nâng cấp website sau khi hoàn thành không?",
      answer:
        "Chúng tôi cung cấp dịch vụ bảo trì, nâng cấp và tối ưu website định kỳ để đảm bảo hoạt động ổn định, bảo mật và luôn cập nhật các tính năng mới.",
    },
    {
      question:
        "Website có thiết kế chuẩn trên điện thoại và máy tính bảng không?",
      answer:
        "Tất cả website của chúng tôi đều thiết kế responsive, hiển thị đẹp và tối ưu trải nghiệm người dùng trên mọi thiết bị từ máy tính đến điện thoại và máy tính bảng.",
    },
  ]
}
