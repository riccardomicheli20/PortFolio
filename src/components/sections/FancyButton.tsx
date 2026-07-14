import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ACCENT } from "./ui";

export function FancyButton({
  href,
  children,
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg text-center uppercase text-white outline-offset-4 transition-transform duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 ${className}`}
      {...rest}
    >
      <span className="relative z-20">{children}</span>

      <span className="absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%] group-active:left-[125%]" />

      <span
        className="absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-2 border-t-2 transition-all duration-300"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-2 border-t-2 transition-all duration-300 group-hover:h-[90%] group-active:h-[90%]"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-2 border-l-2 transition-all duration-300 group-hover:h-[90%] group-active:h-[90%]"
        style={{ borderColor: ACCENT }}
      />
      <span
        className="absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-2 border-r-2 transition-all duration-300"
        style={{ borderColor: ACCENT }}
      />
    </a>
  );
}
