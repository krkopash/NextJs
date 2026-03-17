// components/Navbar.tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "20px"}}>
      <Link href="/" style={{ marginRight: 20 }}>Home</Link>
      <Link href="/dashboard" style={{ marginRight: 20 }}>About</Link>
      <Link href="/api" style={{ marginRight: 20 }}>scraping</Link>
      <Link href="/isr" style={{ marginRight: 20 }}>ISR</Link>
      <p>pathname: {pathname}</p>
    </nav>
  );
}