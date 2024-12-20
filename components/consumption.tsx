import { UtilityPole } from "lucide-react";

export const Consumption = ({
  value,
  compact,
}: {
  value: number;
  compact?: boolean;
}) => {
  const formattedValue =
    compact && value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;

  return (
    <div className="flex-shrink-0 text-xs group select-none text-zinc-500 dark:text-zinc-300 flex gap-1 border border-zinc-500 dark:border-zinc-500 rounded-full pl-1 pr-1.5 py-1">
      <UtilityPole className="w-3 h-3 fill-cyan-500 dark:fill-cyan-400 stroke stroke-cyan-500 dark:stroke-cyan-400" />
      <p className="leading-none tabular-nums text-[11px] font-semibold">
        {formattedValue} kWh/mo
      </p>
    </div>
  );
};
