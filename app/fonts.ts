import { GeistSans } from "geist/font/sans"

/**
 * Shared Geist font instance.
 * `layout.tsx` imports { geist } from "./fonts"
 * so the filename must be exactly `fonts.ts` in /app.
 */
export const geist = GeistSans({
  subsets: ["latin"],
  display: "swap",
})
