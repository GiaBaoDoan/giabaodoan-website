"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";

const AiGenerate = () => {
  const [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <AlertDialog onOpenChange={setOpen} open={open}>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2 px-8! border-2 h-11 font-semibold hover:border-white!"
          >
            <Sparkles />
            <span>Gợi ý bằng AI</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex items-center text-2xl gap-2">
                <Sparkles />
                <span>Gợi Ý Tính Năng Bằng AI</span>
              </div>
              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                className="absolute right-2 top-2"
              >
                <X />
              </Button>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white mt-2">
              Mô tả website bạn muốn làm, AI sẽ tự động chọn loại website và
              tính năng phù hợp
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            {/* Textarea */}
            <div className="relative py-4">
              <label className="text-sm font-medium">
                Mô tả website của bạn
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả website…"
                className="min-h-30 mt-2 resize-none bg-black text-white border-white/10"
                maxLength={500}
              />

              {/* Count */}
              <p className="text-xs text-white mt-2 text-left">
                {description.length}/500 ký tự
              </p>
            </div>

            {/* Button */}
            <Button
              disabled={description.length <= 10}
              className="bg-white h-11 gap-2 w-full"
              size="lg"
            >
              <Sparkles className="h-4 w-4" />
              Phân Tích Bằng AI
            </Button>
          </div>
          <div className="border-t border-white pt-4 mt-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              Ví dụ mô tả:
            </p>
            <div className="space-y-2">
              <button className="text-xs text-left text-primary hover:underline block w-full">
                • Website bán hàng thời trang có giỏ hàng, thanh toán VNPay,
                quản lý kho
              </button>
              <button className="text-xs text-left text-primary hover:underline block w-full">
                • Website nhà hàng có menu, đặt bàn online, tích hợp Google Maps
              </button>
              <button className="text-xs text-left text-primary hover:underline block w-full">
                • Website công ty giới thiệu dịch vụ, có blog và form liên hệ
              </button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AiGenerate;
