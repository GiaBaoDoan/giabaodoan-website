import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo Gia Bao digital"
        width={100}
        height={100}
        className="w-16 h-16 object-cover"
      />
    </Link>
  );
};

export default Logo;
