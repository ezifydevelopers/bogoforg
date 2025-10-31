import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Business Planning & Strategy",
	description: "Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.",
};

export default function BusinessPlanningStrategyPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Business Planning & Strategy</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.</p>
				</div>
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

