import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, LayoutDashboard, Search } from "lucide-react";

const BlogSearch = () => {
  return (
    <div className="flex items-center flex-1 my-6 gap-2">
      <Input className="w-full" placeholder="Tìm kiếm bài viết..." />
      <Button className="flex items-center gap-3">
        <Search />
        Tìm kiếm
      </Button>
      <Button>
        <LayoutDashboard />
      </Button>
      <Button variant="outline">
        <FileText />
      </Button>
    </div>
  );
};

export default BlogSearch;
