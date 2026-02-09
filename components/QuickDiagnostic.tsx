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
				let recommendation = "business-mastery";
				if (nextScore >= 10) recommendation = "ielts-elite";
				else if (nextScore <= 5) recommendation = "kids-genius";
				setRecId(recommendation);
				setStage("result");
			}, 1500);
		}
	};

	if (stage === "intro") {
		return (
			<div className="text-center py-20 animate-fade-up">
				<div className="flex justify-center mb-10">
					<div className="w-24 h-24 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center animate-pulse-slow">
						<Activity className="w-12 h-12 text-gold" />
					</div>
				</div>
				<h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-6">
					{t.diagnostic.title}
				</h2>
				<p className="text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
					{t.diagnostic.subtitle}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<button
						onClick={() => setStage("active")}
						className="group relative p-10 bg-white/5 border border-white/10 rounded-[3rem] text-left hover:bg-white hover:text-obsidian transition-all duration-500"
					>
						<div className="flex items-center space-x-4 mb-6">
							<Zap className="w-8 h-8 text-gold group-hover:text-indigo-600 transition-colors" />
							<span className="text-xs font-black uppercase tracking-widest opacity-40">
								{t.diagnostic.quickCardTime}
							</span>
						</div>
						<h4 className="text-3xl font-black uppercase tracking-tight mb-4">
							{t.diagnostic.quickCardTitle}
						</h4>
						<p className="opacity-60 font-medium mb-8">
							{t.diagnostic.quickCardDesc}
						</p>
						<div className="flex items-center font-black uppercase text-xs tracking-widest">
							{t.diagnostic.quickCardCta}{" "}
							<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
						</div>
					</button>

					<Link
						href="/deep-test"
						className="group relative p-10 bg-indigo-600 border border-white/10 rounded-[3rem] text-left hover:bg-gold hover:text-obsidian transition-all duration-500 shadow-2xl"
					>
						<div className="flex items-center space-x-4 mb-6">
							<Clock className="w-8 h-8 text-white group-hover:text-obsidian transition-colors" />
							<span className="text-xs font-black uppercase tracking-widest opacity-80">
								{t.diagnostic.deepCardTime}
							</span>
						</div>
						<h4 className="text-3xl font-black uppercase tracking-tight mb-4">
							{t.diagnostic.deepCardTitle}
						</h4>
						<p className="opacity-80 font-medium mb-8">
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
			<div className="py-20 animate-fade-up max-w-4xl mx-auto">
				<div className="mb-12">
					<span className="text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 block">
						QUESTION 0{currentIdx + 1} / 03
					</span>
					<h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-tight">
						{q.q}
					</h3>
				</div>
				<div className="grid gap-4">
					{q.options.map((opt: any, i: number) => (
						<button
							key={i}
							onClick={() => handleAnswer(opt.score)}
							className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] text-left hover:bg-indigo-600 transition-all duration-500 overflow-hidden"
						>
							<div className="relative z-10 flex items-center justify-between">
								<span className="text-xl md:text-2xl font-bold">
									{opt.a}
								</span>
								<ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
							</div>
						</button>
					))}
				</div>
			</div>
		);
	}

	if (stage === "loading") {
		return (
			<div className="text-center py-40">
				<div className="w-20 h-20 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-10"></div>
				<h3 className="text-3xl font-black uppercase tracking-[0.3em] text-gold animate-pulse">
					{t.diagnostic.calculating}
				</h3>
			</div>
		);
	}

	return (
		<TestResultView
			score={score}
			maxScore={12}
			level={score > 8 ? "Strong B2+" : "Developing A2/B1"}
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
