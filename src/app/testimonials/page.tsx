"use client";
import { testimonials } from "@/data/testimonials";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, Star, Filter } from "lucide-react";

const categories = ["All", "Tech", "Marketing", "AI"];

export default function TestimonialsPage() {
	const [activeFilter, setActiveFilter] = useState("All");

	const filteredTestimonials =
		activeFilter === "All"
			? testimonials
			: testimonials.filter((t) => t.category === activeFilter);

	return (
		<main>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="mb-6 flex justify-center"
					>
						<Quote className="h-16 w-16 text-white/30" />
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Client Reviews
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Don't just take our word for it. Here's what our clients have to say about their experience working with us.
					</motion.p>
				</div>
			</section>

			{/* Filter Tabs */}
			<section className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm py-4 dark:border-gray-800 dark:bg-[#0B0C10]/95 transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex flex-wrap items-center justify-center gap-3">
						<Filter className="h-5 w-5 text-gray-700 dark:text-gray-400" />
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

			{/* Testimonials */}
			<AnimatePresence mode="wait">
				<motion.div
					key={activeFilter}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					<TestimonialsSection
						testimonials={filteredTestimonials}
						title="What Our Clients Say"
						subtitle="Real feedback from real projects."
					/>
				</motion.div>
			</AnimatePresence>

			{/* Partner Logos */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
							Trusted By Leading Companies
						</h2>
						<p className="text-gray-700 dark:text-gray-300">
							We're proud to partner with innovative businesses
						</p>
					</motion.div>
					<div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
						{["TechStart Inc.", "Growth Labs", "Innovate Co.", "ScaleUp Solutions", "Digital Ventures", "NextGen Platforms"].map((company, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.1 }}
								className="flex h-20 items-center justify-center rounded-xl border-2 border-gray-200 bg-white text-center text-sm font-medium text-gray-700 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:border-gray-800 dark:bg-[#111] dark:text-gray-300"
							>
								{company}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Results */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
							Results That Matter
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 text-4xl font-bold text-primary">50%+</div>
							<p className="text-sm text-gray-700 dark:text-gray-300">
								Time reduction on average project
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-primary">
								<Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
								4.9
							</div>
							<p className="text-sm text-gray-700 dark:text-gray-300">
								Average client rating
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-[#111]"
						>
							<div className="mb-2 text-4xl font-bold text-primary">99%+</div>
							<p className="text-sm text-gray-700 dark:text-gray-300">
								Client satisfaction rate
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Join Our Happy Clients"
				subtitle="Ready to experience the same results? Let's discuss how we can help turn your vision into reality."
				primaryButtonText="Get in Touch"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
