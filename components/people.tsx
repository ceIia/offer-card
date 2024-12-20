import { User, Users } from "lucide-react";

const iconClasses =
  "w-3 h-3 fill-purple-500 dark:fill-purple-400 stroke stroke-purple-500 dark:stroke-purple-400";

export const People = ({ amount }: { amount: number }) => {
  return (
    <div className="flex-shrink-0 text-xs group select-none text-zinc-500 dark:text-zinc-300 flex gap-1 border border-zinc-500 dark:border-zinc-500 rounded-full pl-1 pr-1.5 py-1">
      {amount > 1 ? (
        <Users className={iconClasses} />
      ) : (
        <User className={iconClasses} />
      )}
      <p className="leading-none tabular-nums text-[11px] font-semibold">
        {amount} pers.
      </p>
    </div>
  );
};
