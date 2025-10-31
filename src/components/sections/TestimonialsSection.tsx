"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Real feedback from real projects.",
}: TestimonialsSectionProps) {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border-2 border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
            >
              <p className="mb-4 text-sm italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

