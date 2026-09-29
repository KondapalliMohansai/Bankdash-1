import {
  WalletCards,
  CircleDollarSign,
  ArrowDownLeft,
} from "lucide-react";

import SectionHeader from "../../Components/SectionHeader";

const transactions = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    icon: WalletCards,
    bg: "bg-[#FFF4C8]",
    text: "text-[#EF737B]",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    icon: ArrowDownLeft,
    bg: "bg-[#EEF0FF]",
    text: "text-[#20B995]",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    icon: CircleDollarSign,
    bg: "bg-[#E6FBF5]",
    text: "text-[#20B995]",
  },
];

export default function RecentTransactions() {
  return (
    <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
      <SectionHeader title="Recent Transaction" />

      <div className="space-y-5">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div
              key={transaction.title}
              className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${transaction.bg}`}>
                <Icon size={17} className="text-[#8E96A5]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-[#343A4D]">
                  {transaction.title}
                </p>

                <p className="mt-1 text-[9px] text-[#A3A9B5]">
                  {transaction.date}
                </p>
              </div>

              <p
                className={`shrink-0 text-xs font-semibold ${transaction.text}`}
              >
                {transaction.amount}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}