import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "SEO",
	description: "Technical SEO, on-page optimization, and content strategy to grow organic traffic.",
};

export default function SEOPage() {
	return (
		<main>
			<Section className="pt-16">
				<Heading level={1}>SEO</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					From technical audits to content plans, we improve visibility and drive sustainable growth.
				</Paragraph>
			</Section>
			<Section title="Capabilities">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Technical audits & fixes",
						"Site architecture & internal linking",
						"Keyword research & mapping",
						"On‑page optimization",
						"Content strategy & briefs",
						"Analytics & reporting",
					].map((c) => (
						<div key={c} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{c}</div>
					))}
				</div>
			</Section>
			<Section className="pb-20" title="Tooling">
				<div className="flex flex-wrap gap-2 text-sm">
					{["Search Console", "GA4", "Ahrefs", "Screaming Frog", "Sitebulb"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}


