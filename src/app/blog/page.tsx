"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

const categories = ["All", "AI & Automation", "Web Development", "Mobile Development", "Product Strategy", "Design", "Engineering", "Marketing", "Growth", "Security"];

export default function BlogPage() {
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
						Blog & Insights
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						Insights on product development, technology, AI, growth, and best practices from our team.
					</motion.p>
				</div>
			</section>

			{/* Blog Posts */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
							Featured Articles
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{blogPosts.map((post, index) => (
							<Link key={post.slug} href={`/blog/${post.slug}`}>
								<motion.article
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group h-full rounded-2xl border-2 border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
								>
									<div className="mb-3 text-xs font-medium text-primary">{post.category}</div>
									<h3 className="mb-2 text-xl font-semibold text-neutral-900 group-hover:text-primary transition-colors dark:text-white">
										{post.title}
									</h3>
									<p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
									<time className="text-xs text-neutral-500">
										{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
									</time>
								</motion.article>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="bg-neutral-50 py-20 dark:bg-neutral-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-8 text-center">
						<h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Categories</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((cat) => (
							<button
								key={cat}
								className="rounded-full border-2 border-neutral-300 bg-white px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:text-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
