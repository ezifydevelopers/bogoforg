"use client";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function ServicesPage() {
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
						Our Services
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-white/90 sm:text-xl"
					>
						From idea validation to full-scale builds, explore our comprehensive service areas.
					</motion.p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="bg-white py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<ServiceCard key={service.id} service={service} index={index} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
