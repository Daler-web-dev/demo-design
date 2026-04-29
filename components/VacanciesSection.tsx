"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

type Position = { title: string; type: string; requirement: string; desc: string };

const TELEGRAM_URL = "https://t.me/polyglot_careers";

export default function VacanciesSection() {
	const { t } = useLanguage();
	const v = t.vacancies;
	const positions: Position[] = v.positions ?? [];

	return (
		<section className="bg-white py-20 md:py-28" id="vacancies">
			<div className="max-w-6xl mx-auto px-6">
				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16 pb-10 border-b border-brand-100">
					<div>
						<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
							<span className="w-6 h-0.5 bg-gold" />
							{v.badge}
						</div>
						<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-brand-900 leading-[0.95] tracking-tighter uppercase">
							{v.title}
						</h2>
					</div>
					<p className="text-brand-500 font-medium max-w-xs text-sm leading-relaxed md:pb-1">
						{v.subtitle}
					</p>
				</div>

				{/* Positions list */}
				<div className="divide-y divide-brand-100">
					{positions.map((pos, i) => (
						<div
							key={i}
							className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[3rem_1fr_auto] gap-4 md:gap-8 items-start hover:bg-brand-50 -mx-4 px-4 rounded-2xl transition-colors"
						>
							{/* Number */}
							<span className="hidden md:block text-3xl font-display font-black text-brand-200 leading-none pt-1">
								{String(i + 1).padStart(2, "0")}
							</span>

							{/* Body */}
							<div>
								<div className="flex flex-wrap items-center gap-3 mb-2">
									<h3 className="text-xl md:text-2xl font-display font-black text-brand-900 uppercase tracking-tight">
										{pos.title}
									</h3>
									<span className="inline-block px-2.5 py-0.5 bg-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-widest rounded-full">
										{pos.type}
									</span>
								</div>
								<p className="text-brand-500 text-sm leading-relaxed mb-2 max-w-xl">
									{pos.desc}
								</p>
								<p className="text-xs text-brand-400 font-semibold uppercase tracking-wide">
									↳ {pos.requirement}
								</p>
							</div>

							{/* CTA */}
							<a
								href={TELEGRAM_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-brand-200 text-brand-700 hover:border-gold hover:text-gold rounded-xl text-xs font-black uppercase tracking-widest transition-all group-hover:border-gold group-hover:text-gold"
							>
								{v.applyText}
								<ArrowRight className="w-3 h-3" />
							</a>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-900 rounded-[2rem] px-8 py-7">
					<div>
						<p className="font-black text-white text-base uppercase tracking-tight">
							{v.contactHint}
						</p>
						<p className="text-white/40 text-xs font-medium mt-0.5">
							{TELEGRAM_URL.replace("https://", "")}
						</p>
					</div>
					<a
						href={TELEGRAM_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-colors"
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
						</svg>
						{v.applyText}
					</a>
				</div>
			</div>
		</section>
	);
}
