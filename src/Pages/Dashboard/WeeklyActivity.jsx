import SectionHeader from "../../Components/SectionHeader";

const activity = [
  { day: "Sat", deposit: 70, withdraw: 45 },
  { day: "Sun", deposit: 90, withdraw: 55 },
  { day: "Mon", deposit: 55, withdraw: 75 },
  { day: "Tue", deposit: 75, withdraw: 50 },
  { day: "Wed", deposit: 65, withdraw: 85 },
  { day: "Thu", deposit: 90, withdraw: 60 },
  { day: "Fri", deposit: 70, withdraw: 45 },
];

export default function WeeklyActivity() {
  return (
    <section className="rounded-[18px] bg-white p-4 shadow-[0_4px_20px_rgba(35,44,75,0.035)] sm:p-5">
      <SectionHeader title="Weekly Activity" />

      {/* Legend */}
      <div className="mb-5 flex justify-end gap-5 text-[10px] text-[#7E8491]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#3434E8]" />
          Deposit
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F2B53F]" />
          Withdraw
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-[230px]">
        {/* Grid lines */}
        <div className="absolute inset-x-0 top-0 flex h-[190px] flex-col justify-between">
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="border-t border-dashed border-[#E8EAF0]"
            />
          ))}
          <div className="border-t border-[#EEF0F4]" />
        </div>

        {/* Bars */}
        <div className="absolute inset-x-0 bottom-10 top-0 flex items-end justify-between px-1 sm:px-5">
          {activity.map((item) => (
            <div
              key={item.day}
              className="flex h-full flex-1 items-end justify-center gap-1"
            >
              <div
                className="w-2 rounded-t-md bg-[#3434E8] transition-all duration-500 sm:w-3"
                style={{ height: `${item.deposit}%` }}
              />

              <div
                className="w-2 rounded-t-md bg-[#F2B53F] transition-all duration-500 sm:w-3"
                style={{ height: `${item.withdraw}%` }}
              />
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="absolute bottom-0 left-0 right-0 flex px-1 text-[9px] text-[#A5ABB6] sm:px-5">
          {activity.map((item) => (
            <span key={item.day} className="flex-1 text-center">
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}