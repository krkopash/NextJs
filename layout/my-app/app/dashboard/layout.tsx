import { ReactNode } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
export default function DashboardLayout({children,}: {
  children: ReactNode;
}) {
  return (
    <div>
      <NavBar/>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}