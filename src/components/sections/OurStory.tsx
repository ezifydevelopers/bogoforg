"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Calendar, Target, Rocket, Award } from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description: "Started with a mission to help startups turn ideas into reality",
    icon: Calendar,
  },
  {
    year: "2017",
    title: "100 Projects",
    description: "Reached our first major milestone of 100 successful projects",
    icon: Target,
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Expanded into AI and automation services",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "500+ Projects",
    description: "Celebrated 500+ projects delivered with excellence",
    icon: Award,
  },
];

export function OurStory() {
  return (
    <section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Story
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              <p>
                Founded in 2014, bogoforg began with a simple yet powerful mission: to help entrepreneurs and small businesses transform their boldest ideas into successful, scalable products. We saw too many great concepts fail not because they were bad ideas, but because they lacked the right expertise, strategy, or execution.
              </p>
              <p>
                What started as a small team of passionate developers and strategists has grown into a full-service agency with expertise spanning business planning, product development, web and mobile applications, marketing, AI, and security. Over the years, we've helped 200+ clients across various industries launch products that have gone on to raise millions in funding and serve millions of users.
              </p>
              <p>
                Today, we're proud to be a trusted partner for startups and SMBs worldwide, combining deep technical expertise with strategic business acumen to deliver solutions that don't just work—they drive real business growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] overflow-hidden rounded-2xl"
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              alt="Our team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Key Milestones
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-1 bg-gradient-to-b from-primary via-accent to-primary lg:block" style={{ left: '50%', transform: 'translateX(-50%)' }} />
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:col-start-2'}`}
                  >
                    <div className={`flex items-start gap-4 ${isLeft ? 'flex-row-reverse lg:flex-row-reverse' : ''}`}>
                      <div className="flex shrink-0 items-center gap-3">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg ${isLeft ? 'lg:ml-auto' : ''}`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className={`hidden text-4xl font-bold text-primary lg:block ${isLeft ? 'order-first' : ''}`}>
                          {milestone.year}
                        </div>
                      </div>
                      <div className={`flex-1 ${isLeft ? 'lg:text-right' : ''}`}>
                        <div className="mb-2 text-xl font-semibold text-gray-900 dark:text-white lg:hidden">
                          {milestone.year}
                        </div>
                        <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
