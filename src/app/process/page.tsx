"use client";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Zap, TrendingUp } from "lucide-react";

const processSteps = [
	{
		number: "1",
		title: "Discovery & Consultation",
		description: "Deep dive into your goals, market, and audience. We conduct workshops to clarify objectives, identify constraints, and define success metrics. This phase sets the foundation for everything that follows.",
		icon: Lightbulb,
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600",
	},
	{
		number: "2",
		title: "Strategy & Planning",
		description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We analyze feasibility, assess risks, and align on a shippable roadmap that balances ambition with pragmatism.",
		icon: Target,
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
	},
	{
		number: "3",
		title: "Design & Prototyping",
		description: "Transform strategy into tangible designs. We create wireframes, prototypes, and visual designs based on user research and feedback. Design systems ensure consistency and scalability.",
		icon: Rocket,
		image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
	},
	{
		number: "4",
		title: "Development & Testing",
		description: "Build with agile sprints, weekly demos, and continuous feedback. We maintain high code quality through code reviews, automated testing, and security audits. You see progress every week.",
		icon: Zap,
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
	},
	{
		number: "5",
		title: "Launch & Growth Support",
		description: "Deploy with confidence and iterate based on data. We handle launch support, performance monitoring, SEO optimization, and ongoing marketing to help you grow sustainably.",
		icon: TrendingUp,
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
	},
];

export default function ProcessPage() {
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
						How We Work
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Our proven process from discovery to delivery, designed for clarity, speed, and measurable results.
					</motion.p>
				</div>
			</section>

			{/* Enhanced Process Timeline */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-16 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Our Process
						</h2>
						<p className="text-lg text-neutral-700 dark:text-neutral-300">
							A clear, collaborative journey from idea to success
						</p>
					</motion.div>

					<div className="space-y-20">
						{processSteps.map((step, index) => {
							const Icon = step.icon;
							const isEven = index % 2 === 0;
							
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.15 }}
									className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}
								>
									<div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
										<div className="relative h-64 overflow-hidden rounded-2xl lg:h-full">
											<ImageReveal
												src={step.image}
												alt={step.title}
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className={`flex flex-col justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
										<div className="mb-4 flex items-center gap-4">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
												<Icon className="h-8 w-8" />
											</div>
											<div className="text-4xl font-bold text-primary">0{step.number}</div>
										</div>
										<h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
											{step.title}
										</h3>
										<p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
											{step.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Communication & Transparency */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Communication & Transparency
						</h2>
						<p className="text-lg text-neutral-700 dark:text-neutral-300">
							We believe in clear, open communication throughout the project
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ title: "Weekly Updates", desc: "Status reports and sprint reviews keep you informed every step of the way." },
							{ title: "Clear Documentation", desc: "Technical docs and knowledge transfer ensure smooth handoffs." },
							{ title: "Real-time Collaboration", desc: "Access to project tools, code repositories, and design files." },
							{ title: "Transparent Pricing", desc: "Clear cost breakdowns and no hidden fees throughout the project." },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="rounded-2xl border-2 border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
							>
								<h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
									{item.title}
								</h3>
								<p className="text-sm text-neutral-700 dark:text-neutral-300">
									{item.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Ready to Start?"
				subtitle="Let's discuss your project and how our process can help you achieve your goals."
				primaryButtonText="Schedule a Call"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
