import type { SVGProps } from "react";

const Bullmq = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="40" fill="#E7472B" />
    <text
      x="128"
      y="148"
      textAnchor="middle"
      fontFamily="sans-serif"
      fontWeight="bold"
      fontSize="80"
      fill="#FFF"
    >
      BQ
    </text>
  </svg>
);

export { Bullmq };
