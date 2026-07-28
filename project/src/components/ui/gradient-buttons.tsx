"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Sparkles, Zap, Star, Flame } from "lucide-react"


/* ─── Variation 2: Neon Pulse ─── */
export function NeonPulseButton({ children = "Neon Pulse" }: { children?: React.ReactNode }) {
  return (
    <button
      className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-none bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-white outline-none transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      type="button"
    >
      <span className="absolute inset-0 h-full w-full animate-pulse bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
      <span className="relative flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 transition-all duration-300 group-hover:bg-opacity-0">
        <Sparkles className="h-4 w-4" />
        {children}
      </span>
    </button>
  )
}

/* ─── Variation 3: Electric Glow ─── */
export function ElectricGlowButton({ children = "Electric Glow" }: { children?: React.ReactNode }) {
  return (
    <button
      className="group relative inline-flex cursor-pointer items-center justify-center overflow-visible rounded-xl border border-border bg-background p-[2px] text-sm font-semibold text-foreground outline-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] focus:ring-2 focus:ring-primary"
      type="button"
    >
      <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 opacity-0 blur transition-all duration-500 group-hover:opacity-70" />
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2 rounded-[10px] bg-background px-6 py-3">
        <Zap className="h-4 w-4" />
        {children}
      </span>
    </button>
  )
}


