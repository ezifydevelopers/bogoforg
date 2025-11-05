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
    <section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-900 dark:text-gray-200">
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
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-all dark:border-gray-800 dark:bg-[#111]"
            >
              <p className="mb-4 text-sm italic leading-relaxed text-gray-900 dark:text-gray-200">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-gray-900 dark:text-gray-300">
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
