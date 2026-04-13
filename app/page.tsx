"use client";

// Import necessary components and hooks
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	Trophy,
	Users,
	ArrowUpRight,
	Zap,
	ChevronDown,
	BookOpen,
	Coffee,
	PlayCircle,
	Medal,
	Award,
	Target,
	Smile,
	Globe,
	Globe2,
	Feather,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import QuickDiagnostic from "@/components/QuickDiagnostic";
import BranchLocations from "@/components/BranchLocations";
import PrestigeSection from "@/components/PrestigeSection";
import MethodologySection from "@/components/MethodologySection";

export default function Home() {
	const { t, lang } = useLanguage();
	const [activeFaq, setActiveFaq] = useState<number | null>(null);
	const HERO_VIDEO_WEBM = "bgvideo.webm";
	const HERO_VIDEO_MP4 = "bgvideo.mp4";
	const [heroVideoSrc, setHeroVideoSrc] = useState(HERO_VIDEO_WEBM);

	useEffect(() => {
		const ua = navigator.userAgent;
		const isSafari =
			/safari/i.test(ua) &&
			!/chrome|crios|chromium|fxios|edgios|edg\//i.test(ua);
		setHeroVideoSrc(isSafari ? HERO_VIDEO_MP4 : HERO_VIDEO_WEBM);
	}, []);

	useEffect(() => {
		const existingPreload = document.querySelector(
			`link[rel="preload"][as="video"][href="${heroVideoSrc}"]`,
		);

		if (existingPreload) return;

		const link = document.createElement("link");
		link.rel = "preload";
		link.as = "video";
		link.href = heroVideoSrc;
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, [heroVideoSrc]);

	const courseCategories = t.courses?.categories ?? [];

	const iconById: Record<string, React.ComponentType<any>> = {
		BookOpen,
		Target,
		Smile,
		Globe,
		Globe2,
		Feather,
	};

	// Helper to map themes to course cards based on category
	const getCardTheme = (category: string) => {
		switch (category) {
			case "General_English":
				return {
					bg: "bg-[#FFF9EE]", // Soft gold
					text: "text-[#2C2A1F]",
					tag: "bg-white text-brand-900",
					accent: "text-amber-500/80",
					glow: "bg-amber-400/20",
				};
			case "IELTS_Intensive":
				return {
					bg: "bg-[#C6F1E7]", // Mint green
					text: "text-[#1A2E35]",
					tag: "bg-white text-brand-900",
					accent: "text-emerald-500/80",
					glow: "bg-emerald-400/20",
				};
			case "English_kids":
				return {
					bg: "bg-[#F5E4FF]", // Soft purple
					text: "text-[#2C1F3A]",
					tag: "bg-white text-brand-900",
					accent: "text-fuchsia-500/80",
					glow: "bg-fuchsia-400/20",
				};
			case "Подготовка_к_CEFR/DTM":
				return {
					bg: "bg-[#E8F7FF]", // Light sky
					text: "text-[#10233E]",
					tag: "bg-white text-brand-900",
					accent: "text-sky-500/80",
					glow: "bg-sky-400/20",
				};
			case "Подготовка_к_TOEFL":
				return {
					bg: "bg-[#FFF3E9]", // Peach
					text: "text-[#3B2B1D]",
					tag: "bg-white text-brand-900",
					accent: "text-orange-500/80",
					glow: "bg-orange-400/20",
				};
			case "Подготовка_к_Duolingo":
				return {
					bg: "bg-[#E6FFEB]", // Fresh green
					text: "text-[#1D3A20]",
					tag: "bg-white text-brand-900",
					accent: "text-emerald-500/80",
					glow: "bg-emerald-400/20",
				};
			default:
				return {
					bg: "bg-brand-900", // Deep blue (brand)
					text: "text-white",
					tag: "bg-white text-brand-800",
					accent: "text-indigo-300",
					glow: "bg-indigo-500/30",
				};
		}
	};

	return (
		<div className="relative overflow-x-hidden overflow-y-hidden ">
			<section className="md:h-[96vh] h-[60vh] md:mt-4 mt-[120px] relative flex flex-col justify-center overflow-hidden rounded-3xl m-3 bg-gradient-to-t from-indigo-900 via-brand-100/10 to-transparent">
				{/* Hero full-height video + soft blur toward text */}
				<div className="absolute inset-0 -z-10">
					<video
						src={heroVideoSrc}
						className="h-full w-full object-cover"
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						onCanPlay={(event) => {
							event.currentTarget.play().catch(() => {
								// Ignore autoplay race conditions on first paint.
							});
						}}
					/>
				</div>

				<div className="w-[92%] mx-auto px-6 relative h-full flex items-end pt-24 pb-10 lg:pt-28 lg:pb-14">
					<div className="w-full flex flex-col items-start text-start">
						{/* <div className="hero-badge-in hero-delay-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/25 bg-white/10 text-white/95 backdrop-blur-md text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] mb-6 shadow-sm">
							<Zap className="w-2.5 h-2.5 text-gold shrink-0" strokeWidth={2.5} />
							<span>{t.hero.badge}</span>
						</div> */}
						<div className="w-full flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
							<h1 className="text-[clamp(1.75rem,8vw,4.5rem)] lg:text-[6rem] font-display font-black leading-[0.86] tracking-tight text-brand-800 uppercase overflow-hidden">
								<span className="hero-line hero-delay-1 block text-gold">
									{t.homePage.heroWord1}
								</span>
								<span className="hero-line hero-delay-2 block text-indigo-600">
									{t.homePage.heroWord2}
								</span>
								<span className="hero-line hero-delay-3 block text-outline-brand-hero">
									{t.homePage.heroWord3}
								</span>
							</h1>
							{/* <p className="hero-subtitle-in hero-delay-4 text-xl md:text-2xl text-indigo-600/80 max-w-3xl leading-relaxed mb-16 font-medium tracking-normal">
								{t.hero.subtitle}
							</p> */}
							<div className="hidden hero-cta-in hero-delay-5 md:flex flex-col items-start gap-4 sm:gap-6 lg:items-end lg:pb-2">
								<Link
									href="/enroll"
									className="hero-btn-shine w-52 sm:w-56 py-4 bg-indigo-600 text-white rounded-2xl font-black text-base sm:text-lg hover:bg-indigo-500 hover:shadow-indigo-400/30 transition-all flex items-center justify-center group shadow-2xl shadow-indigo-500/25"
								>
									{t.nav.enroll}
									<ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</Link>
								<div className="flex items-center -space-x-3 lg:self-end">
									{[1, 2, 3, 4].map((i) => (
										<img
											key={i}
											src={`students/st${i}.jpeg`}
											className={`hero-avatar-pop object-cover w-10 h-10 sm:w-11 sm:h-11 rounded-full border-4 border-white shadow-lg ${
												i === 1
													? "hero-delay-avatar-1"
													: i === 2
														? "hero-delay-avatar-2"
														: i === 3
															? "hero-delay-avatar-3"
															: "hero-delay-avatar-4"
											}`}
											alt=""
										/>
									))}
									<div className="pl-5 text-xs sm:text-sm font-bold text-gold">
										{t.homePage.alumni}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="w-full mx-auto px-6 pt-6 md:hidden hero-cta-in hero-delay-5 flex flex-col items-start gap-4 sm:gap-6 lg:items-end lg:pb-2">
				<Link
					href="/enroll"
					className="hero-btn-shine w-52 sm:w-56 py-4 bg-indigo-600 text-white rounded-2xl font-black text-base sm:text-lg hover:bg-indigo-500 hover:shadow-indigo-400/30 transition-all flex items-center justify-center group shadow-2xl shadow-indigo-500/25"
				>
					{t.nav.enroll}
					<ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
				</Link>
				<div className="flex items-center -space-x-3 lg:self-end">
					{[1, 2, 3, 4].map((i) => (
						<img
							key={i}
							src={`students/st${i}.jpeg`}
							className={`hero-avatar-pop object-cover w-10 h-10 sm:w-11 sm:h-11 rounded-full border-4 border-white shadow-lg ${
								i === 1
									? "hero-delay-avatar-1"
									: i === 2
										? "hero-delay-avatar-2"
										: i === 3
											? "hero-delay-avatar-3"
											: "hero-delay-avatar-4"
							}`}
							alt=""
						/>
					))}
					<div className="pl-5 text-xs sm:text-sm font-bold text-indigo-600">
						{t.homePage.alumni}
					</div>
				</div>
			</div>

			<PrestigeSection lang={lang} />

			{/* 2. OUR PRIDE — TEACHERS WITH IELTS 9 */}
			<section className="min-h-fit py-32 bg-gradient-to-br from-brand-800 via-brand-900 to-indigo-900 text-white relative overflow-hidden">
				<div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-white/5 whitespace-nowrap -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter italic">
					IELTS 9 • IELTS 9 • IELTS 9
				</div>

				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
						<div className="max-w-2xl">
							<div className="flex items-center space-x-3 mb-6">
								<Medal className="w-6 h-6 text-gold" />
								<span className="text-xs font-black uppercase tracking-[0.4em] text-gold">
									{t.results.badge}
								</span>
							</div>
							<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.95] italic uppercase tracking-tighter break-words max-w-full">
								{t.results.title}
							</h2>
							<p className="text-xl md:text-2xl text-slate-400 font-medium mt-6 max-w-lg leading-relaxed">
								{t.results.subtitle}
							</p>
							<p className="text-base md:text-lg text-gold font-bold max-w-lg">
								{t.results.uniqueClaim}
							</p>
						</div>
						<div className="hidden lg:flex items-center space-x-4 pb-4">
							<div className="text-right">
								<div className="text-4xl font-black text-gold">
									6
								</div>
								<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
									{t.results.teachersStat}
								</div>
							</div>
							<div className="h-16 w-px bg-white/10 mx-6"></div>
							<div className="text-right">
								<div className="text-4xl font-black text-gold">
									IELTS 9
								</div>
								<div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
									{t.results.maxBandLabel}
								</div>
							</div>
							<Trophy className="w-16 h-16 text-gold animate-pulse" />
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
						{t.results.teachers.map(
							(
								teacher: { name: string; image: string },
								idx: number,
							) => (
								<div key={idx} className="group relative">
									<div className="relative">
										<img
											src={`/niners/${teacher.image}`}
											alt={teacher.name}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-800/50 to-transparent opacity-90" />

										<div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
											<div className="flex items-center space-x-2 mb-2">
												<Award className="w-4 h-4 md:w-5 md:h-5 text-gold group-hover:rotate-12 transition-transform" />
												<span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gold">
													{t.results.roleLabel}
												</span>
											</div>
											<h3 className="text-2xl md:text-3xl font-display font-black leading-none uppercase tracking-tighter group-hover:text-gold transition-colors">
												{teacher.name}
											</h3>
										</div>
									</div>
									<div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-white/5 rounded-[3.5rem] group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
								</div>
							),
						)}
					</div>

					<div className="mt-16 text-center">
						<Link
							href="/team"
							className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-sm text-white hover:bg-gold hover:text-brand-900 hover:border-gold transition-all duration-300"
						>
							{t.results.viewAllStaff}
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			<section className="min-h-fit py-40 bg-brand-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-12">
						<div>
							<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
								<span className="w-8 h-0.5 bg-gold" />
								{t.homePage.coursesBadge}
							</div>
							<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.95] uppercase tracking-tighter break-words max-w-full text-brand-800">
								{t.homePage.coursesTitleLine1}
								<br />
								{t.homePage.coursesTitleLine2}
							</h2>
							<p className="text-xl text-indigo-600/80 font-bold mt-6">
								{t.homePage.coursesSubtitle}
							</p>
						</div>
						<Link
							href="/courses"
							className="text-lg font-black text-indigo-600 hover:text-brand-700 flex items-center group transition-colors"
						>
							{t.homePage.fullCatalog}{" "}
							<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{courseCategories.map((category: any) => {
							const theme = getCardTheme(category.label);
							const CourseIcon =
								iconById[category.iconId] ?? BookOpen;

							return (
								<Link
									href={`/courses?category=${category.label}`}
									key={category.value}
									className={`${theme.bg} ${theme.text} group relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl overflow-hidden aspect-square`}
								>
									{/* TOP SECTION: Meta Header */}
									<div className="relative z-30 mb-auto">
										<h4 className="text-2xl font-black leading-tight uppercase tracking-tighter mb-1">
											{category.value}
										</h4>
										<p className="text-xs font-black opacity-50 uppercase tracking-widest">
											{category.duration}
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
										<h3 className="text-4xl md:text-5xl font-display font-black leading-[1] uppercase tracking-tighter mb-2">
											{category.value}
										</h3>
										<p className="text-xs font-bold opacity-60">
											{t.homePage.courseTrackHint}
										</p>
										{/* <span
											className={`hidden hover:inline-block px-2.5 py-1 mb-4 ${theme.tag} text-[10px] font-black uppercase tracking-widest rounded shadow-sm`}
										>
											{lang === "RU"
												? "Посмотреть все программы"
												: "Explore this track"}
										</span> */}
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

			{/* QUICK DIAGNOSTIC SECTION (COMPONENTIZED) */}
			<section
				id="audit"
				className="py-16 md:py-32 bg-gradient-to-br from-brand-800 to-brand-900 text-white relative overflow-hidden"
			>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 overflow-x-hidden">
					<QuickDiagnostic />
				</div>
			</section>

			<BranchLocations
				badge={t.homePage.locationsBadge}
				title={t.branches.title}
				subtitle={t.branches.subtitle}
				mapRouteText={t.branches.mapRouteText}
				lang={lang}
			/>

			<section className="min-h-fit py-16 md:py-40 bg-gradient-to-br from-brand-800 via-brand-900 to-indigo-900 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-24 gap-6 lg:gap-0">
						<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black leading-[0.95] md:leading-[0.8] tracking-tighter uppercase break-words max-w-full">
							{t.lifestyle.title}
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-slate-400 font-bold max-w-sm">
							{t.lifestyle.subtitle}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 md:h-[600px]">
						<div className="md:col-span-2 md:row-span-2 bg-indigo-600 rounded-[2rem] sm:rounded-[3.5rem] p-8 sm:p-12 relative overflow-hidden group min-h-[200px] md:min-h-0">
							<img
								src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1600"
								alt={t.homePage.lifestyleAltHub}
								className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-brand-900/80 via-brand-900/40 to-transparent pointer-events-none" />
							<div className="relative z-10 flex flex-col h-full">
								<Coffee className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 opacity-40 group-hover:scale-125 transition-transform" />
								<h4 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tighter leading-tight mt-auto">
									{t.homePage.lifestyleHubTitle}
								</h4>
								<p className="text-indigo-100 text-base sm:text-lg max-w-md">
									{t.homePage.lifestyleHubDesc}
								</p>
								<div className="mt-6 sm:mt-8 px-4 py-1.5 sm:px-6 sm:py-2 bg-white/15 rounded-full font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase inline-flex items-center gap-2">
									<span className="w-2 h-2 rounded-full bg-gold" />
									{t.homePage.lifestyleCommunityTag}
								</div>
							</div>
						</div>
						<div className="md:col-span-2 bg-brand-800 rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12 flex flex-col justify-between group min-h-[140px] md:min-h-0 relative overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=1600"
								alt={t.homePage.lifestyleAltCinema}
								className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-brand-900/70 via-brand-900/40 to-transparent pointer-events-none" />
							<div className="relative z-10">
								<div className="flex justify-between items-start">
									<PlayCircle className="w-8 h-8 sm:w-12 sm:h-12 text-gold shrink-0" />
									<span className="text-[10px] font-black uppercase tracking-widest text-slate-200">
										{t.homePage.lifestyleCinemaTag}
									</span>
								</div>
								<h4 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 md:mt-0">
									{t.lifestyle.items[1].title}
								</h4>
							</div>
						</div>
						<div className="bg-brand-700 rounded-[1.5rem] sm:rounded-[3rem] p-6 sm:p-8 flex flex-col justify-between group hover:bg-indigo-500 transition-colors min-h-[120px] md:min-h-0 relative overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200"
								alt={t.homePage.lifestyleAltLibrary}
								className="absolute inset-0 w-full h-full object-cover opacity-18 pointer-events-none"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/40 to-transparent pointer-events-none" />
							<div className="relative z-10">
								<BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 group-hover:text-white shrink-0" />
								<h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter mt-2 md:mt-0">
									{t.lifestyle.items[2].title}
								</h4>
							</div>
						</div>
						<div className="bg-gold/20 text-brand-900 rounded-[1.5rem] sm:rounded-[3rem] p-6 sm:p-8 flex flex-col justify-between group border border-gold/30 min-h-[120px] md:min-h-0 relative overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&q=80&w=1200"
								alt={t.homePage.lifestyleAltSpeaking}
								className="absolute inset-0 w-full h-full object-cover opacity-22 pointer-events-none"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent pointer-events-none" />
							<div className="relative z-10">
								<Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold shrink-0" />
								<h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter mt-2 md:mt-0">
									{t.lifestyle.items[0].title}
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<MethodologySection />

			<section className="min-h-fit py-40 bg-brand-900">
				<div className="max-w-4xl mx-auto px-6 text-white">
					<div className="text-center mb-24">
						<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
							<span className="w-8 h-0.5 bg-gold" />
							{t.homePage.faqBadge}
							<span className="w-8 h-0.5 bg-gold" />
						</div>
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[0.95] mb-6 break-words max-w-full">
							{t.faq.title}
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-gold via-brand-800 to-gold mx-auto rounded-full"></div>
					</div>
					<div className="space-y-4">
						{t.faq.questions.map(
							(faq: { q: string; a: string }, i: number) => (
								<div
									key={i}
									className="group bg-brand-800 rounded-[2rem] border-2 border-brand-700 overflow-hidden transition-all hover:border-gold/80 hover:bg-brand-800/90"
								>
									<button
										onClick={() =>
											setActiveFaq(
												activeFaq === i ? null : i,
											)
										}
										className="w-full p-8 flex justify-between items-center text-left transition-colors"
									>
										<span className="text-xl font-black uppercase tracking-tight text-white group-hover:text-gold">
											{faq.q}
										</span>
										<ChevronDown
											className={`w-6 h-6 transition-all duration-500 ${
												activeFaq === i
													? "rotate-180 text-gold"
													: "text-gold/60"
											}`}
										/>
									</button>
									<div
										className={`transition-all duration-500 ease-in-out ${
											activeFaq === i
												? "max-h-96 opacity-100 p-8 pt-0"
												: "max-h-0 opacity-0"
										}`}
									>
										<p className="text-indigo-100 font-medium text-lg leading-relaxed">
											{faq.a}
										</p>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</section>

			<section className="min-h-screen py-32 px-6 flex flex-col justify-center bg-gradient-to-b from-transparent via-brand-50/30 to-transparent">
				<div className="max-w-7xl mx-auto bg-gradient-to-br from-indigo-600 via-indigo-600 to-brand-700 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
					<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
					<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] font-display font-black text-white leading-[0.95] tracking-tighter mb-16 relative z-10 break-words max-w-full px-2">
						{t.homePage.ctaLine1} <br />
						{t.homePage.ctaLine2}
					</h2>
					<Link
						href="/enroll"
						className="inline-flex bg-white text-brand-800 px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 relative z-10 shadow-2xl"
					>
						{t.homePage.bookLesson}
					</Link>
				</div>
			</section>
		</div>
	);
}
