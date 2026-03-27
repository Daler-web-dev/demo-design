"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Activity, Zap, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TestResultView from "./TestResultView";

const QuickDiagnostic: React.FC = () => {
	const { t } = useLanguage();
	const [stage, setStage] = useState<
		"intro" | "active" | "loading" | "result"
	>("intro");
	const [currentIdx, setCurrentIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [recId, setRecId] = useState("");

	const handleAnswer = (val: number) => {
		const nextScore = score + val;
		setScore(nextScore);

		if (currentIdx < t.diagnostic.questions.length - 1) {
			setCurrentIdx(currentIdx + 1);
		} else {
			setStage("loading");
			setTimeout(() => {
				let recommendation = "a1-plus-elementary";
				if (nextScore >= 10) recommendation = "b1-plus-intermediate";
				else if (nextScore <= 3)
					recommendation = "azero-pre-elementary";
				else if (nextScore <= 6) recommendation = "a1-plus-beginner";
				setRecId(recommendation);
				setStage("result");
			}, 1500);
		}
	};

	if (stage === "intro") {
		return (
			<div className="text-center py-12 md:py-20 animate-fade-up px-2 sm:px-0">
				{/* <div className="flex justify-center mb-6 md:mb-10"> */}
				{/* <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 flex items-center justify-center animate-pulse-slow">
						<Activity className="w-8 h-8 sm:w-12 sm:h-12 text-gold" />
						</div> */}
				{/* </div> */}
				<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-[0.95] mb-4 md:mb-6 break-words max-w-full">
					{t.diagnostic.title}
				</h2>
				<p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 md:mb-12 font-medium max-w-2xl mx-auto px-2 sm:px-0">
					{t.diagnostic.subtitle}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
					<button
						onClick={() => setStage("active")}
						className="group relative p-6 sm:p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[3rem] text-left hover:bg-white hover:text-obsidian transition-all duration-500"
					>
						<div className="flex items-center space-x-4 mb-4 md:mb-6">
							<Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gold group-hover:text-indigo-600 transition-colors shrink-0" />
							<span className="text-xs font-black uppercase tracking-widest opacity-40">
								{t.diagnostic.quickCardTime}
							</span>
						</div>
						<h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 md:mb-4">
							{t.diagnostic.quickCardTitle}
						</h4>
						<p className="opacity-60 font-medium mb-6 md:mb-8 text-sm sm:text-base">
							{t.diagnostic.quickCardDesc}
						</p>
						<div className="flex items-center font-black uppercase text-xs tracking-widest">
							{t.diagnostic.quickCardCta}{" "}
							<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
						</div>
					</button>

					<Link
						href="/deep-test"
						className="group relative p-6 sm:p-8 md:p-10 bg-indigo-600 border border-white/10 rounded-[2rem] sm:rounded-[3rem] text-left hover:bg-gold hover:text-obsidian transition-all duration-500 shadow-2xl"
					>
						<div className="flex items-center space-x-4 mb-4 md:mb-6">
							<Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-obsidian transition-colors shrink-0" />
							<span className="text-xs font-black uppercase tracking-widest opacity-80">
								{t.diagnostic.deepCardTime}
							</span>
						</div>
						<h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 md:mb-4">
							{t.diagnostic.deepCardTitle}
						</h4>
						<p className="opacity-80 font-medium mb-6 md:mb-8 text-sm sm:text-base">
							{t.diagnostic.deepCardDesc}
						</p>
						<div className="flex items-center font-black uppercase text-xs tracking-widest">
							{t.diagnostic.deepCardCta}{" "}
							<ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
						</div>
					</Link>
				</div>
			</div>
		);
	}

	if (stage === "active") {
		const q = t.diagnostic.questions[currentIdx];
		return (
			<div className="py-12 md:py-20 animate-fade-up max-w-4xl mx-auto px-4 sm:px-6">
				<div className="mb-8 md:mb-12">
					<span className="text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gold mb-2 block">
						{t.diagnostic.questionLabel} 0{currentIdx + 1} / 03
					</span>
					<h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter leading-[1.1] break-words">
						{q.q}
					</h3>
				</div>
				<div className="grid gap-3 sm:gap-4">
					{q.options.map((opt: any, i: number) => (
						<button
							key={i}
							onClick={() => handleAnswer(opt.score)}
							className="group relative p-5 sm:p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] text-left hover:bg-indigo-600 transition-all duration-500 overflow-hidden"
						>
							<div className="relative z-10 flex items-center justify-between gap-4">
								<span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words text-left flex-1 min-w-0">
									{opt.a}
								</span>
								<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
							</div>
						</button>
					))}
				</div>
			</div>
		);
	}

	if (stage === "loading") {
		return (
			<div className="text-center py-24 md:py-40 px-4">
				<div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-6 md:mb-10"></div>
				<h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold animate-pulse break-words">
					{t.diagnostic.calculating}
				</h3>
			</div>
		);
	}

	return (
		<TestResultView
			score={score}
			maxScore={12}
			level={
				score > 8
					? t.diagnostic.levelStrong
					: t.diagnostic.levelDeveloping
			}
			recId={recId}
			onReset={() => {
				setStage("intro");
				setCurrentIdx(0);
				setScore(0);
			}}
		/>
	);
};

export default QuickDiagnostic;
