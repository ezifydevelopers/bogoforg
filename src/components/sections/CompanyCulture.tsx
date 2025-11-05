"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Users, Coffee, Code, Award, Globe, Zap } from "lucide-react";

const cultureValues = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication",
  },
  {
    icon: Code,
    title: "Innovation",
    description: "Constantly learning and adopting cutting-edge technologies",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable in everything we deliver",
  },
  {
    icon: Globe,
    title: "Diversity",
    description: "Building inclusive teams from around the world",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Fast, flexible, and responsive to client needs",
  },
  {
    icon: Coffee,
    title: "Balance",
    description: "Promoting healthy work-life balance for our team",
  },
];

export function CompanyCulture() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
  ];

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
            Our Culture
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-200">
            Values that drive us every day
          </p>
        </motion.div>

        {/* Culture Values Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-900 dark:text-gray-200">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-48 overflow-hidden rounded-xl"
            >
              <ImageReveal
                src={src}
                alt={`Team event ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

