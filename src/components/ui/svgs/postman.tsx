import type { SVGProps } from "react";

const Postman = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <circle cx="128" cy="128" r="128" fill="#FF6C37" />
    <path
      d="M152.952 107.217 127.6 81.868l40.384-8.53c4.042-.853 6.118 4.423 2.957 7.517l-17.989 26.362Z"
      fill="#FFF"
    />
  </svg>
);

export { Postman };
