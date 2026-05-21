"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BRANCHES } from "@/config/branches";

function YandexPin() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: false, align: "center" },
		[Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })],
	);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	const getDisplayName = (branch: (typeof BRANCHES)[0]) => {
		const map = { EN: branch.nameEn, RU: branch.nameRu, UZ: branch.nameEn };
		return map[lang] ?? branch.nameEn;
	};

	return (
		<section className="py-24 md:py-32 bg-white overflow-hidden" id="locations">
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
			<div className="relative">
				<div ref={emblaRef} className="overflow-hidden">
					<div className="flex gap-4 md:gap-5">
						{BRANCHES.map((branch) => {
							const name = getDisplayName(branch);
							const mapUrl =
								branch.yandexMapUrl ??
								`https://yandex.uz/maps/?text=${encodeURIComponent(name + " Samarkand")}`;

							return (
								<div
									key={branch.id}
									className="flex-none w-[80vw] sm:w-[68vw] md:w-[56vw] lg:w-[52vw] max-w-[680px] min-h-[260px] aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative"
								>
									<img
										src={branch.image}
										alt={name}
										className="absolute inset-0 w-full h-full object-cover"
										draggable={false}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
											className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl text-sm font-bold text-brand-900 transition-colors duration-200"
										>
											<YandexPin />
											{yandexMapsText}
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Arrow buttons */}
				<button
					onClick={scrollPrev}
					aria-label="Previous branch"
					className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-100 hover:bg-brand-200 border border-brand-200 hidden md:flex items-center justify-center transition-colors"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b2666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>
				<button
					onClick={scrollNext}
					aria-label="Next branch"
					className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-100 hover:bg-brand-200 border border-brand-200 hidden md:flex items-center justify-center transition-colors"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b2666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>
			</div>
		</section>
	);
}
