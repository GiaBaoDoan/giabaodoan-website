import { WebsiteCard } from "@/components/website";
import { websitePackages } from "@/data/WebsiteData";

const PriceList = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Chọn Loại Website</h2>
        <p>Chọn loại website phù hợp với nhu cầu của bạn</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {websitePackages.map((item) => (
          <WebsiteCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
