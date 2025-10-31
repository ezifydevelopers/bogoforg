"use client";
import { CTASection } from "@/components/sections/CTASection";
import { StatsSection } from "@/components/sections/StatsSection";
import { OurStory } from "@/components/sections/OurStory";
import { LeadershipTeam } from "@/components/sections/LeadershipTeam";
import { CompanyCulture } from "@/components/sections/CompanyCulture";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Award } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";

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

export default function AboutPage() {
	return (
		<main>
			{/* 1. Hero Banner with Background Image */}
			<section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
						alt="Our team"
						fill
						className="object-cover opacity-20"
					/>
				</div>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
				<div className="relative z-10 mx-auto flex min-h-[500px] max-w-4xl items-center px-6 py-20">
					<div className="text-center">
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
						<motion.blockquote
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-8 text-xl italic text-white/80"
						>
							"Building the future, one idea at a time."
						</motion.blockquote>
					</div>
				</div>
			</section>

			{/* 2. Our Story */}
			<OurStory />

			{/* 3. Mission, Vision & Values */}
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
							Our Vision & Values
						</h2>
						<p className="text-lg text-gray-700 dark:text-gray-300">
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
									className="rounded-2xl border-2 border-gray-200 bg-white p-6 text-center shadow-md transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
								>
									<div className="mb-4 flex justify-center">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
											<Icon className="h-8 w-8" />
										</div>
									</div>
									<h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
										{value.title}
									</h3>
									<p className="text-sm text-gray-700 dark:text-gray-300">
										{value.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* 4. Leadership Team */}
			<LeadershipTeam />

			{/* 5. Our Culture */}
			<CompanyCulture />

			{/* 6. Company Stats */}
			<StatsSection
				stats={[
					{ value: 10, suffix: "+", label: "Years Experience" },
					{ value: 500, suffix: "+", label: "Projects Completed" },
					{ value: 200, suffix: "+", label: "Happy Clients" },
					{ value: 50, suffix: "+", label: "Team Members" },
				]}
				title="Our Impact by Numbers"
				subtitle="Results that speak for themselves"
			/>

			{/* 7. Global Presence */}
			<GlobalPresence />

			{/* 8. CTA */}
			<CTASection
				title="Join Us or Start Your Project"
				primaryButtonText="Get Started"
				primaryButtonHref="/contact"
				secondaryButtonText="View Careers"
				secondaryButtonHref="/careers"
				variant="gradient"
			/>
		</main>
	);
}
