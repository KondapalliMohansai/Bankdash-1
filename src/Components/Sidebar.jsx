import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Home,ArrowDownUp,WalletCards,TrendingUp,CreditCard,HandCoins,Wrench,ShieldCheck,Settings,Menu,X,} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: ArrowDownUp,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: WalletCards,
  },
  {
    name: "Investments",
    path: "/investments",
    icon: TrendingUp,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    icon: CreditCard,
  },
  {
    name: "Loans",
    path: "/loans",
    icon: HandCoins,
  },
  {
    name: "Services",
    path: "/services",
    icon: Wrench,
  },
  {
    name: "My Privileges",
    path: "/privileges",
    icon: ShieldCheck,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-[70px] items-center justify-between bg-white px-5 shadow-sm lg:hidden">
        <div className="flex items-center">
          <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-lg border-2 border-[#3434E8]">
            <div className="h-2 w-3 border-b-2 border-[#3434E8]" />
          </div>

          <h1 className="text-lg font-bold text-[#29334F]">
            Bank
            <span className="text-[#3434E8]">Dash.</span>
          </h1>

        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-[#3434E8] transition hover:bg-[#F7F8FF]">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-[240px] overflow-y-auto bg-white transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}>
        {/* Logo */}
        <div className="flex h-[90px] items-center px-8">
          <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-lg border-2 border-[#3434E8]">
            <div className="h-2 w-3 border-b-2 border-[#3434E8]" />
          </div>

          <h1 className="text-xl font-bold text-[#29334F]">
            Bank
            <span className="text-[#3434E8]">Dash.</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="mt-3 pb-6">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `relative flex h-[55px] items-center gap-4 px-8 text-sm transition ${
                    isActive
                      ? "font-medium text-[#3434E8]"
                      : "text-[#9DA3AF] hover:bg-[#F7F8FF] hover:text-[#3434E8]"}`}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#3434E8]" />
                    )}

                    <Icon
                      size={20}
                      strokeWidth={isActive ? 2.4 : 1.8}
                    />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}