import React from "react";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
	return <div className={`mx-auto max-w-7xl px-6 ${className}`.trim()}>{children}</div>;
}

export default Container;


