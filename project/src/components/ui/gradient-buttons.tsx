"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Sparkles, Zap, Star, Flame } from "lucide-react"

/* ─── Variation 1: Gradient Borders ─── */
export function GradientBordersButton({ children = "Gradient Borders" }: { children?: React.ReactNode }) {
  return (
    <button
      className={cn(
        "group relative inline-block cursor-pointer rounded-full border-none bg-slate-800 p-0.5 text-xs leading-6 font-semibold text-white no-underline outline-none focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-950 focus-visible:ring-1"
      )}
      type="button"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(189,56,222,0.8)_0%,rgba(56,189,248,0.4)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex h-8 items-center space-x-2 rounded-full bg-slate-950 px-4 text-white/80 ring-2 ring-white/10">
        <span>{children}</span>
      </div>
      <span className="absolute bottom-0 left-[18px] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  )
}

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

/* ─── Variation 4: Shimmer Edge ─── */
export function ShimmerEdgeButton({ children = "Shimmer Edge" }: { children?: React.ReactNode }) {
  return (
    <button
      className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[2px] text-sm font-bold text-white outline-none transition-all duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      type="button"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-100 transition-all duration-500 group-hover:rotate-180" />
      <span className="relative flex items-center gap-2 rounded-[14px] bg-slate-950 px-8 py-3 transition-colors duration-300 group-hover:bg-slate-900">
        <Star className="h-4 w-4" />
        {children}
      </span>
    </button>
  )
}

/* ─── Variation 5: Flame Border ─── */
export function FlameBorderButton({ children = "Flame Border" }: { children?: React.ReactNode }) {
  return (
    <button
      className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-none bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-1 text-sm font-semibold text-white shadow-lg outline-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] focus:ring-2 focus:ring-orange-400"
      type="button"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
      <span className="relative flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5">
        <Flame className="h-4 w-4" />
        {children}
      </span>
    </button>
  )
}
