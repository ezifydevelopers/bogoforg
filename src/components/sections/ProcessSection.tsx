"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

// Default dummy data for testing
const defaultSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Discovery & Research",
    description: "Deep dive into your business goals, target market, competitive landscape, and user needs. We conduct comprehensive research to understand what you need to succeed in your industry.",
  },
  {
    number: "2",
    title: "Strategy & Planning",
    description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We develop detailed project plans, timelines, and resource allocation strategies tailored to your objectives.",
  },
  {
    number: "3",
    title: "Design & Prototyping",
    description: "Design intuitive user interfaces and create interactive prototypes. We focus on user experience, visual design, and ensuring your product is both beautiful and functional before development begins.",
  },
  {
    number: "4",
    title: "Development & Build",
    description: "Design and develop your product with agile sprints, weekly demos, and continuous feedback. Our team uses modern technologies and best practices to build scalable, maintainable solutions.",
  },
  {
    number: "5",
    title: "Quality Assurance",
    description: "Rigorous quality assurance, security audits, and performance testing before launch. We ensure your product is bug-free, secure, and performs optimally across all devices and browsers.",
  },
  {
    number: "6",
    title: "Launch & Deployment",
    description: "Execute a smooth launch with proper deployment strategies, monitoring, and support. We handle all technical aspects of going live and ensure everything runs smoothly from day one.",
  },
  {
    number: "7",
    title: "Optimization & Growth",
    description: "Launch, measure, optimize, and iterate with marketing, analytics, and ongoing support. We track performance metrics and continuously improve your product based on real user data.",
  },
  {
    number: "8",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to keep your product running smoothly. We provide 24/7 monitoring, regular updates, and quick response times for any issues that arise.",
  },
];

export function ProcessSection({
  title = "Our Process",
  subtitle = "A clear, collaborative process from idea to launch.",
  steps = defaultSteps,
}: ProcessSectionProps) {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Large Image + Content Layout */}
        <div className="space-y-20 sm:space-y-24">
          {steps.map((step, index) => {
            const processImages = [
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&auto=format&fit=crop&q=80",
            ];

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Large Image */}
                <motion.div
                  className={`relative h-80 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${
                    !isEven ? "lg:col-start-2" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageReveal
                    src={processImages[index] || processImages[0]}
                    alt={`${step.number}. ${step.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  
                  {/* Step Number - Large */}
                  <div className="absolute top-8 left-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl border-2 border-white/30">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={`flex flex-col justify-center space-y-6 ${
                    !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
