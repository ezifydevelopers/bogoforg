import type { Metadata } from "next";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
	title: "How We Work",
	description: "Our proven process from discovery to delivery, designed for clarity, speed, and measurable results.",
};

const processSteps = [
	{
		number: "1",
		title: "Discovery & Consultation",
		description: "Deep dive into your goals, market, and audience. We conduct workshops to clarify objectives, identify constraints, and define success metrics. This phase sets the foundation for everything that follows.",
	},
	{
		number: "2",
		title: "Strategy & Planning",
		description: "Create a strategic roadmap with clear milestones, priorities, and success metrics. We analyze feasibility, assess risks, and align on a shippable roadmap that balances ambition with pragmatism.",
	},
	{
		number: "3",
		title: "Design & Prototyping",
		description: "Transform strategy into tangible designs. We create wireframes, prototypes, and visual designs based on user research and feedback. Design systems ensure consistency and scalability.",
	},
	{
		number: "4",
		title: "Development & Testing",
		description: "Build with agile sprints, weekly demos, and continuous feedback. We maintain high code quality through code reviews, automated testing, and security audits. You see progress every week.",
	},
	{
		number: "5",
		title: "Launch & Growth Support",
		description: "Deploy with confidence and iterate based on data. We handle launch support, performance monitoring, SEO optimization, and ongoing marketing to help you grow sustainably.",
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
					<h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
						How We Work
					</h1>
					<p className="text-lg leading-relaxed text-white/90 sm:text-xl">
						Our proven process from discovery to delivery, designed for clarity, speed, and measurable results.
					</p>
				</div>
			</section>

			{/* Process Steps */}
			<ProcessSection
				title="Our Process"
				subtitle="A clear, collaborative journey from idea to success"
				steps={processSteps}
			/>

			{/* Communication & Transparency */}
			<section className="bg-neutral-50 py-20 dark:bg-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Communication & Transparency
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							We believe in clear, open communication throughout the project
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div className="rounded-2xl border-2 border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
							<h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
								Regular Updates
							</h3>
							<p className="text-sm text-neutral-600 dark:text-neutral-300">
								Weekly status reports, sprint reviews, and milestone check-ins keep you informed every step of the way.
							</p>
						</div>
						<div className="rounded-2xl border-2 border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
							<h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
								Clear Documentation
							</h3>
							<p className="text-sm text-neutral-600 dark:text-neutral-300">
								Technical docs, runbooks, and knowledge transfer materials ensure smooth handoffs and long-term success.
							</p>
						</div>
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
