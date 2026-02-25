import { homeCta } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";

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

export function PageCta() {
	const cta = homeCta;

	return (
		<section
			data-section-id="866:17275"
			className="relative min-h-[80vh] overflow-hidden bg-(--gallery-50) max-tablet:min-h-[60vh]"
		>
			<div className="absolute inset-0">
				{/*
				<Image
					src={ctaBgImage}
					alt=""
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/50" />
				*/}
			</div>

			<Segment className="p-0!">
				<Container
					as="div"
					className="relative flex min-h-[80vh] items-center justify-center px-10! pb-[40px] max-tablet:min-h-[60vh] max-tablet:px-4!"
				>
					<div className="flex w-full max-w-[854px] flex-col items-center py-16 max-tablet:py-10">
						<div className="flex w-full flex-col items-center gap-5">
							<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-325)">
								{cta.header.eyebrow}
							</p>

							<p className="whitespace-pre-line text-center font-sans text-(length:--text-4xl-36px) font-normal leading-10 tracking-[-0.36px] text-(--alabaster-800) max-tablet:leading-8">
								{cta.header.title}
							</p>

							<div className="flex w-full flex-col items-center gap-5">
								<div className="w-full max-w-[560px] max-tablet:max-w-full">
									<p className="text-center font-sans text-(length:--text-base-16px) font-normal leading-6 text-(--alabaster-800)">
										{cta.body}
									</p>
								</div>

								<div className="flex w-full max-w-[566px] gap-2 pt-3 max-tablet:max-w-full max-tablet:flex-col">
									<a
										href="/console"
										className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-(--royal-blue-550) bg-(--royal-blue-550) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-white shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)]"
									>
										<span>{cta.buttons[0]}</span>
										<ArrowRightIcon />
										<span className="pointer-events-none absolute -inset-px rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(255,255,255,0.16),inset_0px_2px_0px_0px_rgba(255,255,255,0.1)]" />
									</a>

									<a
										href="/contact"
										className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[12px] border border-(--gallery-800)/8 bg-(--gallery-25) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--gallery-800) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)]"
									>
										<span>{cta.buttons[1]}</span>
										<span className="pointer-events-none absolute -inset-px rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(255,255,255,0.02),inset_0px_-4px_8px_0px_rgba(0,0,0,0.02),inset_0px_2px_0px_0px_rgba(255,255,255,0.02)]" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Segment>
		</section>
	);
}
