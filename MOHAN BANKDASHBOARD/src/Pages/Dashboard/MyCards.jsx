import BankCard from "../../Components/BankCard";
import SectionHeader from "../../Components/SectionHeader";
import RecentTransactions from "./RecentTransactions";

export default function MyCards() {
  return (
    <section>
      <SectionHeader title="My Cards" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.8fr_1fr]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <BankCard />
          <BankCard secondary />
        </div>

        <RecentTransactions />
      </div>
    </section>
  );
}
