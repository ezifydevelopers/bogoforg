"use client";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { CheckCircle2, Zap, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Senior teams deliver 50% faster than industry average",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "10+ years experience, 500+ projects completed",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "99% client satisfaction, rigorous testing standards",
  },
  {
    icon: CheckCircle2,
    title: "Full Support",
    description: "End-to-end services from strategy to growth",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 dark:from-primary/10 dark:via-[#0B0C10] dark:to-accent/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Results-driven expertise you can trust
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
              <StatsCounter value={10} suffix="+" /> Years
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
              <StatsCounter value={500} suffix="+" /> Projects
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Delivered</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
              <StatsCounter value={200} suffix="+" /> Clients
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Satisfied</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">
              <StatsCounter value={50} suffix="%" /> Faster
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Delivery</p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
