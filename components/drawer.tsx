"use client";

import { MultipleCTA } from "@/components/cta";
import {
  ArrowRight,
  Check,
  MessageCircle,
  MinusCircle,
  Phone,
  PlusCircle,
  X,
} from "lucide-react";
import { Drawer } from "vaul";

const priceBreakdown = [
  { title: "Consommation base", value: "0.173" },
  { title: "Abonnement", value: 202.32 },
  { title: "Consommation heures pleines", value: 0.2414 },
  { title: "Consommation heures creuses", value: 0.194 },
  { title: "Abonnement heures pleines / heures creuses", value: 205.44 },
];

const MAX_DECIMALS = 4;

export const DetailsDrawer = ({
  provider,
  compactTrigger,
}: {
  provider: string;
  compactTrigger: boolean;
}) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button
          type="button"
          className="flex-shrink-0 text-zinc-500 dark:text-zinc-400 transition-all text-sm group hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          more{" "}
          {!compactTrigger && <span className="hidden md:inline">details</span>}
          <ArrowRight className="h-3.5 w-3.5 ml-1 -mt-px inline group-hover:animate-arrow-shift" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-50 outline-none w-screen max-w-lg flex p-3"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-white dark:bg-zinc-800 p-6 w-full overflow-hidden rounded-md relative flex flex-col gap-6">
            <Drawer.Title className="text-lg font-bold dark:text-white">
              Offer details
            </Drawer.Title>
            <Drawer.Close className="absolute top-4 right-4 text-zinc-500 -m-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300">
              <X className="h-4 w-4" />
            </Drawer.Close>

            <section className="flex-shrink-0 border border-emerald-600 rounded-md p-4 relative overflow-hidden">
              <div className="absolute h-24 w-48 bg-emerald-500 top-0 right-0 opacity-50 mix-blend-screen animate-pulse blur-3xl translate-x-10 -translate-y-4" />
              <div className="flex items-start justify-between z-50">
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-500">
                    Save up to 239€ per year!
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-snug max-w-[280px]">
                    Switch to this offer and reduce your energy bills while
                    keeping the same quality of service.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl leading-7 tabular-nums font-bold text-zinc-900 dark:text-white">
                    94.50€
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    per month
                  </div>
                </div>
              </div>
            </section>

            <div className="overflow-y-auto flex-1">
              <div className="space-y-6">
                <section>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Description
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 prose">
                    In officia sint consectetur proident nisi qui. Adipisicing
                    id reprehenderit consectetur reprehenderit minim sint dolor
                    minim et minim nisi cupidatat nulla. Eiusmod sint labore
                    sint esse nulla nisi pariatur eu. Dolore dolore consequat
                    cupidatat aliquip.
                  </p>
                </section>
                <section>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Price breakdown
                  </h3>
                  <ul className="border rounded border-zinc-200 divide-y divide-zinc-200 dark:divide-zinc-700 mt-2 text-sm text-zinc-700 dark:text-zinc-300 dark:border-zinc-700 group">
                    {priceBreakdown?.map(({ title, value }) => (
                      <li
                        key={title}
                        className="flex justify-between text-sm p-2 opacity-100 group-hover:opacity-50 transition-opacity hover:!opacity-100"
                      >
                        <span className="tracking-tight">{title} </span>
                        <span className="font-mono text-[85%] tabular-nums">
                          {(+value).toFixed(MAX_DECIMALS)}&nbsp;€
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Pros & cons
                  </h3>
                  <div className="flex space-x-4 text-sm mt-2">
                    <div className="w-1/2 space-y-1">
                      <p className="font-semibold uppercase text-xs tracking-tight text-green-700 -ml-0.5">
                        <PlusCircle className="h-3 w-3 inline mr-1 -mt-0.5" />
                        pros
                      </p>
                      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
                        <li>24/7 customer support</li>
                        <li>flexible payments</li>
                      </ul>
                    </div>
                    <div className="w-1/2 space-y-1">
                      <p className="font-semibold uppercase text-xs tracking-tight text-red-700 -ml-0.5">
                        <MinusCircle className="h-3 w-3 inline mr-1 -mt-0.5" />
                        cons
                      </p>
                      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
                        <li>higher base fee</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Payment methods
                  </h3>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 font-medium">
                      <Check className="h-4 w-4 inline mr-1" /> SEPA Direct
                      Debit
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 font-medium">
                      <Check className="h-4 w-4 inline mr-1" /> Online{" "}
                      <span className="text-zinc-500 dark:text-zinc-400">
                        (Credit card, SEPA TIP)
                      </span>
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 font-medium">
                      <Check className="h-4 w-4 inline mr-1" /> Physical options{" "}
                      <span className="text-zinc-500 dark:text-zinc-400">
                        (Cheques, cash)
                      </span>
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2 font-medium">
                      <Check className="h-4 w-4 inline mr-1" /> In-person{" "}
                      <span className="text-zinc-500 dark:text-zinc-400">
                        (Post office, bank, provider offices, etc.)
                      </span>
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Environmental impact
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">
                    100% renewable sources, certified by TKTFrr&copy; Ltd.
                  </p>
                </section>

                <section className="">
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Customer service
                  </h3>
                  <div className="mt-2 flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    <span>Phone support</span>
                    <MessageCircle className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                    <span>Live chat</span>
                  </div>
                </section>
              </div>
            </div>

            <MultipleCTA provider={provider} fullWidth>
              Subscribe now
            </MultipleCTA>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
