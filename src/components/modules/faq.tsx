"use client";

import { useState } from "react";

import { homeFaq } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";

function FaqChevron({ isOpen }: { isOpen: boolean }) {
	return (
		<svg
			aria-hidden
			className={`h-6 w-6 text-(--bunker-550) transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M18 9L12 15L6 9"
				stroke="currentColor"
				strokeWidth="1.25"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function FaqItem({
	question,
	answer,
	isOpen,
	onToggle,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}) {
	return (
		<div className="flex flex-col gap-3">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full cursor-pointer items-start gap-5 py-3 text-left"
			>
				<p className="min-w-0 flex-1 font-display text-(length:--text-lg-18px) font-light leading-7 tracking-[-0.18px] text-(--bunker-800)">
					{question}
				</p>
				<FaqChevron isOpen={isOpen} />
			</button>
			<div
				className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
			>
				<div className="overflow-hidden">
					<div className="py-3">
						<p className="font-sans text-(length:--text-base-16px) leading-6 text-(--bunker-800)">
							{answer}
						</p>
					</div>
				</div>
			</div>
			<div
				aria-hidden
				className="w-full border-t border-dashed border-(--gallery-150)"
			/>
		</div>
	);
}

function FaqGroup({
	group,
	questions,
	openIndex,
	onToggle,
}: {
	group: string;
	questions: { question: string; answer: string }[];
	openIndex: number | null;
	onToggle: (globalIndex: number) => void;
}) {
	return (
		<div className="flex w-full flex-col gap-3 lg:flex-row">
			<Grid mobile={12} tablet={12} desktop={4} offsetLeftAlt={1}>
				<div className="w-full py-3">
					<h3 className="font-display text-(length:--text-2xl-24px) font-light leading-8 tracking-[-0.24px] text-(--bunker-800)">
						{group}
					</h3>
				</div>
			</Grid>
			<Grid mobile={12} tablet={12} desktop={6} offsetLeftAlt={0}>
				<div className="flex w-full flex-col gap-5">
					{questions.map((item, questionIndex) => (
						<FaqItem
							key={`${group}-${questionIndex}`}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === questionIndex}
							onToggle={() => onToggle(questionIndex)}
						/>
					))}
				</div>
			</Grid>
		</div>
	);
}

export function Faq() {
	const faq = homeFaq;

	const grouped = faq.rows.reduce<
		Map<string, { question: string; answer: string }[]>
	>((acc, row) => {
		const current = acc.get(row.group) ?? [];
		current.push({ question: row.question, answer: row.answer });
		acc.set(row.group, current);
		return acc;
	}, new Map());

	const groupEntries = [...grouped.entries()];

	const [openKey, setOpenKey] = useState<string | null>(null);

	function handleToggle(group: string, questionIndex: number) {
		const key = `${group}-${questionIndex}`;
		setOpenKey((prev) => (prev === key ? null : key));
	}

	return (
		<Segment>
			<Container as="section" className="px-10">
				<div className="mx-auto flex w-full flex-col gap-14">
					<div className="flex w-full">
						<Grid mobile={12} tablet={12} desktop={4} offsetLeftAlt={1}>
							<div className="w-full">
								<div className="h-7">
									<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
										{faq.header.eyebrow}
									</p>
								</div>
								<div className="flex flex-col gap-0 pt-3 font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px]">
									<h2 className="text-(--bunker-800)">{faq.header.title}</h2>
									<p className="text-(--bunker-325)">{faq.header.subtitle}</p>
								</div>
							</div>
						</Grid>
					</div>
					<div className="flex flex-col gap-14 pb-20">
						{groupEntries.map(([group, questions]) => {
							const activeIndex = openKey?.startsWith(`${group}-`)
								? Number(openKey.split("-").pop())
								: null;

							return (
								<FaqGroup
									key={group}
									group={group}
									questions={questions}
									openIndex={activeIndex}
									onToggle={(qIdx) => handleToggle(group, qIdx)}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</Segment>
	);
}
