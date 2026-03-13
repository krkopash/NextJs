import { ReactNode } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen uppercase">
      <NavBar/>
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6 bg-white m-4 rounded-lg shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
}