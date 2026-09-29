import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Camera } from "lucide-react";

const tabs = [
  ["Profile", "/settings/profile"],
  ["Preferences", "/settings/preferences"],
  ["Security", "/settings/security"],
];

const fields = [
  ["name", "Your Name", "William"],
  ["username", "Username", "@william"],
  ["email", "Email", "william@example.com"],
  ["password", "Password", "********"],
  ["dateOfBirth", "Date of Birth", "25 January 1998"],
  ["presentAddress", "Present Address", "123 Main Street"],
  ["permanentAddress", "Permanent Address", "456 Park Avenue"],
  ["city", "City", "Guntur"],
  ["postalCode", "Postal Code", "522001"],
  ["country", "Country", "India"],
];

export default function EditProfile() {
  const [form, setForm] = useState(
    Object.fromEntries(fields.map(([key, , value]) => [key, value]))
  );

  const change = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form);
        }}
        className="mt-6 rounded-[18px] bg-white p-6 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
    
        <div className="flex items-center gap-5 border-b border-[#EDF0F4] pb-6">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"/>
            <button
              type="button"
              className="absolute bottom-0 right-0 rounded-full bg-[#3434E8] p-2 text-white">
              <Camera size={13} />
            </button>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#29334F]">
              Profile Photo
            </h2>
            <p className="text-[10px] text-[#A5ABB6]">
              Upload a new profile picture
            </p>
          </div>
        </div>
      
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {fields.map(([key, label]) => (
            <label
              key={key}
              className="text-[10px] font-medium text-[#7E8491]" >
              {label}
              <input
                name={key}
                type={
                  key === "email"
                    ? "email"
                    : key === "password"
                    ? "password"
                    : "text"
                }
                value={form[key]}
                onChange={change}
                className="mt-2 h-11 w-full rounded-lg border border-[#E7E9EF] px-3 text-xs text-[#29334F] outline-none focus:border-[#3434E8]"/>
            </label>
          ))}
        </div>
  
        <div className="mt-7 flex justify-end border-t border-[#EDF0F4] pt-6">
          <button
            type="submit"
            className="rounded-lg bg-[#3434E8] px-7 py-2.5 text-xs text-white transition hover:bg-[#2929D9]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}