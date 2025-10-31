import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Cybersecurity & Testing",
	description: "Comprehensive cybersecurity services and quality assurance testing to protect your applications and ensure reliability.",
};

export default function CybersecurityTestingPage() {
	return (
		<main>
			<section className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-[url('/hero-grid.svg')] bg-cover bg-center opacity-10" />
					<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
				</div>
				<div className="mx-auto max-w-7xl px-6 text-center sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Cybersecurity & Testing</h1>
					<p className="mt-3 max-w-2xl text-zinc-300">Comprehensive cybersecurity services and quality assurance testing to protect your applications and ensure reliability.</p>
				</div>
			</section>
			<Section>
				<Heading level={1}>Cybersecurity & Testing</Heading>
				<Paragraph className="mt-4 max-w-3xl">
					Protect your applications and data with comprehensive security assessments and rigorous testing. We help you identify vulnerabilities, ensure compliance, and maintain high-quality standards.
				</Paragraph>
			</Section>
			<Section title="Cybersecurity Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Security audits & assessments",
						"Penetration testing",
						"Vulnerability scanning",
						"Code security reviews",
						"Security architecture design",
						"Compliance consulting (GDPR, HIPAA)",
						"Incident response planning",
						"Security training & awareness",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Testing Services">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						"Unit & integration testing",
						"End-to-end (E2E) testing",
						"Performance & load testing",
						"Security testing",
						"Usability testing",
						"Accessibility testing",
						"Regression testing",
						"Test automation",
					].map((s) => (
						<div key={s} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">{s}</div>
					))}
				</div>
			</Section>
			<Section title="Our Approach">
				<ol className="space-y-3 text-sm">
					<li><span className="font-medium">Assessment:</span> Comprehensive security and quality evaluation</li>
					<li><span className="font-medium">Planning:</span> Risk analysis and test strategy development</li>
					<li><span className="font-medium">Execution:</span> Systematic testing and security audits</li>
					<li><span className="font-medium">Remediation:</span> Issue tracking and resolution support</li>
				</ol>
			</Section>
			<Section className="pb-20" title="Tools & Standards">
				<div className="flex flex-wrap gap-2 text-sm">
					{["OWASP", "Snyk", "SonarQube", "Jest", "Cypress", "Playwright", "Burp Suite", "Nmap", "OWASP ZAP"].map((s) => (
						<span key={s} className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">{s}</span>
					))}
				</div>
			</Section>
		</main>
	);
}

