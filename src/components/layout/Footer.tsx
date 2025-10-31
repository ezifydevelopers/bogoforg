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
		<footer className="relative border-t-2 border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-[#0B0C10] transition-colors duration-300">
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
						<p className="mb-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
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
										className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-neutral-700 transition-all hover:scale-110 hover:border-primary hover:bg-primary hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
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
								<Link href="/services/business-planning" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Business Planning
								</Link>
							</li>
							<li>
								<Link href="/services/product-development" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Product Development
								</Link>
							</li>
							<li>
								<Link href="/services/web-mobile-development" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Web & Mobile
								</Link>
							</li>
							<li>
								<Link href="/services/marketing" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Marketing & Growth
								</Link>
							</li>
							<li>
								<Link href="/services/ai-automation" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									AI & Automation
								</Link>
							</li>
							<li>
								<Link href="/services/security-testing" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
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
								<Link href="/about" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/portfolio" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="/process" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									How We Work
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Blog & Insights
								</Link>
							</li>
							<li>
								<Link href="/faq" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="/careers" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									Careers
								</Link>
							</li>
						</ul>

						{/* Newsletter */}
						<div className="mt-6">
							<h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Newsletter</h4>
							<p className="mb-3 text-xs text-neutral-700 dark:text-neutral-400">
								Get updates on product development, AI, and growth strategies.
							</p>
							<form className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 rounded-lg border-2 border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
								/>
								<button
									type="submit"
									className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
								>
									<Send className="h-4 w-4" />
								</button>
							</form>
						</div>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">Contact</h4>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start gap-2">
								<Mail className="h-4 w-4 shrink-0 mt-0.5 text-neutral-700 dark:text-neutral-400" />
								<a href="mailto:hello@bogoforg.com" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									hello@bogoforg.com
								</a>
							</li>
							<li className="flex items-start gap-2">
								<Phone className="h-4 w-4 shrink-0 mt-0.5 text-neutral-700 dark:text-neutral-400" />
								<a href="tel:+1234567890" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
									+1 (234) 567-890
								</a>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="h-4 w-4 shrink-0 mt-0.5 text-neutral-700 dark:text-neutral-400" />
								<span className="text-neutral-700 dark:text-neutral-400">Remote Worldwide</span>
							</li>
						</ul>
					</motion.div>
				</div>

				<div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-2 border-neutral-200 pt-6 text-sm dark:border-neutral-800 sm:flex-row">
					<p className="text-neutral-700 dark:text-neutral-400">© {currentYear} bogoforg. All rights reserved.</p>
					<div className="flex gap-6">
						<Link href="/terms" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
							Terms
						</Link>
						<Link href="/privacy" className="text-neutral-700 transition-colors hover:text-primary dark:text-neutral-400">
							Privacy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
