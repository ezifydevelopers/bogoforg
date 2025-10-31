"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Award } from "lucide-react";

const values = [
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
	},
	{
		icon: Heart,
		title: "Integrity",
		description: "Honest communication, transparent processes, and ethical business practices in everything we do.",
	},
	{
		icon: Users,
		title: "Collaboration",
		description: "We work as partners with our clients, fostering strong relationships built on trust and respect.",
	},
	{
		icon: Award,
		title: "Excellence",
		description: "We strive for excellence in every project, delivering quality results that exceed expectations.",
	},
];

const teamMembers = [
	{
		name: "Alex Johnson",
		role: "Business Strategist",
		bio: "10+ years helping startups scale",
		emoji: "💼",
	},
	{
		name: "Sarah Chen",
		role: "Lead Developer",
		bio: "Full-stack expert with passion for clean code",
		emoji: "💻",
	},
	{
		name: "Mike Rodriguez",
		role: "UX Designer",
		bio: "Transforming ideas into beautiful experiences",
		emoji: "🎨",
	},
];

const differentiators = [
	"Senior teams with 10+ years experience",
	"40–50% reduction in timeline and cost",
	"Transparent pricing and clear communication",
	"Agile methodology with weekly demos",
	"End-to-end services from strategy to growth",
	"Proven track record with 100+ successful projects",
];

export default function AboutPage() {
	return (
		<main>
			{/* Intro Banner */}
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
						Who We Are
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						We're a team of planners, developers, designers, and marketers passionate about turning ideas into reality.
					</motion.p>
				</div>
			</section>

			{/* Vision & Values */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Our Vision & Values
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							The principles that guide everything we do
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{values.map((value, index) => {
							const Icon = value.icon;
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
								>
									<div className="mb-4 flex justify-center">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
											<Icon className="h-8 w-8" />
										</div>
									</div>
									<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
										{value.title}
									</h3>
									<p className="text-sm text-neutral-600 dark:text-neutral-300">
										{value.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Meet the Team */}
			<section className="bg-neutral-50 py-20 dark:bg-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Meet the Team
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							The experts behind your success
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="mb-4 flex justify-center">
									<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-4xl">
										{member.emoji}
									</div>
								</div>
								<h3 className="mb-1 text-xl font-semibold text-neutral-900 dark:text-white">
									{member.name}
								</h3>
								<p className="mb-2 text-sm font-medium text-primary">
									{member.role}
								</p>
								<p className="text-sm text-neutral-600 dark:text-neutral-300">
									{member.bio}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Why Choose Us
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							Key differentiators that set us apart
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{differentiators.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="flex items-start gap-3 rounded-xl border-2 border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
									<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<p className="text-sm font-medium text-neutral-900 dark:text-white">
									{item}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Ready to take your idea to the next level?"
				primaryButtonText="Get Started"
				primaryButtonHref="/contact"
				secondaryButtonText="Learn More"
				secondaryButtonHref="/services"
			/>
		</main>
	);
}
