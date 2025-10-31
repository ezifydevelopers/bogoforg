"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const leaders = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "10+ years in product strategy and business development. Former VP at major tech companies.",
    image: "👩‍💼",
    linkedin: "#",
    twitter: "#",
    email: "sarah@bogoforg.com",
  },
  {
    name: "Mike Rodriguez",
    role: "CTO",
    bio: "Full-stack architect with expertise in scalable systems. Led engineering teams at 3 startups.",
    image: "👨‍💻",
    linkedin: "#",
    twitter: "#",
    email: "mike@bogoforg.com",
  },
  {
    name: "Alex Johnson",
    role: "Head of Design",
    bio: "UX/UI design leader with 8+ years creating award-winning user experiences.",
    image: "👨‍🎨",
    linkedin: "#",
    twitter: "#",
    email: "alex@bogoforg.com",
  },
  {
    name: "Emily Davis",
    role: "Growth Lead",
    bio: "Marketing & growth strategist who's scaled 5+ products from 0 to millions in revenue.",
    image: "👩‍💼",
    linkedin: "#",
    twitter: "#",
    email: "emily@bogoforg.com",
  },
];

export function LeadershipTeam() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-[#0B0C10] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Meet the experts leading your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#111]"
            >
              <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-5xl mx-auto">
                {leader.image}
              </div>
              <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                {leader.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-primary">{leader.role}</p>
              <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {leader.bio}
              </p>
              <div className="flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={leader.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-400"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${leader.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-400"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

