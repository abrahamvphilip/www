"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";

import { homeNav } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { BrandMark } from "@/components/ui/brandMark";
import { ButtonChip } from "@/components/ui/buttonChip";

function MenuIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.25 4.5H15.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M2.25 9H15.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M2.25 13.5H15.75"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.5 4.5L13.5 13.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M13.5 4.5L4.5 13.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function Navbar() {
	const nav = homeNav;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<header
			data-section-id="KKTuv"
			className="sticky top-0 z-50 w-full bg-bunker-950"
		>
			<Container>
				<div className="flex items-center justify-between gap-6 py-4 desktop:gap-0">
					<div className="w-auto shrink-0 desktop:w-[400px]">
						<BrandMark inverse className="h-6" />
					</div>

					<nav className="hidden items-center justify-center gap-[44px] desktop:flex">
						{nav.left.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="focus-ring inline-flex items-center gap-1.5 rounded-[2px] font-sans text-sm font-medium leading-[1.4285714286] text-alabaster-25 transition-colors hover:text-eucalyptus-150 focus-visible:outline-none"
							>
								<span>{item.label}</span>
								{item.label === "Resources" || item.label === "Company" ? (
									<span
										aria-hidden="true"
										className="text-xxs text-alabaster-25"
									>
										˅
									</span>
								) : null}
							</Link>
						))}
					</nav>

					<div className="flex w-auto shrink-0 items-center gap-3 justify-end desktop:w-[400px]">
						<ButtonChip
							href="/launch"
							label={nav.cta}
							variant="light"
							size="md"
							className="w-[200px] max-tablet:w-auto max-tablet:px-4"
						/>
						<button
							type="button"
							onClick={toggleMenu}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] text-alabaster-25 transition-colors hover:bg-alabaster-25/8 desktop:hidden"
						>
							{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
			</Container>

			{/* Apple-style full-screen mobile menu overlay */}
			<div
				className={`fixed inset-0 top-[72px] z-40 desktop:hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
					isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
				}`}
			>
				<div className="absolute inset-0 bg-bunker-950/98 backdrop-blur-xl" />

				<nav className="relative flex h-full flex-col px-10 pt-12 max-tablet:px-6">
					<div className="flex flex-col gap-1">
						{nav.left.map((item, index) => (
							<Link
								key={item.label}
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
								className="group flex items-center justify-between border-b border-alabaster-25/6 py-4 transition-all duration-200"
								style={{
									transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
									opacity: isMenuOpen ? 1 : 0,
									transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
								}}
							>
								<span className="font-sans text-[28px] font-light leading-[1.2] tracking-[-0.5px] text-alabaster-25 transition-colors group-hover:text-eucalyptus-150">
									{item.label}
								</span>
								<span className="text-alabaster-25/40 transition-all group-hover:text-eucalyptus-150 group-hover:translate-x-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.5 15L12.5 10L7.5 5"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</Link>
						))}
					</div>

					<div
						className="mt-auto pb-12"
						style={{
							transitionDelay: isMenuOpen
								? `${nav.left.length * 40 + 60}ms`
								: "0ms",
							opacity: isMenuOpen ? 1 : 0,
							transform: isMenuOpen ? "translateY(0)" : "translateY(8px)",
							transition: "opacity 300ms ease, transform 300ms ease",
						}}
					>
						<ButtonChip
							href="/launch"
							label={nav.cta}
							variant="accent"
							size="md"
							className="w-full"
						/>
					</div>
				</nav>
			</div>
		</header>
	);
}
