export default function SectionHeader({
  title,
  action = "See All",
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-base font-semibold text-[#29334F]">
        {title}
      </h2>
      {action && (
        <button className="text-xs font-medium text-[#3434E8]">
          {action}
        </button>
      )}
    </div>
  );
}
