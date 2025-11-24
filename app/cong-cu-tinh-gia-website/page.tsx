import { AiGeneratePrice, PriceList } from "@/components/website";
import FeatureList from "@/components/website/FeatureList";

const page = () => {
  return (
    <div>
      <article className="py-16 md:py-20 bg-linear-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Tính Giá Thiết Kế Website
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Công cụ tính giá tự động, minh bạch. Chọn loại website và tính
              năng để nhận báo giá ngay lập tức.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Báo giá tức thì</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Minh bạch 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Tư vấn miễn phí</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="container mx-auto px-4 py-12 pb-24">
        <AiGeneratePrice />
        <PriceList />
        <FeatureList />
      </div>
    </div>
  );
};

export default page;
