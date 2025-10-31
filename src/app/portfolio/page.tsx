"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import Link from "next/link";
import { useState } from "react";
import { CTASection } from "@/components/sections/CTASection";

const allProjects = [
	{
		slug: "ai-surveillance-platform",
		title: "AI-Powered Cloud Surveillance Platform",
		result: "50% reduction in manual reviews, 3× improvement in threat detection accuracy.",
		category: "AI",
		tags: ["AI", "Cloud", "Security"],
	},
	{
		slug: "event-management-software",
		title: "Scalable Event Management Software",
		result: "50% less manual review time, 2× productivity boost, handles 10× more events.",
		category: "Web",
		tags: ["Web", "SaaS"],
	},
	{
		slug: "ecommerce-growth-engine",
		title: "E-commerce Growth Engine",
		result: "+120% organic traffic, +35% conversion rate improvement, improved Core Web Vitals.",
		category: "Marketing",
		tags: ["Marketing", "SEO", "E-commerce"],
	},
	{
		slug: "fintech-dashboard",
		title: "FinTech Analytics Dashboard",
		result: "Real-time financial insights with 90% faster data processing and advanced visualizations.",
		category: "Web",
		tags: ["Web", "FinTech", "Analytics"],
	},
	{
		slug: "mobile-fitness-app",
		title: "Mobile Fitness App",
		result: "1M+ downloads, 4.8★ rating, with AI-powered workout recommendations.",
		category: "Mobile",
		tags: ["Mobile", "AI", "Health"],
	},
	{
		slug: "healthcare-ai",
		title: "Healthcare AI Diagnostic Tool",
		result: "95% diagnostic accuracy, reduced diagnosis time by 60%, FDA approved.",
		category: "AI",
		tags: ["AI", "Healthcare"],
	},
];

const categories = ["All", "Web", "Mobile", "AI", "Marketing"];

export default function PortfolioPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredProjects =
		activeFilter === "All"
			? allProjects
			: allProjects.filter((project) => project.category === activeFilter);

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

			{/* Filter Tabs */}
			<section className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm py-4 dark:border-gray-800 dark:bg-[#0B0C10]/95 transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex flex-wrap items-center justify-center gap-3">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveFilter(category)}
								className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
									activeFilter === category
										? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
										: "border-2 border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-[#111] dark:text-gray-300"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeFilter}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
						>
							{filteredProjects.map((project, index) => (
								<TiltCard key={project.slug} intensity={8}>
									<Link href={`/portfolio/${project.slug}`}>
										<div className="group h-full rounded-2xl border-2 border-gray-200 bg-white overflow-hidden shadow-md transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]">
											<div className="relative h-48 overflow-hidden">
												<ImageReveal
													src={`https://images.unsplash.com/photo-${1550751827 + index}?w=800`}
													alt={project.title}
													fill
													className="object-cover"
												/>
												<div className="absolute top-4 right-4">
													<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
														{project.category}
													</span>
												</div>
												<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
											</div>
											<div className="p-6">
												<h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors dark:text-white">
													{project.title}
												</h3>
												<p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
													{project.result}
												</p>
												<div className="flex flex-wrap gap-2 mb-4">
													{project.tags.map((tag) => (
														<span
															key={tag}
															className="rounded-full border border-gray-300 bg-white px-2 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-[#111] dark:text-gray-400"
														>
															{tag}
														</span>
													))}
												</div>
												<span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
													View Case Study →
												</span>
											</div>
										</div>
									</Link>
								</TiltCard>
							))}
						</motion.div>
					</AnimatePresence>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Let's Work Together"
				subtitle="Ready to start your next project? Get in touch and let's discuss how we can help."
				primaryButtonText="Start Your Project"
				primaryButtonHref="/contact"
				secondaryButtonText="View All Services"
				secondaryButtonHref="/services"
			/>
		</main>
	);
}
