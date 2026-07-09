import type { SVGProps } from "react";

const Render = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="40" fill="#46E3B7" />
    <path
      d="M56 136h48v48H56v-48Zm0-64h48v48H56V72Zm64 0h48v48h-48V72Zm64 0h48v48h-48V72Zm-64 64h48v48h-48v-48Zm64 0h12c19.882 0 36-16.118 36-36v-12h-48v48Z"
      fill="#FFF"
    />
  </svg>
);

export { Render };
