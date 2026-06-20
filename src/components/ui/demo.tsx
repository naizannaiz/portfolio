"use client"

import { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

// Named export for use as Hero section background
export function HeroBackground({
  speed = 1.0,
  activeEffect = "mesh",
}: {
  speed?: number
  activeEffect?: "mesh" | "dots" | "combined"
}) {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      {activeEffect === "mesh" && (
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={["#000000", "#0f172a", "#1e1b4b", "#111827"]}
          speed={speed}
        />
      )}

      {activeEffect === "dots" && (
        <div className="w-full h-full absolute inset-0 bg-gray-950">
          <DotOrbit
            className="w-full h-full"
            speed={speed}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            className="w-full h-full absolute inset-0"
            colors={["#000000", "#0f172a", "#1e1b4b", "#111827"]}
            speed={speed * 0.5}
          />
          <div className="w-full h-full absolute inset-0 opacity-40">
            <DotOrbit
              className="w-full h-full"
              speed={speed * 1.5}
            />
          </div>
        </>
      )}

      {/* Subtle ambient glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-900/8 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}

// Full-page demo (default export keeps backward compat)
export default function DemoOne() {
  const [speed] = useState(1.0)
  const [activeEffect, setActiveEffect] = useState<"mesh" | "dots" | "combined">("mesh")

  const effects: Array<{ key: "mesh" | "dots" | "combined"; label: string }> = [
    { key: "mesh", label: "Mesh" },
    { key: "dots", label: "Dots" },
    { key: "combined", label: "Combined" },
  ]

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <HeroBackground speed={speed} activeEffect={activeEffect} />

      {/* Effect switcher — bottom-left */}
      <div className="absolute bottom-8 left-8 flex gap-2 z-10">
        {effects.map((e) => (
          <button
            key={e.key}
            onClick={() => setActiveEffect(e.key)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeEffect === e.key
                ? "bg-blue-600 text-white"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>
    </div>
  )
}
