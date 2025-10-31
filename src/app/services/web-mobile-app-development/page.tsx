import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Web & Mobile App Development",
	description: "Full-stack web and mobile application development for iOS, Android, and cross-platform solutions.",
};

export default function WebMobileAppDevelopmentPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Web & Mobile App Development</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">Full-stack web and mobile application development for iOS, Android, and cross-platform solutions.</p>
				</div>
			</section>
			<Section>
				<Heading level={1}>Web & Mobile App Development</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					We build fast, scalable web and mobile applications that deliver exceptional user experiences. From responsive web apps to native mobile solutions, we choose the right technology for your needs.
				</Paragraph>
			</Section>
			<Section title="Web Development">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Responsive web applications",
						"Progressive Web Apps (PWA)",
						"Single Page Applications (SPA)",
						"Server-side rendering",
						"E-commerce platforms",
						"Content management systems",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Mobile Development">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Native iOS development (Swift)",
						"Native Android development (Kotlin)",
						"Cross-platform (React Native, Flutter)",
						"Mobile app design & UX",
						"App Store optimization",
						"Push notifications & analytics",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Process">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Discovery:</span> Requirements analysis, platform selection, and architecture design</li>
					<li><span className="font-medium">Design:</span> User flows, wireframes, and UI design</li>
					<li><span className="font-medium">Development:</span> Agile sprints with code reviews and testing</li>
					<li><span className="font-medium">Deployment:</span> App store submission, hosting setup, and launch support</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Technologies">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Next.js", "React", "React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Vercel"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}

