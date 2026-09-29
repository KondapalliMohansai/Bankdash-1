import SectionHeader from "../../Components/SectionHeader";

const expenses = [
  { name: "Entertainment", percentage: 30, color: "#3434E8" },
  { name: "Bill Expense", percentage: 25, color: "#F2B53F" },
  { name: "Investment", percentage: 20, color: "#25B99A" },
  { name: "Others", percentage: 25, color: "#F16B8F" },
];

export default function ExpenseStatistics() {
  let angle = 0;

  const slices = expenses.map((expense) => {
    const start = angle;
    const end = angle + expense.percentage * 3.6;
    angle = end;

    return {
      ...expense,
      start,
      end,
      middle: (start + end) / 2,
    };
  });

  const gradient = slices
    .map(
      ({ color, start, end }) =>
        `${color} ${start}deg ${end}deg`
    )
    .join(", ");

  return (
    <section className="rounded-[18px] bg-white p-4 shadow-[0_4px_20px_rgba(35,44,75,0.035)] sm:p-5">
      <SectionHeader title="Expense Statistics" />

      <div className="flex min-h-[250px] items-center justify-center py-4">
        <div className="relative h-[220px] w-[220px]">
          {/* Pie Chart */}
          <div
            className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[210px] sm:w-[210px]"
            style={{
              background: `conic-gradient(${gradient})`,
            }}
          />

          {/* Labels */}
          {slices.map((slice) => {
            const radians =
              ((slice.middle - 90) * Math.PI) / 180;

            const radius = 31;

            const x = 50 + Math.cos(radians) * radius;
            const y = 50 + Math.sin(radians) * radius;

            return (
              <div
                key={slice.name}
                className="absolute z-10 w-[70px] -translate-x-1/2 -translate-y-1/2 text-center text-white"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                <p className="text-[8px] font-medium leading-tight sm:text-[9px]">
                  {slice.name}
                </p>

                <p className="text-[10px] font-bold sm:text-[12px]">
                  {slice.percentage}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}