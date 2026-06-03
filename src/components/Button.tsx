import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "fill" | "weak";
  children: ReactNode;
};

export function Button({ variant = "fill", children, className = "", ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
