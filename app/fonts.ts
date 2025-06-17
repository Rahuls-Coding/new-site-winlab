import { GeistSans } from "geist/font/sans"

/**
 * Shared Geist Sans font
 * (`app/layout.tsx` does:  import { geist } from "./fonts" )
 */
export const geist = GeistSans({
  subsets: ["latin"],
  display: "swap",
})
