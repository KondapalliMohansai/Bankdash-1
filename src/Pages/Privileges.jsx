import { motion } from "framer-motion";
import {Gift,ShoppingBag,Plane,CreditCard,Heart,Headphones,} from "lucide-react";

const privileges = [
  [Gift, "Exclusive Offers", "Get special offers and rewards."],
  [ShoppingBag, "Shopping", "Enjoy special shopping discounts."],
  [Plane, "Travel", "Get benefits on flights and hotels."],
  [CreditCard, "Cashback", "Earn cashback on your purchases."],
  [Heart, "Health Benefits", "Enjoy health and wellness offers."],
  [Headphones, "24/7 Support", "Get dedicated customer support."],
];

export default function Privileges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[1400px]"
    >
      <h2 className="mb-5 text-base font-semibold text-[#29334F]">
        Privileges
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {privileges.map(([Icon, title, text]) => (
          <div
            key={title}
            className="rounded-[18px] bg-white p-6 shadow-[0_4px_20px_rgba(35,44,75,0.035)] transition hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF0FF]">
              <Icon size={24} className="text-[#3434E8]" />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-[#29334F]">
              {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#A5ABB6]">
              {text}
            </p>

            <button
              type="button"
              className="mt-5 text-xs font-medium text-[#3434E8]"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}