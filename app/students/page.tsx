"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const results = Array.from({ length: 24 }, (_, i) => ({
	file: `result-${String(i + 1).padStart(3, "0")}.jpeg`,
}));

export default function StudentsPage() {
	const { lang } = useLanguage();

	const heading =
		lang === "RU"
			? "Наши студенты"
			: lang === "UZ"
				? "Bizning talabalar"
				: "Our Students";

	const subtitle =
		lang === "RU"
			? "Реальные результаты реальных людей. Каждый из них прошёл путь от первого урока до международного сертификата."
			: lang === "UZ"
				? "Haqiqiy odamlarning haqiqiy natijalari. Ularning har biri birinchi darsdan xalqaro sertifikatgacha bo'lgan yo'lni bosib o'tdi."
				: "Real results from real people. Each of them went from the first lesson to an international certificate.";

	const backLabel =
		lang === "RU" ? "На главную" : lang === "UZ" ? "Bosh sahifa" : "Home";

	const badgeLabel =
		lang === "RU"
			? "Истории успеха"
			: lang === "UZ"
				? "Muvaffaqiyat tarixi"
				: "Success Stories";

	return (
		<div className="min-h-screen bg-obsidian text-white pt-32 pb-24">
			<div className="max-w-7xl mx-auto px-6">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm font-bold uppercase tracking-widest mb-16 transition-colors"
				>
					<ArrowLeft className="w-4 h-4" />
					{backLabel}
				</Link>

				<div className="mb-20">
					<div className="flex items-center gap-3 mb-6">
						<Trophy className="w-5 h-5 text-gold" />
						<span className="text-xs font-black uppercase tracking-[0.4em] text-gold">
							{badgeLabel}
						</span>
					</div>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none uppercase tracking-tighter mb-6">
						{heading}
					</h1>
					<p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
						{subtitle}
					</p>
				</div>

				<section>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
						{results.map((r, idx) => (
							<div
								key={idx}
								className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
							>
								<img
									src={`/students_result/${r.file}`}
									alt="Student IELTS result"
									className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
