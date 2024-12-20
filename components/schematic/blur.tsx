import { cn } from "@/lib/utils";

interface SchematicBlurProps {
  className?: string;
}

export function SchematicBlur({ className }: SchematicBlurProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-30",
        className
      )}
    />
  );
}
