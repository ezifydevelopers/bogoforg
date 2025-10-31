"use client";
import { testimonials } from "@/data/testimonials";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
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
						Client Reviews
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Don't just take our word for it. Here's what our clients have to say about their experience working with us.
					</motion.p>
				</div>
			</section>

			{/* Testimonials */}
			<TestimonialsSection
				testimonials={testimonials}
				title="What Our Clients Say"
				subtitle="Real feedback from real projects."
			/>

			{/* Partner Logos */}
			<section className="bg-neutral-50 py-20 dark:bg-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
							Trusted By Leading Companies
						</h2>
						<p className="text-neutral-600 dark:text-neutral-300">
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
								className="flex h-20 items-center justify-center rounded-xl border-2 border-neutral-200 bg-white text-center text-sm font-medium text-neutral-700 opacity-60 transition-opacity hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
							>
								{company}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Results */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Results That Matter
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-950"
						>
							<div className="mb-2 text-4xl font-bold text-primary">50%+</div>
							<p className="text-sm text-neutral-600 dark:text-neutral-300">
								Time reduction on average project
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-950"
						>
							<div className="mb-2 text-4xl font-bold text-primary">99%+</div>
							<p className="text-sm text-neutral-600 dark:text-neutral-300">
								Client satisfaction rate
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-950"
						>
							<div className="mb-2 text-4xl font-bold text-primary">4.9★</div>
							<p className="text-sm text-neutral-600 dark:text-neutral-300">
								Average client rating
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
