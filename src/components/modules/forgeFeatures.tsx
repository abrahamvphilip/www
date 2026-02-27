"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
} from "@hugeicons-pro/core-twotone-rounded";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealImage } from "@/components/ui/reveal/revealImage";

import forgeFeature1 from "@/../public/forgeFeatures/1.png";
import forgeFeature2 from "@/../public/forgeFeatures/2.png";
import forgeFeature3 from "@/../public/forgeFeatures/3.png";
import forgeFeature4 from "@/../public/forgeFeatures/4.png";

import type { StaticImageData } from "next/image";

type FeatureCard = {
	title: string;
	description: string;
	image: StaticImageData;
};

const FEATURE_CARDS: FeatureCard[] = [
	{
		title: "Deploy AI infrastructure",
		description:
			"Across bare-metal or Kubernetes with one developer experience and maximize performance across GPU workloads",
		image: forgeFeature1,
	},
	{
		title: "Control costs transparently",
		description:
			"With usage-based pricing, zero hidden fees, and no vendor lock-in across any infrastructure",
		image: forgeFeature2,
	},
	{
		title: "Orchestrate across hybrid cloud",
		description:
			"With unified control plane for private, public, and on-premises deployments",
		image: forgeFeature3,
	},
	{
		title: "Run production workloads",
		description:
			"With automatic scaling, multi-tenancy, and enterprise security (RBAC, audit logging) from day one",
		image: forgeFeature4,
	},
];

/**
 * Progress bar SVG mark component
 * Uses currentColor for fill to allow color control via parent
 */
function ProgressMark() {
	return (
		<svg
			width="14"
			height="26"
			viewBox="0 0 14 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="shrink-0"
		>
			<path
				d="M7.21467 13.168C7.00933 13.6253 6.77133 14.1713 6.50067 14.806C6.23933 15.4407 5.964 16.122 5.67467 16.85C5.39467 17.578 5.10533 18.3247 4.80667 19.09C4.508 19.8553 4.20933 20.6067 3.91067 21.344C3.62133 22.072 3.346 22.7533 3.08467 23.388C2.82333 24.032 2.58533 24.5873 2.37067 25.054C2.22133 25.3527 2.00667 25.544 1.72667 25.628C1.44667 25.7213 1.134 25.684 0.788667 25.516C0.434 25.3573 0.196 25.1427 0.0746667 24.872C-0.0373333 24.6013 -0.0233333 24.3167 0.116667 24.018C0.331333 23.5513 0.588 23.01 0.886667 22.394C1.19467 21.778 1.526 21.12 1.88067 20.42C2.24467 19.7107 2.61333 18.9967 2.98667 18.278C3.36 17.55 3.724 16.836 4.07867 16.136C4.43333 15.4267 4.76 14.7687 5.05867 14.162C5.36667 13.546 5.628 13.0047 5.84267 12.538C6.05733 12.0713 6.29533 11.5207 6.55667 10.886C6.818 10.242 7.09333 9.556 7.38267 8.828C7.672 8.09067 7.966 7.33933 8.26467 6.574C8.57267 5.80867 8.87133 5.062 9.16067 4.334C9.45 3.59667 9.72533 2.91067 9.98667 2.276C10.2573 1.632 10.4953 1.07667 10.7007 0.61C10.85 0.320666 11.0647 0.134 11.3447 0.0500001C11.6247 -0.0433331 11.9373 -0.00600028 12.2827 0.161999C12.6373 0.320666 12.8707 0.535333 12.9827 0.805999C13.104 1.07667 13.0947 1.36133 12.9547 1.66C12.74 2.12667 12.4787 2.67267 12.1707 3.298C11.872 3.92333 11.5407 4.586 11.1767 5.286C10.822 5.986 10.458 6.7 10.0847 7.428C9.71133 8.156 9.34267 8.87467 8.97867 9.584C8.624 10.284 8.29267 10.942 7.98467 11.558C7.686 12.1647 7.42933 12.7013 7.21467 13.168Z"
				fill="currentColor"
			/>
		</svg>
	);
}

