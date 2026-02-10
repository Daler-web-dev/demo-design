import React from "react";
import Link from "next/link";
import { RotateCcw, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COURSES } from "../translations";

interface TestResultViewProps {
	score: number;
	maxScore: number;
	level: string;
	recId: string;
	onReset: () => void;
	title?: string;
}

const TestResultView: React.FC<TestResultViewProps> = ({
	score,
	maxScore,
	level,
	recId,
	onReset,
	title,
}) => {
	const { t, lang } = useLanguage();
	const recommendedCourse = COURSES.find((c) => c.id === recId);

	if (!recommendedCourse) return null;

	return (
		<div className="py-8 md:py-10 animate-reveal w-full max-w-4xl mx-auto px-4 sm:px-6">
			<div className="text-center mb-10 md:mb-16">
				<h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-[0.95] mb-4 md:mb-6 break-words max-w-full">
					{title || t.diagnostic.resultTitle}
				</h2>
				<p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium">
					{t.diagnostic.recommendation}
				</p>
			</div>

			<div className="bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2.5rem] sm:rounded-[4rem] backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
				<div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-10">
					<div className="w-full md:w-1/3 aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl max-w-[280px] md:max-w-none mx-auto md:mx-0">
						<img
							src={recommendedCourse.image}
							className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
							alt="Recommended"
						/>
					</div>
					<div className="flex-grow text-left w-full min-w-0">
						<div className="flex flex-wrap items-center justify-between gap-2 mb-4">
							<span className="text-gold font-black uppercase tracking-widest text-[10px] sm:text-xs">
								DIAGNOSTIC LEVEL: {level}
							</span>
							<span className="text-white/20 font-black text-xs">
								{score}/{maxScore} PTS
							</span>
						</div>
						<h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tighter leading-[0.95] mb-4 md:mb-6 break-words">
							{recommendedCourse.title[lang]}
						</h4>
						<div className="flex flex-wrap gap-3 sm:gap-4">
							<Link
								href={`/courses/${recommendedCourse.id}`}
								className="px-10 py-5 bg-white text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold transition-colors"
							>
								View Program
							</Link>
							<button
								onClick={onReset}
								className="px-10 py-5 border border-white/20 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors flex items-center"
							>
								<RotateCcw className="mr-2 w-4 h-4" />{" "}
								{t.diagnostic.retake}
							</button>
						</div>
					</div>
				</div>
				{/* Decorative elements */}
				<div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
			</div>
		</div>
	);
};

export default TestResultView;
