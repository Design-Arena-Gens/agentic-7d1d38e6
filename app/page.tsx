"use client";

import { ArrowUpRight, Aperture, Cpu, ScanFace, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Adaptive Storylines",
    description:
      "Context-aware sequencing that curates each drop based on who is watching, when, and why.",
    icon: Aperture,
    accent: "bg-prism-yellow/10 text-prism-yellow border border-prism-yellow/20 shadow-glow"
  },
  {
    title: "Face ID Trust Layer",
    description:
      "Neon-secured biometric gates keep your circles private while enabling instant recognition.",
    icon: ScanFace,
    accent: "bg-neon-pink/10 text-neon-pink border border-neon-pink/20 shadow-pink"
  },
  {
    title: "Prism Core Engine",
    description:
      "Real-time AI grading, diffusion clean-up, and mood harmonizing built straight into the feed.",
    icon: Cpu,
    accent: "bg-signal-cyan/10 text-signal-cyan border border-signal-cyan/20 shadow-neon"
  }
];

const metrics = [
  { label: "Latency", value: "38ms", detail: "Edge-rendered delivery pipeline" },
  { label: "Retention", value: "4.3×", detail: "versus standard photo apps" },
  { label: "Security", value: "AES-512", detail: "zero-knowledge encrypted vaults" }
];

