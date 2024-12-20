"use client";

import { cn } from "@/lib/utils";
import { CreditCard, ReceiptEuro, Landmark, Banknote } from "lucide-react";
import { useState } from "react";

const options = [
  {
    id: "direct-debit",
    icon: <ReceiptEuro className="h-3.5 w-3.5" />,
    label: "SEPA Direct Debit",
    background: "bg-green-700",
  },
  {
    id: "online",
    icon: <CreditCard className="h-3.5 w-3.5" />,
    label: "Card, SEPA TIP",
    background: "bg-blue-700",
  },
  {
    id: "traditionnal",
    icon: <Banknote className="h-3.5 w-3.5" />,
    label: "Cheques, cash",
    background: "bg-yellow-700",
  },
  {
    id: "points",
    icon: <Landmark className="h-3.5 w-3.5" />,
    label: "Post office, bank",
    background: "bg-red-700",
  },
];

export function PaymentOptions() {
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const option = options.find((option) => option.id === currentOption);

  return (
    <div className="relative">
      <div
        className="flex hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all rounded-b overflow-hidden"
        onMouseLeave={() => setCurrentOption(null)}
      >
        {/* Background overlay that slides */}
        {currentOption && (
          <div
            className={cn(
              "absolute inset-0 transition-transform duration-200 ease-out",
              option?.background,
              option && options.indexOf(option) === 0 && "rounded-bl",
              option &&
                options.indexOf(option) === options.length - 1 &&
                "rounded-br"
            )}
            style={{
              transform: `translateX(${
                options.findIndex((opt) => opt.id === currentOption) * 100
              }%)`,
              width: `${100 / options.length}%`,
            }}
          />
        )}

        {options.map((option) => (
          <div
            key={option.id}
            className={cn(
              "relative flex-1 flex items-center gap-2 justify-center rounded-b p-1.5 group transition-all z-10",
              currentOption === option.id && "text-white"
            )}
            onMouseEnter={() => setCurrentOption(option.id)}
          >
            {option.icon}
          </div>
        ))}
      </div>
      {option && (
        <div
          className={cn(
            "absolute bottom-full grid uppercase font-semibold tracking-tight place-items-center w-full rounded text-[9px] text-white",
            option.background,
            options.indexOf(option) === 0 && "rounded-bl-none",
            options.indexOf(option) === options.length - 1 && "rounded-br-none"
          )}
        >
          {option.label}
        </div>
      )}
    </div>
  );
}
