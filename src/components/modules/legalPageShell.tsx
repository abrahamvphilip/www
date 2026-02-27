import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { Navbar } from "@/components/modules/navbar";
import { Footer } from "@/components/modules/footer";

interface LegalPageShellProps {
	title: string;
	effectiveDate: string;
	children: ReactNode;
}

export function LegalPageShell({
	title,
	effectiveDate,
	children,
}: LegalPageShellProps) {
	return (
		<main className="min-h-screen bg-(--alabaster-25) text-(--bunker-800)">
			<Navbar />

			<Segment className="py-0!">
				<Container as="article" className="pb-24 pt-20 max-tablet:pt-12">
					<div className="flex justify-center">
						<Grid mobile={12} tablet={12} desktop={8}>
							<header className="pb-12">
								<h1 className="font-display text-(length:--text-5xl-48px) font-light leading-[1.15] tracking-[-0.48px] text-(--bunker-800) max-tablet:text-(length:--text-4xl-36px)">
									{title}
								</h1>
								<p className="pt-4 font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)">
									{effectiveDate}
								</p>
							</header>

							<div className="legal-content flex flex-col gap-10">
								{children}
							</div>
						</Grid>
					</div>
				</Container>
			</Segment>

			<Footer />
		</main>
	);
}

export function LegalSection({
	id,
	title,
	children,
}: {
	id?: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<section id={id} className="flex flex-col gap-4">
			<h2 className="font-display text-(length:--text-2xl-24px) font-light leading-8 tracking-[-0.24px] text-(--bunker-800)">
				{title}
			</h2>
			<div className="flex flex-col gap-4 font-sans text-(length:--text-base-16px) font-normal leading-7 text-(--bunker-550)">
				{children}
			</div>
		</section>
	);
}

export function LegalSubSection({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<div className="flex flex-col gap-3 pt-2">
			<h3 className="font-sans text-(length:--text-lg-18px) font-medium leading-7 text-(--bunker-675)">
				{title}
			</h3>
			<div className="flex flex-col gap-3 font-sans text-(length:--text-base-16px) font-normal leading-7 text-(--bunker-550)">
				{children}
			</div>
		</div>
	);
}

export function LegalList({ items }: { items: string[] }) {
	return (
		<ul className="flex flex-col gap-1.5 pl-5">
			{items.map((item) => (
				<li
					key={item}
					className="list-disc font-sans text-(length:--text-base-16px) font-normal leading-7 text-(--bunker-550)"
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export function LegalTable({
	headers,
	rows,
}: {
	headers: string[];
	rows: string[][];
}) {
	return (
		<div className="overflow-x-auto rounded-[12px] border border-(--bunker-800)/8">
			<table className="w-full text-left font-sans text-(length:--text-sm-14px) font-normal leading-5">
				<thead>
					<tr className="border-b border-(--bunker-800)/8 bg-(--gallery-25)">
						{headers.map((h) => (
							<th
								key={h}
								className="px-4 py-3 font-medium text-(--bunker-675)"
							>
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr
							key={i}
							className="border-b border-(--bunker-800)/5 last:border-b-0"
						>
							{row.map((cell, j) => (
								<td key={j} className="px-4 py-3 text-(--bunker-550)">
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export function LegalLink({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	const isExternal = href.startsWith("http") || href.startsWith("mailto:");
	const linkClassName =
		"text-(--bunker-800) underline decoration-(--bunker-800)/20 underline-offset-2 transition-colors hover:decoration-(--bunker-800)/60";

	if (isExternal) {
		return (
			<a
				href={href}
				className={linkClassName}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={linkClassName}>
			{children}
		</Link>
	);
}
