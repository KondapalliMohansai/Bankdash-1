import { useState } from "react";
import { motion } from "framer-motion";
import {CreditCard,Eye,Lock,KeyRound,PlaySquare,Apple,Plus} from "lucide-react";

const cards = [
  ["$5,756", "Eddy Cusuma", "12/28", "3778 **** **** 1234", "blue"],
  ["$5,756", "Eddy Cusuma", "12/28", "3778 **** **** 1234", "dark"],
  ["$5,756", "Eddy Cusuma", "12/28", "3778 **** **** 1234", "white"],
];

const cardList = [
  ["DBL Bank", "**** **** 5600", "William"],
  ["BRC Bank", "**** **** 4300", "Michel"],
  ["ABM Bank", "**** **** 7560", "Edward"],
];

const expenses = [
  ["DBL Bank", 35, "#3434E8"],
  ["ABM Bank", 25, "#20B995"],
  ["BRC Bank", 20, "#ED7097"],
  ["MCP Bank", 20, "#F2B53F"],
];

const settings = [
  [Lock, "Block Card", "Temporarily block your card"],
  [KeyRound, "Change Pin Code", "Update your card PIN"],
  [PlaySquare, "Add to Google Play", "Use your card with Google"],
  [Apple, "Add to Apple Pay", "Use your card with Apple Pay"],
  [Apple, "Add to Apple Store", "Use your card for Apple Store"],
];

const fields = [
  ["type", "Card Type"],
  ["name", "Name on Card"],
  ["number", "Card Number"],
  ["expiry", "Expiration Date"],
];

