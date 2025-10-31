"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
import { services } from "@/data/services";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Accordion } from "@/components/ui/Accordion";
import { TiltCard } from "@/components/ui/TiltCard";

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
						Let's Talk About Your Idea
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Get in touch and let's discuss how we can turn your vision into reality.
					</motion.p>
				</div>
			</section>

			{/* Contact Cards */}
			<section className="relative -mt-10">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						{[
							{ icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
							{ icon: Mail, label: "Email", value: "hello@bogoforg.com", href: "mailto:hello@bogoforg.com" },
							{ icon: MessageCircle, label: "WhatsApp", value: "+1 (234) 567-890", href: "https://wa.me/1234567890" },
						].map((contact, index) => {
							const Icon = contact.icon;
							return (
								<TiltCard key={index} intensity={5}>
									<motion.a
										href={contact.href}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										className="group flex flex-col items-center rounded-2xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-xl dark:border-gray-800 dark:bg-[#111]"
									>
										<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
											<Icon className="h-8 w-8" />
										</div>
										<h3 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-400">
											{contact.label}
										</h3>
										<p className="text-lg font-medium text-gray-900 dark:text-white">
											{contact.value}
										</p>
									</motion.a>
								</TiltCard>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-[#111]"
						>
							<h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
								Send Us a Message
							</h2>
							<form className="space-y-4">
								<div>
									<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
									<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
									<label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
									<label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
									<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
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
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="space-y-6"
						>
							<div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-[#111]">
								<h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
									Get in Touch
								</h2>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
											<Mail className="h-6 w-6" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Email</h3>
											<a href="mailto:hello@bogoforg.com" className="text-gray-700 hover:text-primary dark:text-gray-400">
												hello@bogoforg.com
											</a>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
											<Phone className="h-6 w-6" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Phone</h3>
											<a href="tel:+1234567890" className="text-gray-700 hover:text-primary dark:text-gray-400">
												+1 (234) 567-890
											</a>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
											<MapPin className="h-6 w-6" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Address</h3>
											<p className="text-gray-700 dark:text-gray-400">
												Remote Worldwide<br />
												Serving clients globally
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
											<Calendar className="h-6 w-6" />
										</div>
										<div>
											<h3 className="mb-1 font-semibold text-gray-900 dark:text-white">Schedule a Call</h3>
											<Button href="/contact" variant="outline" size="sm" className="mt-2">
												Book Consultation
											</Button>
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
				</div>
			</section>

			{/* FAQ Section */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-4xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mb-12 text-center"
					>
						<h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-700 dark:text-gray-300">
							Quick answers to common questions about contacting us
						</p>
					</motion.div>
					<div className="space-y-4">
						{contactFAQ.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Accordion question={faq.question} answer={faq.answer} />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* We're Hiring Banner */}
			<section className="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-16">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
							We're Hiring! 🚀
						</h2>
						<p className="mb-6 text-lg text-white/90">
							Join our team and help shape the future of digital products
						</p>
						<Button href="/careers" variant="secondary" size="lg" className="bg-white text-primary hover:bg-neutral-100">
							View Open Positions
						</Button>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
