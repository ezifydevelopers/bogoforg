"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import { 
  Lightbulb, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Bot, 
  Shield,
  ChevronRight
} from "lucide-react";

const aboutLinks = [
  { href: "/about", label: "About Us", desc: "Our story and mission" },
  { href: "/process", label: "How We Work", desc: "Our proven process" },
  { href: "/testimonials", label: "Testimonials", desc: "Client success stories" },
  { href: "/careers", label: "Careers", desc: "Join our team" },
];

export function MegaMenu({ 
  isOpen, 
  type 
}: { 
  isOpen: boolean; 
  type: "services" | "about" 
}) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "business-planning": Lightbulb,
    "product-development": Code,
    "web-mobile-development": Smartphone,
    "marketing": TrendingUp,
    "ai-automation": Bot,
    "security-testing": Shield,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full z-50 w-full border-t border-neutral-200 bg-white/95 backdrop-blur-lg shadow-2xl dark:border-neutral-800 dark:bg-neutral-950/95"
          onMouseLeave={() => {}}
        >
          <div className="mx-auto max-w-7xl px-6 py-8">
            {type === "services" ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => {
                  const Icon = iconMap[service.slug] || Code;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group relative rounded-xl border-2 border-neutral-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        {service.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-xl border-2 border-neutral-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {link.desc}
                    </p>
                    <ChevronRight className="mt-2 h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

