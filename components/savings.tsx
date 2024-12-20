import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const SavingsBadge = ({
  amount,
  percentage,
}: {
  amount: number;
  percentage: number;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <p className="hover:bg-emerald-600 transition-colors text-xs h-[18px] font-semibold leading-[14px] px-1 p-0.5 bg-emerald-500 text-zinc-950 rounded tracking-tight">
            -{percentage}%
          </p>
        </TooltipTrigger>
        <TooltipContent className="max-w-64 text-pretty">
          Save up to <span className="font-medium">{amount}€/year</span> with
          this offer in comparison to your current one.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
