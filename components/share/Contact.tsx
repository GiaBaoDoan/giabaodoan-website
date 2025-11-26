'use client'

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { RainbowButton } from "@/components/ui/rainbow-button";

// ------------------ ZOD SCHEMA ------------------
const formSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  service: z.string().min(1, "Hãy chọn dịch vụ"),
  message: z.string().min(1, "Vui lòng nhập nội dung"),
});

type ContactType = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<ContactType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactType) => {
    console.log("FORM DATA:", data);
  };
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

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-6 space-y-6 rounded-xl border"
              >
                {/* --- Row 1 --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* -------- Name -------- */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ và Tên</FormLabel>
                        <FormControl>
                          <Input className="rounded" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* -------- Email -------- */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} className="rounded" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* -------- Phone -------- */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input {...field} className="rounded" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* -------- Service Select -------- */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dịch vụ quan tâm</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full rounded">
                            <SelectValue placeholder="Chọn dịch vụ" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="web">Thiết kế Website</SelectItem>
                            <SelectItem value="seo">SEO Marketing</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* -------- Message -------- */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội dung</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Mô tả yêu cầu của bạn..."
                          {...field}
                          className="min-h-40 rounded"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* -------- Submit button -------- */}
                <RainbowButton className="bg-white rounded-full text-black capitalize w-full">
                  Nhận Liên hệ ngay
                </RainbowButton>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
