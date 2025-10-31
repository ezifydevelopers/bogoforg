"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function CaseStudyHighlight() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border-2 border-primary px-4 py-1 text-sm font-medium text-primary">
            Featured Case Study
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            AI-Powered Cloud Surveillance Platform
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Transforming security operations with intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 overflow-hidden rounded-2xl lg:h-full"
          >
            <ImageReveal
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
              alt="AI Surveillance Platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  The Challenge
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Manual review processes were time-consuming and error-prone. The client needed a scalable solution to monitor multiple locations simultaneously while reducing false positives and improving response times.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Our Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We built an intelligent surveillance system leveraging AI and machine learning for real-time threat detection. The platform includes automated alerting, intelligent filtering, and seamless cloud integration.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">
                  The Impact
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-2xl font-bold">50%</span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Reduction in manual reviews
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-accent">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-2xl font-bold">3×</span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Improvement in accuracy
                    </p>
                  </div>
                  <div className="rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#111]">
                    <div className="mb-2 flex items-center gap-2 text-accent">
                      <Zap className="h-5 w-5" />
                      <span className="text-2xl font-bold">40%</span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Faster response times
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio/ai-surveillance-platform">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                View Full Case Study →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

