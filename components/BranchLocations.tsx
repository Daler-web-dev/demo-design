"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { BRANCHES } from "@/config/branches";

const AUTO_ADVANCE_MS = 4500;

function YandexPin() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
				fill="#E12222"
			/>
		</svg>
	);
}

export type BranchLocationsProps = {
	badge?: string;
	title: string;
	subtitle: string;
	yandexMapsText?: string;
	lang: "EN" | "RU" | "UZ";
};

export default function BranchLocations({
	badge = "LOCATIONS",
	title,
	subtitle,
	yandexMapsText = "Yandex Maps",
	lang,
}: BranchLocationsProps) {
	const count = BRANCHES.length;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const getDisplayName = (branch: (typeof BRANCHES)[0]) => {
		const map = { EN: branch.nameEn, RU: branch.nameRu, UZ: branch.nameEn };
		return map[lang] ?? branch.nameEn;
	};

	const updateTransform = useCallback(
		(instant = false) => {
			const container = containerRef.current;
			const track = trackRef.current;
			if (!container || !track) return;

			const cards = Array.from(track.children) as HTMLElement[];
			const card = cards[selectedIndex];
			if (!card) return;

			const containerCenter = container.clientWidth / 2;
			const cardCenter = card.offsetLeft + card.clientWidth / 2;
			const tx = containerCenter - cardCenter;

			if (instant) {
				track.style.transition = "none";
				track.style.transform = `translateX(${tx}px)`;
				track.offsetHeight; // force reflow
				track.style.transition = "";
			} else {
				track.style.transform = `translateX(${tx}px)`;
			}
		},
		[selectedIndex],
	);

	useEffect(() => {
		const raf = requestAnimationFrame(() => updateTransform());
		const onResize = () =>
			requestAnimationFrame(() => updateTransform(true));
		window.addEventListener("resize", onResize);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
		};
	}, [updateTransform]);

	const startTimer = useCallback(() => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setSelectedIndex((prev) => (prev + 1) % count);
		}, AUTO_ADVANCE_MS);
	}, [count]);

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [startTimer]);

	const handleSelect = (i: number) => {
		setSelectedIndex(i);
		startTimer();
	};

	const handlePrev = () => handleSelect((selectedIndex - 1 + count) % count);
	const handleNext = () => handleSelect((selectedIndex + 1) % count);

	return (
		<section
			className="py-24 md:py-32 bg-white overflow-hidden"
			id="locations"
		>
			{/* Header */}
			<div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
				<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6">
					<span className="w-8 h-0.5 bg-gold" />
					{badge}
					<span className="w-8 h-0.5 bg-gold" />
				</div>
				<h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-brand-900 leading-[0.95] tracking-tighter uppercase mb-6 break-words">
					{title}
				</h2>
				<p className="text-lg text-brand-500 font-medium max-w-2xl mx-auto">
					{subtitle}
				</p>
			</div>

			{/* Carousel */}
			<div ref={containerRef} className="relative w-full">
				{/* Arrow buttons */}
				<button
					onClick={handlePrev}
					aria-label="Previous branch"
					className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-100 hover:bg-brand-200 border border-brand-200 flex items-center justify-center transition-colors"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1b2666"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>

				<button
					onClick={handleNext}
					aria-label="Next branch"
					className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-100 hover:bg-brand-200 border border-brand-200 flex items-center justify-center transition-colors"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#1b2666"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				{/* Track */}
				<div
					ref={trackRef}
					className="relative flex gap-4 md:gap-5 transition-transform duration-500 ease-out will-change-transform"
				>
					{BRANCHES.map((branch, i) => {
						const isSelected = selectedIndex === i;
						const name = getDisplayName(branch);
						const mapUrl =
							branch.yandexMapUrl ??
							`https://yandex.uz/maps/?text=${encodeURIComponent(name + " Samarkand")}`;

						return (
							<div
								key={branch.id}
								onClick={() => handleSelect(i)}
								className={`flex-none w-[80vw] sm:w-[68vw] md:w-[56vw] lg:w-[52vw] max-w-[680px] aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 ${
									isSelected
										? "opacity-100 scale-100"
										: "opacity-40 scale-[0.97]"
								}`}
							>
								<div className="relative w-full h-full">
									<img
										src={branch.image}
										alt={name}
										className="absolute inset-0 w-full h-full object-cover"
										draggable={false}
									/>
									{/* Gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

									{/* Card content */}
									<div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
										<h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight mb-1">
											{name}
										</h3>
										<p className="text-sm text-white/65 font-medium mb-4 md:mb-5 leading-snug">
											{branch.address}
										</p>
										<a
											href={mapUrl}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className={`inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl text-sm font-bold text-brand-900 transition-all duration-200 ${
												isSelected
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-2"
											}`}
										>
											<YandexPin />
											{yandexMapsText}
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Navigation dots */}
			<div className="flex justify-center gap-2 mt-8 md:mt-10">
				{BRANCHES.map((_, i) => (
					<button
						key={i}
						onClick={() => handleSelect(i)}
						aria-label={`Branch ${i + 1}`}
						className={`transition-all duration-300 rounded-full h-2 ${
							selectedIndex === i
								? "bg-gold w-6"
								: "bg-brand-200 hover:bg-brand-300 w-2"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
