import { motion } from "framer-motion";

import MyCards from "./MyCards";
import WeeklyActivity from "./WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics";
import QuickTransfer from "./QuickTransfer";
import BalanceHistory from "./BalanceHistory";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px] space-y-6"
    >
      {/* My Cards + Recent Transactions */}
      <MyCards />

      {/* Weekly Activity + Expense Statistics */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      {/* Quick Transfer + Balance History */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.7fr]">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </motion.div>
  );
}