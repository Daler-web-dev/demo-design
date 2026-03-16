"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
	CheckCircle2,
	Clock,
	Target,
	Wallet,
	GraduationCap,
	ChevronLeft,
	ShieldCheck,
	Zap,
	Award,
	Users,
	MessageSquare,
	Play,
	Badge,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COURSES } from "@/translations";

const SCROLL_THRESHOLD = 400;

export default function CourseDetail() {
	const params = useParams();
	const router = useRouter();
	const id = params?.id as string | undefined;
	const { t, lang } = useLanguage();
	const [activeModule, setActiveModule] = useState<number | null>(
		id ? 0 : null,
	);
	const [scrolled, setScrolled] = useState(false);
	const lastScrolled = useRef(false);

	const course = COURSES.find((c) => c.id === id);

	useEffect(() => {
		const handleScroll = () => {
			const now = window.scrollY > SCROLL_THRESHOLD;
			if (lastScrolled.current !== now) {
				lastScrolled.current = now;
				setScrolled(now);
			}
		};
		lastScrolled.current = window.scrollY > SCROLL_THRESHOLD;
		setScrolled(lastScrolled.current);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!course) {
		router.replace("/courses");
		return null;
	}

	const specs = [
		{
			icon: Clock,
			label: lang === "RU" ? "Длительность" : "Duration",
			value: course.duration[lang],
		},
		{
			icon: GraduationCap,
			label: lang === "RU" ? "Уровень" : "Level",
			value: course.level,
		},
		{
			icon: Target,
			label: lang === "RU" ? "Цель" : "Target",
			value: "",
		},
		{
			icon: Wallet,
			label: lang === "RU" ? "Стоимость" : "Price",
			value: "",
		},
	];

	return (
		<div className="bg-white min-h-screen relative selection:bg-indigo-600 selection:text-white">
			{/* 1. IMMERSIVE HERO */}
			<section className="relative max-h-[96vh] flex items-center overflow-hidden bg-obsidian rounded-3xl m-3">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-10"></div>
					<img
						src={course.image}
						alt={course.title[lang]}
						className="w-full h-full object-cover opacity-60 scale-105"
					/>
				</div>

				<div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-32 pb-20">
					<Link
						href="/courses"
						className="inline-flex items-center text-white/60 hover:text-gold mb-12 transition-colors group"
					>
						<ChevronLeft className="mr-2 w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						<span className="text-xs font-black uppercase tracking-widest">
							{lang === "RU"
								? "Назад в каталог"
								: "Back to Catalog"}
						</span>
					</Link>

					<div className="flex items-center">
						<div>
							<h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
								{course.title[lang]
									.split(" ")
									.map((word, i) => (
										<span
											key={i}
											className={
												i % 2 !== 0
													? "text-outline-white"
													: ""
											}
										>
											{word}{" "}
										</span>
									))}
							</h1>
							<p className="text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed font-medium mb-12">
								{course.description[lang]}
							</p>
							<div className="flex flex-wrap gap-6">
								<Link
									href="/enroll"
									className="bg-gold text-obsidian px-12 py-6 rounded-2xl font-black text-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
								>
									{lang === "RU"
										? "Записаться сейчас"
										: "Enroll Now"}
								</Link>
								{/* <button className="flex items-center space-x-4 group text-white">
									<div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
										<Play className="w-5 h-5 fill-current" />
									</div>
									<span className="text-xs font-black uppercase tracking-widest">
										{lang === "RU"
											? "Смотреть интро"
											: "Watch Intro"}
									</span>
								</button> */}
							</div>
						</div>

						{/* <div className="hidden lg:grid grid-cols-2 gap-4">
							{specs.map((spec, i) => (
								<div
									key={i}
									className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] group hover:bg-white hover:text-obsidian transition-all cursor-default"
								>
									<spec.icon className="w-8 h-8 text-gold mb-6 group-hover:text-indigo-600 transition-colors" />
									<div className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">
										{spec.label}
									</div>
									<div className="text-2xl font-black tracking-tight">
										{spec.value}
									</div>
								</div>
							))}
						</div> */}
					</div>
				</div>
			</section>

			{/* 2. COURSE BLUEPRINT (SYLLABUS) */}
			<section className="py-40 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-12 gap-24">
						<div className="lg:col-span-5 sticky top-40 h-fit">
							<span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
								Course Architecture
							</span>
							<h2 className="text-6xl md:text-7xl font-display font-black text-obsidian uppercase tracking-tighter leading-none mb-10">
								The
								<br />
								<span className="text-outline">Journey.</span>
							</h2>
							<p className="text-xl text-slate-400 font-bold mb-12 leading-relaxed">
								{course.description[lang]}
							</p>

							{/* <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
								<h4 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center">
									<ShieldCheck className="w-6 h-6 mr-3 text-indigo-600" />
									Guaranteed Outcomes
								</h4>
								<ul className="space-y-4">
									{course.outcomes[lang].map(
										(outcome, idx) => (
											<li
												key={idx}
												className="flex items-start space-x-4 group"
											>
												<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-indigo-600 transition-colors">
													<CheckCircle2 className="w-4 h-4 text-indigo-600 group-hover:text-white" />
												</div>
												<span className="text-slate-600 font-bold">
													{outcome}
												</span>
											</li>
										),
									)}
								</ul>
							</div> */}
						</div>

						<div className="lg:col-span-7">
							<div className="space-y-6">
								{course.modules.map((module, idx) => (
									<div
										key={idx}
										className={`p-10 rounded-[3.5rem] border-2 transition-all duration-500 cursor-pointer ${
											activeModule === idx
												? "bg-obsidian text-white border-obsidian shadow-2xl scale-[1.02]"
												: "bg-slate-50 border-slate-100 hover:border-indigo-600"
										}`}
										onClick={() =>
											setActiveModule(
												activeModule === idx
													? null
													: idx,
											)
										}
									>
										<div className="flex justify-between items-center mb-6">
											<div className="flex items-center space-x-6">
												<span
													className={`text-4xl font-black ${activeModule === idx ? "text-indigo-400" : "text-slate-200"}`}
												>
													0{idx + 1}
												</span>
												<h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
													{module.title[lang]}
												</h3>
											</div>
											<ChevronLeft
												className={`w-8 h-8 transition-transform duration-500 ${activeModule === idx ? "-rotate-90 text-gold" : "rotate-[270deg] opacity-20"}`}
											/>
										</div>
										<div
											className={`transition-all duration-500 overflow-hidden ${activeModule === idx ? "h-full opacity-100" : "max-h-0 opacity-0"}`}
										>
											<p
												className={`text-lg font-medium leading-relaxed ${activeModule === idx ? "text-slate-400" : "text-slate-500"}`}
											>
												{module.description[lang]}
											</p>
											<div>
												{module.lessons.map(
													(lesson, i) => (
														<div
															key={i}
															className="flex items-center space-x-4 mt-6 group"
														>
															<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
																<Badge className="w-4 h-4 fill-current" />
															</div>
															<div>
																<h4 className="text-md font-bold">
																	{
																		lesson
																			.title[
																			lang
																		]
																	}
																</h4>
																<p className="text-sm text-slate-500">
																	{
																		lesson
																			.activity[
																			lang
																		]
																	}
																</p>
															</div>
														</div>
													),
												)}
											</div>
											<div className="mt-8 flex gap-4">
												<span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
													{module.lessons.length}{" "}
													Lessons
												</span>
												<span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
													Practical Workshop
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. THE MENTOR (BENTO STYLE) */}
			<section className="py-40 bg-surface">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-12 items-stretch">
						<div className="bg-obsidian rounded-[4rem] p-16 text-white flex flex-col justify-between relative overflow-hidden group">
							<div className="relative z-10">
								<span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
									Chief Mentor
								</span>
								<h2 className="text-6xl font-display font-black uppercase tracking-tighter leading-none mb-10">
									Learn from
									<br />
									the Best.
								</h2>
								<div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl">
									<h4 className="text-4xl font-black mb-4">
										{course.teacher.name}
									</h4>
									<p className="text-slate-400 text-lg leading-relaxed">
										{course.teacher.bio[lang]}
									</p>
								</div>
							</div>
							<Users className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
						</div>
						<div className="relative rounded-[4rem] overflow-hidden group">
							<img
								src={course.teacher.image}
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 min-h-[400px]"
								alt={course.teacher.name}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
							<div className="absolute bottom-12 left-12 flex space-x-4">
								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-obsidian shadow-2xl hover:bg-gold transition-colors cursor-pointer">
									<MessageSquare className="w-6 h-6" />
								</div>
								<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-obsidian shadow-2xl hover:bg-gold transition-colors cursor-pointer">
									<Award className="w-6 h-6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. PRICING & CTA */}
			<section className="py-40 bg-white">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<h2 className="text-7xl md:text-9xl font-display font-black text-obsidian uppercase tracking-tighter leading-none mb-12">
						Start Your <br />
						<span className="text-outline">Future.</span>
					</h2>
					<div className="bg-slate-50 rounded-[5rem] p-16 md:p-24 border border-slate-100 shadow-xl relative overflow-hidden group">
						<div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
							<Zap className="w-40 h-40 text-indigo-600" />
						</div>
						<div className="relative z-10">
							<div className="text-sm font-black uppercase tracking-[0.4em] text-indigo-600 mb-6">
								Investment in yourself
							</div>
							<div className="text-8xl md:text-9xl font-black text-obsidian mb-10 tracking-tighter">
								{/* {course.price[lang]} */}
							</div>
							<div className="flex flex-col md:flex-row justify-center gap-6">
								<Link
									href="/enroll"
									className="bg-obsidian text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl hover:bg-indigo-600 transition-all shadow-2xl hover:scale-105"
								>
									Join Program
								</Link>
								<Link
									href="/contact"
									className="bg-white text-obsidian px-16 py-8 rounded-[2.5rem] border-2 border-slate-200 font-black text-2xl hover:bg-slate-50 transition-all"
								>
									Ask a Question
								</Link>
							</div>
							<p className="mt-12 text-slate-400 font-bold uppercase tracking-widest text-xs">
								Trial lesson is free • No hidden fees • 100%
								Satisfaction
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FLOATING ACTION BAR FOR SCROLLED STATE */}
			<div
				className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg transition-all duration-500 transform ${scrolled ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
			>
				<div className="bg-obsidian/90 backdrop-blur-2xl rounded-full p-3 pl-10 border border-white/10 shadow-2xl flex items-center justify-between">
					<div className="flex flex-col">
						<span className="text-[10px] font-black uppercase tracking-widest text-white/40">
							{course.title[lang]}
						</span>
						<span className="text-xl font-black text-gold">
							{/* {course.price[lang]} */}
						</span>
					</div>
					<Link
						href="/enroll"
						className="bg-white text-obsidian px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-gold transition-colors"
					>
						Apply
					</Link>
				</div>
			</div>
		</div>
	);
}
