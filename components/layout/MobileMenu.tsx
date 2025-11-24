"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
  User,
  Brush,
  Search,
  Target,
  ChartNoAxesColumn,
  ShieldCheck,
  Layout,
  Globe,
  Settings,
  Users,
  Rocket,
} from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2">
        <Menu size={28} />
      </SheetTrigger>

      <SheetContent side="right" className="w-full p-6 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="hidden"></SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* ========== VỀ CHÚNG TÔI ========== */}
          <Accordion type="single" collapsible>
            <AccordionItem value="about">
              <AccordionTrigger>Về chúng tôi</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-3">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <User />
                    </Button>
                    <span>Về chúng tôi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <User />
                    </Button>
                    <span>Đoàn Gia Bảo</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ========== DỊCH VỤ ========== */}
            <AccordionItem value="services">
              <AccordionTrigger>Dịch vụ</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-3">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Brush />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">Thiết kế Website</p>
                      <p className="text-xs text-white/50">
                        Website doanh nghiệp, landing page, thương mại điện
                        tử...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Search />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">SEO Website</p>
                      <p className="text-xs text-white/50">
                        Tối ưu website lên top Google
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Target />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">Google Ads</p>
                      <p className="text-xs text-white/50">
                        Quảng cáo hiệu quả, tăng doanh thu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <ChartNoAxesColumn />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">Digital Marketing</p>
                      <p className="text-xs text-white/50">
                        Chiến lược tổng thể, phát triển thương hiệu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <ShieldCheck />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">Bảo trì & Quản lý</p>
                      <p className="text-xs text-white/50">
                        Update • Backup • Tăng tốc website
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Layout />
                    </Button>
                    <div>
                      <p className="font-medium text-sm">UI/UX & Thương hiệu</p>
                      <p className="text-xs text-white/50">
                        Logo, nhận diện, UX
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ========== DỰ ÁN ========== */}
            <AccordionItem value="projects">
              <AccordionTrigger>Dự án</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-3">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Globe />
                    </Button>
                    <span>Tất cả dự án</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Settings />
                    </Button>
                    <span>Quy trình làm việc</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Users />
                    </Button>
                    <span>Đánh giá khách hàng</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon">
                      <Rocket />
                    </Button>
                    <span>Công nghệ</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* ========== MENU ĐƠN ========== */}
          <div className="space-y-4 py-2 pl-1">
            <p className="text-sm">Giải pháp</p>
            <p className="text-sm">Tài nguyên</p>
            <p className="text-sm">Tin tức & Blog</p>
            <p className="text-sm">Báo giá</p>
            <p className="text-sm">Tuyển dụng</p>
            <p className="text-sm">Liên hệ</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
