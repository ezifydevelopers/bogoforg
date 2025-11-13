"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

const projects = {
  "ai-surveillance-platform": {
    title: "AI-Powered Cloud Surveillance Platform",
    challenge: "Manual review processes were time-consuming and error-prone. The client needed a scalable solution to monitor multiple locations simultaneously while reducing false positives and improving response times.",
    solution: "We built an intelligent surveillance system leveraging AI and machine learning for real-time threat detection. The platform includes automated alerting, intelligent filtering, and seamless cloud integration for remote monitoring across multiple sites.",
    result: "50% reduction in manual reviews, 3× improvement in threat detection accuracy, and 40% faster response times to critical incidents.",
    technologies: ["Next.js", "Python", "TensorFlow", "AWS", "React", "Node.js", "PostgreSQL"],
    image: "/portfolio/ai-surveillance.jpg",
    client: "Security Solutions Inc.",
    duration: "6 months",
    category: "AI & Automation"
  },
  "event-management-software": {
    title: "Scalable Event Management Software",
    challenge: "Existing system couldn't handle growing event volume and complex workflows. Manual processes were creating bottlenecks and errors in event registration, scheduling, and coordination.",
    solution: "Designed and developed a scalable event management platform with automated workflows, real-time synchronization, and intuitive interfaces for both organizers and attendees. The system handles registration, scheduling, payments, and communications all in one platform.",
    result: "50% less manual review time, 2× productivity boost, handles 10× more events with the same infrastructure, and 95% user satisfaction rate.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    image: "/portfolio/event-management.jpg",
    client: "EventPro",
    duration: "4 months",
    category: "Product Development"
  },
  "ecommerce-growth-engine": {
    title: "E-commerce Growth Engine",
    challenge: "Low organic traffic and conversion rates were limiting business growth. The client needed a comprehensive solution to improve SEO, site performance, and conversion optimization.",
    solution: "Complete SEO overhaul including technical optimization, content strategy, and performance improvements. Implemented conversion rate optimization with A/B testing, improved Core Web Vitals, and integrated advanced analytics.",
    result: "+120% organic traffic, +35% conversion rate improvement, improved Core Web Vitals scores by 40%, and increased average order value by 22%.",
    technologies: ["Next.js", "Shopify", "Analytics", "A/B Testing", "SEO Tools", "Google Analytics"],
    image: "/portfolio/ecommerce-growth.jpg",
    client: "Retail Growth Co.",
    duration: "5 months",
    category: "Marketing & Growth"
  },
  "fintech-dashboard": {
    title: "FinTech Analytics Dashboard",
    challenge: "Financial institutions needed real-time insights into complex data streams but existing tools were slow, fragmented, and couldn't handle the volume of transactions and market data.",
    solution: "Built a high-performance analytics dashboard with real-time data processing, advanced visualizations, and predictive analytics. The platform integrates multiple data sources and provides actionable insights for decision-making.",
    result: "90% faster data processing, real-time financial insights with sub-second latency, and advanced visualizations that improved decision-making speed by 60%.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis", "WebSocket"],
    image: "/portfolio/fintech-dashboard.jpg",
    client: "Finance Analytics Corp.",
    duration: "7 months",
    category: "Web Development"
  },
  "mobile-fitness-app": {
    title: "Mobile Fitness App",
    challenge: "Users needed personalized workout plans and tracking, but existing apps lacked AI-powered recommendations and engaging user experiences that kept people motivated.",
    solution: "Developed a comprehensive mobile fitness app with AI-powered workout recommendations, progress tracking, social features, and seamless integration with wearables. The app provides personalized plans based on user goals and fitness levels.",
    result: "1M+ downloads, 4.8★ rating, with AI-powered workout recommendations that increased user retention by 45% and average session time by 60%.",
    technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite", "HealthKit", "Google Fit"],
    image: "/portfolio/mobile-fitness.jpg",
    client: "FitLife Mobile",
    duration: "5 months",
    category: "Mobile Development"
  },
  "healthcare-ai": {
    title: "Healthcare AI Diagnostic Tool",
    challenge: "Healthcare providers needed faster and more accurate diagnostic tools to reduce diagnosis time and improve patient outcomes, especially in resource-constrained environments.",
    solution: "Created an AI-powered diagnostic tool that analyzes medical images and patient data to assist healthcare professionals. The system uses deep learning models trained on extensive medical datasets to provide accurate diagnostic suggestions.",
    result: "95% diagnostic accuracy, reduced diagnosis time by 60%, FDA approved, and improved patient outcomes with faster treatment initiation.",
    technologies: ["Python", "TensorFlow", "PyTorch", "DICOM", "FastAPI", "PostgreSQL", "Docker"],
    image: "/portfolio/healthcare-ai.jpg",
    client: "MedTech Solutions",
    duration: "10 months",
    category: "AI & Automation"
  }
};

export default function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageReveal
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover grayscale-[0.3] brightness-105 filter"
            priority
            overlay={false}
          />
        </div>
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
        <Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="mb-6 inline-flex items-center gap-2 text-white/90 hover:text-white drop-shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/30">
                {project.category}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="mb-6 text-fluid-6xl font-bold text-white leading-tight drop-shadow-2xl"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 text-white drop-shadow-lg"
            >
              <div>
                <span className="font-semibold">Client:</span> {project.client}
              </div>
              <div>
                <span className="font-semibold">Duration:</span> {project.duration}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="relative -mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-neutral-200 shadow-xl dark:border-neutral-800">
            <ImageReveal
              src={
                slug === "ai-surveillance-platform"
                  ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600"
                  : slug === "event-management-software"
                  ? "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600"
                  : slug === "ecommerce-growth-engine"
                  ? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600"
                  : slug === "fintech-dashboard"
                  ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600"
                  : slug === "mobile-fitness-app"
                  ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600"
                  : slug === "healthcare-ai"
                  ? "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600"
                  : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600"
              }
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              overlay={true}
              overlayVariant="gradient"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Challenge</h2>
              <p className="text-neutral-900 dark:text-neutral-200">{project.challenge}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Solution</h2>
              <p className="text-neutral-900 dark:text-neutral-200">{project.solution}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-accent">Results</h2>
              <p className="font-medium text-neutral-900 dark:text-white">{project.result}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
