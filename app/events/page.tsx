"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
	{
		tag: "Speaking Club",
		title: "Weekly Speaking Club",
		date: "Каждую субботу",
		time: "11:00 — 13:00",
		location: "Polyglot, Бозор кўча 12",
		seats: "до 15 участников",
		desc: "Практика разговорного английского в формате IELTS Speaking Part 2 & 3. Ведёт преподаватель с IELTS 9.0. Уровень: B2 и выше.",
		color: "bg-[#FFF9EE]",
		accent: "text-amber-600",
		border: "border-amber-100",
	},
	{
		tag: "Workshop",
		title: "IELTS Writing Workshop",
		date: "18 мая 2025",
		time: "14:00 — 17:00",
		location: "Polyglot, Абу Матин кўча 3",
		seats: "до 20 участников",
		desc: "Интенсив по Task 1 и Task 2. Разбор типичных ошибок, стратегия написания, живая проверка эссе прямо на воркшопе.",
		color: "bg-[#C6F1E7]",
		accent: "text-emerald-700",
		border: "border-emerald-100",
	},
	{
		tag: "Open Day",
		title: "Open Day — Polyglot",
		date: "24 мая 2025",
		time: "10:00 — 15:00",
		location: "Все филиалы",
		seats: "Вход свободный",
		desc: "День открытых дверей: экскурсия по центру, бесплатный пробный урок, консультация с академическим координатором и приятные подарки.",
		color: "bg-[#E8F7FF]",
		accent: "text-sky-700",
		border: "border-sky-100",
	},
	{
		tag: "Masterclass",
		title: "IELTS 9.0 — Секреты балла",
		date: "1 июня 2025",
		time: "12:00 — 14:00",
		location: "Polyglot, Бозор кўча 12",
		seats: "до 30 участников",
		desc: "Мастер-класс от преподавателей с официальным баллом 9.0. Личный опыт, стратегия подготовки и ответы на вопросы.",
		color: "bg-[#F5E4FF]",
		accent: "text-fuchsia-700",
		border: "border-fuchsia-100",
	},
	{
		tag: "Movie Night",
		title: "English Movie Night",
		date: "7 июня 2025",
		time: "18:00 — 21:00",
		location: "Polyglot, Абу Матин кўча 3",
		seats: "до 40 участников",
		desc: "Смотрим фильм на английском с субтитрами, после — обсуждение на языке. Живой English в неформальной обстановке.",
		color: "bg-[#FFF3E9]",
		accent: "text-orange-700",
		border: "border-orange-100",
	},
	{
		tag: "Competition",
		title: "English Speech Contest",
		date: "15 июня 2025",
		time: "10:00 — 13:00",
		location: "Polyglot, Бозор кўча 12",
		seats: "Регистрация обязательна",
		desc: "Конкурс публичных выступлений на английском. Три категории по уровню: A2–B1, B2, C1+. Призы и сертификаты участникам.",
		color: "bg-[#E6FFEB]",
		accent: "text-emerald-700",
		border: "border-emerald-100",
	},
];

export default function EventsPage() {
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
						Мероприятия
					</span>
				</div>

				<h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-black leading-none uppercase tracking-tighter mb-8 text-brand-900">
					Events
				</h1>

				<p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
					Speaking клубы, воркшопы, open days и конкурсы. Обучение за пределами классной комнаты.
				</p>
			</div>

			{/* Events grid */}
			<div className="pb-24 px-6 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{events.map((event, i) => (
						<div
							key={i}
							className={`${event.color} rounded-[2rem] border ${event.border} p-8 flex flex-col hover:-translate-y-2 transition-transform duration-500`}
						>
							<div className="mb-auto">
								<span
									className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white ${event.accent} mb-5`}
								>
									{event.tag}
								</span>
								<h3 className="text-xl font-display font-black uppercase tracking-tighter text-brand-900 mb-3">
									{event.title}
								</h3>
								<p className="text-brand-600 text-sm leading-relaxed mb-6">
									{event.desc}
								</p>
							</div>
							<div className="space-y-2 border-t border-brand-100 pt-5">
								<div className="flex items-center gap-2 text-xs font-semibold text-brand-500">
									<Calendar className="w-3.5 h-3.5" />
									{event.date}
								</div>
								<div className="flex items-center gap-2 text-xs font-semibold text-brand-500">
									<Clock className="w-3.5 h-3.5" />
									{event.time}
								</div>
								<div className="flex items-center gap-2 text-xs font-semibold text-brand-500">
									<MapPin className="w-3.5 h-3.5" />
									{event.location}
								</div>
								<div className="flex items-center gap-2 text-xs font-semibold text-brand-500">
									<Users className="w-3.5 h-3.5" />
									{event.seats}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* CTA banner */}
			<div className="mx-6 mb-16 rounded-[2.5rem] bg-brand-900 px-8 py-12 md:px-16 md:py-14 max-w-7xl md:mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
				<div>
					<p className="text-white font-black text-xl uppercase tracking-tight mb-2">
						Хочешь попасть на событие?
					</p>
					<p className="text-white/40 text-sm">
						Следи за анонсами в нашем Telegram-канале — там всегда первыми
					</p>
				</div>
				<a
					href="https://t.me/polyglot_careers"
					target="_blank"
					rel="noopener noreferrer"
					className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-500 transition-colors"
				>
					Telegram
					<ArrowRight className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
}
