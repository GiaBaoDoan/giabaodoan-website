import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-12 px-8">
      <div className="relative aspect-video w-full flex items-center justify-center">
        <Image width={1200} height={600} src="/banner-1.webp" alt="Banner" />
      </div>
    </div>
  );
};

export default HeroSection;
