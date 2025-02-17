import type { SvgProps } from "@/types"
// import type { SVGProps } from "react"

export const Ship = ({ strokeWidth = 2, className }:SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12l14 0" />
    <path d="M12 5l0 14" />
    <path d="M5 5l14 14" />
    <path d="M5 19l14 -14" />
  </svg>
)

