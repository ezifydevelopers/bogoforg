"use client";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const previewFAQs = [
  {
    question: "How quickly can you start our project?",
    answer: "Typically within 1-2 weeks after a short discovery call. We'll align on scope, timeline, and approach, then kick off quickly.",
  },
  {
    question: "Do you work with startups and SMBs?",
    answer: "Yes! We specialize in helping startups and small to medium businesses. We offer flexible pricing and scalable solutions.",
  },
  {
    question: "What's included in your development services?",
    answer: "End-to-end development including planning, design, coding, testing, deployment, and ongoing support. We handle everything.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in API integrations and can work with your current tech stack, tools, and workflows.",
  },
];

export function FAQsPreview() {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Quick answers to common questions
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          {previewFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Accordion question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button href="/faq" variant="outline" size="lg">
            View All FAQs →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

