"use client";

import React, { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight02Icon,
	Tick02Icon,
} from "@hugeicons-pro/core-twotone-rounded";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { Navbar } from "@/components/modules/navbar";
import { Footer } from "@/components/modules/footer";
import { Reveal } from "@/components/ui/reveal/reveal";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";
import { subscribeAction } from "./actions";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function WaitlistPage() {
	const [email, setEmail] = useState("");
	const [state, setState] = useState<SubmitState>("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!email.trim() || state === "submitting") return;

		setState("submitting");

		const result = await subscribeAction(email);

		if (result.success) {
			setState("success");
		} else {
			setState("error");
		}
	}

	const isSuccess = state === "success";

	return (
		<main className="min-h-screen bg-(--alabaster-25) text-(--bunker-800)">
			<Navbar />

			<Segment className="py-0!">
				<Container
					as="section"
					className="flex min-h-[80vh] flex-col items-center justify-center px-10 max-tablet:px-4"
				>
					<RevealGroup className="flex w-full max-w-[640px] flex-col items-center py-20 max-tablet:py-12">
						{/* Eyebrow */}
						<Reveal
							phase="eyebrow"
							className="flex items-center gap-3 pb-8"
						>
							<span aria-hidden className="h-px w-8 bg-(--bunker-150)" />
							<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-325)">
								Early Access
							</p>
							<span aria-hidden className="h-px w-8 bg-(--bunker-150)" />
						</Reveal>

						{/* Heading */}
						<RevealText
							as="h1"
							phase="heading"
							split="words"
							className="text-center font-display text-(length:--text-5xl-48px) font-light leading-[56px] tracking-[-0.48px] text-(--bunker-800) max-tablet:leading-[44px]"
						>
							Join the waitlist
						</RevealText>
						<RevealText
							as="p"
							phase="subheading"
							split="words"
							className="pt-1 text-center font-display text-(length:--text-5xl-48px) font-light leading-[56px] tracking-[-0.48px] text-(--bunker-325) max-tablet:leading-[44px]"
						>
							Be among the first
						</RevealText>

						{/* Body copy */}
						<RevealText
							as="p"
							phase="description"
							split="words"
							className="max-w-[480px] pt-8 text-center font-sans text-(length:--text-base-16px) font-normal leading-6 text-(--gallery-550)"
						>
							{"We're building the next generation of AI infrastructure. Sign up for early access and we'll notify you when we launch."}
						</RevealText>

						{/* Form */}
						<Reveal phase="cta" className="w-full pt-12 max-tablet:pt-8">
							{isSuccess ? (
								<div className="flex flex-col items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--eucalyptus-50) text-(--eucalyptus-325)">
										<HugeiconsIcon icon={Tick02Icon} size={20} />
									</div>
									<div className="text-center">
										<p className="font-sans text-(length:--text-lg-18px) font-medium leading-7 text-(--bunker-800)">
											You&apos;re on the list
										</p>
										<p className="pt-1 font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--gallery-550)">
											We&apos;ll reach out when it&apos;s your turn.
										</p>
									</div>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="flex w-full gap-2 max-tablet:flex-col"
								>
									<div className="relative flex-1">
										<input
											type="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Enter your email"
											className="h-[48px] w-full rounded-[12px] border border-(--bunker-800)/8 bg-(--gallery-25) px-4 font-sans text-(length:--text-base-16px) font-normal leading-6 text-(--bunker-800) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)] outline-none transition-all placeholder:text-(--bunker-225) focus:border-(--bunker-325) focus:shadow-[0px_0px_0px_3px_rgba(24,24,27,0.06)]"
										/>
									</div>
									<button
										type="submit"
										disabled={state === "submitting"}
										className="relative inline-flex h-[48px] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-(--bunker-800) bg-(--bunker-800) px-6 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--alabaster-25) shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)] transition-colors hover:bg-(--bunker-675) disabled:opacity-60"
									>
										<span>
											{state === "submitting" ? "Joining..." : "Join Waitlist"}
										</span>
										{state !== "submitting" && (
											<HugeiconsIcon icon={ArrowRight02Icon} size={20} />
										)}
										<span className="pointer-events-none absolute -inset-px rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(255,255,255,0.06),inset_0px_2px_0px_0px_rgba(255,255,255,0.04)]" />
									</button>
								</form>
							)}
							{state === "error" && (
								<p className="pt-2 text-center font-sans text-(length:--text-sm-14px) text-(--persian-red-325)">
									Something went wrong. Please try again.
								</p>
							)}
						</Reveal>
					</RevealGroup>
				</Container>
			</Segment>

			<Footer />
		</main>
	);
}
