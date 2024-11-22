"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const classes = "pb-1";
  const activeClasses = "border-b-2 border-slate-800";

  return (
    <header className="p-4">
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/">
              <span
                className={`${classes} ${
                  pathname === "/" ? activeClasses : ""
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <span
                className={`${classes} ${
                  pathname === "/gallery" ? activeClasses : ""
                }`}
              >
                Gallery
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
