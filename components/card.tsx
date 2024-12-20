import { Consumption } from "@/components/consumption";
import { MultipleCTA } from "@/components/cta";
import { DetailsDrawer } from "@/components/drawer";
import { EnergyBase } from "@/components/energy-base";
import { People } from "@/components/people";
import { SavingsBadge } from "@/components/savings";
import { cn } from "@/lib/utils";
// import { PaymentOptions } from "@/components/payment-options";

import { Leaf, Lock, Star } from "lucide-react";
import Image from "next/image";

export type BigPriceType = "kwh" | "estimate";
export type BelowBigPrice = "estimate" | "composition" | "none";
export type PricingDetails = {
  displayEnergyBase?: boolean;
  displayPeople?: boolean;
  displayConsumption?: boolean;
};

type CardProps = {
  offer: {
    id: number;
    name: string;
    provider: string;
  };
  pricingDetails?: PricingDetails & {
    displayPriceEstimateComposition?: boolean;
  };
  bigPrice?: {
    type: BigPriceType;
    below: BelowBigPrice;
  };
};

export const Card = ({
  offer,
  pricingDetails = {
    displayEnergyBase: true,
    displayPeople: true,
    displayConsumption: true,
    displayPriceEstimateComposition: false,
  },
  bigPrice = {
    type: "estimate",
    below: "composition",
  },
}: CardProps) => {
  const isDetailsCramped = !!(
    pricingDetails.displayEnergyBase &&
    pricingDetails.displayPeople &&
    pricingDetails.displayConsumption &&
    bigPrice.below !== "composition" &&
    pricingDetails.displayPriceEstimateComposition
  );

  return (
    <div className="relative max-w-xl w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow p-4">
      {/* top row: provider + rating + tariff & green icons */}
      <div className="flex items-center justify-between text-sm text-zinc-700 dark:text-zinc-300">
        <div className="flex items-center space-x-2">
          <Image
            src="https://d11o8pt3cttu38.cloudfront.net/wp-content/uploads/sites/80/2023/06/logo-engie.png"
            alt={`${offer.provider} Logo`}
            className="dark:brightness-125"
            width={48}
            height={24}
            priority
          />{" "}
          <span className="font-medium">{offer.provider}</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center space-x-1 text-indigo-500 dark:text-indigo-400">
            <Star className="h-3 w-3 fill-indigo-500 text-indigo-500 dark:fill-indigo-400 dark:text-indigo-400" />
            <span className="tabular-nums">4.2</span>
          </div>
          <span className="flex items-center space-x-1 text-cyan-600">
            <Lock className="h-3 w-3" />
            <span>fixed</span>
          </span>
          <span className="flex items-center space-x-1 text-green-600">
            <Leaf className="h-3 w-3" />
            <span>green</span>
          </span>
        </div>
      </div>

      {/* pricing */}
      <div className="mb-3 mt-3 flex items-start justify-between gap-6">
        <div className="space-y-0.5">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {offer.name}
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-1.5 items-center">
            <SavingsBadge amount={239} percentage={23} />

            {bigPrice.type === "kwh" ? (
              <p className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                0.021€
                <span className="text-zinc-600 dark:text-zinc-500">/kWh</span>
              </p>
            ) : (
              <p className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                90.32€
                <span className="text-zinc-600 dark:text-zinc-500">/mo</span>
              </p>
            )}
          </div>

          {/* below big price */}
          {bigPrice.below === "composition" && (
            <p className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
              {bigPrice.type !== "kwh" && (
                <>
                  0.021€
                  <span className="text-zinc-600 dark:text-zinc-500">/kWh</span>
                </>
              )}{" "}
              + 9.10€
              <span className="text-zinc-600 dark:text-zinc-500">/mo</span>
            </p>
          )}
          {bigPrice.below === "estimate" && bigPrice.type !== "estimate" && (
            <p className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
              est. 90.32€
              <span className="text-zinc-600 dark:text-zinc-500">/mo</span>
            </p>
          )}
        </div>
      </div>

      {/* promotion & savings */}
      {/* <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium text-blue-600">
            +€20 discount
          </span>
          <span className="text-sm text-green-600">€24/year savings</span>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
        <div
          className={cn(
            "w-full flex items-center mt-3 text-sm text-zinc-700 dark:text-zinc-300",
            isDetailsCramped ? "*:tracking-tight gap-1" : "gap-2"
          )}
        >
          {pricingDetails.displayEnergyBase && <EnergyBase value={6} />}
          {pricingDetails.displayPeople && <People amount={2} />}
          {pricingDetails.displayConsumption && (
            <Consumption value={1400} compact={isDetailsCramped} />
          )}

          {pricingDetails.displayPriceEstimateComposition &&
            bigPrice.below !== "composition" && (
              <p className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400 truncate">
                {bigPrice.type !== "kwh" && (
                  <>
                    0.021€
                    <span className="text-zinc-600 dark:text-zinc-500">
                      /kWh
                    </span>
                  </>
                )}
                + 9.10€
                <span className="text-zinc-600 dark:text-zinc-500">/mo</span>
              </p>
            )}

          <p className="text-zinc-500 dark:text-zinc-400">∙</p>

          {/* details drawer ("more details") */}
          <DetailsDrawer
            provider={offer.provider}
            compactTrigger={isDetailsCramped}
          />
        </div>

        {/* cta & subscription options */}
        <MultipleCTA provider={offer.provider}>
          Subscribe {!isDetailsCramped && "now"}
        </MultipleCTA>
      </div>
    </div>
  );
};
