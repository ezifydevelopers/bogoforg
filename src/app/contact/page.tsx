"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { services } from "@/data/services";

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

			{/* Contact Form & Info */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
						>
							<h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
								Send Us a Message
							</h2>
							<form className="space-y-4">
								<div>
									<label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
										Name *
									</label>
									<input
										type="text"
										id="name"
										required
										className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
										Email *
									</label>
									<input
										type="email"
										id="email"
										required
										className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
										placeholder="your.email@example.com"
									/>
								</div>
								<div>
									<label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
										Company (Optional)
									</label>
									<input
										type="text"
										id="company"
										className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
										placeholder="Your company"
									/>
								</div>
								<div>
									<label htmlFor="service" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
										Service Interested In
									</label>
									<select
										id="service"
										className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
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
									<label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
										Message *
									</label>
									<textarea
										id="message"
										required
										rows={6}
										className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
										placeholder="Tell us about your project..."
									/>
								</div>
								<Button
									type="submit"
									variant="primary"
									size="lg"
									className="w-full"
								>
									<Send className="mr-2 h-5 w-5" />
									Send Message
								</Button>
							</form>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="space-y-8"
						>
							<div>
								<h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
									Get in Touch
								</h2>
								<p className="mb-8 text-neutral-600 dark:text-neutral-300">
									Have questions? We're here to help. Reach out and we'll get back to you within 24 hours.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
										<Mail className="h-6 w-6" />
									</div>
									<div>
										<h3 className="mb-1 font-semibold text-neutral-900 dark:text-white">Email</h3>
										<a href="mailto:hello@bogoforg.com" className="text-neutral-600 hover:text-primary dark:text-neutral-300">
											hello@bogoforg.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<h3 className="mb-1 font-semibold text-neutral-900 dark:text-white">Phone</h3>
										<a href="tel:+1234567890" className="text-neutral-600 hover:text-primary dark:text-neutral-300">
											+1 (234) 567-890
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
										<MapPin className="h-6 w-6" />
									</div>
									<div>
										<h3 className="mb-1 font-semibold text-neutral-900 dark:text-white">Location</h3>
										<p className="text-neutral-600 dark:text-neutral-300">
											Remote Worldwide
										</p>
									</div>
								</div>
							</div>

							{/* Map Placeholder */}
							<div className="mt-8 rounded-xl border-2 border-neutral-200 bg-neutral-100 p-12 text-center dark:border-neutral-800 dark:bg-neutral-900">
								<MapPin className="mx-auto mb-4 h-12 w-12 text-neutral-400" />
								<p className="text-sm text-neutral-500 dark:text-neutral-400">
									Map placeholder - Add your location
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
