import { useMemo, useState } from "react";
import {ArrowUpRight,ArrowDownLeft,Download,Search,} from "lucide-react";
import BankCard from "../Components/BankCard";
import SectionHeader from "../Components/SectionHeader";

const transactions = [
  {
    id: 1,
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -2500,
  },
  {
    id: 2,
    description: "Mobile Service",
    transactionId: "#12548797",
    type: "Service",
    card: "1234 ****",
    date: "25 Jan, 10.15 AM",
    amount: -1500,
  },
  {
    id: 3,
    description: "Salary",
    transactionId: "#12548798",
    type: "Income",
    card: "5678 ****",
    date: "21 Jan, 09.00 AM",
    amount: 45000,
  },
  {
    id: 4,
    description: "Freelance Payment",
    transactionId: "#12548799",
    type: "Income",
    card: "5678 ****",
    date: "20 Jan, 03.30 PM",
    amount: 8500,
  },
  {
    id: 5,
    description: "Grocery Store",
    transactionId: "#12548800",
    type: "Shopping",
    card: "1234 ****",
    date: "18 Jan, 06.20 PM",
    amount: -3200,
  },
  {
    id: 6,
    description: "Electricity Bill",
    transactionId: "#12548801",
    type: "Bill",
    card: "1234 ****",
    date: "15 Jan, 08.10 AM",
    amount: -2100,
  },
];

const expenses = [
  { month: "Jul", amount: 3200 },
  { month: "Aug", amount: 4500 },
  { month: "Sep", amount: 2800 },
  { month: "Oct", amount: 5200 },
  { month: "Nov", amount: 3900 },
  { month: "Dec", amount: 6500 },
];

const cards = [
  {
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
  {
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 5678",
  },
];

const tabs = ["All Transactions", "Income", "Expense"];
const types = ["All Types", "Shopping", "Service", "Income", "Bill"];

export default function Transactions() {
  const [tab, setTab] = useState("All Transactions");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");

  const filteredTransactions = useMemo(() => {
    const query = search.toLowerCase();

    return transactions.filter((transaction) => {
      const matchesTab =
        tab === "All Transactions" ||
        (tab === "Income" && transaction.amount > 0) ||
        (tab === "Expense" && transaction.amount < 0);

      const matchesType =
        type === "All Types" ||
        transaction.type === type;

      const matchesSearch = `${transaction.description} ${transaction.transactionId} ${transaction.type}`
        .toLowerCase()
        .includes(query);

      return matchesTab && matchesType && matchesSearch;
    });
  }, [tab, type, search]);

  const downloadReceipt = (transaction) => {
    const text = `
Transaction Receipt

Description: ${transaction.description}
Transaction ID: ${transaction.transactionId}
Amount: $${Math.abs(transaction.amount).toLocaleString()}
Date: ${transaction.date}
`;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${transaction.description}-receipt.txt`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const maxExpense = Math.max(
    ...expenses.map((item) => item.amount)
  );

  return (
    <div className="mx-auto w-full max-w-[1400px] space-y-6">
      <section>
        <SectionHeader title="My Cards" action="Add Card" />

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <BankCard
              key={index}
              card={card}
              secondary={index === 1}
            />
          ))}
        </div>
      </section>


      <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
        <SectionHeader title="My Expense" />

        <div className="flex h-[230px] items-end justify-between gap-4">
          {expenses.map((expense) => (
            <div
              key={expense.month}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div className="flex h-[85%] w-full items-end justify-center">
                <div
                  className="w-6 rounded-t-md bg-[#3434E8] sm:w-10"
                  style={{
                    height: `${
                      (expense.amount / maxExpense) * 100
                    }%`,
                  }}
                />
              </div>

              <span className="text-[10px] text-[#A5ABB6]">
                {expense.month}
              </span>
            </div>
          ))}
        </div>
      </section>

    
      <section className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-base font-semibold text-[#29334F]">
            Recent Transactions
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center rounded-xl bg-[#F5F7FB] px-3">
              <Search
                size={17}
                className="text-[#A5ABB6]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent px-2 py-2 text-xs outline-none placeholder:text-[#A5ABB6]"
              />
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xl bg-[#F5F7FB] px-3 py-2 text-xs outline-none"
            >
              {types.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5 flex gap-6 border-b border-[#EEF0F4]">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`pb-3 text-xs font-medium ${
                tab === item
                  ? "border-b-2 border-[#3434E8] text-[#3434E8]"
                  : "text-[#A5ABB6]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr className="text-xs text-[#A5ABB6]">
                <th className="px-3 py-3">Description</th>
                <th className="px-3 py-3">Transaction ID</th>
                <th className="px-3 py-3">Type</th>
                <th className="px-3 py-3">Card</th>
                <th className="px-3 py-3">Date</th>
                <th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3"></th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => {
                  const income = transaction.amount > 0;

                  return (
                    <tr
                      key={transaction.id}
                      className="border-b border-[#F0F1F5] last:border-0"
                    >
                      <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-full ${
                              income
                                ? "bg-[#E7FAF4] text-[#16B78E]"
                                : "bg-[#FFF0F0] text-[#E85D68]"
                            }`}
                          >
                            {income ? (
                              <ArrowDownLeft size={17} />
                            ) : (
                              <ArrowUpRight size={17} />
                            )}
                          </span>

                          <span className="whitespace-nowrap text-sm font-medium text-[#29334F]">
                            {transaction.description}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 py-4 text-xs text-[#718096]">
                        {transaction.transactionId}
                      </td>

                      <td className="px-3 py-4 text-xs text-[#718096]">
                        {transaction.type}
                      </td>

                      <td className="px-3 py-4 text-xs text-[#718096]">
                        {transaction.card}
                      </td>

                      <td className="px-3 py-4 text-xs text-[#718096]">
                        {transaction.date}
                      </td>

                      <td
                        className={`px-3 py-4 text-sm font-semibold ${
                          income
                            ? "text-[#16B78E]"
                            : "text-[#E85D68]"
                        }`}
                      >
                        {income ? "+" : "-"}$
                        {Math.abs(
                          transaction.amount
                        ).toLocaleString()}
                      </td>

                      <td className="px-3 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            downloadReceipt(transaction)
                          }
                          className="text-[#3434E8] transition hover:opacity-70"
                          aria-label="Download receipt"
                        >
                          <Download size={17} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="py-10 text-center text-sm text-[#A5ABB6]"
                  >
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}