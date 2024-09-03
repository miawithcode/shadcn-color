"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { label: "Colors", href: "/" },
  { label: "Buttons", href: "/buttons" },
];

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="border-b border-border py-4">
      <ul className="flex items-center gap-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link
              href={route.href}
              className={cn("text-muted-foreground", {
                "text-foreground": currentPath === route.href,
              })}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
