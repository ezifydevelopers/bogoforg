import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
  }
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: `Case study: ${project.title}. ${project.result}`,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-white/90 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="mb-4">
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div>
              <span className="font-semibold">Client:</span> {project.client}
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {project.duration}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="relative -mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-neutral-200 shadow-xl dark:border-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">📊</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Challenge</h2>
              <p className="text-neutral-600 dark:text-neutral-300">{project.challenge}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Solution</h2>
              <p className="text-neutral-600 dark:text-neutral-300">{project.solution}</p>
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
                  className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
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