export default function CreditCards() {
  const [form, setForm] = useState({
    type: "Classic",
    name: "My Cards",
    number: "**** **** **** ****",
    expiry: "25 January 2025",
  });

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px] space-y-7">
      {/* My Cards */}
      <section>
        <h2 className="mb-4 text-base font-semibold text-[#29334F]">
          My Cards
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(
            ([balance, holder, valid, number, type], index) => {
              const white = type === "white";

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className={`relative h-[225px] overflow-hidden rounded-[20px] p-6 ${
                    type === "blue"
                      ? "bg-[#3434E8] text-white"
                      : type === "dark"
                      ? "bg-[#1E2752] text-white"
                      : "border border-[#E5E7ED] bg-white text-[#29334F]"}`}>
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${
                      white ? "bg-[#F4F5F8]" : "bg-white/10"
                    }`}
                  />
                  <div
                    className={`absolute -bottom-16 -left-10 h-36 w-36 rounded-full ${
                      white ? "bg-[#F7F8FA]" : "bg-white/5"}`}/>
                  <div className="relative flex justify-between">
                    <div>
                      <p
                        className={`text-[9px] ${
                          white
                            ? "text-[#A5ABB6]"
                            : "text-white/60"}`}>
                        Balance
                      </p>
                      <p className="mt-1 text-xl font-semibold">
                        {balance}
                      </p>
                    </div>
                    <CreditCard size={22} />
                  </div>
                  <div className="relative mt-8 flex justify-between">
                    <div>
                      <p className="text-[8px] opacity-50">
                        CARD HOLDER
                      </p>
                      <p className="mt-1 text-xs">{holder}</p>
                    </div>
                    <div>
                      <p className="text-[8px] opacity-50">
                        VALID THRU
                      </p>
                      <p className="mt-1 text-xs">{valid}</p>
                    </div>
                  </div>
                  <div className="relative mt-7 flex justify-between">
                    <p className="text-sm tracking-[2px]">
                      {number}
                    </p>
                    <div className="flex">
                      <span
                        className={`h-5 w-5 rounded-full ${
                          white
                            ? "bg-[#3434E8]/20"
                            : "bg-white/40" }`}/>
                      <span
                        className={`-ml-2 h-5 w-5 rounded-full ${
                          white
                            ? "bg-[#ED7097]/30"
                            : "bg-white/20"}`}/>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </section>
      {/* Expense + Card List */}
      <div className="grid gap-6 xl:grid-cols-[1fr_1.5fr]">
        {/* Expense */}
        <section>
          <h2 className="mb-4 text-base font-semibold text-[#29334F]">
            Card Expense Statistics
          </h2>
          <div className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <div className="relative flex h-[190px] w-[190px] items-center justify-center">
                <div
                  className="h-[180px] w-[180px] rounded-full"
                  style={{
                    background: `conic-gradient(
                      #3434E8 0 35%,
                      #20B995 35% 60%,
                      #ED7097 60% 80%,
                      #F2B53F 80% 100%
                    )`,
                  }}
                />
                <div className="absolute flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full bg-white">
                  <p className="text-[10px] text-[#A5ABB6]">
                    Total Expense
                  </p>
                  <p className="text-lg font-semibold text-[#29334F]">
                    $3,460
                  </p>
                </div>
              </div>
              <div className="w-full max-w-[220px] space-y-4">
                {expenses.map(([name, value, color]) => (
                  <div
                    key={name}
                    className="flex justify-between text-xs">
                    <span className="flex items-center gap-2 text-[#7E8491]">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: color }}
                      />
                      {name}
                    </span>
                    <b>{value}%</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Card List */}
        <section>
          <h2 className="mb-4 text-base font-semibold text-[#29334F]">
            Card List
          </h2>
          <div className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
            {cardList.map(([bank, number, owner]) => (
              <div
                key={bank}
                className="flex flex-col gap-4 border-b border-[#F0F1F4] py-4 last:border-0 sm:flex-row sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF]">
                  <CreditCard
                    size={19}
                    className="text-[#3434E8]"
                  />
                </div>
                <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
                  <div>
                    <p className="text-[9px] text-[#A5ABB6]">
                      Bank
                    </p>
                    <p className="mt-1 text-xs font-medium">
                      {bank}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] text-[#A5ABB6]">
                      Card Number
                    </p>
                    <p className="mt-1 text-xs font-medium">
                      {number}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] text-[#A5ABB6]">
                      Main Card
                    </p>
                    <p className="mt-1 text-xs font-medium">
                      {owner}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-[#3434E8]">
                  <Eye size={13} />
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Add Card + Settings */}
      <div className="grid gap-6 pb-6 xl:grid-cols-[1.4fr_1fr]">
        {/* Add Card */}
        <section>
          <h2 className="mb-4 text-base font-semibold text-[#29334F]">
            Add New Card
          </h2>
          <div className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
            <p className="mb-6 text-xs leading-5 text-[#8E96A5]">
              Credit cards generally mean a plastic card issued
              by a financial institution that allows you to borrow
              money to make purchases and pay it back later.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map(([key, label]) => (
                <div key={key}>
                  <label className="mb-2 block text-[10px] text-[#7E8491]">
                    {label}
                  </label>
                  <input
                    value={form[key]}
                    onChange={(e) =>
                      update(key, e.target.value)
                    }
                    className="w-full rounded-lg border border-[#E7E9EF] px-4 py-3 text-xs outline-none focus:border-[#3434E8]"
                  />
                </div>
              ))}
            </div>
            <button className="mt-6 flex items-center gap-2 rounded-lg bg-[#3434E8] px-5 py-3 text-xs text-white">
              <Plus size={14} />
              Add Card
            </button>
          </div>
        </section>
        {/* Settings */}
        <section>
          <h2 className="mb-4 text-base font-semibold text-[#29334F]">
            Card Setting
          </h2>
          <div className="space-y-2 rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
            {settings.map(([Icon, title, description]) => (
              <button
                key={title}
                className="flex w-full items-center gap-4 rounded-xl p-3 text-left hover:bg-[#F8F8FF]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF]">
                  <Icon
                    size={17}
                    className="text-[#3434E8]"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    {title}
                  </p>
                  <p className="mt-1 text-[9px] text-[#A5ABB6]">
                    {description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}