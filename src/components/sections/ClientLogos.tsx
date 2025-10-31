"use client";
import { motion } from "framer-motion";

const clients = [
  "TechStart Inc.",
  "Growth Labs",
  "Innovate Co.",
  "ScaleUp Solutions",
  "Digital Ventures",
  "NextGen Platforms",
  "Future Tech",
  "Cloud First",
];

export function ClientLogos() {
  return (
    <section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We're proud to partner with innovative companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex h-24 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-center text-sm font-medium text-gray-700 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-[#111] dark:text-gray-300"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
