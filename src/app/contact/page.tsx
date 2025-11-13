"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { Accordion } from "@/components/ui/Accordion";
import { TiltCard } from "@/components/ui/TiltCard";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";

const contactFAQ = [
	{
		question: "How quickly will you respond?",
		answer: "We typically respond within 24 hours, often faster for urgent inquiries.",
	},
	{
		question: "Do you offer free consultations?",
		answer: "Yes! We offer a free 30-minute consultation to discuss your project and how we can help.",
	},
	{
		question: "What information should I include in my message?",
		answer: "Please share details about your project goals, timeline, budget range, and any specific requirements or challenges you're facing.",
	},
];

export default function ContactPage() {
	return (
		<main>
		{/* Hero */}
		<section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
					alt="Contact us"
					fill
					sizes="100vw"
					className="object-cover grayscale-[0.3] brightness-105 filter"
					priority
					overlay={false}
				/>
			</div>
			{/* Semi-transparent Overlay - Similar to hero section */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />
			<Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
				<div className="w-full text-center">
					<motion.h1
						initial={{ opacity: 0, y: 50, scale: 0.95 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
						}}
						transition={{
							duration: 1,
							delay: 0.3,
							type: "spring",
							stiffness: 100,
							damping: 15,
						}}
						className="mb-4 sm:mb-6 text-fluid-6xl font-bold text-white leading-tight drop-shadow-2xl"
					>
						Let's Talk About Your Idea
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.6,
							type: "spring",
							stiffness: 100,
							damping: 15,
						}}
						className="text-fluid-xl leading-relaxed text-white drop-shadow-2xl"
					>
						Get in touch and let's discuss how we can turn your vision into reality.
					</motion.p>
				</div>
			</Container>
		</section>

			{/* Contact Cards */}
			<section className="relative -mt-10 z-20">
				<Container>
					<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
						{[
							{ icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
							{ icon: Mail, label: "Email", value: "hello@bogoforg.com", href: "mailto:hello@bogoforg.com" },
							{ icon: MessageCircle, label: "WhatsApp", value: "+1 (234) 567-890", href: "https://wa.me/1234567890" },
						].map((contact, index) => {
							const Icon = contact.icon;
							return (
								<TiltCard key={index} intensity={8}>
									<motion.a
										href={contact.href}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3, margin: "-50px" }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="group flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-lg dark:border-gray-800 dark:bg-[#111]"
									>
									<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
										<Icon className="h-8 w-8 text-black dark:text-white" />
									</div>
										<h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
											{contact.label}
										</h3>
										<p className="text-lg font-bold text-gray-900 dark:text-white">
											{contact.value}
										</p>
									</motion.a>
								</TiltCard>
							);
						})}
					</div>
				</Container>
			</section>

			{/* Contact Form & Info */}
			<section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container>
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md dark:border-gray-800 dark:bg-[#111]"
						>
							<h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
								Send Us a Message
							</h2>
							<form className="space-y-4">
								<div>
									<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
										Name *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#0B0C10] dark:text-white"
									/>
								</div>
								<div>
									<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#0B0C10] dark:text-white"
									/>
								</div>
								<div>
									<label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
										Company
									</label>
									<input
										type="text"
										id="company"
										name="company"
										className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#0B0C10] dark:text-white"
									/>
								</div>
								<div>
									<label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
										Service Interested In
									</label>
									<select
										id="service"
										name="service"
										className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#0B0C10] dark:text-white"
									>
										<option value="">Select a service</option>
										{services.map((service) => (
											<option key={service.id} value={service.slug}>
												{service.title}
											</option>
										))}
									</select>
								</div>
								<div>
									<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
										Message *
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										required
										className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#0B0C10] dark:text-white"
									/>
								</div>
								<Button type="submit" variant="primary" size="lg" className="w-full">
									<Send className="mr-2 h-5 w-5" />
									Send Message
								</Button>
							</form>
						</motion.div>

						{/* Contact Info & Map */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6 }}
							className="space-y-6"
						>
							<div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md dark:border-gray-800 dark:bg-[#111]">
								<h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
									Get in Touch
								</h2>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
											<Mail className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Email</h3>
											<a href="mailto:hello@bogoforg.com" className="text-gray-900 hover:text-primary dark:text-white">
												genroarit@gmail.com
											</a>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
											<Phone className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Phone</h3>
											<a href="tel:+1234567890" className="text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-400">
												+92 (310) 7100-663
											</a>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
											<MapPin className="h-6 w-6 text-white" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Address</h3>
											<p className="text-gray-900 dark:text-gray-200">
												Remote Worldwide<br />
												Serving clients globally
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
											<Calendar className="h-6 w-6 text-white" />
										</div>
									</div>
								</div>
							</div>

							{/* Map Placeholder */}
							<div className="relative h-64 overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-800">
								<ImageReveal
									src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800"
									alt="Office location"
									fill
									sizes="100vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
									<div className="text-center text-white">
										<MapPin className="mx-auto mb-2 h-12 w-12" />
										<p className="text-sm">Remote Worldwide</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</Container>
			</section>

			{/* FAQ Section */}
			<section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<Container className="max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3, margin: "-50px" }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-900 dark:text-gray-200">
							Quick answers to common questions about contacting us
						</p>
					</motion.div>
					<div className="space-y-4">
						{contactFAQ.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Accordion question={faq.question} answer={faq.answer} />
							</motion.div>
						))}
					</div>
				</Container>
			</section>

			{/* CTA */}
			<CTASection
				title="Let's Work Together"
				subtitle="Ready to start your next project? Get in touch and let's discuss how we can help."
				primaryButtonText="Start Your Project"
				primaryButtonHref="/contact"
				secondaryButtonText="View All Services"
				secondaryButtonHref="/services"
			/>
		</main>
	);
}
