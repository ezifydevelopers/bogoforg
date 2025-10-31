import React from "react";

type HeadingProps = {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
	gradient?: boolean;
};

const levelToClasses: Record<number, string> = {
	1: "text-4xl sm:text-5xl font-bold tracking-tight",
	2: "text-3xl sm:text-4xl font-semibold tracking-tight",
	3: "text-2xl sm:text-3xl font-semibold",
	4: "text-xl sm:text-2xl font-semibold",
	5: "text-lg font-semibold",
	6: "text-base font-semibold",
};

export function Heading({ level = 2, children, className = "", gradient }: HeadingProps) {
	const Tag = (`h${level}` as string) as React.ElementType;
	const gradientClass = gradient || level === 1 ? "bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400" : "";
	return <Tag className={`${levelToClasses[level]} ${gradientClass} ${className}`.trim()}>{children}</Tag>;
}

export default Heading;


