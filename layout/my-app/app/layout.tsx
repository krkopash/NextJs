import Link from "next/link";
import { ReactNode } from "react";
export const metadata = {
  title: "Multi Role Dashboard",
  description: "Next.js App Router Layout System",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html><body>
      <header
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 15px", backgroundColor: "#c0c8ec", color: "black",}}>
        <h2>Dashboard</h2>
        <nav>
          <Link href="/dashboard" style={{ marginRight: "20px", color: "black" }}>
            Dashboard
          </Link>
          <Link href="/img" style={{ marginRight: "20px", color: "black" }}>
            Profile
          </Link>
          <Link href="/settings" style={{ color: "black" }}>
            Settings
          </Link>
        </nav>
      </header>
      <main> {children}</main>
      <footer style={{ textAlign: "center", padding: "5px 10px", backgroundColor: "#c0c8ec", color: "black",}}>
        <p>© 2026 Multi Role Dashboard. All Rights Reserved.</p>
      </footer>
      </body>
    </html>
  );
}