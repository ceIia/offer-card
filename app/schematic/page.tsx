"use client";

import { SchematicCard, SchematicBlur } from "@/components/schematic";

const offers = [1, 2, 3, 4];

export default function SchematicPage() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000ff10_1px,transparent_1px),linear-gradient(to_bottom,#0000ff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      <div className="grid place-items-center gap-6 relative mt-32 px-8 md:px-0 font-mono">
        <div className="space-y-12 gradient-mask-b-40 w-full relative">
          {offers.map((id, index) => (
            <SchematicCard key={id} isFirst={index === 0} />
          ))}
        </div>

        <SchematicBlur />
      </div>
    </>
  );
}
