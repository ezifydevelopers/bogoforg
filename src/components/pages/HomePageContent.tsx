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
							What We Do
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							Comprehensive solutions from strategy to execution
						</p>
					</motion.div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<TiltCard key={service.id} intensity={10}>
								<div className="group h-full rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden shadow-lg transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
									<div className="relative h-48 overflow-hidden">
										<ImageReveal
											src={`https://images.unsplash.com/photo-${1550751827 + index}?w=800`}
											alt={service.title}
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
										<div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
											<p className="text-sm text-white">{service.description}</p>
										</div>
									</div>
									<div className="p-6">
										<div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
											{service.icon && <service.icon className="h-6 w-6" />}
										</div>
										<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
											{service.title}
										</h3>
										<p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
											{service.description}
										</p>
										<Link
											href={`/services/${service.slug}`}
											className="text-sm font-medium text-primary hover:text-accent transition-colors"
										>
											Learn More →
										</Link>
									</div>
								</div>
							</TiltCard>
						))}
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
