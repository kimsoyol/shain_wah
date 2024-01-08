"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Poem",
    href: "/poems",
  },
  { name: "Painting", href: "/paintings" },
  { name: "Book", href: "/books" },
  { name: "Blog", href: "/blogs" },
  { name: "Casting", href: "/castings" },
];

export default function NavBarLinks() {
  const pathname = usePathname();
  return (
    <div className="flex">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "px-4",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
