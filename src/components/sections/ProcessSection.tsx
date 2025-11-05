"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function ProcessSection({
  title = "Our Process",
  subtitle = "A clear, collaborative process from idea to launch.",
  steps,
}: ProcessSectionProps) {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary to-accent md:block" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => {
              // Better, more relevant images for each process step
              const processImages = [
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=80", // Understand - Business meeting
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80", // Plan - Strategy/Planning
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80", // Build - Development
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80", // Test - Quality assurance
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&auto=format&fit=crop&q=80", // Grow - Growth/Marketing
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25, margin: "-150px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 group"
                >
                  {/* Step with image - larger and more prominent */}
                  <div className="relative w-full md:w-80 lg:w-96 xl:w-[400px] shrink-0">
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-lg group-hover:shadow-xl transition-all">
                      <ImageReveal
                        src={processImages[index] || processImages[0]}
                        alt={`${step.number}. ${step.title} - ${step.description}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 384px, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/95 dark:bg-[#0B0C10]/95 backdrop-blur-sm shadow-xl border-2 sm:border-4 border-white/50">
                          <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                        </div>
                      </div>
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 sm:px-4 text-xs font-semibold text-white mb-2 sm:mb-3">
                          Step {step.number}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-2xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 sm:pt-4 md:pt-8">
                    <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white md:hidden">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200 leading-relaxed">
                      {step.description}
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
