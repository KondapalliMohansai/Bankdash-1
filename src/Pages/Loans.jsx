import { motion } from "framer-motion";
import {UserRound,Building2,BriefcaseBusiness, WalletCards,} from "lucide-react";

const summary = [
  ["Personal Loans", "$50,000", UserRound, "bg-[#EEF0FF]", "text-[#3434E8]"],
  ["Corporate Loans", "$100,000", Building2, "bg-[#E8FBF5]", "text-[#20B995]"],
  ["Business Loans", "$500,000", BriefcaseBusiness, "bg-[#FFF0F3]", "text-[#ED7097]"],
  ["Custom Loans", "Choose Money", WalletCards, "bg-[#FFF6DF]", "text-[#F2B53F]"],
];

const loans = [
  ["$50,000", "$20,000", "12 Months", "5.80%", "$4,200"],
  ["$100,000", "$45,000", "24 Months", "6.20%", "$5,100"],
  ["$500,000", "$210,000", "36 Months", "7.50%", "$3,200"],
  ["$80,000", "$30,000", "18 Months", "6.00%", "$4,500"],
  ["$120,000", "$55,000", "24 Months", "6.50%", "$5,800"],
  ["$200,000", "$90,000", "36 Months", "7.00%", "$6,200"],
  ["$150,000", "$65,000", "30 Months", "6.80%", "$5,500"],
  ["$75,000", "$25,000", "15 Months", "5.90%", "$4,000"],
];

const headers = [
  "S.No",
  "Loan Money",
  "Left to Repay",
  "Duration",
  "Interest Rate",
  "Installment / Month",
  "Repay",
];

const totals = [
  ["Total Amount of Loan", "$650,000", "text-[#29334F]"],
  ["Total Amount Left to Repay", "$275,000", "text-[#ED7097]"],
  ["Total Installment / Month", "$12,500", "text-[#29334F]"],
];

export default function Loans() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px] space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map(([title, amount, Icon, bg, color]) => (
          <div
            key={title}
            className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${bg}`}
            >
              <Icon size={22} className={color} />
            </div>

            <p className="mt-5 text-xs text-[#A5ABB6]">
              {title}
            </p>

            <p className="mt-1 text-xl font-semibold text-[#29334F]">
              {amount}
            </p>
          </div>
        ))}
      </div>
      <section>
        <h2 className="mb-4 text-base font-semibold text-[#29334F]">
          Active Loans Overview
        </h2>

        <div className="overflow-hidden rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-[#EDF0F4]">
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="px-3 py-4 text-left text-[10px] font-medium text-[#A5ABB6]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loans.map((loan, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#F1F2F5] hover:bg-[#FAFBFF]">
                    <td className="px-3 py-4 text-xs text-[#7E8491]">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="px-3 py-4 text-xs font-semibold text-[#29334F]">
                      {loan[0]}
                    </td>
                    <td className="px-3 py-4 text-xs font-semibold text-[#ED7097]">
                      {loan[1]}
                    </td>
                    <td className="px-3 py-4 text-xs text-[#7E8491]">
                      {loan[2]}
                    </td>
                    <td className="px-3 py-4 text-xs font-semibold text-[#29334F]">
                      {loan[3]}
                    </td>
                    <td className="px-3 py-4 text-xs text-[#7E8491]">
                      {loan[4]}
                    </td>
                    <td className="px-3 py-4">
                      <button
                        type="button"
                        className="rounded-full border border-[#3434E8] px-4 py-1.5 text-[10px] font-medium text-[#3434E8] transition hover:bg-[#3434E8] hover:text-white">
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-4 border-t border-[#EDF0F4] pt-5 sm:grid-cols-3">
            {totals.map(([label, value, color]) => (
              <div key={label}>
                <p className="text-[10px] text-[#A5ABB6]">
                  {label}
                </p>

                <p className={`mt-1 text-sm font-semibold ${color}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}