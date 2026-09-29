import { Wifi } from "lucide-react";

export default function BankCard({
  secondary = false,
  card = {},
}) {
  const balance = card.balance ?? "$5,756";
  const cardHolder = card.cardHolder ?? "Eddy Cusuma";
  const validThru = card.validThru ?? "12/22";
  const cardNumber = card.cardNumber ?? "3778 **** **** 1234";

  return (
    <div
      className={`relative min-h-[210px] w-full overflow-hidden rounded-[18px] ${
        secondary
          ? "border border-[#E8EAF0] bg-white text-[#29334F]"
          : "bg-gradient-to-br from-[#4A4AF0] to-[#2929D9] text-white"}`}>
      {/* Decorative circles */}
      {!secondary && (
        <>
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[20px] border-white/5" />

          <div className="absolute -bottom-24 -left-12 h-52 w-52 rounded-full border-[25px] border-white/5" />
        </>
      )}
      {/* Card content */}
      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p
              className={`text-xs ${
                secondary
                  ? "text-[#A5ABB6]"
                  : "text-white/60"}`}>
              Balance
            </p>
            <p className="mt-1 text-lg font-semibold sm:text-xl">
              {balance}
            </p>
          </div>
    
          <div className="flex shrink-0">
            <span className="h-7 w-7 rounded-full bg-[#ED7097]/80" />

            <span className="-ml-3 h-7 w-7 rounded-full bg-[#F5A445]/80" />
          </div>
        </div>
        {/* Holder + valid thru */}
        <div className="mt-7 grid grid-cols-2 gap-4">
          <div className="min-w-0">
            <p
              className={`text-[8px] ${
                secondary
                  ? "text-[#A5ABB6]"
                  : "text-white/60"}`}>
              CARD HOLDER
            </p>
            <p className="mt-1 truncate text-xs">
              {cardHolder}
            </p>
          </div>
          <div>
            <p
              className={`text-[8px] ${
                secondary
                  ? "text-[#A5ABB6]"
                  : "text-white/60"}`}>
              VALID THRU
            </p>
            <p className="mt-1 text-xs">
              {validThru}
            </p>
          </div>
        </div>
      </div>
      {/* Card number */}
      <div
        className={`absolute bottom-0 left-0 right-0 flex min-h-[55px] items-center justify-between gap-3 px-5 sm:px-6 ${
          secondary
            ? "border-t border-[#EEF0F4]"
            : "bg-black/5"}`} >
        <span className="min-w-0 truncate text-xs tracking-[1.5px] sm:text-sm">
          {cardNumber}
        </span>
        <Wifi
          size={22}
          className="shrink-0"
        />
      </div>
    </div>
  );
}
