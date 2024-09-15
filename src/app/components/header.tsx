"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="min-h-28 flex items-center justify-center bg-gray-600">
      <nav className="flex items-center justify-center gap-5">
        <Link
          href="/"
          className={`link ${
            pathname === "/" ? "text-amber-400" : "text-white"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`link ${
            pathname === "/about" ? "text-amber-400" : "text-white"
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