/** SVG dimensions for layout calculations */
const PROGRESS_MARK_WIDTH = 14;
const PROGRESS_MARK_HEIGHT = 26;

/**
 * SlashProgressIndicator
 * Dynamic progress indicator using custom SVG marks.
 */
function SlashProgressIndicator({ progress }: { progress: number }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [markCount, setMarkCount] = useState(0);

	const calculateMarkCount = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;

		const containerWidth = container.clientWidth;
		const markGap = 4;
		const count = Math.max(
			1,
			Math.floor(containerWidth / (PROGRESS_MARK_WIDTH + markGap)),
		);
		setMarkCount(count);
	}, []);

	useEffect(() => {
		calculateMarkCount();

		const container = containerRef.current;
		if (!container) return;

		const resizeObserver = new ResizeObserver(calculateMarkCount);
		resizeObserver.observe(container);

		return () => resizeObserver.disconnect();
	}, [calculateMarkCount]);

	const markIndices = useMemo(
		() => Array.from({ length: markCount }, (_, i) => i),
		[markCount],
	);

	const clampedProgress = Math.max(0, Math.min(1, progress));

	return (
		<div
			ref={containerRef}
			className="relative w-full select-none overflow-hidden"
			style={{ height: `${PROGRESS_MARK_HEIGHT}px` }}
		>
			{/* Background marks (light grey) */}
			<div
				aria-hidden
				className="absolute inset-0 flex items-center justify-between text-(--gallery-225)"
			>
				{markIndices.map((i) => (
					<ProgressMark key={i} />
				))}
			</div>

			{/* Progress overlay (black) */}
			<div
				aria-hidden
				className="absolute inset-0 flex items-center justify-between text-(--bunker-800) transition-[clip-path] duration-500 ease-out"
				style={{
					clipPath: `inset(0 ${(1 - clampedProgress) * 100}% 0 0)`,
				}}
			>
				{markIndices.map((i) => (
					<ProgressMark key={i} />
				))}
			</div>
		</div>
	);
}

