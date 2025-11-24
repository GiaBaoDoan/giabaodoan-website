import ContactForm from "@/components/contact/ContactForm";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative">
            <h2 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Liên Hệ
            </h2>
            <p className="mt-4">
              Vui lòng điền vào biểu mẫu dưới đây để liên hệ với chúng tôi.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold">Điện thoại</h3>
                  <p>+84 76 779 1539</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>giabaod345@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold">Địa chỉ</h3>
                  <p>Phạm Văn Đồng, Thủ đức, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div className="ml-20 mt-10">
                <AnimatedGradientText
                  speed={2}
                  colorFrom="#4ade80"
                  colorTo="#06b6d4"
                  className="text-4xl md:text-6xl font-semibold tracking-tight"
                >
                  Gia Bảo Digital
                </AnimatedGradientText>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
