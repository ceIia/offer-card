import { Zap } from "lucide-react";

export const EnergyBase = ({ value }: { value: number }) => {
  return (
    <div className="flex-shrink-0 text-xs group select-none text-zinc-500 dark:text-zinc-300 flex gap-1 border border-zinc-500 dark:border-zinc-500 rounded-full pl-1 pr-1.5 py-1">
      <Zap className="w-3 h-3 fill-amber-500 dark:fill-amber-400 stroke stroke-amber-500 dark:stroke-amber-400 group-hover:animate-shake" />
      <p className="leading-none tabular-nums text-[11px] font-semibold">
        {value} kVA
      </p>
    </div>
  );
};
