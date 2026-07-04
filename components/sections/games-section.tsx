"use client";

import { motion } from "framer-motion";
import { games, gamesHubUrl } from "@/lib/products";

export function GamesSection() {
  return (
    <section id="games" className="relative py-32 px-6 border-t border-panel-border">
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
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass rounded-xl p-6 flex items-start justify-between gap-4"
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
          </motion.div>
        ))}
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
