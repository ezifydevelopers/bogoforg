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
    <section className="bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-primary/10 dark:bg-primary/20 px-5 py-2 text-sm font-semibold text-primary dark:text-primary-400 border border-primary/20"
          >
            About Us
          </motion.span>
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Story
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            A journey of innovation, growth, and commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Building the Future, One Project at a Time
            </h3>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] sm:min-h-[500px] overflow-hidden rounded-2xl shadow-2xl group"
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              alt="Our team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Our Journey Timeline - Image Style */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16 text-center"
          >
            <h3 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Our Journey
            </h3>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center-right vertical timeline line */}
            <div className="absolute left-[60%] lg:left-[55%] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden lg:block" />
            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 lg:hidden" />
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative min-h-[120px]"
                  >
                    {/* Left side card */}
                    {isLeft && (
                      <div className={`hidden lg:block absolute right-[45%] top-0 w-[40%] ${index === milestones.length - 1 ? '' : 'pr-4'}`}>
                        <div className="bg-white rounded-xl p-6 shadow-md dark:bg-[#111] dark:shadow-lg">
                          {/* Year badge - pill shaped, dark blue background */}
                          <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5">
                            <span className="text-sm font-semibold text-white">{milestone.year}</span>
                          </div>
                          <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h4>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Center timeline marker - positioned at timeline line */}
                    <div className="absolute left-[60%] lg:left-[55%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      {/* Circular marker on timeline */}
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-full shadow-lg border-2 border-white dark:border-[#0B0C10]" />
                    </div>
                    
                    {/* Right side card */}
                    {!isLeft && (
                      <div className={`hidden lg:block absolute left-[60%] top-0 w-[35%] pl-4`}>
                        <div className="bg-white rounded-xl p-6 shadow-md dark:bg-[#111] dark:shadow-lg">
                          {/* Year badge - pill shaped, dark blue background */}
                          <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5">
                            <span className="text-sm font-semibold text-white">{milestone.year}</span>
                          </div>
                          <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h4>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Mobile card - always visible on mobile, hidden on desktop when card is on other side */}
                    <div className={`ml-12 lg:hidden`}>
                      <div className="bg-white rounded-xl p-6 shadow-md dark:bg-[#111] dark:shadow-lg">
                        {/* Year badge - pill shaped, dark blue background */}
                        <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5">
                          <span className="text-sm font-semibold text-white">{milestone.year}</span>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h4>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
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

