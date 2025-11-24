import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Cpu,
  LayoutDashboard,
  Search,
  ShoppingCart,
  TrendingUp,
  Palette,
  Gauge,
  FileText,
} from "lucide-react";

const categories = [
  {
    name: "Technology",
    count: 17,
    icon: Cpu,
    color: "bg-cyan-500",
  },
  {
    name: "Web Design",
    count: 87,
    icon: LayoutDashboard,
    color: "bg-indigo-500",
  },
  {
    name: "Seo Marketing",
    count: 160,
    icon: Search,
    color: "bg-green-500",
  },
  {
    name: "Ecommerce",
    count: 1,
    icon: ShoppingCart,
    color: "bg-amber-500",
  },
  {
    name: "Business Growth",
    count: 1,
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    name: "Branding",
    count: 21,
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    name: "Performance",
    count: 9,
    icon: Gauge,
    color: "bg-red-500",
  },
  {
    name: "Case Studies",
    count: 6,
    icon: FileText,
    color: "bg-gray-500",
  },
];

const BlogCategory = () => {
  return (
    <aside className="sticky top-28 lg:max-w-[300px] w-full self-start">
      <h3 className="text-2xl font-bold md:text-4xl bg-linear-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
        Danh mục
      </h3>

      <nav
        className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2"
        aria-label="Danh sách danh mục"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.name}
              href={`/blog/category/${cat.name
                .toLowerCase()
                .replace(/ /g, "-")}`}
              className={cn(
                "flex items-center justify-between gap-2 p-3 rounded-md cursor-pointer transition-all hover:bg-primary/90 hover:text-primary-foreground border border-white/10",
                "bg-opacity-15 dark:bg-opacity-25",
                cat.color
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn("h-5 w-5", cat.color.replace("bg-", "text-"))}
                />
                <span className="font-medium capitalize">{cat.name}</span>
              </div>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-background/20 border-transparent text-secondary-foreground hover:bg-secondary/80">
                {cat.count}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default BlogCategory;
