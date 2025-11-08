"use client";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { CheckCircle2, Zap, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 500, suffix: "+", label: "Projects Delivered", icon: CheckCircle2 },
  { value: 200, suffix: "+", label: "Satisfied Clients", icon: Users },
  { value: 50, suffix: "%", label: "Faster Delivery", icon: Zap },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:to-[#0D0E12] transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-primary/10 dark:bg-primary/20 px-5 py-2 text-sm font-semibold text-primary dark:text-primary-400 border border-primary/20"
          >
            Why Choose Us
          </motion.span>
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Results-Driven Expertise
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Trusted by leading companies worldwide for exceptional results
          </p>
        </motion.div>

        {/* Simple Stats Row */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Stat Value */}
                <div className="mb-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                  <StatsCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Stat Label */}
                <p className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
