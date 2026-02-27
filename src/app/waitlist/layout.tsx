import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Join the Waitlist - Early Access to Enterprise GPU Cloud",
	description:
		"Get early access to aion's AI infrastructure platform. Deploy 20,000+ enterprise GPUs with 99.99% uptime, provisioning in under 20 minutes, and transparent hourly pricing. Join thousands of AI engineers, researchers, and enterprises on the waitlist.",
	keywords: [
		"GPU cloud waitlist",
		"AI infrastructure early access",
		"enterprise GPU cloud beta",
		"aion waitlist",
		"GPU compute access",
		"AI cloud platform signup",
		"ML infrastructure waitlist",
	],
	openGraph: {
		title: "Join the aion Waitlist - Early Access to 20,000+ Enterprise GPUs",
		description:
			"Be among the first to access aion's AI infrastructure platform. Deploy GPU instances in under 20 minutes with 99.99% uptime and no vendor lock-in.",
		url: "https://aion.ai/waitlist",
		type: "website",
	},
	twitter: {
		title: "Join the aion Waitlist",
		description:
			"Early access to enterprise-grade GPU cloud with 20,000+ GPUs, 99.99% uptime, and transparent pricing. No vendor lock-in.",
	},
	alternates: {
		canonical: "https://aion.ai/waitlist",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function WaitlistLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
