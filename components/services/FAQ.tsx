import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-16" id="FAQ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold md:text-4xl mb-4 bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg mx-auto">
            Giải đáp những thắc mắc phổ biến về dịch vụ thiết kế website
          </p>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Chi phí thiết kế website là bao nhiêu?
            </AccordionTrigger>
            <AccordionContent>
              Chi phí thiết kế website phụ thuộc vào quy mô, tính năng và yêu
              cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ
              bản đến cao cấp, phù hợp với ngân sách của từng doanh nghiệp. Vui
              lòng liên hệ để nhận báo giá chi tiết.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Tôi có thể thiết kế website theo ngân sách riêng không?
            </AccordionTrigger>
            <AccordionContent>
              Có. Chúng tôi luôn linh hoạt tư vấn giải pháp phù hợp với ngân
              sách và mục tiêu kinh doanh của bạn, đảm bảo tối ưu chi phí và
              hiệu quả.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Gia Bảo Digital có gói thiết kế website trọn gói không?
            </AccordionTrigger>
            <AccordionContent>
              Chúng tôi cung cấp các gói thiết kế website trọn gói bao gồm tên
              miền, hosting, giao diện, tối ưu tốc độ và SEO cơ bản, giúp bạn
              tiết kiệm thời gian và chi phí.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Phí duy trì website hàng năm gồm những gì?
            </AccordionTrigger>
            <AccordionContent>
              Phí duy trì hàng năm thường bao gồm chi phí tên miền, hosting,
              chứng chỉ SSL và bảo trì kỹ thuật cơ bản. Chúng tôi sẽ báo giá cụ
              thể tùy theo nhu cầu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Thời gian thiết kế một website mất bao lâu?
            </AccordionTrigger>
            <AccordionContent>
              Thời gian thiết kế website thường từ 2-6 tuần tùy vào quy mô, tính
              năng và yêu cầu thiết kế. Chúng tôi luôn đảm bảo tiến độ và chất
              lượng.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Tôi có thể yêu cầu website chuẩn SEO không?
            </AccordionTrigger>
            <AccordionContent>
              Có. Chúng tôi thiết kế website chuẩn SEO, tối ưu tốc độ, trải
              nghiệm người dùng và hỗ trợ các công cụ tìm kiếm để nâng cao thứ
              hạng trên Google.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              Website có thể tích hợp với fanpage Facebook hoặc Zalo không?
            </AccordionTrigger>
            <AccordionContent>
              Chúng tôi hỗ trợ tích hợp website với fanpage Facebook, Zalo, và
              các nền tảng khác để đồng bộ dữ liệu và tăng trải nghiệm khách
              hàng.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Tôi có thể tự cập nhật nội dung trên website không?
            </AccordionTrigger>
            <AccordionContent>
              Có. Chúng tôi thiết kế website với hệ thống quản trị nội dung
              (CMS) dễ sử dụng, giúp bạn tự cập nhật thông tin, hình ảnh và bài
              viết mà không cần kỹ thuật viên.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              Có hỗ trợ bảo trì và nâng cấp website sau khi hoàn thành không?
            </AccordionTrigger>
            <AccordionContent>
              Chúng tôi cung cấp dịch vụ bảo trì, nâng cấp và tối ưu website
              định kỳ để đảm bảo hoạt động ổn định, bảo mật và luôn cập nhật các
              tính năng mới.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>
              Website có thiết kế chuẩn trên điện thoại và máy tính bảng không?
            </AccordionTrigger>
            <AccordionContent>
              Tất cả website của chúng tôi đều thiết kế responsive, hiển thị đẹp
              và tối ưu trải nghiệm người dùng trên mọi thiết bị từ máy tính đến
              điện thoại và máy tính bảng.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
