"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock, Filter, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
	const [selectedDepartment, setSelectedDepartment] = useState("All");
	const [selectedType, setSelectedType] = useState("All");

	const openPositions = [
		{ 
			title: "Senior Full-Stack Engineer", 
			location: "Remote", 
			type: "Full-time", 
			department: "Engineering",
			description: "Build scalable web applications using modern technologies like Next.js, React, Node.js."
		},
		{ 
			title: "Product Designer", 
			location: "Remote", 
			type: "Full-time", 
			department: "Design",
			description: "Create beautiful, intuitive user experiences for web and mobile applications."
		},
		{ 
			title: "Growth Marketing Manager", 
			location: "Remote", 
			type: "Full-time", 
			department: "Marketing",
			description: "Drive growth through strategic marketing campaigns and data-driven insights."
		},
		{ 
			title: "AI/ML Engineer", 
			location: "Remote", 
			type: "Full-time", 
			department: "Engineering",
			description: "Develop AI-powered solutions and machine learning models for client products."
		},
		{ 
			title: "DevOps Engineer", 
			location: "Remote", 
			type: "Full-time", 
			department: "Engineering",
			description: "Manage infrastructure, CI/CD pipelines, and cloud deployments."
		},
		{ 
			title: "UX Researcher", 
			location: "Remote", 
			type: "Part-time", 
			department: "Design",
			description: "Conduct user research and gather insights to inform product decisions."
		},
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

	const departments = ["All", "Engineering", "Design", "Marketing"];
	const types = ["All", "Full-time", "Part-time", "Contract"];

	const filteredPositions = openPositions.filter((pos) => {
		const deptMatch = selectedDepartment === "All" || pos.department === selectedDepartment;
		const typeMatch = selectedType === "All" || pos.type === selectedType;
		return deptMatch && typeMatch;
	});

	const galleryImages = [
		"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
		"https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
		"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400",
		"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
		"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
		"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
	];

	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
						alt="Team collaboration"
						fill
						className="object-cover opacity-20"
					/>
				</div>
				<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
				<div className="relative z-10 mx-auto flex min-h-[600px] max-w-4xl items-center px-6 py-20">
					<div className="text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
						>
							Join Our Mission
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
				</div>
			</section>

			{/* Why Work With Us */}
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
							Why Work With Us
						</h2>
						<p className="text-lg text-neutral-700 dark:text-neutral-300">
							More than just a job — it's a career with purpose
						</p>
					</motion.div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{ title: "Impactful Work", desc: "Work on projects that matter and see your contributions make a real difference." },
							{ title: "Autonomy & Ownership", desc: "Take ownership of your work with the freedom to make decisions and innovate." },
							{ title: "Learning Culture", desc: "Continuous learning opportunities and exposure to cutting-edge technologies." },
							{ title: "Collaborative Team", desc: "Work with experienced, supportive colleagues who value quality and clarity." },
							{ title: "Work-Life Balance", desc: "Flexible hours, remote work, and respect for your time and boundaries." },
							{ title: "Growth Opportunities", desc: "Clear career paths and opportunities to grow both professionally and personally." },
						].map((perk, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="rounded-2xl border-2 border-neutral-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
							>
								<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{perk.title}</h3>
								<p className="text-sm text-neutral-700 dark:text-neutral-300">{perk.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
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
							Benefits & Perks
						</h2>
					</motion.div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								className="flex items-center gap-2 rounded-lg border-2 border-neutral-200 bg-white p-4 text-sm dark:border-neutral-800 dark:bg-neutral-950"
							>
								<CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
								<span className="text-neutral-900 dark:text-white">{benefit}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Life Gallery */}
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
							Team Life
						</h2>
						<p className="text-lg text-neutral-700 dark:text-neutral-300">
							A glimpse into our culture and team events
						</p>
					</motion.div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{galleryImages.map((src, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="relative h-48 overflow-hidden rounded-xl"
							>
								<ImageReveal
									src={src}
									alt={`Team event ${index + 1}`}
									fill
									className="object-cover"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-8 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Open Positions
						</h2>
					</motion.div>

					{/* Filters */}
					<div className="mb-8 flex flex-wrap items-center justify-center gap-4">
						<div className="flex items-center gap-2">
							<Filter className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
							<span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Department:</span>
							<div className="flex gap-2">
								{departments.map((dept) => (
									<button
										key={dept}
										onClick={() => setSelectedDepartment(dept)}
										className={`rounded-full px-4 py-1 text-sm transition-all ${
											selectedDepartment === dept
												? "bg-gradient-to-r from-primary to-accent text-white"
												: "border border-neutral-300 bg-white text-neutral-700 hover:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
										}`}
									>
										{dept}
									</button>
								))}
							</div>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Type:</span>
							<div className="flex gap-2">
								{types.map((type) => (
									<button
										key={type}
										onClick={() => setSelectedType(type)}
										className={`rounded-full px-4 py-1 text-sm transition-all ${
											selectedType === type
												? "bg-gradient-to-r from-primary to-accent text-white"
												: "border border-neutral-300 bg-white text-neutral-700 hover:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
										}`}
									>
										{type}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<AnimatePresence mode="wait">
							{filteredPositions.length > 0 ? (
								filteredPositions.map((position, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className="rounded-xl border-2 border-neutral-200 bg-white p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
									>
										<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
											<div className="flex-1">
												<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">{position.title}</h3>
												<p className="mb-3 text-sm text-neutral-700 dark:text-neutral-300">{position.description}</p>
												<div className="flex flex-wrap items-center gap-4 text-sm text-neutral-700 dark:text-neutral-300">
													<div className="flex items-center gap-1">
														<Briefcase className="h-4 w-4" />
														<span>{position.department}</span>
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-4 w-4" />
														<span>{position.location}</span>
													</div>
													<div className="flex items-center gap-1">
														<Clock className="h-4 w-4" />
														<span>{position.type}</span>
													</div>
												</div>
											</div>
											<Button href="/contact" variant="primary" size="lg">
												Apply Now
											</Button>
										</div>
									</motion.div>
								))
							) : (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="rounded-xl border-2 border-neutral-200 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-950"
								>
									<p className="text-neutral-600 dark:text-neutral-400">No positions found matching your filters.</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Submit Your Resume"
				subtitle="Don't see a role that fits? We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities."
				primaryButtonText="Get in Touch"
				primaryButtonHref="/contact"
				secondaryButtonText="View All Services"
				secondaryButtonHref="/services"
			/>
		</main>
	);
}
