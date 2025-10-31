import React from "react";

type SectionProps = {
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "muted" | "contrast";
};

export function Section({ title, subtitle, children, className = "", variant = "default" }: SectionProps) {
	const variantClass =
		variant === "muted"
			? "bg-zinc-50 dark:bg-zinc-950"
			: variant === "contrast"
			? "bg-linear-to-b from-white via-zinc-50 to-white dark:from-black dark:via-zinc-950 dark:to-black"
			: "";
	return (
		<section className={`py-16 sm:py-24 ${variantClass} ${className}`.trim()}>
			<div className="mx-auto max-w-7xl px-6">
				{title ? (
					<div className="mb-10">
						<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
						{subtitle ? (
							<p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">{subtitle}</p>
						) : null}
					</div>
				) : null}
				{children}
			</div>
		</section>
	);
}

export default Section;


