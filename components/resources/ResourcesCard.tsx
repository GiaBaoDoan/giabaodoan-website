import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ResourceCardProps {
  type:
    | "Course"
    | "Guide"
    | "Ebook"
    | "Strategy"
    | "Technical"
    | "Tutorial"
    | "Tookit";
  title: string;
  description: string;
  time: string;
  learners: string;
  status?: "popular" | "new";
  icon?: React.ReactNode;
  href: string;
}

export default function ResourceCard({
  type,
  title,
  description,
  time,
  learners,
  status,
  icon,
  href,
}: ResourceCardProps) {
  return (
    <Card className="border hover:border-white rounded-lg p-4 transition bg-transparent">
      <CardContent className="flex flex-col flex-1 p-0 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>

          <div className="flex justify-between w-full items-start">
            <div>
              <Badge
                variant="outline"
                className="font-medium border border-white"
              >
                {type}
              </Badge>

              <h3 className="text-lg font-semibold mt-2">{title}</h3>
            </div>

            {status === "popular" && (
              <Badge className="font-medium">Phổ biến</Badge>
            )}

            {status === "new" && (
              <Badge className="bg-emerald-600 text-white font-medium">
                Mới
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 mb-4">{description}</p>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {time}
          </div>

          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {learners}
          </div>
        </div>

        {/* Button */}
        <Link href={href}>
          <Button className="w-full rounded-sm flex items-center justify-center gap-2 h-10">
            <span>Tìm hiểu thêm</span>
            <SquareArrowOutUpRight className="size-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
