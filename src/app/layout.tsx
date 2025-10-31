import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "bogoforg — Idea to Reality for SMBs",
		template: "%s | bogoforg",
	},
	description:
		"We help small and medium businesses turn ideas into reality: product strategy, web/mobile/software development, SEO, marketing, and AI services.",
	metadataBase: new URL("https://bogoforg.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" data-scroll-behavior="smooth">
			<body className={`${inter.variable} ${poppins.variable} antialiased bg-white text-neutral-900`}>
				<OrganizationSchema />
				<Navbar />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	);
}
