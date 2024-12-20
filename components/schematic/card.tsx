import { cn } from "@/lib/utils";

interface SchematicCardProps {
  className?: string;
  isFirst?: boolean;
}

export function SchematicCard({ className, isFirst }: SchematicCardProps) {
  return (
    <div
      className={cn(
        "relative max-w-xl w-full mx-auto rounded-none border border-blue-500/60 p-4",
        "before:absolute before:inset-[1px] before:border before:border-blue-500/30",
        "after:absolute after:inset-0 after:bg-blue-500/[0.04]",
        className
      )}
    >
      {/* Information hierarchy highlights */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-32 bg-blue-500/[0.03] border-l border-blue-500/30" />{" "}
        {/* Primary - Price area */}
        <div className="absolute top-0 left-0 right-32 h-14 bg-blue-500/[0.02] border-b border-blue-500/30" />{" "}
        {/* Secondary - Provider area */}
        <div className="absolute bottom-0 left-0 right-32 h-16 bg-blue-500/[0.015] border-t border-blue-500/30" />{" "}
        {/* Tertiary - Details area */}
      </div>

      {/* Measurement lines & annotations */}
      <div className="absolute -left-4 top-1/2 w-4 border-t border-dashed border-blue-500/40" />
      <div className="absolute -right-4 top-1/2 w-4 border-t border-dashed border-blue-500/40" />
      <div className="absolute left-1/2 -top-4 h-4 border-l border-dashed border-blue-500/40" />
      <div className="absolute left-1/2 -bottom-4 h-4 border-l border-dashed border-blue-500/40" />

      {isFirst && (
        <>
          {/* Annotations */}
          <div className="absolute -left-40 top-8 text-[10px] text-blue-500/90 font-mono flex items-center">
            Provider Identity
            <div className="w-8 border-t border-dashed border-blue-500/40 ml-2" />
          </div>

          <div className="absolute -right-40 top-8 text-[10px] text-blue-500/90 font-mono flex items-center">
            <div className="w-8 border-t border-dashed border-blue-500/40 mr-2" />
            Trust Indicators
          </div>

          <div className="absolute -right-40 top-1/2 text-[10px] text-blue-500/90 font-mono flex items-center">
            <div className="w-8 border-t border-dashed border-blue-500/40 mr-2" />
            Primary Price
          </div>

          <div className="absolute -left-40 bottom-8 text-[10px] text-blue-500/90 font-mono flex items-center">
            Consumption Details
            <div className="w-8 border-t border-dashed border-blue-500/40 ml-2" />
          </div>

          {/* Width indicator */}
          <div className="absolute -left-2 -right-2 -top-10">
            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-blue-500/40" />
            <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-blue-500/40" />
            <div className="absolute right-0 top-0 bottom-0 border-l border-dashed border-blue-500/40" />
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <span className="text-[10px] text-blue-500/90 font-mono bg-white px-1">
                576px
              </span>
            </div>
          </div>
        </>
      )}

      {/* Provider row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-6 border border-blue-500/50 rounded-none flex items-center justify-center text-[10px] text-blue-500/90">
            [LOGO]
          </div>
          <div className="w-24 h-4 border border-blue-500/50 rounded-none" />
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-12 h-4 border border-blue-500/50 rounded-none flex items-center justify-center text-[10px] text-blue-500/90 font-mono"
            >
              ###
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2">
          <div className="w-32 h-6 border border-blue-500/50 rounded-none" />
          <div className="w-24 h-4 border border-blue-500/40 rounded-none" />
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end mb-2">
            <div className="px-2 py-1 border border-blue-500/50 rounded-none text-[10px] text-blue-500/90 font-mono">
              -##%
            </div>
            <div className="w-24 h-8 border border-blue-500/50 rounded-none" />
          </div>
          <div className="w-32 h-4 border border-blue-500/40 rounded-none ml-auto" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-blue-500/50">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-16 h-6 border border-blue-500/50 rounded-none flex items-center justify-center text-[10px] text-blue-500/90 font-mono"
            >
              ####
            </div>
          ))}
        </div>
        <div className="w-32 h-8 border border-blue-500/50 rounded-none" />
      </div>

      {/* Dimensions */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-500/60 font-mono">
        576px
      </div>
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[10px] text-blue-500/60 font-mono rotate-90">
        240px
      </div>

      {/* Corner markers */}
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-500/50" />
      <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-blue-500/50" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-blue-500/50" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-500/50" />
    </div>
  );
}
