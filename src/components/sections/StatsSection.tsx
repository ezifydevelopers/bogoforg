"use client";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export function StatsSection({ stats, title = "Our Impact", subtitle = "Results that speak for themselves" }: StatsSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-white/90">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                <StatsCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

