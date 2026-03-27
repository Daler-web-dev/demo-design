"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { MapPin, MapPinned } from "lucide-react";
import { BRANCHES } from "@/config/branches";

const AUTO_ADVANCE_MS = 4500;
const CROSSFADE_MS = 500;

export type BranchLocationsProps = {
	badge?: string;
	title: string;
	subtitle: string;
	/** Текст кнопки перехода на карту, например "Составить маршрут" */
	mapRouteText: string;
	/** Язык для отображения названий: nameEn / nameRu */
	lang: "EN" | "RU" | "UZ";
	/** URL карты по умолчанию, если у филиала нет своего mapUrl */
	defaultMapUrl?: string;
};

export default function BranchLocations({
	badge = "LOCATIONS",
	title,
	subtitle,
	mapRouteText,
	lang,
	defaultMapUrl = "https://www.google.com/maps",
}: BranchLocationsProps) {
	const count = BRANCHES.length;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [fromIndex, setFromIndex] = useState<number | null>(null);
	const [transitionActive, setTransitionActive] = useState(false);
	const [frontImageLoaded, setFrontImageLoaded] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const selectedBranch = BRANCHES[selectedIndex];
	const nameByLang = {
		EN: selectedBranch.nameEn,
		RU: selectedBranch.nameRu,
		UZ: selectedBranch.nameEn,
	};
	const displayName = nameByLang[lang] ?? selectedBranch.nameEn;
	const mapUrl = selectedBranch.mapUrl ?? defaultMapUrl;

	const advance = useCallback(() => {
		if (count <= 1) return;
		setFrontImageLoaded(false);
		setSelectedIndex((prev) => {
			const next = (prev + 1) % count;
			setFromIndex(prev);
			return next;
		});
	}, [count]);

	// Запуск анимации только после загрузки нового изображения — тогда плавное появление без мигания
	useEffect(() => {
		if (fromIndex === null) return;
		if (!frontImageLoaded) return;
		const raf = requestAnimationFrame(() => setTransitionActive(true));
		timeoutRef.current = setTimeout(() => {
			setFromIndex(null);
			setTransitionActive(false);
			timeoutRef.current = null;
		}, CROSSFADE_MS);
		return () => {
			cancelAnimationFrame(raf);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [fromIndex, frontImageLoaded]);

	// Таймер автосмены
	useEffect(() => {
		if (count <= 1) return;
		const t = setInterval(advance, AUTO_ADVANCE_MS);
		return () => clearInterval(t);
	}, [advance, count]);

	const handleSelect = (i: number) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setFromIndex(null);
		setTransitionActive(false);
		setFrontImageLoaded(true);
		setSelectedIndex(i);
	};

	const isTransitioning = fromIndex !== null;
	// Два слоя всегда в DOM — в конце перехода не размонтируем, только меняем opacity/src, без мигания
	const backSrc = isTransitioning
		? BRANCHES[fromIndex!].image
		: BRANCHES[selectedIndex].image;
	const backOpacity = isTransitioning ? (transitionActive ? 0 : 1) : 1;
	const frontOpacity = isTransitioning ? (transitionActive ? 1 : 0) : 0;
	const imgClass =
		"absolute inset-0 w-full h-full object-cover transition-opacity duration-[500ms] ease-in-out";

	return (
		<section className="min-h-fit py-32 px-6 bg-white" id="locations">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<div>
						<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6">
							<span className="w-8 h-0.5 bg-gold" />
							{badge}
						</div>
						<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-brand-800 leading-[0.95] mb-10 break-words max-w-full">
							{title}
						</h2>
						<p className="text-xl text-indigo-600/80 mb-12">
							{subtitle}
						</p>
						<div className="grid grid-cols-2 gap-4">
							{BRANCHES.map((branch, i) => {
								const nameByLang = {
									EN: branch.nameEn,
									RU: branch.nameRu,
									UZ: branch.nameEn,
								};
								const name = nameByLang[lang] ?? branch.nameEn;
								const isSelected = selectedIndex === i;
								return (
									<button
										key={branch.id}
										type="button"
										onClick={() => handleSelect(i)}
										className={`flex items-center space-x-3 p-4 rounded-2xl border font-bold text-left transition-colors cursor-pointer ${
											isSelected
												? "bg-brand-100 border-indigo-500 text-indigo-700 ring-2 ring-indigo-400/50"
												: "bg-brand-50 border-brand-200/50 text-indigo-700 hover:bg-brand-100"
										}`}
									>
										<MapPin className="w-5 h-5 shrink-0 text-indigo-600" />
										<span>{name}</span>
									</button>
								);
							})}
						</div>
					</div>
					<div className="relative aspect-[4/3] min-h-[280px]">
						<div className="absolute inset-0 bg-indigo-600 rounded-[4rem] rotate-3 -z-10 opacity-10" />
						<div className="absolute inset-0 rounded-[3.5rem] overflow-hidden shadow-2xl">
							<img
								src={backSrc}
								alt={displayName}
								className={imgClass}
								style={{ opacity: backOpacity }}
							/>
							<img
								src={BRANCHES[selectedIndex].image}
								alt={displayName}
								className={imgClass}
								style={{ opacity: frontOpacity }}
								onLoad={() =>
									isTransitioning && setFrontImageLoaded(true)
								}
							/>
						</div>
						<Link
							href={mapUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 hover:bg-brand-50 hover:border-indigo-200 transition-colors group"
						>
							<div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
								<MapPinned className="text-white w-7 h-7" />
							</div>
							<div>
								<div className="text-lg font-black text-brand-800 group-hover:text-indigo-700">
									{mapRouteText}
								</div>
								<div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
									{displayName}
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
