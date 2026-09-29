import SectionHeader from "../../Components/SectionHeader";

const balanceData = [
  160, 145, 100, 125, 150,
  80, 105, 130, 55, 85,
  110, 60, 70, 45, 30,
];

const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

export default function BalanceHistory() {
  const width = 600;
  const height = 200;
  const padding = 10;

  const max = Math.max(...balanceData);
  const min = Math.min(...balanceData);
  const range = max - min || 1;

  const points = balanceData.map((value, index) => ({
    x:
      padding +
      (index / (balanceData.length - 1)) *
        (width - padding * 2),

    y:
      height -
      padding -
      ((value - min) / range) *
        (height - padding * 2),
  }));

  const linePath = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previous = points[index - 1];
      const controlX = (previous.x + point.x) / 2;

      return `C ${controlX} ${previous.y}, ${controlX} ${point.y}, ${point.x} ${point.y}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <section className="rounded-[18px] bg-white p-4 shadow-[0_4px_20px_rgba(35,44,75,0.035)] sm:p-5">
      <SectionHeader title="Balance History" />

      <div className="relative mt-2 h-[210px]">
        {/* Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="border-t border-dashed border-[#E8EAF0]"/>
          ))}
          <div className="border-t border-[#EEF0F4]" />
        </div>

        {/* Chart */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none">
          <defs>
            <linearGradient
              id="balanceGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop
                offset="0%"
                stopColor="#3434E8"
                stopOpacity="0.22"
              />
              <stop
                offset="100%"
                stopColor="#3434E8"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Area */}
          <path
            d={areaPath}
            fill="url(#balanceGradient)"
          />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#3434E8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="white"
              stroke="#3434E8"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      {/* Months */}
      <div className="mt-3 flex justify-between text-[9px] text-[#A5ABB6]">
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </section>
  );
}