import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Product Design & Development",
	description: "End-to-end product design and development from concept to launch, with user-centered design and agile delivery.",
};

export default function ProductDesignDevelopmentPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Product Design & Development</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">End-to-end product design and development from concept to launch, with user-centered design and agile delivery.</p>
				</div>
			</section>
			<Section>
				<Heading level={1}>Product Design & Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					From ideation to launch, we design and build products that users love. Our integrated approach combines user research, design thinking, and agile development to deliver products that solve real problems.
				</Paragraph>
			</Section>
			<Section title="Design Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"User research & personas",
						"Journey mapping & flows",
						"Wireframing & prototyping",
						"UI/UX design",
						"Design systems",
						"Usability testing",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Development Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Full-stack development",
						"API design & integration",
						"Database architecture",
						"Quality assurance & testing",
						"DevOps & deployment",
						"Performance optimization",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Research:</span> User interviews, market analysis, and requirements gathering</li>
					<li><span className="font-medium">Design:</span> Wireframes, prototypes, and visual design with user feedback</li>
					<li><span className="font-medium">Develop:</span> Agile sprints with continuous integration and testing</li>
					<li><span className="font-medium">Launch:</span> Deployment, monitoring, and iterative improvements</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Stack">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Figma", "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Vercel"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}

