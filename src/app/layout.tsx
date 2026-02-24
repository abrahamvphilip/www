import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

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
  description: "Pixel-perfect implementation from locked Figma MCP design source.",
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="visually-hidden-focusable focus-ring left-4 top-4 z-50 rounded-[4px] bg-bunker-800 px-3 py-2 text-alabaster-25"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
