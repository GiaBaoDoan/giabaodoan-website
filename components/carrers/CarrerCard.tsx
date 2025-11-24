import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CareerCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  location: string;
  highlights: string[];
  status?: "new" | "popular" | null;
  href: string;
}

export default function CareerCard({
  icon,
  title,
  subtitle,
  description,
  tag,
  location,
  highlights,
  status,
  href,
}: CareerCardProps) {
  return (
    <Card className="bg-black border hover:border-white rounded-2xl p-6 text-white hover:bg-card transition">
      <CardContent className="p-0 space-y-5 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10">
              {icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-white/80">{subtitle}</p>
            </div>
          </div>

          {status === "popular" && (
            <Badge className="bg-white border-white text-black px-3">
              Phổ biến
            </Badge>
          )}
          {status === "new" && (
            <Badge className="bg-emerald-600 text-white px-3">Mới</Badge>
          )}
        </div>

        {/* Description */}
        <p>{description}</p>

        {/* Tags */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Badge variant="outline" className="rounded-full border-white">
            {tag}
          </Badge>

          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="w-4 h-4 stroke-blue-400" />
            {location}
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <p className="font-semibold text-sm">Highlights:</p>
          <div className="grid grid-cols-2 gap-y-2 text-white/80">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link href={href} className="mt-4">
          <Button className="w-full h-10">
            Tìm hiểu thêm
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
