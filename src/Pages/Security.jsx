import { useState } from "react";

export default function Security() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
        <h1 className="text-base font-semibold text-[#29334F]">Security</h1>
        <p className="mt-1 text-xs text-[#A5ABB6]">
          Manage your account security and password settings.
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-[#29334F]">
            Two-Factor Authentication
          </p>

          <div className="mt-2 flex items-center gap-3">
            <p className="text-[10px] text-[#A5ABB6]">
              Enable or disable two-factor authentication
            </p>

            <button
              type="button"
              onClick={() => setEnabled(!enabled)}
              className={`relative h-6 w-11 rounded-full ${
                enabled ? "bg-[#3434E8]" : "bg-[#D9DDE6]"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white ${
                  enabled ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-7 border-t border-[#EDF0F4] pt-6">
          <h2 className="text-sm font-semibold text-[#29334F]">
            Change Password
          </h2>

          <p className="mt-1 text-[10px] text-[#A5ABB6]">
            Update your password to keep your account secure.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {["Current Password", "New Password"].map((label) => (
              <label
                key={label}
                className="text-xs font-medium text-[#29334F]"
              >
                {label}
                <input
                  type="password"
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="mt-2 h-11 w-full rounded-lg border border-[#E7E9EF] px-3 text-xs outline-none focus:border-[#3434E8]"
                />
              </label>
            ))}
          </div>

          <button className="mt-5 rounded-lg bg-[#3434E8] px-6 py-3 text-xs text-white">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}