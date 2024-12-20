import { cn } from "@/utils/classnames";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLinkIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export function PapernestCTA() {
  return (
    <Link
      href="https://app.papernest.com"
      target="_blank"
      className="inline-flex items-center px-4 py-2 rounded bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
    >
      Subscribe Now
    </Link>
  );
}

export function PhoneCTA() {
  return (
    <a
      href="tel:0123456789"
      className="inline-flex items-center px-4 py-2 rounded bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
    >
      Talk to an agent
    </a>
  );
}

export function ExternalCTA({ provider }: { provider: string }) {
  return (
    <Link
      href={`https://${provider}.com`}
      target="_blank"
      className="inline-flex items-center px-4 py-2 rounded border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 text-sm font-medium bg-white dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-zinc-700 transition-colors"
    >
      Find out more
    </Link>
  );
}

interface DropdownOption {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  type: "papernest" | "phone" | "external";
}

const popoverIcons = {
  papernest: (
    <ExternalLinkIcon className="text-indigo-50 w-4 h-4 flex-shrink-0 mt-1.5" />
  ),
  phone: (
    <PhoneCallIcon className="text-indigo-50 w-4 h-4 flex-shrink-0 mt-1.5" />
  ),
  external: (
    <ExternalLinkIcon className="text-indigo-600 w-4 h-4 flex-shrink-0 mt-1.5 dark:text-indigo-400" />
  ),
};

function DropdownOptionButton({
  option,
  provider,
}: {
  option: DropdownOption;
  provider: string;
}) {
  const baseClasses =
    "block w-full text-sm text-left px-3 py-2 rounded transition-colors flex justify-between gap-5";
  const subTextClasses = "text-xs";

  if (option.type === "papernest" || option.type === "phone") {
    return (
      <Link
        href={option.type === "papernest" ? option.href : "#"}
        as={option.type === "phone" ? `tel:${option.href}` : "#"}
        target="_blank"
        className={`${baseClasses} bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white`}
      >
        <div>
          <div>{option.title}</div>
          <div
            className={cn(
              "text-indigo-200 dark:text-indigo-100",
              subTextClasses
            )}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{
              __html: option.subtitle.replace(
                //
                /(\*\*)(.*)(\*\*)/g,
                "<span class='font-semibold'>$2</span>"
              ),
            }}
          />
        </div>
        {popoverIcons[option.type]}
      </Link>
    );
  }

  return (
    <Link
      href={`https://${provider}.com`}
      target="_blank"
      className={`${baseClasses} border border-indigo-600 dark:border-indigo-500 bg-white dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-zinc-700 text-indigo-600 dark:text-indigo-300`}
    >
      <div>
        <div>{option.title}</div>
        <div
          className={cn("text-indigo-600 dark:text-indigo-300", subTextClasses)}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: option.subtitle.replace(
              //
              /(\*\*)(.*)(\*\*)/g,
              "<span class='font-semibold'>$2</span>"
            ),
          }}
        />
      </div>
      {popoverIcons[option.type]}
    </Link>
  );
}

export function MultipleCTA({
  provider,
  fullWidth,
  children,
}: {
  provider: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  // define your dropdown options here:
  const options: DropdownOption[] = [
    {
      id: 1,
      title: "subscribe now",
      subtitle: "switch with **papernest**",
      href: "https://app.papernest.com",
      type: "papernest",
    },
    {
      id: 2,
      title: "get in touch with us",
      subtitle: "01 23 45 67 89",
      href: "0123456789",
      type: "phone",
    },
    {
      id: 3,
      title: `visit ${provider}'s site`,
      subtitle: `${provider}.com`,
      href: provider,
      type: "external",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex-shrink-0 w-full md:w-auto inline-flex justify-center items-center px-4 py-2 rounded bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors space-x-1",
            fullWidth && "w-full md:w-full"
          )}
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-64 p-2 z-50 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md rounded-md space-y-2"
      >
        {options.map((opt) => (
          <DropdownOptionButton key={opt.id} option={opt} provider={provider} />
        ))}
      </PopoverContent>
    </Popover>
  );
}
