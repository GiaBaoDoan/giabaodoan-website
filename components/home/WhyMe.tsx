import { CircleCheck, Clock, Edit, ShieldCheck } from "lucide-react";

const WhyMe = () => {
  return (
    <section className="mx-auto w-full container px-4 md:px-6 relative py-12">
      <h1 className="mx-auto mb-8 text-center text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
        <p className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          Tại sao chọn chúng tôi
        </p>
      </h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
          <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-slate-100 !important hover:border-l-4">
            <div className="flex flex-col space-y-1.5 p-4">
              <div className="font-semibold tracking-tight text-lg">
                <div className="flex items-center gap-4">
                  <CircleCheck className="size-11" />
                  <p className="mb-2 text-xl font-bold">
                    Thiết kế website theo yêu cầu
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <p className="text-base grow">
                Website chuẩn UX/UI, tối ưu SEO, giao diện độc quyền giúp thương
                hiệu chuyên nghiệp hơn.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-slate-100 !important hover:border-l-4">
            <div className="flex flex-col space-y-1.5 p-4">
              <div className="font-semibold tracking-tight text-lg">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="size-11" />
                  <p className="mb-2 text-xl font-bold">
                    Chuẩn SEO, chuẩn UI/UX
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <p className="text-base grow">
                Tối ưu SEO & UX giúp tăng chuyển đổi, thu hút khách hàng!
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-white/10  text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-slate-100 !important hover:border-l-4">
            <div className="flex flex-col space-y-1.5 p-4">
              <div className="font-semibold tracking-tight text-lg">
                <div className="flex items-center gap-4">
                  <Clock className="size-11" />
                  <p className="mb-2 text-xl font-bold">Tốc độ cao & bảo mật</p>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <p className="text-base grow">
                Website tải nhanh, bảo mật vững chắc chống hacker & tấn công
                DDoS.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            <div></div>
            <div className="col-span-2 rounded-lg border border-white/10  text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-slate-100 !important hover:border-l-4">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="font-semibold tracking-tight text-lg">
                  <div className="flex items-center gap-4">
                    <Edit className="size-11" />
                    <p className="mb-2 text-xl font-bold">
                      Dễ quản lý & nâng cấp
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p className="text-base grow">
                  Tích hợp CMS mạnh mẽ giúp quản lý nội dung dễ dàng.
                </p>
              </div>
            </div>
            <div className="col-span-2 rounded-lg border border-white/10  text-card-foreground shadow-sm h-full transition-all duration-300 ease-in-out hover:border-l-slate-100 !important hover:border-l-4">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="font-semibold tracking-tight text-lg">
                  <div className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-life-buoy"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m4.93 4.93 4.24 4.24"></path>
                      <path d="m14.83 9.17 4.24-4.24"></path>
                      <path d="m14.83 14.83 4.24 4.24"></path>
                      <path d="m9.17 14.83-4.24 4.24"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <p className="mb-2 text-xl font-bold">Hỗ trợ lâu dài</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <p className="text-base grow">
                  Bảo trì, cập nhật website miễn phí trọn đời!
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
