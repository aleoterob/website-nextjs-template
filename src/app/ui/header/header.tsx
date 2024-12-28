import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between py-3 px-6">
      <Link href={"/"} className="flex items-center">
        <Image src="/logo-white.svg" width={95} height={1} alt="Logo" />
      </Link>
      <Link href={"#"} className="flex items-center">
        <Image
          src="/menu-icon-white.svg"
          width={25}
          height={1}
          alt="Menu Icon"
          className="menu-icon"
        />
      </Link>
    </div>
  );
}
