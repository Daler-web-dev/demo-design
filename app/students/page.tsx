"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StudentsPage() {
	const { t, lang } = useLanguage();

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

	const students = [
		{ name: "Aziz Karimov", result: "IELTS 8.0", image: "st1.jpeg" },
		{ name: "Malika Yusupova", result: "IELTS 7.5", image: "st2.jpeg" },
		{ name: "Jasur Toshmatov", result: "IELTS 7.0", image: "st3.jpeg" },
		{ name: "Zulfiya Nazarova", result: "CEFR B2", image: "st4.jpeg" },
		{ name: "Bobur Mirzayev", result: "IELTS 8.5", image: "st0.jpeg" },
		{ name: "Shahnoza Holiqova", result: "TOEFL 105", image: "st1.jpeg" },
		{ name: "Otabek Razzaqov", result: "IELTS 7.5", image: "st2.jpeg" },
		{ name: "Dilnoza Ergasheva", result: "CEFR C1", image: "st3.jpeg" },
		{ name: "Sherzod Abdullayev", result: "IELTS 9.0", image: "st4.jpeg" },
		{ name: "Feruza Qodirov", result: "Duolingo 130", image: "st0.jpeg" },
	];

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
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
						{students.map((student, idx) => (
							<div key={idx} className="group relative">
								<div className="relative shadow-2xl">
									<img
										src={`/students/${student.image}`}
										alt={student.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-85" />
									<div className="absolute top-4 right-4">
										<div className="bg-white/10 backdrop-blur-xl border border-white/20 px-2 py-1.5 rounded-lg flex items-center gap-1 group-hover:bg-gold/90 transition-colors duration-300">
											<span className="text-[10px] font-black group-hover:text-obsidian">
												{student.result}
											</span>
										</div>
									</div>
									<div className="absolute bottom-4 left-4 right-4">
										<h3 className="text-base md:text-lg font-display font-black uppercase tracking-tighter group-hover:text-gold transition-colors">
											{student.name}
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
