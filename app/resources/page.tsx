import ResourcesList from "@/components/resources/ResourcesList";

const page = () => {
  return (
    <section>
      <div className="relative py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl mb-2 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Tài Nguyên Marketing Miễn Phí
            </h1>
            <p className="text-lg mb-4 mx-auto">
              Thư viện tài nguyên marketing chuyên sâu được biên soạn bởi đội
              ngũ chuyên gia
            </p>
          </div>
          <p className="text-lg mb-10 mx-auto max-w-4xl">
            Tất cả đều miễn phí và được cập nhật thường xuyên với những xu hướng
            marketing mới nhất.
          </p>
        </div>
      </div>
      <ResourcesList />
    </section>
  );
};

export default page;
