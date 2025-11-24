"use client";

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

export default function ContactForm() {
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
  );
}