export function ForgeFeatures() {
	const railMaskRef = useRef<HTMLDivElement | null>(null);
	const railRef = useRef<HTMLDivElement | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);

	// Drag state
	const isDraggingRef = useRef(false);
	const dragStartXRef = useRef(0);
	const [dragOffset, setDragOffset] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	// Calculate dimensions on mount and resize
	useEffect(() => {
		const railMask = railMaskRef.current;
		const rail = railRef.current;

		if (!railMask || !rail) return;

		const updateDimensions = () => {
			const firstCard = rail.children[0] as HTMLElement;
			if (firstCard) {
				const style = getComputedStyle(rail);
				const gap = Number.parseFloat(style.gap) || 0;
				setCardWidth(firstCard.offsetWidth + gap);
			}
			setContainerWidth(railMask.clientWidth);
		};

		updateDimensions();

		const resizeObserver = new ResizeObserver(updateDimensions);
		resizeObserver.observe(railMask);
		resizeObserver.observe(rail);

		return () => resizeObserver.disconnect();
	}, []);

	const maxIndex = FEATURE_CARDS.length - 1;
	const maxTranslate = Math.max(0, cardWidth * FEATURE_CARDS.length - containerWidth);
	const translateX = Math.min(currentIndex * cardWidth, maxTranslate);

	const progress = useMemo(() => {
		if (maxTranslate <= 0) return 0;
		return translateX / maxTranslate;
	}, [maxTranslate, translateX]);

	const canMovePrev = currentIndex > 0;
	const canMoveNext = translateX < maxTranslate;

	const movePrev = () => {
		if (!canMovePrev) return;
		setCurrentIndex((prev) => prev - 1);
	};

	const moveNext = () => {
		if (!canMoveNext) return;
		setCurrentIndex((prev) => prev + 1);
	};

	// Drag handlers
	const handleDragStart = (clientX: number) => {
		isDraggingRef.current = true;
		dragStartXRef.current = clientX;
		setIsDragging(true);
	};

	const handleDragMove = (clientX: number) => {
		if (!isDraggingRef.current) return;
		const delta = dragStartXRef.current - clientX;
		setDragOffset(delta);
	};

	const handleDragEnd = () => {
		if (!isDraggingRef.current) return;
		isDraggingRef.current = false;
		setIsDragging(false);

		const threshold = cardWidth / 4;
		if (dragOffset > threshold && canMoveNext) {
			moveNext();
		} else if (dragOffset < -threshold && canMovePrev) {
			movePrev();
		}
		setDragOffset(0);
	};

	const onMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		handleDragStart(e.clientX);
	};

	const onMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
	const onMouseUp = () => handleDragEnd();
	const onMouseLeave = () => {
		if (isDraggingRef.current) handleDragEnd();
	};

	const onTouchStart = (e: React.TouchEvent) => {
		const touch = e.touches[0];
		if (touch) handleDragStart(touch.clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		const touch = e.touches[0];
		if (touch) handleDragMove(touch.clientX);
	};

	const onTouchEnd = () => handleDragEnd();

	const currentTranslate = isDragging
		? Math.max(0, Math.min(maxTranslate, translateX + dragOffset))
		: translateX;

	return (
		<Segment className="pt-20! pb-[120px]! max-tablet:pt-16! max-tablet:pb-16!">
			<Container as="section" className="px-10 max-tablet:px-4">
				{/* Progress indicator row */}
				<div className="mx-auto flex w-full max-w-(--page-width) items-center gap-3">
					<button
						type="button"
						onClick={movePrev}
						disabled={!canMovePrev}
						aria-label="Previous feature"
						className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-transparent text-(--bunker-800) transition-opacity disabled:cursor-not-allowed disabled:text-(--gallery-225)"
					>
						<HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
					</button>

					<div className="flex-1">
						<SlashProgressIndicator progress={progress} />
					</div>

					<button
						type="button"
						onClick={moveNext}
						disabled={!canMoveNext}
						aria-label="Next feature"
						className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-transparent text-(--bunker-800) transition-opacity disabled:cursor-not-allowed disabled:text-(--gallery-225)"
					>
						<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
					</button>
				</div>

				{/* Carousel track */}
				<div className="pt-14 max-tablet:pt-10">
					<div
						ref={railMaskRef}
						className="cursor-grab overflow-hidden active:cursor-grabbing"
						onMouseDown={onMouseDown}
						onMouseMove={onMouseMove}
						onMouseUp={onMouseUp}
						onMouseLeave={onMouseLeave}
						onTouchStart={onTouchStart}
						onTouchMove={onTouchMove}
						onTouchEnd={onTouchEnd}
					>
						<div
							ref={railRef}
							className={`flex gap-6 max-tablet:gap-4 ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
							style={{
								transform: `translate3d(${-currentTranslate}px, 0, 0)`,
							}}
						>
							{FEATURE_CARDS.map((feature) => (
								<FeatureCard key={feature.title} feature={feature} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</Segment>
	);
}

export const ForgeGeatures = ForgeFeatures;

function FeatureCard({ feature }: { feature: FeatureCard }) {
	return (
		<div className="flex w-[772px] shrink-0 flex-col gap-6 p-5 tablet:w-[600px] max-tablet:w-[calc(100vw-32px)] max-tablet:gap-4 max-tablet:p-0">
			{/* Title */}
			<p
				className="max-w-[474px] font-display text-(length:--text-2xl-24px) font-light leading-[normal] text-(--bunker-800) max-tablet:max-w-full max-tablet:text-xl"
				style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
			>
				{feature.title}
			</p>

			{/* Feature visual - maintains aspect ratio */}
			<RevealImage
				src={feature.image}
				alt={`aion Forge feature: ${feature.title}`}
				fill
				wrapperClassName="relative w-full border border-solid border-(--alabaster-50)"
				wrapperStyle={{ aspectRatio: "700 / 338" }}
				imageClassName="pointer-events-none object-contain"
				quality={100}
				draggable={false}
				placeholder="blur"
				loading="lazy"
				duration={500}
				startScale={1.5}
			/>

			{/* Description */}
			<p className="font-sans text-(length:--text-base-16px) leading-6 text-(--bunker-800) max-tablet:text-sm max-tablet:leading-5">
				{feature.description}
			</p>
		</div>
	);
}
