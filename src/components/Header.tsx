import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MovileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ezequiel<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
          <Button className="ml-8">Contratame</Button>
          </Link>
        </div>
        <div className="xl:hidden">
            <MovileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
