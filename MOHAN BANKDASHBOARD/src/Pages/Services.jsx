export default function Services() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Services
      </h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Account Management",
          "Money Transfer",
          "Bill Payment",
          "Card Management",
          "Financial Planning",
          "Customer Support",
        ].map((service) => (
          <div
            key={service}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <h3 className="font-semibold">
              {service}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Manage your {service.toLowerCase()}.
            </p>

            <button className="mt-5 rounded-lg bg-[#1f3c88] px-4 py-2 text-sm text-white">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
