"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
	Clock,
	BrainCircuit,
	Target,
	ShieldCheck,
	ChevronRight,
	ChevronLeft,
	RotateCcw,
	Award,
	Loader2,
	SkipForward,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
	DEEP_TEST_IMMERSIVE_EVENT,
	type DeepTestImmersiveDetail,
} from "@/lib/deep-test-ui";

/** Данные теста с API (без правильных ответов) */
interface TestData {
	time: number;
	questions: {
		id: number;
		question: string;
		answers: { id: number; title: string }[];
	}[];
}

const STORAGE_KEY = "polyglot_deep_test_contact";
const DEFAULT_TIME_MS = 30 * 60 * 1000;

const DeepAudit: React.FC = () => {
	const { t } = useLanguage();
	const [stage, setStage] = useState<"intro" | "form" | "active" | "result">(
		"intro",
	);
	const [currentIdx, setCurrentIdx] = useState(0);
	const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
	const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME_MS);
	const [contactData, setContactData] = useState({ name: "", phone: "" });
	const [testData, setTestData] = useState<TestData | null>(null);
	const [testLoadError, setTestLoadError] = useState(false);
	const sentToTelegramRef = useRef(false);

	// Загрузка сохранённых контактов из localStorage (один раз при монтировании)
	useEffect(() => {
		if (typeof window === "undefined") return;
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw) as {
					name?: string;
					phone?: string;
				};
				if (parsed && (parsed.name || parsed.phone)) {
					setContactData({
						name:
							typeof parsed.name === "string" ? parsed.name : "",
						phone:
							typeof parsed.phone === "string"
								? parsed.phone
								: "",
					});
				}
			}
		} catch {
			// ignore
		}
	}, []);

	// Загрузка теста с сервера при входе на шаг «форма» (контент только с API, без правильных ответов)
	useEffect(() => {
		if (stage !== "form") return;
		let cancelled = false;
		setTestLoadError(false);
		fetch("/api/deep-test")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to load test");
				return res.json();
			})
			.then((data: TestData) => {
				if (!cancelled) setTestData(data);
			})
			.catch(() => {
				if (!cancelled) setTestLoadError(true);
			});
		return () => {
			cancelled = true;
		};
	}, [stage]);

	// Предупреждение при обновлении/закрытии вкладки во время формы или теста
	useEffect(() => {
		if (stage !== "form" && stage !== "active") return;
		const handler = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue = "";
			return "";
		};
		window.addEventListener("beforeunload", handler);
		return () => window.removeEventListener("beforeunload", handler);
	}, [stage]);

	// Отправка контактов в Telegram после прохождения
	useEffect(() => {
		if (
			stage !== "result" ||
			!contactData.name.trim() ||
			!contactData.phone.trim() ||
			sentToTelegramRef.current
		)
			return;
		sentToTelegramRef.current = true;
		fetch("/api/deep-test-notify", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: contactData.name.trim(),
				phone: contactData.phone.trim(),
				answers: userAnswers,
			}),
		}).catch((err) => console.error("Deep test notify failed:", err));
	}, [stage, contactData.name, contactData.phone, userAnswers]);

	// Полноэкранный режим: скрыть шапку/футер на мобильных и закрепить табло
	useEffect(() => {
		if (typeof window === "undefined") return;
		const detail: DeepTestImmersiveDetail = { active: stage === "active" };
		window.dispatchEvent(
			new CustomEvent(DEEP_TEST_IMMERSIVE_EVENT, { detail }),
		);
		return () => {
			window.dispatchEvent(
				new CustomEvent(DEEP_TEST_IMMERSIVE_EVENT, {
					detail: { active: false },
				}),
			);
		};
	}, [stage]);

	// Таймер только в шаге «тест»; очистка при размонтировании или смене шага
	useEffect(() => {
		if (stage !== "active" || timeLeft <= 0) return;
		const id = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1000) {
					setStage("result");
					return 0;
				}
				return prev - 1000;
			});
		}, 1000);
		return () => clearInterval(id);
	}, [stage]);

	const questions = testData?.questions ?? [];
	const questionsCount = questions.length;

	const selectAnswer = useCallback(
		(qId: number, aId: number) => {
			setUserAnswers((prev) => ({ ...prev, [qId]: aId }));
			if (currentIdx < questionsCount - 1) {
				setTimeout(() => setCurrentIdx((prev) => prev + 1), 400);
			}
		},
		[currentIdx, questionsCount],
	);

	const nextQuestion = useCallback(() => {
		if (currentIdx < questionsCount - 1) setCurrentIdx(currentIdx + 1);
	}, [currentIdx, questionsCount]);

	const prevQuestion = useCallback(() => {
		if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
	}, [currentIdx]);

	const skipQuestion = useCallback(
		(qId: number) => {
			setUserAnswers((prev) => {
				const next = { ...prev };
				delete next[qId];
				return next;
			});
			if (currentIdx < questionsCount - 1) {
				setCurrentIdx((i) => i + 1);
			}
		},
		[currentIdx, questionsCount],
	);

	const formatTime = (ms: number) => {
		const min = Math.floor(ms / 60000);
		const sec = Math.floor((ms % 60000) / 1000);
		return `${min}:${sec < 10 ? "0" : ""}${sec}`;
	};

	if (stage === "intro") {
		return (
			<div className="text-center animate-fade-up py-20">
				<div className="flex justify-center mb-10">
					<div className="w-32 h-32 bg-indigo-600 rounded-[3rem] flex items-center justify-center shadow-2xl animate-float">
						<BrainCircuit className="w-16 h-16 text-white" />
					</div>
				</div>
				<h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-8">
					{t.deepAudit.titleWord} <br />
					<span className="text-outline-white">
						{t.deepAudit.titleHighlight}
					</span>
				</h1>
				<p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
					{t.deepAudit.subtitle}
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
					<div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
						<Clock className="w-6 h-6 text-gold mb-4 mx-auto" />
						<div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">
							{t.deepAudit.timeLabel}
						</div>
						<div className="text-xl font-black">
							{t.deepAudit.timeValue}
						</div>
					</div>
					<div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
						<Target className="w-6 h-6 text-indigo-400 mb-4 mx-auto" />
						<div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">
							{t.deepAudit.standardsLabel}
						</div>
						<div className="text-xl font-black">
							{t.deepAudit.standardsValue}
						</div>
					</div>
					<div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
						<ShieldCheck className="w-6 h-6 text-emerald-400 mb-4 mx-auto" />
						<div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">
							{t.deepAudit.accuracyLabel}
						</div>
						<div className="text-xl font-black">
							{t.deepAudit.accuracyValue}
						</div>
					</div>
				</div>
				<button
					onClick={() => setStage("form")}
					className="px-16 py-8 bg-gold text-obsidian rounded-[2rem] font-black text-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/20 uppercase tracking-tighter"
				>
					{t.deepAudit.startBtn}
				</button>
			</div>
		);
	}

	if (stage === "form") {
		const handleFormSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			if (!testData) return;
			const name =
				(
					e.currentTarget.querySelector(
						'[name="name"]',
					) as HTMLInputElement
				)?.value?.trim() ?? "";
			const phone =
				(
					e.currentTarget.querySelector(
						'[name="phone"]',
					) as HTMLInputElement
				)?.value?.trim() ?? "";
			if (!name || !phone) return;
			setContactData({ name, phone });
			try {
				localStorage.setItem(
					STORAGE_KEY,
					JSON.stringify({ name, phone }),
				);
			} catch {
				// ignore
			}
			setTimeLeft(testData.time);
			setStage("active");
		};
		return (
			<div className="animate-fade-up py-12 max-w-xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-3 uppercase tracking-tight">
					{t.deepAudit.formTitle}
				</h2>
				<p className="text-slate-400 mb-10 text-lg">
					{t.deepAudit.formSubtitle}
				</p>
				{testLoadError && (
					<p className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
						{t.deepAudit.formLoadError}
					</p>
				)}
				<p className="text-slate-500 text-sm mb-6">
					{t.deepAudit.leaveWarning}
				</p>
				<form onSubmit={handleFormSubmit} className="space-y-6">
					<div>
						<label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
							{t.deepAudit.formNameLabel}
						</label>
						<input
							name="name"
							type="text"
							required
							defaultValue={contactData.name}
							placeholder={t.deepAudit.formNamePlaceholder}
							className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
						/>
					</div>
					<div>
						<label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
							{t.deepAudit.formPhoneLabel}
						</label>
						<input
							name="phone"
							type="tel"
							required
							defaultValue={contactData.phone}
							placeholder={t.deepAudit.formPhonePlaceholder}
							className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
						/>
					</div>
					<button
						type="submit"
						disabled={!testData || testLoadError}
						className="w-full px-16 py-6 bg-gold text-obsidian rounded-[2rem] font-black text-xl hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-gold/20 uppercase tracking-tighter disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
					>
						{!testData && !testLoadError ? (
							<>
								<Loader2 className="w-5 h-5 animate-spin" />
								{t.deepAudit.formLoading}
							</>
						) : (
							t.deepAudit.formContinueBtn
						)}
					</button>
				</form>
			</div>
		);
	}

	if (stage === "active") {
		if (!questionsCount) {
			return (
				<div className="animate-fade-up py-20 text-center">
					<Loader2 className="w-12 h-12 animate-spin text-gold mx-auto mb-4" />
					<p className="text-slate-400">{t.deepAudit.formLoading}</p>
				</div>
			);
		}
		const q = questions[currentIdx];
		if (!q) {
			return null;
		}
		const isLast = currentIdx === questionsCount - 1;

		const answeredCount = Object.keys(userAnswers).length;
		const progressPct =
			questionsCount > 0
				? Math.round(((currentIdx + 1) / questionsCount) * 100)
				: 0;
		const timerUrgent = timeLeft < 300000;

		return (
			<div className="animate-fade-up py-4 md:py-10">
				<div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 lg:gap-12">
					<aside
						className="
							w-full shrink-0 max-md:z-[100] border border-white/10 bg-obsidian/95 backdrop-blur-md shadow-xl shadow-black/30
							max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 max-md:rounded-none max-md:rounded-b-2xl
							max-md:border-x-0 max-md:border-t-0 max-md:px-4 max-md:py-2
							max-md:pt-[max(0.5rem,env(safe-area-inset-top,0px))]
							md:z-20 md:w-[11.5rem] lg:w-52 md:sticky md:top-20 md:self-start
							md:rounded-[1.5rem] md:p-5
						"
					>
						<div className="flex flex-row md:flex-col items-center md:items-stretch gap-3 md:gap-0 md:space-y-5">
							<div className="flex-1 min-w-0 max-md:flex max-md:items-center max-md:gap-3">
								<div className="max-md:shrink-0">
									<p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5 md:mb-1">
										{t.deepAudit.questionLabel}
									</p>
									<p className="text-xl md:text-3xl font-black text-white tabular-nums leading-none">
										<span className="text-gold">
											{currentIdx + 1}
										</span>
										<span className="text-white/35 text-sm md:text-xl font-bold">
											/{questionsCount}
										</span>
									</p>
								</div>
								<div className="flex-1 min-w-0 max-md:min-w-[4rem]">
									<p className="hidden md:block mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
										{answeredCount}/{questionsCount}{" "}
										<span className="normal-case font-medium text-slate-600">
											· {progressPct}%
										</span>
									</p>
									<div
										className="mt-0 md:mt-3 h-1 md:h-1.5 rounded-full bg-white/10 overflow-hidden"
										role="progressbar"
										aria-valuenow={currentIdx + 1}
										aria-valuemin={1}
										aria-valuemax={questionsCount}
									>
										<div
											className="h-full rounded-full bg-gold transition-[width] duration-300 ease-out"
											style={{
												width: `${((currentIdx + 1) / questionsCount) * 100}%`,
											}}
										/>
									</div>
								</div>
							</div>
							<div className="flex md:flex-col items-center md:items-stretch gap-2 md:gap-0 md:pt-4 md:border-t md:border-white/10 shrink-0 max-md:border-l max-md:border-white/10 max-md:pl-3 md:border-l-0 md:pl-0">
								<p className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
									{t.deepAudit.timeLabel}
								</p>
								<div
									className={`flex items-center justify-center gap-1.5 md:gap-2 rounded-lg md:rounded-xl border px-2.5 py-1.5 md:py-3 md:px-3 max-md:w-auto md:w-full ${
										timerUrgent
											? "border-red-500/40 bg-red-500/10"
											: "border-white/10 bg-white/5"
									}`}
								>
									<Clock
										className={`w-3.5 h-3.5 md:w-5 md:h-5 shrink-0 ${timerUrgent ? "text-red-400 animate-pulse" : "text-gold"}`}
									/>
									<span
										className={`font-mono text-sm md:text-xl font-bold tabular-nums ${timerUrgent ? "text-red-400" : "text-white"}`}
									>
										{formatTime(timeLeft)}
									</span>
								</div>
							</div>
						</div>
					</aside>

					<div className="flex-1 min-w-0 max-md:pt-[calc(4.25rem+env(safe-area-inset-top,0px))]">
						<p className="text-slate-500 text-xs mb-6">
							{t.deepAudit.leaveWarning}
						</p>

						<h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black leading-tight mb-10 uppercase tracking-tight">
							{q.question}
						</h2>

						<div className="grid gap-4">
							{q.answers.map((ans) => (
								<button
									key={ans.id}
									onClick={() => selectAnswer(q.id, ans.id)}
									className={`group relative p-8 rounded-[2rem] text-left transition-all duration-500 border overflow-hidden ${
										userAnswers[q.id] === ans.id
											? "bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-600/20"
											: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30"
									}`}
								>
									<div className="flex items-center justify-between relative z-10">
										<span className="text-xl md:text-2xl font-bold">
											{ans.title}
										</span>
										<div
											className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
												userAnswers[q.id] === ans.id
													? "bg-white border-white scale-110"
													: "border-white/20"
											}`}
										>
											{userAnswers[q.id] === ans.id && (
												<ChevronRight className="w-5 h-5 text-indigo-600" />
											)}
										</div>
									</div>
								</button>
							))}
						</div>

						{!isLast && (
							<div className="mt-6 flex justify-center">
								<button
									type="button"
									onClick={() => skipQuestion(q.id)}
									className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 text-xs font-black uppercase tracking-widest transition-all"
								>
									<SkipForward className="w-4 h-4" />
									{t.deepAudit.skipQuestion}
								</button>
							</div>
						)}

						<div className="mt-16 md:mt-20 flex justify-between items-center">
							<button
								type="button"
								onClick={prevQuestion}
								disabled={currentIdx === 0}
								className="flex items-center space-x-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-white transition-all disabled:opacity-0 group"
							>
								<ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
								<span className="font-black uppercase tracking-widest text-xs">
									{t.deepAudit.back}
								</span>
							</button>

							<div className="flex space-x-4">
								{isLast ? (
									<button
										type="button"
										onClick={() => setStage("result")}
										className="px-12 py-5 bg-gold text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20"
									>
										{t.deepAudit.finishBtn}
									</button>
								) : (
									<button
										type="button"
										onClick={nextQuestion}
										className="group px-12 py-5 bg-white text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold transition-all flex items-center shadow-lg"
									>
										{t.deepAudit.next}
										<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="animate-reveal py-10">
			<div className="text-center mb-20">
				<div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-gold text-[10px] font-black uppercase tracking-widest mb-10">
					<Award className="w-4 h-4" />
					<span>{t.deepAudit.completeBadge}</span>
				</div>
				<h2 className="text-5xl md:text-7xl font-display font-black leading-none tracking-tighter uppercase mb-6">
					{t.deepAudit.resultSuccessTitle}
				</h2>
				<p className="text-xl md:text-2xl text-slate-400 font-medium max-w-xl mx-auto">
					{t.deepAudit.resultSuccessSubtitle}
				</p>
			</div>

			<div className="max-w-md mx-auto">
				<button
					onClick={() => {
						sentToTelegramRef.current = false;
						setStage("intro");
						setCurrentIdx(0);
						setTimeLeft(testData?.time ?? DEFAULT_TIME_MS);
						setUserAnswers({});
					}}
					className="w-full py-6 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 flex items-center justify-center transition-colors group"
				>
					<RotateCcw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />{" "}
					{t.deepAudit.retakeBtn}
				</button>
			</div>
		</div>
	);
};

export default DeepAudit;
