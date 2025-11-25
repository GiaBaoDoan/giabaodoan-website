import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-12 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative aspect-video w-full flex items-center justify-center overflow-hidden rounded-2xl"
      >
        <Image
          width={1200}
          height={600}
          src="/banner-1.webp"
          alt="Banner"
          className="rounded-2xl object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
