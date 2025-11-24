import SolutionList from "@/components/solutions/SolutionList";

const page = () => {
  return (
    <div>
      <section className="relative py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Giải Pháp Website &amp; Phần Mềm Chuyên Nghiệp
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Khám phá các giải pháp website và phần mềm được thiết kế riêng cho
              doanh nghiệp của bạn
            </p>
          </div>
          <p className="text-lg mb-10 mx-auto max-w-4xl">
            Từ website doanh nghiệp đến hệ thống quản lý phức tạp, chúng tôi
            cung cấp giải pháp toàn diện cho mọi nhu cầu kinh doanh.
          </p>
        </div>
      </section>
      <SolutionList />
    </div>
  );
};

export default page;
