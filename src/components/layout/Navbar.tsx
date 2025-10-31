"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { MegaMenu } from "@/components/ui/MegaMenu";

const links: Array<{ href: string; label: string; hasDropdown?: boolean }> = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About", hasDropdown: true },
	{ href: "/services", label: "Services", hasDropdown: true },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/process", label: "Process" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [hoveredMenu, setHoveredMenu] = useState<"services" | "about" | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header 
			className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
				scrolled 
					? "border-neutral-200 bg-white/98 backdrop-blur-md shadow-lg dark:border-neutral-800 dark:bg-neutral-950/98" 
					: "border-transparent bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80"
			}`}
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				<Link href="/" className="text-xl font-bold tracking-tight">
					<span className="gradient-text">bogoforg</span>
				</Link>
				<nav className="hidden items-center gap-8 sm:flex">
					{links.map((l) => {
						const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
						const isServicesOrAbout = l.label === "Services" || l.label === "About";
						
						return (
							<div
								key={l.href}
								className="relative"
								onMouseEnter={() => l.hasDropdown && isServicesOrAbout && setHoveredMenu(isServicesOrAbout ? (l.label === "Services" ? "services" : "about") : null)}
								onMouseLeave={() => setHoveredMenu(null)}
							>
								<Link
									href={l.href}
									className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
										active ? "text-primary" : "text-neutral-700 dark:text-neutral-300"
									}`}
								>
									{l.label}
									{l.hasDropdown && <ChevronDown className="h-4 w-4" />}
								</Link>
								{l.hasDropdown && isServicesOrAbout && (
									<MegaMenu 
										isOpen={hoveredMenu === (l.label === "Services" ? "services" : "about")} 
										type={l.label === "Services" ? "services" : "about"} 
									/>
								)}
							</div>
						);
					})}
				</nav>
				<div className="hidden items-center gap-4 sm:flex">
					<DarkModeToggle />
					<Link
						href="/contact"
						className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(47,47,162,0.5)] hover:animate-[shimmer_3s_ease-in-out_infinite]"
					>
						<span className="relative z-10">Get Quote</span>
					</Link>
				</div>
				<button
					className="sm:hidden"
					aria-label="Toggle menu"
					onClick={() => setOpen(!open)}
				>
					{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="border-t border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950 sm:hidden"
					>
						<div className="flex flex-col gap-3">
							{links.map((l) => {
								const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
								return (
									<Link
										key={l.href}
										href={l.href}
										className={`text-sm font-medium ${
											active ? "text-primary" : "text-neutral-700 dark:text-neutral-300"
										}`}
										onClick={() => setOpen(false)}
									>
										{l.label}
									</Link>
								);
							})}
							<Link
								href="/contact"
								className="mt-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-center text-sm font-semibold text-white"
								onClick={() => setOpen(false)}
							>
								Get Quote
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

export default Navbar;
