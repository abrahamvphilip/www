import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Devtools } from "@/devtools/devtools";
import { LenisProvider } from "@/components/ui/lenisProvider";
import { JsonLd } from "@/components/seo/jsonLd";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-ibm-plex-sans",
	display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-ibm-plex-mono",
	display: "swap",
});

const fraunces = Fraunces({
	subsets: ["latin"],
	weight: ["300", "400", "600"],
	variable: "--font-fraunces",
	display: "swap",
});

const siteUrl = "https://aion.ai";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "aion | AI Infrastructure Research Lab - Enterprise GPU Cloud",
		template: "%s | aion",
	},
	description:
		"Deploy AI at scale with 20,000+ GPUs and 99.99% uptime. GPU instances in <20 min, transparent pricing, no vendor lock-in. Enterprise GPU cloud.",
	keywords: [
		// Primary keywords
		"AI infrastructure",
		"GPU cloud",
		"enterprise GPU cloud",
		"AI cloud platform",
		"GPU compute platform",
		"cloud GPU provider",
		// Product keywords
		"aion Forge",
		"aion Nexus",
		"aion Foundry",
		"AI inference platform",
		"LLM inference",
		"model training platform",
		"GPU instances",
		"serverless inference",
		// Technical keywords
		"Kubernetes GPU",
		"bare-metal GPU",
		"NVIDIA GPU cloud",
		"H100 GPU rental",
		"H100 cloud",
		"A100 GPU cloud",
		"A100 rental",
		"multi-GPU training",
		"distributed AI training",
		"GPU cluster",
		"CUDA cloud",
		"tensor core GPU",
		// AI/ML workflow keywords
		"LLM training",
		"model fine-tuning",
		"AI model optimization",
		"model quantization",
		"batch inference",
		"real-time inference",
		"AI agents deployment",
		"RAG infrastructure",
		// Use case keywords
		"AI model deployment",
		"production AI infrastructure",
		"enterprise AI deployment",
		"AI workload orchestration",
		"machine learning infrastructure",
		"MLOps platform",
		"deep learning infrastructure",
		"neural network training",
		// Model type keywords
		"large language model hosting",
		"vision model inference",
		"multimodal AI",
		"generative AI infrastructure",
		"diffusion model hosting",
		"transformer model training",
		// Industry solutions
		"robotics AI infrastructure",
		"autonomous vehicle compute",
		"spatial computing GPU",
		"3D AI rendering",
		"computer vision cloud",
		// Long-tail keywords
		"GPU cloud no vendor lock-in",
		"transparent GPU pricing",
		"on-demand GPU compute",
		"AI infrastructure as a service",
		"managed AI infrastructure",
		"forward-deployed AI engineers",
		"custom AI model training",
		"enterprise AI consulting",
		"hybrid cloud AI",
		"on-premises GPU",
		"private cloud GPU",
		// Competitor alternatives
		"AWS GPU alternative",
		"Azure ML alternative",
		"Google Cloud GPU alternative",
		"Lambda Labs alternative",
		"CoreWeave alternative",
		"RunPod alternative",
		"Paperspace alternative",
		"Vast.ai alternative",
		"decentralized GPU alternative",
		// Industry keywords
		"AI research lab",
		"neocloud provider",
		"AI cloud startup",
		"GPU as a service",
		"compute as a service",
	],
	authors: [{ name: "aion Technologies Inc." }],
	creator: "aion Technologies Inc.",
	publisher: "aion Technologies Inc.",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "aion",
		title: "aion | Enterprise GPU Cloud - 20,000+ GPUs, 99.99% Uptime",
		description:
			"88% of enterprises experiment with AI, only 7% reach production. aion closes the gap with 20,000+ GPUs, <20 min provisioning, transparent hourly pricing, and forward-deployed AI engineers. No vendor lock-in.",
		images: [
			{
				url: "/hero.jpg",
				width: 1200,
				height: 630,
				alt: "aion - The AI Infrastructure Research Lab",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "aion | AI Infrastructure Research Lab",
		description:
			"Deploy AI infrastructure at scale with 20,000+ GPUs and 99.99% uptime. Enterprise-grade GPU cloud with transparent pricing.",
		images: ["/hero.jpg"],
		creator: "@aion",
	},
	alternates: {
		canonical: siteUrl,
	},
	category: "Technology",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isDarkTheme = process.env.NEXT_PUBLIC_THEME === "dark";
	const themeMode = isDarkTheme ? "dark" : "light";

	return (
		<html
			lang="en"
			data-theme={themeMode}
			className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${fraunces.variable} overflow-x-clip`}
		>
			<head>
				<JsonLd />
			</head>
			<body className="font-sans antialiased">
				<LenisProvider>{children}</LenisProvider>
				{process.env.NODE_ENV === "development" ? <Devtools /> : null}
			</body>
		</html>
	);
}
