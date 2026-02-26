import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Devtools } from "@/devtools/devtools";

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

export const metadata: Metadata = {
	title: "aion | AI Infrastructure Research Lab",
	description:
		"Pixel-perfect implementation from locked Figma MCP design source.",
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
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "development" ? <Devtools /> : null}
			</body>
		</html>
	);
}
