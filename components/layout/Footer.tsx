"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/share/Logo";

export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <div className="container py-12 px-4 md:px-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* LOGO + INFO */}
          <div className="space-y-4">
            {/* Logo giữ nguyên – thay src ở đây */}
            <Logo />

            <p className="text-sm leading-relaxed">
              Thiết kế & lập trình website chuyên nghiệp – Nhanh, chuẩn SEO, tối
              ưu chuyển đổi!
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" /> +84 79 776 1539
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" /> giabaod345@@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" /> Thủ đức, TP. Hồ Chí Minh
              </div>
            </div>
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Dịch vụ</h3>

            <ul className="space-y-2 text-sm">
              <li>Thiết kế website</li>
              <li>SEO Website, Quảng cáo Google Ads & Digital Marketing</li>
              <li>Bảo trì website</li>
              <li>Thiết kế UI/UX & Thương hiệu</li>
              <li>Tư vấn marketing</li>
              <li>Lập kế hoạch marketing</li>
              <li>Setup phòng marketing</li>
              <li>Triển khai marketing</li>
            </ul>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Liên kết nhanh</h3>

            <ul className="space-y-2 text-sm">
              <li>Tin tức & Blog</li>
              <li>Câu hỏi thường gặp</li>
              <li>Chính sách bảo hành</li>
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>

          {/* Kết nối + Đăng ký */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">
              Kết nối với chúng tôi
            </h3>

            <div className="flex gap-7 mb-6">
              <Link href="/">
                <Facebook />
              </Link>
              <Link href="/">
                <Instagram />
              </Link>
              <Link href="/">
                <Linkedin />
              </Link>
            </div>

            <h3 className="font-semibold mb-2 text-lg">Đăng ký nhận tin</h3>

            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="rounded-md max-w-[200px] text-sm"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
          © 2025 Gia Bảo Digital. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
