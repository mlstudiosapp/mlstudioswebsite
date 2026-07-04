"use client";

import { motion, useReducedMotion } from "framer-motion";
import { games, gamesHubUrl } from "@/lib/products";
import { TiltCard } from "@/components/ui/tilt-card";

function SnakeBorder() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ overflow: "visible" }}
    >
      <motion.rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="12"
        fill="none"
        stroke="#3DDC84"
        strokeWidth="1.5"
        pathLength="1"
        strokeDasharray="0.12 0.88"
        style={{ filter: "drop-shadow(0 0 4px #3DDC84)" }}
        initial={{ strokeDashoffset: 0 }}
        animate={reduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: -1 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, ease: "linear", duration: 5 }
        }
      />
    </svg>
  );
}

export function GamesSection() {
  return (
    <section id="games" className="relative py-32 px-6 border-t border-panel-border">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 50% 15%, rgba(61,220,132,0.05) 0%, rgba(5,6,10,0) 70%)",
        }}
      />

      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono-label text-xs uppercase text-text-tertiary"
        >
          Games
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-3xl sm:text-4xl font-semibold"
        >
          Play is part of the practice.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-4 text-text-secondary leading-relaxed"
        >
          Small, polished games from the studio — landing first on Android.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {games.map((game, index) => {
          const isSnake = game.id === "snake";
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <TiltCard glowColor="#3DDC84">
                <div className="relative h-full">
                  <div
                    className="glass rounded-xl p-6 flex items-start justify-between gap-4 h-full"
                    style={
                      isSnake
                        ? {
                            backgroundImage:
                              "radial-gradient(rgba(61,220,132,0.13) 1px, transparent 1px)",
                            backgroundSize: "14px 14px",
                          }
                        : undefined
                    }
                  >
                    <div>
                      <h3 className="text-lg font-medium">{game.name}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{game.tagline}</p>
                    </div>
                    <span
                      className="shrink-0 rounded-full border px-3 py-1 font-mono-label text-[10px] uppercase"
                      style={{ color: "#F5C46B", borderColor: "#F5C46B66" }}
                    >
                      {game.statusLabel}
                    </span>
                  </div>
                  {isSnake && <SnakeBorder />}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="text-center"
      >
        <a
          href={gamesHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm text-text-secondary hover:text-text-primary transition-colors font-mono-label uppercase text-xs"
        >
          games.mlstudiosapp.com →
        </a>
      </motion.div>
    </section>
  );
}
