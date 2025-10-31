"use client";
import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, TrendingUp, Award } from "lucide-react";

const journeyStages = [
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Your innovative idea sparks the journey",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Strategy",
    description: "We plan the perfect roadmap",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Rocket,
    title: "Development",
    description: "Building with cutting-edge tech",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Launch",
    description: "Going live with confidence",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Success",
    description: "Achieving your business goals",
    color: "from-primary to-accent",
  },
];

export function BusinessJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-50 py-20 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            Your Business Journey
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            From idea to success — we're with you every step
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {journeyStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${stage.color} text-white shadow-lg`}>
                      <Icon className="h-10 w-10" />
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                        className="absolute inset-0 rounded-full border-4 border-white"
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

