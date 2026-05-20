"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";

const features = [
	{
		title: "Персонализированный план",
		desc: "Каждый студент получает индивидуальный маршрут подготовки на основе диагностики. Без лишнего — только то, что поднимет балл.",
	},
	{
		title: "Разбор всех четырёх модулей",
		desc: "Listening, Reading, Writing, Speaking — отрабатываем каждый модуль отдельно с акцентом на слабые места конкретного студента.",
	},
	{
		title: "Mock-тесты в реальных условиях",
		desc: "Регулярные пробные экзамены по официальному формату IELTS с детальным разбором ошибок и прогнозом финального балла.",
	},
	{
		title: "Преподаватели с IELTS 9.0",
		desc: "В Polyglot работает 6 преподавателей с максимальным баллом IELTS 9.0. Они знают систему изнутри — от стратегии до мелких деталей.",
	},
	{
		title: "Speaking клуб и живая практика",
		desc: "Еженедельные speaking-сессии в формате реального экзамена. Говорить с акцентом — нормально. Не говорить — нет.",
	},
	// {
	// 	title: "Telegram-поддержка",
	// 	desc: "Закрытый чат с куратором. Вопросы по грамматике, словарному запасу или стратегии — ответ в течение часа в рабочее время.",
	// },
];

const stats = [
	{ value: "6", label: "преподавателей с IELTS 9.0" },
	{ value: "7+", label: "средний балл выпускников" },
	{ value: "3 мес", label: "средний срок подготовки" },
	{ value: "2000+", label: "сданных экзаменов" },
];

export default function IeltsHubPage() {
	return (
		<div className="min-h-screen bg-white text-brand-900">
			{/* Header */}
			<div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-brand-500 hover:text-gold text-sm font-bold uppercase tracking-widest mb-16 transition-colors"
				>
					<ArrowLeft className="w-4 h-4" />
					На главную
				</Link>

				<div className="flex items-center gap-3 mb-6">
					<span className="w-6 h-0.5 bg-gold" />
					<span className="text-xs font-black uppercase tracking-[0.4em] text-gold">
						Polyglot IELTS Hub
					</span>
				</div>

				<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-black leading-none uppercase tracking-tighter mb-8 text-brand-900">
					Сдай IELTS
					<br />
					<span className="text-gold">с первого раза</span>
				</h1>

				<p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
					IELTS Hub — это выделенная программа подготовки внутри
					Polyglot. Структура, стратегия и преподаватели, которые сами
					сдали на 9.0.
				</p>

				<Link
					href="/enroll"
					className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-600 transition-colors"
				>
					Записаться
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>

			{/* Stats */}
			<div className="bg-brand-900 py-16 px-6">
				<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((s, i) => (
						<div key={i} className="text-center">
							<div className="text-4xl md:text-5xl font-display font-black text-gold mb-2">
								{s.value}
							</div>
							<div className="text-xs font-black uppercase tracking-widest text-white/50">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Features */}
			<div className="py-24 px-6 max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-16 text-brand-900">
					Что входит в программу
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((f, i) => (
						<div
							key={i}
							className="p-8 rounded-[2rem] border border-brand-100 hover:border-gold/40 transition-colors group"
						>
							<CheckCircle2 className="w-6 h-6 text-gold mb-5 group-hover:scale-110 transition-transform" />
							<h3 className="text-lg font-black uppercase tracking-tight text-brand-900 mb-3">
								{f.title}
							</h3>
							<p className="text-brand-500 text-sm leading-relaxed">
								{f.desc}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Reviews */}
			<div className="py-16 px-6 bg-brand-50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-16 text-brand-900">
						Что говорят студенты
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								name: "Aziz K.",
								result: "IELTS 8.0",
								text: "За три месяца поднял балл с 5.5 до 8.0. Структура подготовки и mock-тесты — это то, чего мне не хватало раньше.",
							},
							{
								name: "Malika Y.",
								result: "IELTS 7.5",
								text: "Writing был моей слабостью. Преподаватель буквально разобрал каждое эссе. Вышла с 7.5 и уже подала документы в университет.",
							},
							{
								name: "Sherzod A.",
								result: "IELTS 9.0",
								text: "Не верил, что 9.0 реально. Но когда твой преподаватель сам держит 9.0 — начинаешь понимать, что это возможно.",
							},
						].map((r, i) => (
							<div
								key={i}
								className="bg-white rounded-[2rem] p-8 border border-brand-100"
							>
								<div className="flex gap-1 mb-4">
									{[1, 2, 3, 4, 5].map((s) => (
										<Star
											key={s}
											className="w-4 h-4 fill-gold text-gold"
										/>
									))}
								</div>
								<p className="text-brand-700 leading-relaxed mb-6 text-sm">
									{r.text}
								</p>
								<div className="flex items-center gap-3">
									<div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center font-black text-brand-600 text-sm">
										{r.name[0]}
									</div>
									<div>
										<p className="font-black text-brand-900 text-sm">
											{r.name}
										</p>
										<p className="text-gold text-xs font-bold">
											{r.result}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="py-20 px-6 max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6 text-brand-900">
					Готов начать?
				</h2>
				<p className="text-brand-500 text-lg mb-10 max-w-lg mx-auto">
					Запишись на бесплатный диагностический урок и узнай свой
					текущий уровень IELTS.
				</p>
				<Link
					href="/enroll"
					className="inline-flex items-center gap-2.5 px-10 py-5 bg-brand-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold transition-colors"
				>
					Бесплатный урок
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>

			{/* Image footer */}
			<div className="relative w-full h-full overflow-hidden">
				<img
					src="/ieltshub.jpeg"
					alt="IELTS Hub Polyglot"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent" />
			</div>
		</div>
	);
}
