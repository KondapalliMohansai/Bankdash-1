import { motion } from "framer-motion";
import {TrendingUp,BarChart3,Percent,MoreHorizontal,} from "lucide-react";

const summary = [
  ["Total Invested Amount", "$150,000", TrendingUp, "bg-[#EEF0FF]", "text-[#3434E8]"],
  ["Number of Investments", "$1,250", BarChart3, "bg-[#FFF6DF]", "text-[#F2B53F]"],
  ["Rate of Return", "+5.80%", Percent, "bg-[#E8FBF5]", "text-[#20B995]"],
];

const yearly = [
  ["2016", 18000],
  ["2017", 24000],
  ["2018", 22000],
  ["2019", 33000],
  ["2020", 41000],
  ["2021", 48000],
];

const revenue = [
  ["2016", 190],
  ["2017", 150],
  ["2018", 170],
  ["2019", 105],
  ["2020", 70],
  ["2021", 45],
];

const investments = [
  ["Apple Store", "E-commerce • Marketplace", "$54,000", "+16%", "A"],
  ["Samsung Mobile", "E-commerce • Marketplace", "$25,300", "-4%", "S"],
  ["Tesla Motors", "Electric Vehicles", "$8,200", "+25%", "T"],
];

const stocks = [
  ["Trivago", "$520", "+5%"],
  ["Canon", "$480", "+10%"],
  ["Uberfood", "$350", "-3%"],
  ["Nokia", "$940", "+2%"],
  ["Tiktok", "$670", "-12%"],
];

function Card({ children }) {
  return (
    <div className="rounded-[18px] bg-white p-5 shadow-[0_4px_20px_rgba(35,44,75,0.035)]">
      {children}
    </div>
  );
}

function Chart({ data, max, labels }) {
  const points = data.map(([, value], i) => ({
    x: 10 + (i / (data.length - 1)) * 680,
    y: 210 - (value / max) * 190,
  }));

  const path = points
    .map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="relative h-[250px]">
      <div className="absolute left-0 top-0 flex h-[210px] flex-col justify-between text-[9px] text-[#A5ABB6]">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="absolute left-14 right-2 top-0 h-[210px]">
        <div className="absolute inset-0 flex flex-col justify-between">
          {labels.map((_, i) => (
            <div
              key={i}
              className="border-t border-dashed border-[#E8EAF0]"
            />
          ))}
        </div>

        <svg
          viewBox="0 0 700 220"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <motion.path
            d={path}
            fill="none"
            stroke="#3434E8"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />

          {points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="white"
              stroke="#3434E8"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-0 left-14 right-2 flex justify-between text-[9px] text-[#A5ABB6]">
        {data.map(([year]) => (
          <span key={year}>{year}</span>
        ))}
      </div>
    </div>
  );
}

export default function Investments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px] space-y-6"
    >

      <div className="grid gap-5 md:grid-cols-3">
        {summary.map(([title, amount, Icon, bg, color]) => (
          <Card key={title}>
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${bg}`}
              >
                <Icon size={22} className={color} />
              </div>

              <MoreHorizontal
                size={19}
                className="text-[#B0B5C0]"
              />
            </div>

            <p className="mt-5 text-xs text-[#A5ABB6]">
              {title}
            </p>

            <p className="mt-1 text-xl font-semibold text-[#29334F]">
              {amount}
            </p>
          </Card>
        ))}
      </div>
      <section>
        <h2 className="mb-4 font-semibold text-[#29334F]">
          Yearly Total Investment
        </h2>

        <Card>
          <Chart
            data={yearly}
            max={50000}
            labels={[
              "$50,000",
              "$40,000",
              "$30,000",
              "$20,000",
              "$10,000",
              "$0",
            ]}
          />
        </Card>
      </section>

      <section>
        <h2 className="mb-4 font-semibold text-[#29334F]">
          Monthly Revenue
        </h2>

        <Card>
          <Chart
            data={revenue}
            max={200}
            labels={[
              "$40,000",
              "$30,000",
              "$20,000",
              "$10,000",
              "$0",
            ]}
          />
        </Card>
      </section>

      <section>
        <h2 className="mb-4 font-semibold text-[#29334F]">
          My Investments
        </h2>

        <Card>
          <div className="divide-y divide-[#F1F2F5]">
            {investments.map(
              ([name, category, value, result, icon]) => (
                <div
                  key={name}
                  className="flex flex-col gap-4 py-5 first:pt-0 md:flex-row md:items-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF0FF] font-bold text-[#3434E8]">
                    {icon}
                  </div>

                  <div className="md:w-[220px]">
                    <p className="text-xs font-semibold text-[#29334F]">
                      {name}
                    </p>
                    <p className="mt-1 text-[9px] text-[#A5ABB6]">
                      {category}
                    </p>
                  </div>

                  <div className="md:w-[140px]">
                    <p className="text-[9px] text-[#A5ABB6]">
                      Investment Value
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#29334F]">
                      {value}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] text-[#A5ABB6]">
                      Return Value
                    </p>
                    <p
                      className={`mt-1 text-xs font-semibold ${
                        result.startsWith("+")
                          ? "text-[#20B995]"
                          : "text-[#ED7097]"
                      }`}
                    >
                      {result}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </Card>
      </section>

      <section className="pb-6">
        <h2 className="mb-4 font-semibold text-[#29334F]">
          Trending Stock
        </h2>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#EDF0F4] text-left text-[10px] text-[#A5ABB6]">
                  <th className="p-3">S.No</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Return</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map(([name, price, result], index) => (
                  <tr
                    key={name}
                    className="border-b border-[#F1F2F5] last:border-0" >
                    <td className="p-3 text-xs text-[#7E8491]">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F6FA] text-xs font-semibold text-[#3434E8]">
                          {name[0]}
                        </div>
                        <span className="text-xs font-semibold text-[#29334F]">
                          {name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-xs font-medium text-[#29334F]">
                      {price}
                    </td>
                    <td
                      className={`p-3 text-xs font-semibold ${
                        result.startsWith("+")
                          ? "text-[#20B995]"
                          : "text-[#ED7097]"
                      }`}>
                      {result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </motion.div>
  );
}