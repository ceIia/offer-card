"use client";

import { Blur } from "@/components/blur";
import {
  Card,
  type BigPriceType,
  type BelowBigPrice,
  type PricingDetails,
} from "@/components/card";
import { cn } from "@/utils/classnames";
import { useState } from "react";

// Add new type for base price display
export type BasePriceDisplay = "below" | "none";

const offers = [
  {
    id: 1,
    name: "dynamic luce",
    provider: "engie",
  },
  {
    id: 2,
    name: "dynamic luce",
    provider: "engie",
  },
  {
    id: 3,
    name: "dynamic luce",
    provider: "engie",
  },
  {
    id: 4,
    name: "dynamic luce",
    provider: "engie",
  },
];

export default function Home() {
  const [bigPrice, setBigPrice] = useState<BigPriceType>("estimate");
  const [below, setBelowBigPrice] = useState<BelowBigPrice>("composition");
  const [compositionInDetails, setCompositionInDetails] =
    useState<boolean>(false);
  const [details, setDetails] = useState<PricingDetails>({
    displayEnergyBase: true,
    displayPeople: true,
    displayConsumption: true,
  });

  return (
    <div className="grid place-items-center gap-6 relative mt-24 px-8 md:px-0">
      <div className="space-y-6 gradient-mask-b-40 w-full">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            bigPrice={{
              type: bigPrice,
              below,
            }}
            pricingDetails={{
              ...details,
              displayPriceEstimateComposition: compositionInDetails,
            }}
          />
        ))}
      </div>

      <Blur />

      <div className="fixed bottom-6 right-6 z-40 space-y-1.5">
        <div className="flex gap-1.5 items-center">
          <p className="text-xs leading-none text-zinc-500 dark:text-zinc-400">
            big price
          </p>
          <button
            onClick={() => setBigPrice("estimate")}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              bigPrice === "estimate" && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            estimate
          </button>
          <button
            onClick={() => setBigPrice("kwh")}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              bigPrice === "kwh" && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            kwh
          </button>
        </div>

        <div className="flex gap-1.5 items-center">
          <p className="text-xs leading-none text-zinc-500 dark:text-zinc-400">
            below price
          </p>
          <button
            onClick={() => setBelowBigPrice("estimate")}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              below === "estimate" && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            estimate
          </button>
          <button
            onClick={() => setBelowBigPrice("composition")}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              below === "composition" && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            composition
          </button>
          <button
            onClick={() => setBelowBigPrice("none")}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              below === "none" && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            none
          </button>
        </div>

        <div className="flex gap-1.5 items-center">
          <p className="text-xs leading-none text-zinc-500 dark:text-zinc-400">
            composition in details
          </p>
          <button
            onClick={() => setCompositionInDetails(!compositionInDetails)}
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              compositionInDetails && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            {compositionInDetails ? "on" : "off"}
          </button>
        </div>

        <div className="flex gap-1.5 items-center">
          <p className="text-xs leading-none text-zinc-500 dark:text-zinc-400">
            details
          </p>
          <button
            onClick={() =>
              setDetails((prev) => ({
                ...prev,
                displayEnergyBase: !prev.displayEnergyBase,
              }))
            }
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              details.displayEnergyBase && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            energy base
          </button>

          <button
            onClick={() =>
              setDetails((prev) => ({
                ...prev,
                displayPeople: !prev.displayPeople,
              }))
            }
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              details.displayPeople && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            people
          </button>

          <button
            onClick={() =>
              setDetails((prev) => ({
                ...prev,
                displayConsumption: !prev.displayConsumption,
              }))
            }
            type="button"
            className={cn(
              "bg-zinc-100 dark:bg-zinc-800 rounded-md px-1.5 py-1 text-xs leading-none",
              details.displayConsumption && "bg-blue-100 dark:bg-blue-800"
            )}
          >
            consumption
          </button>
        </div>
      </div>
    </div>
  );
}
