import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-12 px-8">
      <div className="relative aspect-video w-full flex items-center justify-center">
        <Image
          width={1200}
          height={600}
          src="https://tanphatdigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.339c2fc2.webp&w=1920&q=80"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection;
