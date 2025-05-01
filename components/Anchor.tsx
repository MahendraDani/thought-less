import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type AProps = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export const Anchor = ({ children, className, href, ...props }: AProps) => {
  return (
    <Link
      target="_blank"
      href={href}
      {...props}
      className={cn(
        "inline-flex items-center py-1 text-wrap relative group",
        className
      )}
    >
      {children}
      <span>
        <ArrowUpRight
          strokeWidth={1}
          height={12}
          width={12}
          className={cn("group-hover:scale-125 ease-in duration-100")}
        />
      </span>
    </Link>
  );
};
