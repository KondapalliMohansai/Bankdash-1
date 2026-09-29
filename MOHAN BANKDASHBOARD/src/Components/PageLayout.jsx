import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Sidebar />
      <div className="lg:ml-[240px]">
        <Header />
        <main className="min-h-screen pt-[70px] lg:pt-[90px]">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}