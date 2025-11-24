import Contact from "@/components/contact/Contact";

const page = () => {
  return (
    <section>
      <div className="relative z-10 mx-auto px-4 text-center py-16 container">
        <div>
          <h1 className="text-2xl font-bold md:text-4xl mb-8 text-center">
            <span className="bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Liên Hệ Với Gia Bảo Digital – Kết Nối Ngay Hôm Nay!
            </span>
          </h1>
          <p className="text-xl font-medium text-center mb-8">
            Gia Bảo Digital cung cấp dịch vụ thiết kế website chuẩn SEO, tối ưu
            tốc độ và giao diện hiện đại, giúp doanh nghiệp không chỉ tạo dựng
            thương hiệu số mạnh mẽ mà còn đạt được sự tăng trưởng bền vững trong
            kỷ nguyên công nghệ.
          </p>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default page;
