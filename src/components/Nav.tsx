"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Sobre mi",
    path: "/resume",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
  {
    name: "Proyectos",
    path: "/work",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
