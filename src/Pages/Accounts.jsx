import { useState } from "react";
import {Wallet,ReceiptText,HandCoins,PiggyBank,CreditCard,ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import BankCard from "../Components/BankCard";
import SectionHeader from "../Components/SectionHeader";

const summary = [
  ["My Balance", "$12,750", Wallet, "bg-[#EEF0FF]", "text-[#3434E8]"],
  ["Expense", "$3,460", ReceiptText, "bg-[#FFF0F3]", "text-[#ED7097]"],
  ["Income", "$5,600", HandCoins, "bg-[#E8FBF5]", "text-[#20B995]"],
  ["Total Savings", "$7,920", PiggyBank, "bg-[#FFF6DF]", "text-[#F2B53F]"],
];

const transactions = [
  ["Spotify Subscription", "28 January 2021", "-$2,500", CreditCard, "bg-[#FFF4C8]"],
  ["Mobile Service", "20 January 2021", "-$150", ReceiptText, "bg-[#FFF0F3]"],
  ["Emily Wilson", "15 January 2021", "-$1,050", ArrowUpRight, "bg-[#EEF0FF]"],
];

const invoices = [
  ["Apple Store", "5h ago", "$450", 32],
  ["Michael", "2 days ago", "$160", 12],
  ["Playstation", "5 days ago", "$1,085", 33],
  ["William", "10 days ago", "$90", 14],
];

const weekly = [
  ["Sat", 60, 40],
  ["Sun", 78, 52],
  ["Mon", 45, 70],
  ["Tue", 70, 48],
  ["Wed", 90, 65],
  ["Thu", 68, 85],
  ["Fri", 52, 58],
];

export default function Accounts() {
  const [active, setActive] = useState("debit");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px] space-y-6"
    >
      {/* Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map(([title, amount, Icon, bg, color]) => (
          <div
            key={title}
            className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${bg}`}>
              <Icon size={22} className={color} />
            </div>
            <p className="text-sm text-[#718096]">{title}</p>
            <h3 className="mt-1 text-xl font-semibold text-[#29334F]">
              {amount}
            </h3>
          </div>
        ))}
      </div>
      {/* Last Transaction + My Card */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
          <SectionHeader title="Last Transaction" />
          <div className="space-y-5">
            {transactions.map(([title, date, amount, Icon, bg]) => (
              <div
                key={title}
                className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${bg}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#29334F]">
                      {title}
                    </p>
                    <p className="text-xs text-[#718096]">
                      {date}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#ED7097]">
                  {amount}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
          <SectionHeader title="My Card" />
          <BankCard />
        </section>
      </div>
      {/* Debit & Credit + Invoice */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-[#29334F]">
              Debit & Credit Overview
            </h2>
            <div className="flex gap-2">
              {["debit", "credit"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`rounded-lg px-4 py-2 text-xs capitalize ${
                    active === item
                      ? item === "debit"
                        ? "bg-[#3434E8] text-white"
                        : "bg-[#16C79A] text-white"
                      : "bg-[#F5F6FA] text-[#718096]"}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 flex gap-8">
            <div>
              <p className="text-xs text-[#718096]">Debited</p>
              <p className="font-semibold text-[#29334F]">
                $7,560
              </p>
            </div>
            <div>
              <p className="text-xs text-[#718096]">Credited</p>
              <p className="font-semibold text-[#29334F]">
                $5,420
              </p>
            </div>
          </div>
          <div className="mt-6 flex h-[210px] items-end justify-between gap-2">
            {weekly.map(([day, debit, credit]) => (
              <div
                key={day}
                className="flex h-full flex-1 items-end justify-center gap-1">
                <div
                  className={`w-2 rounded-t-md ${
                    active === "debit"
                      ? "bg-[#3434E8]"
                      : "bg-[#D9DCFF]"}`}
                  style={{ height: `${debit}%` }}/>
                <div
                  className={`w-2 rounded-t-md ${
                    active === "credit"
                      ? "bg-[#16C79A]"
                      : "bg-[#CDEFE6]"}`}
                  style={{ height: `${credit}%` }}/>
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-[#718096]">
            {weekly.map(([day]) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </section>
        <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
          <SectionHeader title="Invoice Sent" />
          <div className="space-y-4">
            {invoices.map(([name, time, amount, image]) => (
              <div
                key={name}
                className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/100?img=${image}`}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"/>
                  <div>
                    <p className="text-sm font-medium text-[#29334F]">
                      {name}
                    </p>
                    <p className="text-xs text-[#718096]">
                      {time}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#29334F]">
                  {amount}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full rounded-xl border border-[#E8EAF0] py-3 text-sm font-medium text-[#3434E8]">
            View All Invoices
          </button>
        </section>
      </div>
    </motion.div>
  );
}