"use client";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { CheckCircle2, Zap, Users, Shield } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";

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
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-900 dark:text-gray-200">
            Results-driven expertise you can trust
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="mb-12 sm:mb-16 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <StatsCounter value={10} suffix="+" /><span className="text-gray-900 dark:text-white"> Years</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              <StatsCounter value={500} suffix="+" /><span className="text-gray-900 dark:text-white"> Projects</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Delivered</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              <StatsCounter value={200} suffix="+" /><span className="text-gray-900 dark:text-white"> Clients</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Satisfied</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="mb-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              <StatsCounter value={50} suffix="%" /><span className="text-gray-900 dark:text-white"> Faster</span>
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Delivery</p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const benefitImages = [
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border-2 border-gray-200 bg-white overflow-hidden transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
              >
                <div className="relative h-40 overflow-hidden">
                  <ImageReveal
                    src={benefitImages[index] || benefitImages[0]}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-gray-200">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
