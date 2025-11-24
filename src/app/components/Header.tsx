import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-15 border-b border-[#4A4D51]/20 bg-[#F9F9F9] shadow-[#4A4D51] shadow-md">
      <nav className=" flex items-center px-4 justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="WolfBuddy Logo"
              width={120}
              height={40}
              className="h-15 w-auto"
              priority
            />
          </Link>

          <Link
            href="/login"
            className="bg-[#2E3742] text-white shadow-[#4A4D51] shadow-md hover:scale-105 border border-[#4A4D51] px-4 py-2 rounded-lg hover:bg-[#4A4D51] transition-colors font-medium cursor-pointer"
          >
            LogIn
          </Link>
          
          
      </nav>
    </header>
  );
}
