"use client";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";

export default function ServicesPage() {
	return (
		<main>
		{/* Hero */}
		<section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-12 sm:py-16 md:py-20">
			<div className="absolute inset-0">
				<ImageReveal
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
					alt="Our services"
					fill
					className="object-cover opacity-20"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
			<div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-4 sm:mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
					>
						Our Services
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
					>
						From idea validation to full-scale builds, explore our comprehensive service areas.
					</motion.p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="bg-white py-12 sm:py-16 md:py-20 dark:bg-[#0B0C10] transition-colors duration-300">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<ServiceCard key={service.id} service={service} index={index} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
