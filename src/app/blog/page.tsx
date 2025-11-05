"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Search, Clock, User, Calendar } from "lucide-react";
import { useState } from "react";

const categories = ["All", "AI & Automation", "Web Development", "Product Strategy", "Design", "Engineering", "Marketing"];

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredPosts = blogPosts.filter((post) => {
		const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
		const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		return categoryMatch && searchMatch;
	});

	const featuredPost = blogPosts[0];

	return (
		<main>
		{/* Hero */}
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600"
					alt="Blog & insights"
					fill
					className="object-cover opacity-20"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
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

			{/* Featured Article */}
			{featuredPost && (
				<section className="py-20">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3, margin: "-50px" }}
							transition={{ duration: 0.6 }}
							className="mb-6"
						>
							<span className="rounded-full border-2 border-primary px-4 py-1 text-sm font-medium text-primary">
								Featured Article
							</span>
						</motion.div>
						<Link href={`/blog/${featuredPost.slug}`}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3, margin: "-50px" }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="group relative overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
							>
								<div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
									<div className="relative h-64 overflow-hidden lg:h-auto group/image">
										<ImageReveal
											src={featuredPost.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
											alt={featuredPost.title}
											fill
											sizes="(max-width: 1024px) 100vw, 50vw"
											className="object-cover transition-transform duration-700 group-hover/image:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent" />
										<div className="absolute bottom-6 left-6 right-6">
											<span className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 text-sm font-semibold text-white mb-3">
												{featuredPost.category}
											</span>
										</div>
									</div>
									<div className="flex flex-col justify-center p-8 lg:p-12">
										<div className="mb-4 text-sm font-medium text-primary">{featuredPost.category}</div>
										<h2 className="mb-4 text-3xl font-bold text-neutral-900 group-hover:text-primary transition-colors dark:text-white sm:text-4xl">
											{featuredPost.title}
										</h2>
										<p className="mb-6 text-lg text-neutral-900 dark:text-neutral-200">
											{featuredPost.excerpt}
										</p>
										<div className="flex flex-wrap items-center gap-4 text-sm text-neutral-800 dark:text-neutral-300">
											<div className="flex items-center gap-2">
												<User className="h-4 w-4" />
												<span>{featuredPost.author}</span>
											</div>
											<div className="flex items-center gap-2">
												<Calendar className="h-4 w-4" />
												<time>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4" />
												<span>{Math.ceil(featuredPost.content.split(' ').length / 200)} min read</span>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</Link>
					</div>
				</section>
			)}

			{/* Search & Filters */}
			<section className="bg-white py-8 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div className="relative flex-1 max-w-md">
							<Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-600 dark:text-neutral-400" />
							<input
								type="text"
								placeholder="Search articles..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 pl-12 outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-950 dark:text-white"
							/>
						</div>
						<div className="flex flex-wrap gap-3">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
										selectedCategory === category
											? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
											: "border-2 border-neutral-300 bg-white text-neutral-900 hover:border-primary hover:text-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<AnimatePresence mode="wait">
						{filteredPosts.length > 0 ? (
							<motion.div
								key={selectedCategory + searchQuery}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
							>
								{filteredPosts.map((post, index) => (
									<Link key={post.slug} href={`/blog/${post.slug}`}>
										<motion.article
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.3, margin: "-50px" }}
											transition={{ duration: 0.6, delay: index * 0.1 }}
											className="group h-full rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
										>
											<div className="relative h-56 overflow-hidden">
												<ImageReveal
													src={post.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
													alt={post.title}
													fill
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													className="object-cover transition-transform duration-700 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
												<div className="absolute top-4 left-4">
													<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm border border-white/30">
														{post.category}
													</span>
												</div>
												<div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
													<h3 className="text-lg font-bold text-white drop-shadow-lg line-clamp-2">
														{post.title}
													</h3>
												</div>
											</div>
											<div className="p-6">
												<h3 className="mb-2 text-xl font-semibold text-neutral-900 group-hover:text-primary transition-colors dark:text-white">
													{post.title}
												</h3>
												<p className="mb-4 text-sm text-neutral-900 dark:text-neutral-200 line-clamp-2">
													{post.excerpt}
												</p>
												<div className="flex items-center gap-4 text-xs text-neutral-700 dark:text-neutral-400">
													<span>{post.author}</span>
													<span>•</span>
													<time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
												</div>
											</div>
										</motion.article>
									</Link>
								))}
							</motion.div>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="rounded-xl border-2 border-neutral-200 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-950"
							>
								<p className="text-neutral-900 dark:text-neutral-200">No articles found matching your criteria.</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</section>
		</main>
	);
}
