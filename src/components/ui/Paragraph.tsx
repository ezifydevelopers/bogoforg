import React from "react";

type ParagraphProps = {
	children: React.ReactNode;
	className?: string;
};

export function Paragraph({ children, className = "" }: ParagraphProps) {
	return (
		<p className={`text-base leading-7 text-zinc-700 dark:text-zinc-300 ${className}`.trim()}>
			{children}
		</p>
	);
}

export default Paragraph;


