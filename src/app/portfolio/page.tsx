"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const projects = [
	{
		slug: "ai-surveillance-platform",
		title: "AI-Powered Cloud Surveillance Platform",
		result: "50% reduction in manual reviews, 3× improvement in threat detection accuracy.",
	},
	{
		slug: "event-management-software",
		title: "Scalable Event Management Software",
		result: "50% less manual review time, 2× productivity boost, handles 10× more events.",
	},
	{
		slug: "ecommerce-growth-engine",
		title: "E-commerce Growth Engine",
		result: "+120% organic traffic, +35% conversion rate improvement, improved Core Web Vitals.",
	},
];

export default function PortfolioPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Case Studies
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						A snapshot of projects we've delivered—outcomes, learnings, and craft.
					</motion.p>
				</div>
			</section>

			{/* Projects */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((project, index) => (
							<Link key={project.slug} href={`/portfolio/${project.slug}`}>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group h-full rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
								>
									<div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="text-4xl">📊</div>
										</div>
									</div>
									<div className="p-6">
										<h3 className="mb-2 text-xl font-semibold text-neutral-900 group-hover:text-primary transition-colors dark:text-white">
											{project.title}
										</h3>
										<p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">
											{project.result}
										</p>
										<span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
											View Case Study →
										</span>
									</div>
								</motion.div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
