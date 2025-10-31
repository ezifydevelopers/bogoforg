"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CareersPage() {
	const openPositions = [
		{ title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
		{ title: "Product Designer", location: "Remote", type: "Full-time", department: "Design" },
		{ title: "Growth Marketing Manager", location: "Remote", type: "Full-time", department: "Marketing" },
		{ title: "AI/ML Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
	];

	const benefits = [
		"Competitive salary and equity",
		"Fully remote work",
		"Flexible working hours",
		"Health insurance",
		"Learning & development budget",
		"Top-tier equipment",
		"Unlimited PTO",
		"Annual team retreats",
	];

	const perks = [
		{ title: "Impactful Work", desc: "Work on projects that matter and see your contributions make a real difference." },
		{ title: "Autonomy & Ownership", desc: "Take ownership of your work with the freedom to make decisions and innovate." },
		{ title: "Learning Culture", desc: "Continuous learning opportunities and exposure to cutting-edge technologies." },
		{ title: "Collaborative Team", desc: "Work with experienced, supportive colleagues who value quality and clarity." },
		{ title: "Work-Life Balance", desc: "Flexible hours, remote work, and respect for your time and boundaries." },
		{ title: "Growth Opportunities", desc: "Clear career paths and opportunities to grow both professionally and personally." },
	];

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
						Join a Team That Builds the Future
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Build meaningful products with a team that values quality, clarity, and impact.
					</motion.p>
				</div>
			</section>

			{/* Why Work With Us */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Why Work With Us
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{perks.map((perk, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="rounded-2xl border-2 border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
							>
								<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{perk.title}</h3>
								<p className="text-sm text-neutral-600 dark:text-neutral-300">{perk.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="bg-neutral-50 py-20 dark:bg-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Open Positions
						</h2>
					</div>
					<div className="space-y-4">
						{openPositions.map((position, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="rounded-xl border-2 border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
									<div>
										<h3 className="font-semibold text-neutral-900 dark:text-white">{position.title}</h3>
										<div className="mt-2 flex flex-wrap gap-2 text-sm text-neutral-600 dark:text-neutral-300">
											<span>{position.location}</span>
											<span>•</span>
											<span>{position.type}</span>
											<span>•</span>
											<span>{position.department}</span>
										</div>
									</div>
									<Button href="/contact" variant="outline" size="sm">
										Apply Now
									</Button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Benefits & Perks
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								className="rounded-lg border-2 border-neutral-200 bg-white p-4 text-center text-sm dark:border-neutral-800 dark:bg-neutral-950"
							>
								{benefit}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Don't See a Role That Fits?"
				subtitle="We're always looking for talented people. Even if you don't see a role that matches your skills, feel free to reach out."
				primaryButtonText="Get in Touch"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
