import { useState } from "react";
import { ArrowRight } from "lucide-react";

import SectionHeader from "../../Components/SectionHeader";

const users = [
  {
    id: 1,
    name: "Francis",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    name: "Wilson",
    role: "Director",
    image: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 3,
    name: "David",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=14",
  },
];

export default function QuickTransfer() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    if (!amount || Number(amount) <= 0) return;

    alert(
      `Transfer $${Number(amount).toFixed(2)} to ${selectedUser.name}`
    );

    setAmount("");
  };

  return (
    <section className="rounded-[18px] bg-white p-4 shadow-[0_4px_20px_rgba(35,44,75,0.035)] sm:p-5">
      <SectionHeader title="Quick Transfer" />

      {/* Users */}
      <div className="mt-1 flex items-center gap-3 overflow-x-auto pb-2">
        {users.map((user) => (
          <button
            key={user.id}
            type="button"
            onClick={() => setSelectedUser(user)}
            className={`flex min-w-[65px] flex-1 flex-col items-center rounded-xl p-1 transition ${
              selectedUser.id === user.id
                ? "bg-[#F5F6FF]"
                : "hover:bg-[#FAFBFF]"
            }`}
          >
            <img
              src={user.image}
              alt={user.name}
              className={`h-12 w-12 rounded-full object-cover ${
                selectedUser.id === user.id
                  ? "ring-2 ring-[#3434E8] ring-offset-2"
                  : ""
              }`}
            />

            <p className="mt-2 max-w-[70px] truncate text-xs font-medium text-[#29334F]">
              {user.name}
            </p>

            <p className="text-[9px] text-[#A3A9B5]">
              {user.role}
            </p>
          </button>
        ))}

        <button
          type="button"
          onClick={() => {
            const index = users.findIndex(
              (user) => user.id === selectedUser.id
            );

            setSelectedUser(
              users[(index + 1) % users.length]
            );
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#EDF0F4] text-[#29334F] transition hover:border-[#3434E8] hover:text-[#3434E8]"
          aria-label="Next contact"
        >
          <ArrowRight size={17} />
        </button>
      </div>

      {/* Amount */}
      <div className="mt-5">
        <label
          htmlFor="amount"
          className="mb-2 block text-xs text-[#A3A9B5]"
        >
          Write Amount
        </label>

        <div className="flex overflow-hidden rounded-full bg-[#F5F7FB]">
          <input
            id="amount"
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="525.50"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs outline-none placeholder:text-[#A3A9B5]"
          />

          <button
            type="button"
            onClick={handleSend}
            className="flex items-center gap-2 bg-[#3434E8] px-5 text-xs font-medium text-white transition hover:bg-[#2929D9]"
          >
            Send
            <ArrowRight size={14} />
          </button>
        </div>

        <p className="mt-2 text-[9px] text-[#A3A9B5]">
          Sending to{" "}
          <span className="font-semibold text-[#29334F]">
            {selectedUser.name}
          </span>
        </p>
      </div>
    </section>
  );
}