import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full  bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-full h-16 flex items-center justify-between px-6">
        
        {/* Logo and Brand Text */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Light Mode Logo */}
          <Image
            src="/Logo/apen_tools_logo.svg"
            alt="Apen Tools Icon"
            width={35}
            height={35}
            priority
            className="block dark:hidden object-contain"
          />
          {/* Dark Mode Logo */}
          <Image
            src="/Logo/apen_tools_logo_dark.svg"
            alt="Apen Tools Icon"
            width={35}
            height={35}
            priority
            className="hidden dark:block object-contain"
          />
          
          {/* Brand Text */}
          <span className="text-xl font-bold tracking-tight text-foreground font-heading">
            Apen <span className="text-primary">Tools</span>
          </span>
        </Link>

        {/* Action Items */}
        <nav className="flex items-center gap-6">
   
          <Link
            href="https://apenapps.com"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 text-xs font-semibold font-body text-dark-neutral transition-opacity hover:opacity-90"
          >
            Main Website
          </Link>
        </nav>
      </div>
    </header>
  );
}