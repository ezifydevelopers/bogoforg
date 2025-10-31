"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {service.shortTitle}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {service.description}
          </p>
          <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
            Learn More →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

