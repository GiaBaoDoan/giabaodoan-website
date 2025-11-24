"use client";

import {
  BrushCleaning,
  ChartNoAxesColumn,
  Globe,
  Layout,
  LayoutPanelTop,
  LucideRocket,
  Search,
  Settings,
  ShieldCheck,
  Target,
  User,
  Users,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-3">
            Về chúng tôi
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px]! p-3">
              <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                Về chúng tôi
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="space-x-3 items-center group"
                    href="/about-us"
                  >
                    <Button variant="outline">
                      <User />
                    </Button>
                    <span className="text-sm">Về chúng tôi</span>
                  </Link>
                </li>
                <li className="space-x-3 items-center group">
                  <Link
                    className="space-x-3 items-center group"
                    href="/doan-gia-bao"
                  >
                    <Button variant="outline">
                      <User />
                    </Button>
                    <span className="text-sm">Đoàn Gia Bảo</span>
                  </Link>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-3 relative!">
            Dịch vụ
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px]! p-3">
              <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                Dịch vụ
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/dich-vu-thiet-ke-website"
                    className="flex items-center gap-3 group"
                  >
                    <Button variant="outline">
                      <BrushCleaning />
                    </Button>
                    <div>
                      <p className="text-sm font-medium text-white shrink-0">
                        Thiết kế Website
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Website doanh nghiệp, landing page, thương mại điện tử,
                        dịch vụ, đặt lịch
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-website"
                    className="flex items-center gap-3 group"
                  >
                    <Button variant="outline">
                      <Search />
                    </Button>
                    <div className="leading-5 w-max">
                      <p className="text-sm font-medium text-white shrink-0">
                        SEO Website
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Tối ưu hóa website lên top Google bền vững với chiến
                        lược SEO chuyên nghiệp
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center gap-3 group">
                    <Button variant="outline">
                      <Target />
                    </Button>
                    <div className="leading-5 w-max">
                      <p className="text-sm font-medium text-white shrink-0">
                        Quảng cáo Google Ads
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Quảng cáo Google Ads hiệu quả, tăng doanh thu nhanh
                        chóng với chi phí tối ưu
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 group">
                    <Button variant="outline">
                      <ChartNoAxesColumn />
                    </Button>
                    <div className="leading-5 w-max">
                      <p className="text-sm font-medium text-white shrink-0">
                        Digital Marketing
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Chiến lược Digital Marketing tổng thể, xây dựng thương
                        hiệu và tăng trưởng bền vững
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <ShieldCheck />
                    </Button>
                    <div className="leading-5 w-max">
                      <p className="text-sm font-medium text-white shrink-0">
                        Bảo trì &amp; Quản lý
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Update, backup, bảo mật, tăng tốc website
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <Layout />
                    </Button>
                    <div className="leading-5 w-max">
                      <p className="text-sm font-medium text-white shrink-0">
                        Thiết kế UI/UX &amp; Thương Hiệu
                      </p>
                      <p className="text-xs text-white/50 shrink-0 group-hover:text-white transition-colors duration-300">
                        Logo, nhận diện thương hiệu, trải nghiệm người dùng (UX)
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="font-normal px-3">
            Dự án
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute">
            <div className="w-[300px]! p-3">
              <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                Dự án
              </h3>
              <ul className="space-y-4">
                <li className="space-x-3 items-center group">
                  <Button variant="outline">
                    <Globe />
                  </Button>
                  <span className="text-sm">Tất cả dự án</span>
                </li>
                <li className="space-x-3 items-center group">
                  <Button variant="outline">
                    <Settings />
                  </Button>
                  <span className="text-sm">Quy trình làm việc</span>
                </li>
                <li className="space-x-3 items-center group">
                  <Button variant="outline">
                    <Users />
                  </Button>
                  <span className="text-sm">Đánh giá khách hàng</span>
                </li>
                <li className="space-x-3 items-center group">
                  <Button variant="outline">
                    <LucideRocket />
                  </Button>
                  <span className="text-sm">Công nghệ</span>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/solutions" className="font-normal px-3">
            Giải pháp
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/resources" className="font-normal px-3">
            Tài Nguyên
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/blog" className="font-normal px-3">
            Tin tức & Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/cong-cu-tinh-gia-website"
            className="font-normal px-3"
          >
            Báo Giá
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/careers" className="font-normal px-3">
            Tuyển dụng
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className="font-normal px-3">
            Liên hệ
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
