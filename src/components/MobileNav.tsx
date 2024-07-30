"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "work",
    href: "/work",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-16 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ezequiel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index)=> (
            <Link
              href={link.href}
              key={index}
              className={`${link.href === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
