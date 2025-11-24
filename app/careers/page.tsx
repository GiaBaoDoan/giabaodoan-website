import CarrerList from "@/components/carrers/CarrerList";

const page = () => {
  return (
    <section>
      <div className="py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tham Gia Đội Ngũ Chuyên Gia
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Cơ hội nghề nghiệp hấp dẫn trong lĩnh vực công nghệ và marketing
            </p>
          </div>
          <p className="text-lg mb-10 mx-auto max-w-4xl">
            Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng xây dựng các
            sản phẩm công nghệ tiên tiến và chiến lược marketing đột phá.
          </p>
        </div>
      </div>
      <CarrerList />
    </section>
  );
};

export default page;
