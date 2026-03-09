// src/components/shield-icon.tsx
import * as React from "react";

type ShieldIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ShieldIcon({ size = 24, className, ...props }: ShieldIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3.25c-.3 0-.6.06-.88.18L6.5 5.32c-.7.3-1.16.98-1.16 1.75v5.31c0 1.91.93 3.7 2.49 4.79l3.34 2.33c.51.36 1.15.36 1.66 0l3.34-2.33a5.77 5.77 0 0 0 2.49-4.79V7.07c0-.77-.46-1.45-1.16-1.75l-4.62-1.89A2.25 2.25 0 0 0 12 3.25z"
        className="fill-emerald-500/90"
      />
      <path
        d="M10.4 12.4 9 11l-.7.7a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.6-3.6a.75.75 0 0 0-1.06-1.06l-3.25 3.25z"
        className="fill-slate-950"
      />
    </svg>
  );
}