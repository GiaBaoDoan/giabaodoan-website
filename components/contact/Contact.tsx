import ContactForm from "@/components/contact/ContactForm";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* 🎬 Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
              Liên Hệ
            </h2>
            <p className="mt-4">
              Vui lòng điền vào biểu mẫu dưới đây để liên hệ với chúng tôi.
            </p>

            <motion.div
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
            >
              {[
                {
                  icon: <Phone />,
                  title: "Điện thoại",
                  value: "+84 76 779 1539",
                },
                {
                  icon: <Mail />,
                  title: "Email",
                  value: "giabaod345@gmail.com",
                },
                {
                  icon: <MapPin />,
                  title: "Địa chỉ",
                  value: "Phạm Văn Đồng, Thủ đức, TP. Hồ Chí Minh",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="ml-20 mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <AnimatedGradientText
                  speed={2}
                  colorFrom="#4ade80"
                  colorTo="#06b6d4"
                  className="text-4xl md:text-6xl font-semibold tracking-tight"
                >
                  Gia Bảo Digital
                </AnimatedGradientText>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 🎬 Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
