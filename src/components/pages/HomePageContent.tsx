"use client";
import { EnhancedHero } from "@/components/sections/EnhancedHero";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BusinessJourney } from "@/components/sections/BusinessJourney";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FAQsPreview } from "@/components/sections/FAQsPreview";
import { ParallaxCTA } from "@/components/sections/ParallaxCTA";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomePageContent() {
	const processSteps = [
		{
			number: "1",
			title: "Understand",
			description: "Deep dive into your goals, market, and audience to understand what you need to succeed.",
		},
		{
			number: "2",
			title: "Plan",
			description: "Create a strategic roadmap with clear milestones, priorities, and success metrics.",
		},
		{
			number: "3",
			title: "Build",
			description: "Design and develop your product with agile sprints, weekly demos, and continuous feedback.",
		},
		{
			number: "4",
			title: "Test",
			description: "Rigorous quality assurance, security audits, and performance testing before launch.",
		},
		{
			number: "5",
			title: "Grow",
			description: "Launch, measure, optimize, and iterate with marketing, analytics, and ongoing support.",
		},
	];

	return (
		<main>
			{/* 1. Enhanced Hero Section */}
			<EnhancedHero
				headline="We Turn Ideas into Reality"
				subtext="From concept to launch — our planners, developers, and marketers build your business success."
				primaryButtonText="Start Your Project"
				primaryButtonHref="/contact"
				secondaryButtonText="Book a Free Consultation"
				secondaryButtonHref="/contact"
			/>

			{/* 2. Why Choose Us */}
			<WhyChooseUs />

			{/* 3. What We Do - Enhanced Services with Images */}
			<section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-8 sm:mb-12 text-center"
					>
						<h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
							What We Do
						</h2>
						<p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
							Comprehensive solutions from strategy to execution
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => {
							// Unique images for each service
							const serviceImages = [
								"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80", // Business Planning
								"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80", // Product Development
								"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80", // Web & Mobile
								"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", // Marketing
								"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80", // AI & Automation
								"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80", // Security
							];
							return (
								<TiltCard key={service.id} intensity={10}>
									<div className="group h-full rounded-2xl border-2 border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-lg transition-all dark:border-gray-800 dark:bg-[#111]">
										<div className="relative h-48 sm:h-56 overflow-hidden">
											<ImageReveal
												src={serviceImages[index] || serviceImages[0]}
												alt={service.title}
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
											<div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
												<div className="mb-2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
													{service.icon && <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
												</div>
												<h3 className="text-base sm:text-lg font-bold text-white drop-shadow-lg">
													{service.title}
												</h3>
											</div>
										</div>
										<div className="p-4 sm:p-6">
											<p className="mb-4 text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
												{service.description}
											</p>
											<Link
												href={`/services/${service.slug}`}
												className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors dark:text-primary-400 dark:hover:text-primary-300 group/link"
											>
												Learn More 
												<span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
											</Link>
										</div>
									</div>
								</TiltCard>
							);
						})}
					</div>
				</div>
			</section>

			{/* 4. Business Journey Timeline */}
			<BusinessJourney />

			{/* 5. Case Study Highlight */}
			<CaseStudyHighlight />

			{/* 6. How We Work - Enhanced Process */}
			<ProcessSection
				title="How We Work"
				subtitle="A clear, collaborative process from idea to launch."
				steps={processSteps}
			/>

			{/* 7. Our Team Preview */}
			<TeamPreview />

			{/* 8. Technology & Tools */}
			<TechnologyStack />

			{/* 9. Stats */}
			<StatsSection
				stats={[
					{ value: 50, suffix: "%", label: "Time Reduction" },
					{ value: 100, suffix: "+", label: "Projects Delivered" },
					{ value: 99, suffix: "%", label: "Client Satisfaction" },
					{ value: 4.9, suffix: "★", label: "Average Rating" },
				]}
			/>

			{/* 10. Testimonials (Enhanced) */}
			<TestimonialsSection
				testimonials={testimonials}
				title="What Our Clients Say"
				subtitle="Real feedback from real projects."
			/>

			{/* 11. Client Logos Section */}
			<ClientLogos />

			{/* 12. FAQs Preview */}
			<FAQsPreview />

			{/* Final CTA with Parallax */}
			<ParallaxCTA />
		</main>
	);
}
