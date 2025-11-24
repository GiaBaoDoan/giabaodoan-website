import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { formatVietnameseDate } from "@/lib/date";

interface BlogCardProps {
  title: string;
  description: string;
  readTime: string;
  date: string | Date;
  thumbnail: string;
  href?: string;
}

export default function BlogCard({
  title,
  description,
  readTime,
  date,
  thumbnail,
  href = "#",
}: BlogCardProps) {
  return (
    <Link className="block h-full" href={href}>
      <div
        className="text-card-foreground h-full flex flex-col shadow-none overflow-hidden rounded-md hover:shadow-md transition-shadow"
        role="article"
      >
        {/* Thumbnail */}
        <div className="aspect-video w-full min-h-[250px] rounded-t-lg relative overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

          <p className="mt-2 line-clamp-3 text-ellipsis">{description}</p>

          {/* Meta info */}
          <div className="mt-4 flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              <span>{readTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="size-4" />
              <time dateTime={date as string}>
                {formatVietnameseDate(date)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
