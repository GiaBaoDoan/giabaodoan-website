import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type SolutionsCardProps = {
  title: string;
  status?: "popular" | "new";
  desc: string;
  icon: React.ReactNode;
  href: string;
  features: string[];
};

const SolutionCard = ({
  title,
  desc,
  features,
  icon,
  status,
  href,
}: SolutionsCardProps) => {
  return (
    <div className="hover:border-white hover:bg-card rounded-lg shadow-sm border transition-all">
      <div className="p-6 ">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
            <h4 className="font-semibold text-lg">{title}</h4>
          </div>

          {status === "popular" && (
            <Badge className="font-medium">Phổ biến</Badge>
          )}

          {status === "new" && (
            <Badge className="font-medium bg-emerald-600 text-white">Mới</Badge>
          )}
        </div>
        <p className="mb-4">{desc}</p>
        <div className="space-y-2 mb-6 flex-1">
          <h5 className="font-medium text-sm">Tính năng chính:</h5>
          <ul className="space-y-1">
            {features.map((ft, index) => (
              <li key={index} className="flex items-center text-sm">
                <CircleCheckBig className="stroke-emerald-500 shrink-0 w-4 h-4 mr-2" />
                {ft}
              </li>
            ))}
          </ul>
        </div>
        <Link href={href}>
          <Button className="w-full rounded-sm h-10">
            <span>Tìm hiểu thêm</span>
            <SquareArrowOutUpRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
