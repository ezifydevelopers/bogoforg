"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

const leaders = [
  {
    name: "Muhammad Bilal ",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in product strategy and business development. Former VP at major tech companies.",
    image: "/Bilal.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "codewithpassion7@gmail.com",
  },
  {
    name: "Muhammad Majid",
    role: "CTO",
    bio: "Full-stack architect with expertise in scalable systems. Led engineering teams at 3 startups.",
    image: "/majid.png",
    linkedin: "#",
    twitter: "#",
    email: "codewithpassion3@gmail.com",
  },
  {
    name: "Muhammad Khan",
    role: " Manager ",
    bio: "Operations and project management expert ensuring seamless execution and team coordination.",
    image: "/khan.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "codewithpassion3@gmail.com",
  },
  {
    name: "Muhammad Abid",
    role: "Marketing Manager ",
    bio: "Marketing strategist specializing in brand development, digital campaigns, and customer engagement.",
    image: "/abid.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "codewithpassion4@gmail.com",
  },
  {
    name: "Ali Mehtab",
    role: "Full Stack Developer",
    bio: "Full Stack Developer with 2+ years creating award-winning user experiences and design systems.",
    image: "/ali.png",
    linkedin: "#",
    twitter: "#",
    email: "codewithpassion4@gmail.com",
  },
  {
    name: "Muhammad Umair",
    role: "Full Stack Developer",
    bio: "Full Stack Developer with 3+ years creating award-winning user experiences and design systems.",
    image: "/umair.png",
    linkedin: "#",
    twitter: "#",
    email: "umairroar3@gmail.com",
  },


];

export function LeadershipTeam() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-fluid-4xl font-extrabold text-gray-900 dark:text-white">
            Leadership Team
          </h2>
          <p className="mx-auto max-w-2xl text-fluid-xl text-gray-600 dark:text-gray-300">
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
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageReveal
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                {/* Social Links - Overlay on Image */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 transition-all hover:bg-primary hover:text-white hover:scale-110 dark:bg-neutral-900/90 dark:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 transition-all hover:bg-primary hover:text-white hover:scale-110 dark:bg-neutral-900/90 dark:text-white"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 transition-all hover:bg-primary hover:text-white hover:scale-110 dark:bg-neutral-900/90 dark:text-white"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="mb-2 text-fluid-2xl font-bold text-gray-900 dark:text-white">
                  {leader.name}
                </h3>
                <p className="mb-4 text-fluid-lg font-semibold text-primary">{leader.role}</p>
                <p className="text-fluid-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
