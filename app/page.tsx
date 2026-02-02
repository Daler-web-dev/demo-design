"use client";

// Import necessary components and hooks
import React, { useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	Trophy,
	Star,
	Users,
	MapPin,
	Globe,
	ArrowUpRight,
	ShieldCheck,
	Zap,
	Sparkles,
	ChevronDown,
	BookOpen,
	Coffee,
	PlayCircle,
	Target,
	Briefcase,
	Rocket,
	Medal,
	Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COURSES } from "@/translations";

export default function Home() {
	const { t, lang } = useLanguage();
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	// Helper to map themes to course cards based on category
	const getCardTheme = (category: string) => {
		switch (category) {
			case "IELTS":
				return {
					bg: "bg-[#C6F1E7]", // Mint green
					text: "text-[#1A2E35]",
					tag: "bg-white text-slate-900",
					accent: "text-emerald-500/80",
					glow: "bg-emerald-400/20",
				};
			case "Adults":
				return {
					bg: "bg-[#D6E9FF]", // Sky blue
					text: "text-[#0F172A]",
					tag: "bg-white text-slate-900",
					accent: "text-blue-500/80",
					glow: "bg-blue-400/20",
				};
			case "Kids":
			default:
				return {
					bg: "bg-[#050510]", // Deep dark
					text: "text-white",
					tag: "bg-white text-slate-900",
					accent: "text-indigo-400",
					glow: "bg-indigo-600/30",
				};
		}
	};

	// Icon mapping for a creative, high-end look
	const courseIcons: Record<string, any> = {
		"ielts-elite": Target,
		"business-mastery": Briefcase,
		"kids-genius": Rocket,
	};

	const achievementImages = [
		"https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
		"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
		"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
	];

	return (
		<div className="relative overflow-x-hidden">
			<div className="gradient-blur w-[600px] h-[600px] bg-indigo-500/20 top-[-200px] right-[-200px]"></div>
			<div className="gradient-blur w-[400px] h-[400px] bg-gold/10 bottom-[-100px] left-[-200px]"></div>

			<section className="pt-40 pb-24 lg:pt-60 lg:pb-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col items-center text-center">
						<div className="inline-flex items-center space-x-2 px-6 py-2 bg-obsidian text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-pulse-slow">
							<Zap className="w-3 h-3 text-gold" />
							<span>{t.hero.badge}</span>
						</div>
						<h1 className="text-[12vw] lg:text-[11rem] font-display font-black leading-[0.8] tracking-tighter text-obsidian uppercase mb-12">
							Bolder.
							<br />
							<span className="text-outline">Better.</span>
							<br />
							<span className="text-indigo-600">Fluent.</span>
						</h1>
						<p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-16 font-medium">
							{t.hero.subtitle}
						</p>
						<div className="flex flex-col sm:flex-row items-center gap-6">
							<Link
								href="/enroll"
								className="w-64 py-6 bg-obsidian text-white rounded-2xl font-black text-xl hover:bg-indigo-600 transition-all flex items-center justify-center group shadow-2xl"
							>
								{t.nav.enroll}
								<ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
							</Link>
							<div className="flex items-center -space-x-3">
								{[1, 2, 3, 4].map((i) => (
									<img
										key={i}
										src={`https://i.pravatar.cc/100?u=${i + 10}`}
										className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
										alt=""
									/>
								))}
								<div className="pl-6 text-sm font-bold text-slate-400">
									Join 15,000+ Alumni
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. HALL OF FAME (REDESIGNED) */}
			<section className="py-32 bg-obsidian text-white relative overflow-hidden">
				{/* Animated Background Text */}
				<div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-white/5 whitespace-nowrap -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter italic">
					{lang === "RU"
						? "ЧЕМПИОНЫ • ЧЕМПИОНЫ • ЧЕМПИОНЫ"
						: "CHAMPIONS • CHAMPIONS • CHAMPIONS"}
				</div>

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
						<div className="max-w-2xl">
							<div className="flex items-center space-x-3 mb-6">
								<Medal className="w-6 h-6 text-gold" />
								<span className="text-xs font-black uppercase tracking-[0.4em] text-gold">
									{lang === "RU"
										? "РЕЗУЛЬТАТЫ"
										: "THE HALL OF FAME"}
								</span>
							</div>
							<h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none italic uppercase tracking-tighter">
								{t.results.title}
							</h2>
							<p className="text-xl md:text-2xl text-slate-400 font-medium mt-6 max-w-lg leading-relaxed">
								{t.results.subtitle}
							</p>
						</div>
						<div className="hidden lg:flex items-center space-x-4 pb-4">
							<div className="text-right">
								<div className="text-4xl font-black text-gold">
									8.0+
								</div>
								<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
									Average IELTS Score
								</div>
							</div>
							<div className="h-16 w-px bg-white/10 mx-6"></div>
							<Trophy className="w-16 h-16 text-gold animate-pulse" />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{t.results.scores.map((res: any, idx: number) => (
							<div key={idx} className="group relative">
								{/* Image Container with Hover Effect */}
								<div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-gold/10">
									<img
										src={achievementImages[idx]}
										alt={res.name}
										className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
									/>

									{/* Overlays */}
									<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80"></div>

									{/* Score Badge - Top Left */}
									<div className="absolute top-8 left-8">
										<div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-[2rem] flex flex-col items-center shadow-2xl group-hover:bg-gold transition-colors duration-500">
											<span className="text-5xl font-black tracking-tighter group-hover:text-obsidian">
												{res.score}
											</span>
											<span className="text-[8px] font-black uppercase tracking-widest opacity-60 group-hover:text-obsidian">
												OVERALL BAND
											</span>
										</div>
									</div>

									{/* Details - Bottom */}
									<div className="absolute bottom-10 left-10 right-10">
										<div className="flex items-center space-x-3 mb-4">
											<Award className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" />
											<span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">
												{res.result}
											</span>
										</div>
										<h3 className="text-4xl font-display font-black leading-none uppercase tracking-tighter mb-2 group-hover:text-gold transition-colors">
											{res.name}
										</h3>
										<div className="flex justify-between items-center pt-4 border-t border-white/10">
											<span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
												{lang === "RU"
													? "Выпускник"
													: "Alumnus"}{" "}
												{res.year}
											</span>
											<ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-gold transition-colors" />
										</div>
									</div>
								</div>

								{/* Decorative Elements for the Card */}
								<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-white/5 rounded-[3.5rem] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
							</div>
						))}
					</div>

					{/* Stats Bar at bottom of section */}
					{/* <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
						<div>
							<div className="text-5xl font-display font-black text-white mb-2 tracking-tighter italic">
								95%
							</div>
							<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
								Success Rate
							</div>
						</div>
						<div>
							<div className="text-5xl font-display font-black text-white mb-2 tracking-tighter italic">
								1.2K+
							</div>
							<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
								IELTS 7.5+ Achievers
							</div>
						</div>
						<div>
							<div className="text-5xl font-display font-black text-white mb-2 tracking-tighter italic">
								100%
							</div>
							<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
								Certified Staff
							</div>
						</div>
						<div>
							<div className="text-5xl font-display font-black text-white mb-2 tracking-tighter italic">
								#1
							</div>
							<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
								Ranking in Region
							</div>
						</div>
					</div> */}
				</div>
			</section>

			<section className="py-40 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-12">
						<div>
							<h2 className="text-7xl lg:text-9xl font-display font-black leading-none uppercase tracking-tighter">
								The
								<br />
								Programs.
							</h2>
							<p className="text-xl text-slate-400 font-bold mt-6">
								Engineered for absolute fluency.
							</p>
						</div>
						<Link
							href="/courses"
							className="text-lg font-black text-indigo-600 hover:text-obsidian flex items-center group transition-colors"
						>
							Full Catalog{" "}
							<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{COURSES.map((course) => {
							const theme = getCardTheme(course.category);
							const CourseIcon =
								courseIcons[course.id] || Sparkles;
							return (
								<Link
									href={`/courses/${course.id}`}
									key={course.id}
									className={`${theme.bg} ${theme.text} group relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl overflow-hidden aspect-square`}
								>
									{/* TOP SECTION: Meta Header */}
									<div className="relative z-30 mb-auto">
										<h4 className="text-2xl font-black leading-tight uppercase tracking-tighter mb-1">
											{course.category === "IELTS"
												? lang === "RU"
													? "Английский для IELTS"
													: "IELTS Mastery"
												: course.title[lang]}
										</h4>
										<p className="text-xs font-black opacity-50 uppercase tracking-widest">
											{course.duration[lang]}
										</p>
									</div>

									{/* CENTER SECTION: Large Creative Icon (Simulating 3D GIF look) */}
									<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
										<div className="relative w-full h-full flex items-center justify-center animate-float">
											{/* Background Glow Effect */}
											<div
												className={`absolute w-32 h-32 md:w-48 md:h-48 rounded-full ${theme.glow} blur-[40px] group-hover:blur-[60px] transition-all duration-1000`}
											></div>

											<CourseIcon
												strokeWidth={1.5}
												className={`w-32 h-32 md:w-48 md:h-48 ${theme.accent} filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000`}
											/>
										</div>
									</div>

									{/* BOTTOM SECTION: Main Course Identity */}
									<div className="relative z-30">
										<span
											className={`inline-block px-2.5 py-1 mb-4 ${theme.tag} text-[10px] font-black uppercase tracking-widest rounded shadow-sm`}
										>
											{lang === "RU"
												? "ПРОГРАММА"
												: "TRACK"}
										</span>
										<h3 className="text-4xl md:text-5xl font-display font-black leading-[1] uppercase tracking-tighter mb-2">
											{course.title[lang]}
										</h3>
										<p className="text-xs font-bold opacity-60">
											{lang === "RU"
												? "Базовый и продвинутый уровни"
												: "From Foundation to Fluency"}
										</p>
									</div>

									{/* Aesthetic Noise & Light Grain */}
									<div className="absolute inset-0 bg-white/10 opacity-30 pointer-events-none mix-blend-soft-light"></div>

									{/* Hover Button */}
									<div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<ArrowUpRight className="w-5 h-5" />
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-32 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div>
							<h2 className="text-6xl md:text-7xl font-display font-black text-obsidian leading-none mb-10">
								{t.branches.title}
							</h2>
							<p className="text-xl text-slate-500 mb-12">
								{t.branches.subtitle}
							</p>
							<div className="grid grid-cols-2 gap-4">
								{t.branches.list.map((b: string, i: number) => (
									<div
										key={i}
										className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold hover:bg-indigo-50 transition-colors cursor-default"
									>
										<MapPin className="w-5 h-5 text-indigo-600" />
										<span>{b}</span>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-indigo-600 rounded-[4rem] rotate-3 -z-10 opacity-10"></div>
							<img
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
								className="w-full h-auto rounded-[3.5rem] shadow-2xl"
								alt="Students in Campus"
							/>
							<div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 flex items-center space-x-4">
								<div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
									<Star className="text-white fill-current w-8 h-8" />
								</div>
								<div>
									<div className="text-2xl font-black">
										4.9/5
									</div>
									<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
										Global Review Rating
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-40 bg-slate-50 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-12 gap-16 items-center">
						<div className="lg:col-span-5">
							<div className="inline-flex items-center space-x-3 text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8">
								<ShieldCheck className="w-4 h-4" />
								<span>The Methodology</span>
							</div>
							<h2 className="text-6xl md:text-8xl font-display font-black leading-[0.9] text-obsidian uppercase mb-12">
								UNCOMPROMISING
								<br />
								<span className="text-outline">STANDARDS.</span>
							</h2>
							<div className="space-y-12">
								{[
									{
										title: "Oxford Authorized Syllabus",
										desc: "Direct access to official international curriculum, audited every semester.",
									},
									{
										title: "The Native Protocol",
										desc: "Speaking-first approach developed by linguistic experts from London and Toronto.",
									},
									{
										title: "Hyper-Growth Tracking",
										desc: "A proprietary digital ecosystem to track every word, mistake, and breakthrough.",
									},
								].map((item, i) => (
									<div key={i} className="flex gap-6 group">
										<span className="text-3xl font-black text-indigo-200 group-hover:text-indigo-600 transition-colors">
											0{i + 1}
										</span>
										<div>
											<h4 className="text-2xl font-black text-obsidian mb-2 uppercase tracking-tight">
												{item.title}
											</h4>
											<p className="text-slate-500 font-medium leading-relaxed max-w-sm">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
							<div className="space-y-6 pt-12">
								<div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl relative group">
									<img
										src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
										className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
										alt="Learning"
									/>
								</div>
								<div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl">
									<Sparkles className="w-10 h-10 mb-6 text-gold" />
									<h5 className="text-2xl font-black leading-tight uppercase tracking-tighter">
										Gold Certification <br />
										Network.
									</h5>
								</div>
							</div>
							<div className="space-y-6">
								<div className="bg-obsidian p-10 rounded-[3rem] text-white shadow-2xl">
									<Globe className="w-10 h-10 mb-6 text-indigo-400" />
									<h5 className="text-2xl font-black leading-tight uppercase tracking-tighter">
										Global <br />
										Alumni Link.
									</h5>
								</div>
								<div className="rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl relative group">
									<img
										src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
										className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
										alt="Students"
									/>
								</div>
							</div>
							<div className="absolute top-1/2 -right-12 translate-x-1/2 -translate-y-1/2 hidden lg:block">
								<span className="text-[10rem] font-black text-slate-200/50 select-none pointer-events-none rotate-90 inline-block uppercase tracking-tighter">
									EST 2012
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-40 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-32">
						<h2 className="text-7xl md:text-9xl font-display font-black text-obsidian leading-none tracking-tighter uppercase mb-6">
							{t.methodology.title}
						</h2>
						<p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto">
							{t.methodology.subtitle}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{t.methodology.steps.map(
							(
								step: { title: string; desc: string },
								i: number,
							) => (
								<div
									key={i}
									className="p-12 bg-slate-50 rounded-[3.5rem] hover:bg-indigo-600 hover:text-white transition-all duration-500 group"
								>
									<div className="text-4xl font-black opacity-20 mb-10 group-hover:opacity-100 transition-opacity">
										0{i + 1}
									</div>
									<h4 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">
										{step.title}
									</h4>
									<p className="text-slate-500 font-medium group-hover:text-indigo-100 transition-colors leading-relaxed">
										{step.desc}
									</p>
								</div>
							),
						)}
					</div>
				</div>
			</section>

			<section className="py-40 bg-obsidian text-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col lg:flex-row justify-between items-start mb-24">
						<h2 className="text-7xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase mb-10">
							{t.lifestyle.title}
						</h2>
						<p className="text-xl text-slate-400 font-bold max-w-sm">
							{t.lifestyle.subtitle}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
						<div className="md:col-span-2 md:row-span-2 bg-indigo-600 rounded-[3.5rem] p-12 relative overflow-hidden group">
							<Coffee className="absolute top-10 right-10 w-20 h-20 opacity-10 group-hover:scale-125 transition-transform" />
							<h4 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-tight mt-auto">
								Polyglot Hub
							</h4>
							<p className="text-indigo-100 text-lg">
								Our central campuses feature coffee zones and
								collaborative lounges for relaxed practice.
							</p>
							<div className="absolute bottom-10 left-10 px-6 py-2 bg-white/20 rounded-full font-bold text-xs">
								COMMUNITY FIRST
							</div>
						</div>
						<div className="md:col-span-2 bg-slate-900 rounded-[3.5rem] p-12 flex flex-col justify-between group">
							<div className="flex justify-between items-start">
								<PlayCircle className="w-12 h-12 text-gold" />
								<span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
									Every Friday
								</span>
							</div>
							<h4 className="text-4xl font-black uppercase tracking-tighter">
								{t.lifestyle.items[1].title}
							</h4>
						</div>
						<div className="bg-slate-800 rounded-[3rem] p-8 flex flex-col justify-between group hover:bg-indigo-500 transition-colors">
							<BookOpen className="w-8 h-8 text-indigo-400 group-hover:text-white" />
							<h4 className="text-xl font-black uppercase tracking-tighter">
								{t.lifestyle.items[2].title}
							</h4>
						</div>
						<div className="bg-white text-obsidian rounded-[3rem] p-8 flex flex-col justify-between group">
							<Users className="w-8 h-8 text-indigo-600" />
							<h4 className="text-xl font-black uppercase tracking-tighter">
								{t.lifestyle.items[0].title}
							</h4>
						</div>
					</div>
				</div>
			</section>

			<section className="py-40 bg-slate-50">
				<div className="max-w-4xl mx-auto px-6">
					<div className="text-center mb-24">
						<h2 className="text-6xl font-display font-black text-obsidian uppercase tracking-tighter leading-none mb-6">
							{t.faq.title}
						</h2>
						<div className="w-20 h-2 bg-indigo-600 mx-auto rounded-full"></div>
					</div>
					<div className="space-y-4">
						{t.faq.questions.map(
							(faq: { q: string; a: string }, i: number) => (
								<div
									key={i}
									className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden transition-all"
								>
									<button
										onClick={() =>
											setActiveFaq(
												activeFaq === i ? null : i,
											)
										}
										className="w-full p-8 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
									>
										<span className="text-xl font-black uppercase tracking-tight text-obsidian">
											{faq.q}
										</span>
										<ChevronDown
											className={`w-6 h-6 transition-transform duration-500 ${activeFaq === i ? "rotate-180" : ""}`}
										/>
									</button>
									<div
										className={`transition-all duration-500 ease-in-out ${activeFaq === i ? "max-h-96 opacity-100 p-8 pt-0" : "max-h-0 opacity-0"}`}
									>
										<p className="text-slate-500 font-medium text-lg leading-relaxed">
											{faq.a}
										</p>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</section>

			<section className="py-32 px-6">
				<div className="max-w-7xl mx-auto bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden">
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
					<h2 className="text-5xl md:text-[8rem] font-display font-black text-white leading-none tracking-tighter mb-16 relative z-10">
						STOP DREAMING. <br />
						START SPEAKING.
					</h2>
					<Link
						href="/enroll"
						className="inline-flex bg-white text-obsidian px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 relative z-10 shadow-2xl"
					>
						Book Free Lesson
					</Link>
				</div>
			</section>
		</div>
	);
}
