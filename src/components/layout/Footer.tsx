"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Send } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: Twitter, href: "https://twitter.com/bogoforg", label: "Twitter" },
		{ icon: Linkedin, href: "https://linkedin.com/company/bogoforg", label: "LinkedIn" },
		{ icon: Github, href: "https://github.com/bogoforg", label: "GitHub" },
		{ icon: Instagram, href: "https://instagram.com/bogoforg", label: "Instagram" },
	];

	return (
		<footer className="relative border-t-2 border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-16 dark:border-neutral-800 dark:from-neutral-950 dark:to-neutral-900">
			{/* Wave Top Border */}
			<div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
				<div className="h-full w-full bg-gradient-to-r from-primary via-accent to-primary" />
			</div>

			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="mb-4 text-xl font-bold">
							<span className="gradient-text">bogoforg</span>
						</h3>
						<p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
							Turning ideas into reality. We help entrepreneurs and businesses plan, build, and grow their products with cutting-edge technology and strategic expertise.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-neutral-600 transition-all hover:scale-110 hover:border-primary hover:bg-primary hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
									>
										<Icon className="h-5 w-5" />
									</a>
								);
							})}
						</div>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Services</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/services/business-planning" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Business Planning
								</Link>
							</li>
							<li>
								<Link href="/services/product-development" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Product Development
								</Link>
							</li>
							<li>
								<Link href="/services/web-mobile-development" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Web & Mobile
								</Link>
							</li>
							<li>
								<Link href="/services/marketing" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Marketing & Growth
								</Link>
							</li>
							<li>
								<Link href="/services/ai-automation" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									AI & Automation
								</Link>
							</li>
							<li>
								<Link href="/services/security-testing" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Security & Testing
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Resources */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Resources</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/blog" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Blog & Insights
								</Link>
							</li>
							<li>
								<Link href="/portfolio" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Case Studies
								</Link>
							</li>
							<li>
								<Link href="/testimonials" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Testimonials
								</Link>
							</li>
							<li>
								<Link href="/faq" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/process" className="text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400">
									Our Process
								</Link>
							</li>
						</ul>
					</motion.div>

					{/* Contact & Newsletter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Get In Touch</h4>
						<div className="mb-6 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
							<div className="flex items-center gap-2">
								<Mail className="h-4 w-4 text-primary" />
								<a href="mailto:hello@bogoforg.com" className="hover:text-primary">
									hello@bogoforg.com
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="h-4 w-4 text-primary" />
								<a href="tel:+1234567890" className="hover:text-primary">
									+1 (234) 567-890
								</a>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="h-4 w-4 text-primary" />
								<span>Remote Worldwide</span>
							</div>
						</div>
						
						{/* Newsletter */}
						<div className="rounded-xl border-2 border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
							<h5 className="mb-2 text-xs font-semibold text-neutral-900 dark:text-white">Newsletter</h5>
							<p className="mb-3 text-xs text-neutral-600 dark:text-neutral-400">
								Get insights on AI, product development, and growth.
							</p>
							<form className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-950"
								/>
								<button
									type="submit"
									className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent text-white transition-all hover:scale-110 hover:shadow-lg"
									aria-label="Subscribe"
								>
									<Send className="h-4 w-4" />
								</button>
							</form>
						</div>
					</motion.div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row">
					<p>© {currentYear} bogoforg. All rights reserved.</p>
					<div className="flex gap-6">
						<Link href="/terms" className="transition-colors hover:text-primary">
							Terms
						</Link>
						<Link href="/privacy" className="transition-colors hover:text-primary">
							Privacy
						</Link>
						<Link href="/sitemap" className="transition-colors hover:text-primary">
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
