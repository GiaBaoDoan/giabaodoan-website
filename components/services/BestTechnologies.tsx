const BestTechnologies = () => {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className="text-2xl font-bold md:text-4xl leading-tight tracking-tighter md:leading-[1.1]"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Công Nghệ Toàn Diện
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            <strong className="text-white">Gia Bảo Digital</strong> thành thạo
            mọi ngôn ngữ lập trình và công nghệ hiện đại - từ Website, Mobile
            App đến Cloud Deploy. Chúng tôi là đối tác công nghệ đáng tin cậy
            cho mọi dự án của bạn!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Frontend & Web */}
          <div className="rounded-lg border hover:shadow-lg transition-shadow duration-300 border-gray-800 shadow-md bg-black text-white">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
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
                    className="lucide lucide-code h-8 w-8 text-white mx-auto"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Frontend & Web
                </h3>
                <p className="text-gray-400 mb-3">
                  Mọi framework & ngôn ngữ web
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      React, Vue, Angular, Svelte
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      Next.js, Nuxt.js, SvelteKit
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      HTML5, CSS3, JavaScript, TypeScript
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      TailwindCSS, Bootstrap, SCSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="rounded-lg border hover:shadow-lg transition-shadow duration-300 border-gray-800 shadow-md bg-black text-white">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
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
                    className="lucide lucide-database h-8 w-8 text-white mx-auto"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Backend & Database
                </h3>
                <p className="text-gray-400 mb-3">Đa dạng ngôn ngữ lập trình</p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      Node.js, Python, PHP, Java
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">C#, Go, Ruby, Rust</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      MySQL, PostgreSQL, MongoDB
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      Redis, Firebase, Supabase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="rounded-lg border hover:shadow-lg transition-shadow duration-300 border-gray-800 shadow-md bg-black text-white">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
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
                    className="lucide lucide-smartphone h-8 w-8 text-white mx-auto"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Mobile Development
                </h3>
                <p className="text-gray-400 mb-3">Native & Cross-platform</p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">React Native, Flutter</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">
                      iOS (Swift), Android (Kotlin)
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">Ionic, Xamarin</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
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
                      className="lucide lucide-check h-4 w-4 text-green-400"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-300">Progressive Web Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">
            Cloud & DevOps Deployment
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Cloud Platforms */}
            <div className="rounded-lg border text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-800 bg-black">
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
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
                      className="lucide lucide-rocket h-6 w-6 text-white mx-auto"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1 text-white">
                    Cloud Platforms
                  </h4>
                  <p className="text-sm text-gray-400">
                    AWS, GCP, Azure, Vercel, Netlify
                  </p>
                </div>
              </div>
            </div>

            {/* DevOps & CI/CD */}
            <div className="rounded-lg border text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-800 bg-black">
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
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
                      className="lucide lucide-shield h-6 w-6 text-white mx-auto"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1 text-white">
                    DevOps & CI/CD
                  </h4>
                  <p className="text-sm text-gray-400">
                    Docker, Kubernetes, Jenkins, GitHub Actions
                  </p>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="rounded-lg border text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-800 bg-black">
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
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
                      className="lucide lucide-database h-6 w-6 text-white mx-auto"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1 text-white">
                    Infrastructure
                  </h4>
                  <p className="text-sm text-gray-400">
                    Terraform, Ansible, Monitoring
                  </p>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="rounded-lg border text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-800 bg-black">
              <div className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
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
                      className="lucide lucide-zap h-6 w-6 text-white mx-auto"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1 text-white">Performance</h4>
                  <p className="text-sm text-gray-400">
                    CDN, Caching, Load Balancing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTechnologies;
