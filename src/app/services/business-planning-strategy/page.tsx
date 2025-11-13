"use client";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { motion } from "framer-motion";

// Note: Metadata export is not available in client components
// You may need to handle SEO differently for this page

export default function BusinessPlanningStrategyPage() {
	return (
		<main>
			{/* Hero */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-black dark:bg-black">
				{/* Background Image */}
				<div className="absolute inset-0">
					<ImageReveal
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
						alt="Business Planning & Strategy"
						fill
						sizes="100vw"
						className="object-cover grayscale-[0.3] brightness-105"
						priority
						overlay={false}
					/>
				</div>
				{/* Semi-transparent Overlay - Similar to hero section */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
				<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
					<div className="w-full text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="mb-6 text-fluid-5xl font-bold text-white drop-shadow-2xl"
						>
							Business Planning & Strategy
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
						>
							Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.
						</motion.p>
					</div>
				</Container>
			</section>
			<Section>
				<Heading level={1}>Business Planning & Strategy</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					Turn your vision into an actionable plan. We help you validate ideas, define success metrics, prioritize initiatives, and build roadmaps that align with your business goals.
				</Paragraph>
			</Section>
			<Section title="Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Market research & validation",
						"Business model design",
						"Product-market fit analysis",
						"Competitive strategy",
						"Go-to-market planning",
						"Financial modeling & projections",
						"Risk assessment & mitigation",
						"OKR & KPI definition",
						"Roadmap prioritization",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Our Approach">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Discovery:</span> Deep dive into your market, customers, and objectives</li>
					<li><span className="font-medium">Analysis:</span> Competitive landscape, opportunities, and risks</li>
					<li><span className="font-medium">Strategy:</span> Clear recommendations with data-driven rationale</li>
					<li><span className="font-medium">Planning:</span> Prioritized roadmap with milestones and metrics</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Deliverables">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Strategic plan document", "Business model canvas", "Market analysis report", "Go-to-market strategy", "Product roadmap", "Financial projections"].map((d) => (
						<span key={d} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{d}</span>
					))}
				</div>
			</Section>
		</main>
	);
}
