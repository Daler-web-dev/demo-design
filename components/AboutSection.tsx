"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function useCountUp(target: number, duration = 1400, start = false) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!start || target === 0) return;
		const t0 = performance.now();
		let raf: number;
		const tick = (now: number) => {
			const p = Math.min((now - t0) / duration, 1);
			setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, duration, start]);
	return value;
}

type StatItem = { numericValue: number; suffix: string; staticValue: string; label: string; accent: string };

function Stat({ item, triggered, delay }: { item: StatItem; triggered: boolean; delay: number }) {
	const count = useCountUp(item.numericValue, 1400, triggered);
	const display = item.numericValue > 0 ? `${count}${item.suffix}` : item.staticValue;
	return (
		<div
			className="flex flex-col items-center text-center"
			style={{
				opacity: triggered ? 1 : 0,
				transform: triggered ? "translateY(0)" : "translateY(16px)",
				transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
			}}
		>
			<span className={`text-4xl sm:text-5xl font-display font-black leading-none mb-2 ${item.accent}`}>
				{display}
			</span>
			<span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
				{item.label}
			</span>
		</div>
	);
}

export default function AboutSection() {
	const { t } = useLanguage();
	const a = t.about;
	const ref = useRef<HTMLDivElement>(null);
	const [triggered, setTriggered] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([e]) => { if (e.isIntersecting) { setTriggered(true); io.disconnect(); } },
			{ threshold: 0.25 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	const stats: StatItem[] = [
		{ numericValue: 2012, suffix: "", staticValue: a.stat1Value, label: a.stat1Label, accent: "text-gold" },
		{ numericValue: 9,    suffix: "", staticValue: a.stat2Value, label: a.stat2Label, accent: "text-indigo-600" },
		{ numericValue: 7000, suffix: "+", staticValue: a.stat3Value, label: a.stat3Label, accent: "text-brand-800" },
		{ numericValue: 0,    suffix: "", staticValue: a.stat4Value, label: a.stat4Label, accent: "text-gold" },
	];

	return (
		<section className="relative bg-brand-50 py-16 md:py-24 overflow-hidden">
			{/* Watermark */}
			<div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
				<span className="text-[18vw] font-display font-black text-brand-100 uppercase tracking-tighter leading-none whitespace-nowrap">
					POLYGLOT
				</span>
			</div>

			<div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Badge + title */}
				<div className="text-center mb-10 md:mb-12">
					<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
						<span className="w-6 h-0.5 bg-gold" />
						{a.badge}
						<span className="w-6 h-0.5 bg-gold" />
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-800 leading-[0.95] tracking-tighter uppercase">
						{a.title}
					</h2>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
					{stats.map((s, i) => <Stat key={i} item={s} triggered={triggered} delay={i * 100} />)}
				</div>

				{/* Divider */}
				<div className="w-16 h-px bg-brand-300 mx-auto mb-8" />

				{/* Mission + CTA */}
				<div className="max-w-2xl mx-auto text-center">
					<p className="text-base text-brand-600 font-medium leading-relaxed mb-7">
						{a.mission}
					</p>
					<Link
						href="/about"
						className="inline-flex items-center gap-2 px-6 py-3 bg-brand-800 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-colors group"
					>
						{a.readMore}
						<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
}
