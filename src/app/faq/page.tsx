"use client";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { FAQSchema } from "@/components/seo/FAQSchema";
import Script from "next/script";

export default function FAQPage() {
	const faqs = [
		{ question: "Why go custom instead of off-the-shelf?", answer: "You get exactly what you need: flexibility, scalability, security, and ownership without license lock-in. Custom solutions are tailored to your specific workflows and can evolve with your business." },
		{ question: "How soon can we start?", answer: "Typically within 1–2 weeks after a short discovery call. We'll align on scope, timeline, and approach, then kick off the project quickly." },
		{ question: "Do you work fixed-price?", answer: "For well-defined scopes, yes. Otherwise we prefer sprint-based pricing with clear milestones and deliverables. This gives you flexibility while maintaining predictability." },
		{ question: "How do you reduce timeline and cost?", answer: "Senior teams, strong defaults, automation (CI/CD, codegen), and ruthless scope clarity. We use proven tools and patterns to build faster without sacrificing quality." },
		{ question: "Can you integrate with our team?", answer: "Yes — we can work embedded with your squad or as an autonomous pod with weekly demos. We adapt our workflow to match your team structure and preferences." },
		{ question: "What does success look like?", answer: "Agreed outcomes (KPIs), predictable delivery, and post-launch support with iteration. We define success metrics upfront and track them throughout the project." },
		{ question: "What technologies do you work with?", answer: "We primarily work with modern stacks like Next.js, React, TypeScript, Node.js, and cloud platforms. We choose technologies based on your needs, but prefer proven, maintainable tools." },
		{ question: "Do you provide ongoing support?", answer: "Yes, we offer ongoing support and maintenance packages. This includes bug fixes, updates, monitoring, and feature enhancements as your product evolves." },
	];

	return (
		<main>
			<Script
				id="faq-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": faqs.map((faq) => ({
							"@type": "Question",
							"name": faq.question,
							"acceptedAnswer": {
								"@type": "Answer",
								"text": faq.answer
							}
						}))
					}),
				}}
			/>
			{/* Hero */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
					>
						Frequently Asked Questions
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Find answers to common questions about our services, process, and how we work.
					</motion.p>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20">
				<div className="mx-auto max-w-4xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-8"
					>
						<h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
							General Questions
						</h2>
						<p className="text-neutral-600 dark:text-neutral-300">
							Have questions? We've compiled answers to the most common questions we receive.
						</p>
					</motion.div>
					<Accordion items={faqs} />
				</div>
			</section>

			{/* CTA */}
			<CTASection
				title="Still Have Questions?"
				subtitle="Can't find the answer you're looking for? We're here to help. Reach out and we'll get back to you as soon as possible."
				primaryButtonText="Contact Us"
				primaryButtonHref="/contact"
			/>
		</main>
	);
}
