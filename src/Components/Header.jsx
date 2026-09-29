import {Search,Settings as SettingsIcon,Bell,} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Overview",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/investments": "Investments",
  "/credit-cards": "Credit Cards",
  "/loans": "Loans",
  "/services": "Services",
  "/privileges": "My Privileges",
  "/settings": "Settings",
  "/settings/profile": "Edit Profile",
  "/settings/preferences": "Preferences",
  "/settings/security": "Security",
};

export default function Header() {
  const location = useLocation();
  const pageTitle =
    pageTitles[location.pathname] || "Dashboard";
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-[70px] items-center justify-between border-b border-[#EDF0F4] bg-white px-5 sm:px-7 lg:left-[240px] lg:h-[90px]">
      <h2 className="text-xl font-semibold text-[#29334F]">
        {pageTitle}
      </h2>
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search */}
        <div className="hidden h-[42px] w-[220px] items-center rounded-full bg-[#F7F9FC] px-4 md:flex">
          <Search
            size={17}
            className="text-[#AEB4C1]"/>
          <input
            type="text"
            placeholder="Search for something"
            className="ml-2 w-full bg-transparent text-xs outline-none placeholder:text-[#AEB4C1]"/>
        </div>
        {/* Settings */}
        <Link
          to="/settings"
          className="hidden text-[#AEB4C1] transition hover:text-[#3434E8] sm:block"
          aria-label="Settings">
          <SettingsIcon size={21} />
        </Link>
        {/* Notification */}
        <button
          type="button"
          className="relative text-[#ED7097] transition hover:text-[#3434E8]"
          aria-label="Notifications">
          <Bell size={21} />
          <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-[#ED7097]" />
        </button>
        {/* Avatar */}
        <Link
          to="/settings/profile"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3434E8] text-sm font-semibold text-white transition hover:opacity-90"
          aria-label="Profile">
          EC
        </Link>
      </div>
    </header>
  );
}