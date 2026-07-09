import type { SVGProps } from "react";

const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 109 113" preserveAspectRatio="xMidYMid">
    <path
      d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.15 54.347Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient id="a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
    </defs>
    <path
      d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"
      fill="#3ECF8E"
      fillOpacity=".7"
    />
  </svg>
);

export { Supabase };
