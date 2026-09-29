import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";

const tabs = [
  ["Profile", "/settings/profile"],
  ["Preferences", "/settings/preferences"],
  ["Security", "/settings/security"],
];

const currencies = [
  ["USD", "USD - US Dollar"],
  ["EUR", "EUR - Euro"],
  ["GBP", "GBP - British Pound"],
  ["INR", "INR - Indian Rupee"],
];

const zones = [
  "GMT +05:30",
  "GMT +00:00",
  "GMT -05:00",
  "GMT +01:00",
];

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative h-6 w-11 rounded-full ${
        value ? "bg-[#20B995]" : "bg-[#D9DDE6]"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
          value ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-medium text-[#7E8491]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full appearance-none rounded-lg border border-[#E7E9EF] px-3 pr-9 text-xs outline-none focus:border-[#3434E8]"
        >
          {options.map((option) => {
            const value = Array.isArray(option) ? option[0] : option;
            const label = Array.isArray(option) ? option[1] : option;

            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-3 text-[#A5ABB6]"
        />
      </div>
    </div>
  );
}

export default function Preferences() {
  const [currency, setCurrency] = useState("USD");
  const [timezone, setTimezone] = useState("GMT +05:30");

  const [notifications, setNotifications] = useState([
    ["I send or receive digital currency", true],
    ["I receive merchant order", false],
    ["There are recommendations for my account", true],
  ]);

  const toggleNotification = (index) => {
    setNotifications((items) =>
      items.map((item, i) =>
        i === index ? [item[0], !item[1]] : item
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <h1 className="text-xl font-semibold text-[#29334F]">
        Settings
      </h1>

      <p className="mt-1 text-xs text-[#A5ABB6]">
        Manage your account settings
      </p>

      <div className="mt-6 flex gap-7 border-b border-[#EDF0F4]">
        {tabs.map(([name, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `pb-3 text-xs font-medium ${
                isActive
                  ? "border-b-2 border-[#3434E8] text-[#3434E8]"
                  : "text-[#A5ABB6]"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </div>

      <div className="mt-6 rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)] sm:p-7">
        <h2 className="text-base font-semibold text-[#29334F]">
          Preferences
        </h2>

        <p className="mt-1 text-[10px] text-[#A5ABB6]">
          Customize your account preferences
        </p>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <Select
            label="Currency"
            value={currency}
            onChange={setCurrency}
            options={currencies}
          />

          <Select
            label="Timezone"
            value={timezone}
            onChange={setTimezone}
            options={zones}
          />
        </div>

        <div className="mt-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF0FF]">
              <Bell size={18} className="text-[#3434E8]" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#29334F]">
                Notifications
              </h3>

              <p className="text-[9px] text-[#A5ABB6]">
                Manage your notification preferences
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {notifications.map(([text, value], index) => (
              <div
                key={text}
                className="flex items-center justify-between border-b border-[#EDF0F4] pb-4"
              >
                <p className="text-xs text-[#29334F]">
                  {text}
                </p>

                <Toggle
                  value={value}
                  onChange={() => toggleNotification(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-end border-t border-[#EDF0F4] pt-6">
          <button
            type="button"
            className="rounded-lg bg-[#3434E8] px-7 py-2.5 text-xs text-white transition hover:bg-[#2929D9]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}