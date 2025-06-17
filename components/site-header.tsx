"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-900 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light text-white">
            Edge Research
          </Link>
          <nav className="flex space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === "/" ? "text-white" : "text-gray-400",
              )}
            >
              Home
            </Link>
            <Link
              href="/timeline"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === "/timeline" ? "text-white" : "text-gray-400",
              )}
            >
              Timeline
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === "/about" ? "text-white" : "text-gray-400",
              )}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