const workflow = [
  {
    step: "Capture",
    title: "Signal-Clean Framing",
    body:
      "Reconstruct each shot with photonic noise balancing and adaptive compression. Prism guides your hardware to the perfect capture in less than a second.",
    accent: "from-prism-yellow/0 via-prism-yellow/25 to-prism-yellow/0"
  },
  {
    step: "Enhance",
    title: "AI Cinematic Tuning",
    body:
      "Weave motion vectors and still frames into a cohesive mood board while Prism’s Core Engine dynamically styles lighting, grain, and palette.",
    accent: "from-signal-cyan/0 via-signal-cyan/30 to-signal-cyan/0"
  },
  {
    step: "Release",
    title: "Encrypted Drops",
    body:
      "Deploy curated storylines directly to private circles with Face ID gates and quantum-safe routing. Analytics pulse live right inside the drop.",
    accent: "from-neon-pink/0 via-neon-pink/25 to-neon-pink/0"
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(74,_242,_234,_0.12),_transparent_45%),linear-gradient(180deg,_rgba(14,_14,_14,_0.95),_rgba(18,_18,_18,_1))]">
      <div className="pointer-events-none absolute inset-0 bg-grid-noise bg-[length:4px_4px] opacity-[0.12]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-12 md:px-12 lg:px-20">
        <motion.header
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-void/60 shadow-glow ring-1 ring-white/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-prism-yellow/30 via-signal-cyan/30 to-transparent blur-xl" />
              <span className="relative text-xl font-semibold tracking-tight text-prism-yellow">
                π
              </span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-zinc400">Prism</p>
              <p className="text-xs text-white/60">
                Hyper-personal AI photo sharing, engineered for velocity.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc400 md:flex">
            <a className="transition hover:text-white/90" href="#features">
              Stack
            </a>
            <a className="transition hover:text-white/90" href="#workflow">
              Flow
            </a>
            <a className="transition hover:text-white/90" href="#pulse">
              Pulse
            </a>
            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:border-prism-yellow/40 hover:bg-prism-yellow/10 hover:text-prism-yellow">
              Launch
            </button>
          </nav>
        </motion.header>

        <section className="grid items-center gap-16 md:grid-cols-[1.25fr_1fr]">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.5em] text-zinc400 shadow-lg shadow-black/40">
              <span className="h-2 w-2 rounded-full bg-prism-yellow shadow-glow" />
              Incoming // Prism v3
            </div>
            <h1 className="text-5xl font-semibold uppercase tracking-tight text-white md:text-6xl">
              Stream Your World Through Intelligence.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc400">
              Prism is the intelligent AI layer for creators who refuse basic feeds. Pulse through
              biometric gates, reconstruct atmospheres with cinematic precision, and ship immersive
              stories on command.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex items-center justify-center gap-3 rounded-full border border-white/10 bg-prism-yellow px-8 py-4 text-base font-semibold tracking-wide text-black transition hover:shadow-glow">
                Request Access
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-base font-semibold tracking-wide text-white transition hover:border-signal-cyan/60 hover:bg-signal-cyan/10">
                Watch Signal Trace
              </button>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc400">
                <span>Telemetry</span>
                <span>Realtime Feed Integrity</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-prism-yellow">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-zinc400">{metric.label}</p>
                    <p className="text-sm text-white/60">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          >
            <div className="absolute inset-0 -translate-x-12 translate-y-12 rounded-[3rem] bg-gradient-to-br from-prism-yellow/20 via-neon-pink/10 to-signal-cyan/10 blur-3xl" />
            <div className="relative w-full max-w-md rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 via-void/30 to-black/80 p-6 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc400">
                <span>Prism // Preview Cell</span>
                <Sparkles className="h-4 w-4 text-signal-cyan" />
              </div>
              <div className="relative aspect-[10/16] overflow-hidden rounded-[2rem] border border-white/5 bg-black/80">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,_169,_182,_0.35),_transparent_60%)]" />
                <img
                  alt="Prism preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc400">
                    <span>Face ID</span>
                    <span className="text-neon-pink">Locked</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full border border-neon-pink/50">
                        <img
                          alt="Profile"
                          className="h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Nova Aster</p>
                        <p className="text-xs uppercase tracking-[0.4em] text-zinc400">Signal Lead</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs uppercase tracking-[0.4em] text-zinc400">Trust</p>
                      <p className="text-prism-yellow">Verified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-prism-yellow">Signal Stack</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Orbit your audience with precision engineering.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-zinc400">
              Prism fuses neural enhancement, biometric access, and live analytics into one cohesive
              pipeline. Every module is tuned for swiftness, privacy, and cinematic fidelity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon, accent }) => (
              <motion.article
                key={title}
                className={`group relative overflow-hidden rounded-3xl ${accent} p-8`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                <Icon className="mb-6 h-10 w-10" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/80">{description}</p>
                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.5em]">
                  <span>Expand Protocol</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="workflow" className="space-y-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-signal-cyan">Neural Flow</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                A zero-friction workflow infused with intelligence.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-zinc400">
              From capture to release, Prism automates the invisible work—encryption, styling,
              delivery—so you stay locked on creative momentum.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {workflow.map(({ step, title, body, accent }) => (
              <motion.div
                key={step}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition duration-500 hover:opacity-100`}
                />
                <div className="relative space-y-4">
                  <span className="text-xs uppercase tracking-[0.6em] text-zinc400">{step}</span>
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="pulse"
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/80 p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,_242,_234,_0.25),_transparent_55%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.6em] text-neon-pink">Pulse Console</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Monitor signal impact in real time.
              </h2>
              <p className="max-w-xl text-sm text-zinc400">
                Our console distills every drop into actionable momentum. Track who unlocked,
                measure sentiment, and trigger adaptive sequences without leaving the dashboard.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc400">Unlock Rate</p>
                  <p className="mt-3 text-3xl font-semibold text-prism-yellow">96.2%</p>
                  <p className="mt-2 text-sm text-white/70">Face ID authenticates in 0.4 seconds.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc400">Sentiment</p>
                  <p className="mt-3 text-3xl font-semibold text-signal-cyan">+82 NPS</p>
                  <p className="mt-2 text-sm text-white/70">
                    Live emotion parsing across every drop.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-prism-yellow/20 via-transparent to-neon-pink/30 blur-3xl" />
              <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/70 p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc400">
                  <span>Realtime Flux</span>
                  <span>Sync Live</span>
                </div>
                <div className="mt-8 grid gap-6 text-sm text-white/80">
                  {[1, 2, 3].map((entry) => (
                    <div key={entry} className="grid gap-2 rounded-2xl border border-white/5 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc400">
                        <span>Drop {entry.toString().padStart(2, "0")}</span>
                        <span className="text-prism-yellow">Live</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">Metropolis Nights</p>
                          <p className="text-xs uppercase tracking-[0.4em] text-zinc400">
                            1.4k Pulses
                          </p>
                        </div>
                        <div className="text-right text-xs uppercase tracking-[0.4em] text-signal-cyan">
                          12:43 AM
                        </div>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-prism-yellow via-signal-cyan to-neon-pink" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-6 border-t border-white/10 pt-10 text-xs uppercase tracking-[0.4em] text-zinc400 sm:flex-row sm:items-center sm:justify-between">
          <span>Prism AI Syndicate © {new Date().getFullYear()}</span>
          <div className="flex gap-6 text-white/60">
            <a className="transition hover:text-white" href="#">
              Protocol
            </a>
            <a className="transition hover:text-white" href="#">
              Security
            </a>
            <a className="transition hover:text-white" href="#">
              Signal Room
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
