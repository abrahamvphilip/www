import Link from "next/link";

import { homeFooter } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { BrandMark } from "@/components/ui/brandMark";
import { FooterArcBackdrop } from "@/components/ui/footerArcBackdrop";

function ArrowRightIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.43 5.93L20.5 12L14.43 18.07"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 12H20.33"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function InstagramIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
				fill="currentColor"
			/>
		</svg>
	);
}

function TwitterIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
				fill="currentColor"
			/>
		</svg>
	);
}

function GithubIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
				fill="currentColor"
			/>
		</svg>
	);
}

function FooterLinkGroup({
	group,
}: {
	group: (typeof homeFooter.groups)[number];
}) {
	return (
		<div className="flex flex-1 flex-col gap-3">
			<div className="pb-3">
				<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-225)">
					{group.title}
				</p>
			</div>
			{group.links.map((link) => (
				<Link
					key={`${group.title}-${link}`}
					href="/legal"
					className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-550)"
				>
					{link}
				</Link>
			))}
		</div>
	);
}

const POLICY_ROUTES: Record<string, string> = {
	"Privacy Policy": "/privacy",
	"Terms of Service": "/tos",
	"Cookie Policy": "/cookie",
};

function policyLinkHref(label: string): string {
	return POLICY_ROUTES[label] ?? "#";
}

export function Footer() {
	const footer = homeFooter;

	return (
		<footer className="relative overflow-hidden">
			<Segment className="pb-0!">
				<Container
					as="div"
					className="relative z-10 flex flex-col gap-14 px-10! pt-[144px]! max-tablet:gap-10 max-tablet:px-4! max-tablet:pt-16!"
				>
					{/* Top row */}
					<div className="flex items-start justify-between max-tablet:flex-col max-tablet:gap-10">
						{/* Left column */}
						<div className="flex w-full max-w-[421px] flex-col gap-10 max-tablet:max-w-full">
							<p className="font-sans text-(length:--text-3xl-30px) font-normal leading-9 tracking-[-0.3px] text-(--bunker-800)">
								{footer.title}
							</p>

							<Link
								href="/console"
								className="inline-flex items-center gap-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
							>
								<span>{footer.cta}</span>
								<ArrowRightIcon />
							</Link>

							<div className="flex items-center gap-10 pt-5 text-(--bunker-550)">
								<Link href="#" aria-label="Instagram">
									<InstagramIcon />
								</Link>
								<Link href="#" aria-label="Twitter">
									<TwitterIcon />
								</Link>
								<Link href="#" aria-label="GitHub">
									<GithubIcon />
								</Link>
							</div>
						</div>

						{/* Right column */}
						<div className="flex w-full max-w-[421px] justify-end gap-5 max-tablet:max-w-full max-tablet:justify-start">
							{footer.groups.slice(0, 2).map((group) => (
								<FooterLinkGroup key={group.title} group={group} />
							))}
						</div>
					</div>

					{/* Compliance badges */}
					<div className="flex flex-col items-center overflow-hidden rounded-[12px] px-5">
						<div className="flex items-center gap-[54px] overflow-hidden py-[25px] max-tablet:gap-6">
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								{/*
								<Image src={gdprBadge} alt="GDPR" fill className="object-cover rounded-[12px]" />
								*/}
							</div>
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								{/*
								<Image src={soc2Badge} alt="SOC 2" fill className="object-cover rounded-[12px]" />
								*/}
							</div>
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								{/*
								<Image src={hipaaBadge} alt="HIPAA" fill className="object-cover rounded-[12px]" />
								*/}
							</div>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="flex items-center justify-between border-t border-(--bunker-800)/14 pt-8 max-tablet:flex-col max-tablet:gap-6 max-tablet:items-start">
						<p className="w-full max-w-[400px] font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325) max-tablet:max-w-full">
							{footer.legal}
						</p>

						<BrandMark className="justify-center max-tablet:justify-start" />

						<div className="flex w-full max-w-[400px] items-center justify-end gap-10 max-tablet:max-w-full max-tablet:justify-start max-tablet:flex-wrap max-tablet:gap-6">
							{footer.policyLinks.map((link) => (
								<Link
									key={link}
									href={policyLinkHref(link)}
									className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)"
								>
									{link}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</Segment>

			{/* Arc backdrop */}
			<div className="pointer-events-none relative z-0 w-full">
				<FooterArcBackdrop className="h-full w-full" />
			</div>
		</footer>
	);
}
