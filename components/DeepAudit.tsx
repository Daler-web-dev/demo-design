"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Clock,
  BrainCircuit,
  Target,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COURSES } from "@/translations";

const DEEP_TEST_DATA = {
  time: 1800000,
  questions: [
    {
      id: 1,
      question: "I ____ got a computer but I've got a tablet.",
      answers: [
        { id: 1, title: "don't", examination: false },
        { id: 2, title: "'ve", examination: false },
        { id: 3, title: "haven't", examination: true },
      ],
    },
    {
      id: 2,
      question:
        "Sue: I love Rita Ora! _____ her? Mike: No. I prefer Ed Sheeran.",
      answers: [
        { id: 1, title: "Do you like", examination: true },
        { id: 2, title: "Are you like", examination: false },
        { id: 3, title: "Does you like", examination: false },
      ],
    },
    {
      id: 3,
      question:
        "Marie: _____ play a musical instrument, John? John: Yes. I play the piano.",
      answers: [
        { id: 1, title: "Can you", examination: true },
        { id: 2, title: "Do you can", examination: false },
        { id: 3, title: "Are you", examination: false },
      ],
    },
    {
      id: 4,
      question: "Where ______ your parents live?",
      answers: [
        { id: 1, title: "is", examination: false },
        { id: 2, title: "does", examination: false },
        { id: 3, title: "do", examination: true },
      ],
    },
    {
      id: 5,
      question:
        "I _____ English at the moment. I'm doing my homework.",
      answers: [
        { id: 1, title: "don't study", examination: false },
        { id: 2, title: "not studying", examination: false },
        { id: 3, title: "am not studying", examination: true },
      ],
    },
  ],
};

const DeepAudit: React.FC = () => {
  const { lang, t } = useLanguage();
  const [stage, setStage] = useState<"intro" | "active" | "result">("intro");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(DEEP_TEST_DATA.time);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (stage === "active" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1000) {
            if (timerRef.current) clearInterval(timerRef.current);
            setStage("result");
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage]);

  const selectAnswer = (qId: number, aId: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: aId }));

    if (currentIdx < DEEP_TEST_DATA.questions.length - 1) {
      setTimeout(() => {
        setCurrentIdx((prev) => prev + 1);
      }, 400);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < DEEP_TEST_DATA.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const calculateResult = () => {
    let correct = 0;
    DEEP_TEST_DATA.questions.forEach((q) => {
      const correctA = q.answers.find((a) => a.examination);
      if (correctA && userAnswers[q.id] === correctA.id) correct++;
    });
    const percentage =
      (correct / DEEP_TEST_DATA.questions.length) * 100;
    let levelKey: "beginner" | "intermediate" | "advanced" = "beginner";
    let recId = "kids-genius";
    if (percentage > 80) {
      levelKey = "advanced";
      recId = "ielts-elite";
    } else if (percentage > 50) {
      levelKey = "intermediate";
      recId = "business-mastery";
    }
    const level = t.deepAudit.levels[levelKey];
    return { correct, level, recId, percentage };
  };

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
          <span className="text-outline-white">{t.deepAudit.titleHighlight}</span>
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
            <div className="text-xl font-black">{t.deepAudit.timeValue}</div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
            <Target className="w-6 h-6 text-indigo-400 mb-4 mx-auto" />
            <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">
              {t.deepAudit.standardsLabel}
            </div>
            <div className="text-xl font-black">{t.deepAudit.standardsValue}</div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem]">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4 mx-auto" />
            <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">
              {t.deepAudit.accuracyLabel}
            </div>
            <div className="text-xl font-black">{t.deepAudit.accuracyValue}</div>
          </div>
        </div>
        <button
          onClick={() => setStage("active")}
          className="px-16 py-8 bg-gold text-obsidian rounded-[2rem] font-black text-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/20 uppercase tracking-tighter"
        >
          {t.deepAudit.startBtn}
        </button>
      </div>
    );
  }

  if (stage === "active") {
    const q = DEEP_TEST_DATA.questions[currentIdx];
    const isLast = currentIdx === DEEP_TEST_DATA.questions.length - 1;
    const canFinish =
      Object.keys(userAnswers).length === DEEP_TEST_DATA.questions.length;

    return (
      <div className="animate-fade-up py-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-gold">
              {currentIdx + 1}
            </div>
            <span className="text-xs font-black uppercase tracking-widest opacity-40">
              {t.deepAudit.questionLabel} {currentIdx + 1} / {DEEP_TEST_DATA.questions.length}
            </span>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            <Clock
              className={`w-5 h-5 ${timeLeft < 300000 ? "text-red-500 animate-pulse" : "text-gold"}`}
            />
            <span
              className={`font-mono text-xl font-bold ${timeLeft < 300000 ? "text-red-500" : ""}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-12 uppercase tracking-tight">
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

        <div className="mt-20 flex justify-between items-center">
          <button
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
            {isLast && canFinish ? (
              <button
                onClick={() => setStage("result")}
                className="px-12 py-5 bg-gold text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20"
              >
                {t.deepAudit.finishBtn}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={isLast}
                className="group px-12 py-5 bg-white text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold transition-all disabled:opacity-30 flex items-center shadow-lg"
              >
                {t.deepAudit.next}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const result = calculateResult();
  const recommendedCourse = COURSES.find((c) => c.id === result.recId);

  return (
    <div className="animate-reveal py-10">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-gold text-[10px] font-black uppercase tracking-widest mb-10">
          <Award className="w-4 h-4" />
          <span>{t.deepAudit.completeBadge}</span>
        </div>
        <h2 className="text-7xl md:text-9xl font-display font-black leading-none tracking-tighter uppercase mb-6">
          {t.deepAudit.yourLabel}
          <br />
          <span className="text-outline-white">{t.deepAudit.standingLabel}</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
        {/* Metrics Card */}
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-10">
              {t.deepAudit.metricsTitle}
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-4xl font-black uppercase tracking-tighter">
                    {t.deepAudit.levelLabel}
                  </span>
                  <span className="text-gold font-bold">{result.level}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-4xl font-black uppercase tracking-tighter">
                    {t.deepAudit.accuracyLabel}
                  </span>
                  <span className="text-gold font-bold">
                    {result.percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold transition-all duration-1000"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex gap-4">
            <button
              onClick={() => {
                setStage("intro");
                setCurrentIdx(0);
                setTimeLeft(DEEP_TEST_DATA.time);
                setUserAnswers({});
              }}
              className="flex-grow py-6 border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 flex items-center justify-center transition-colors group"
            >
              <RotateCcw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />{" "}
              {t.deepAudit.retakeBtn}
            </button>
          </div>
        </div>

        {/* Recommendation Card */}
        {recommendedCourse && (
          <div className="bg-indigo-600 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-white/40 font-black uppercase tracking-[0.4em] text-[10px] mb-10 block">
                {t.deepAudit.systemRecLabel}
              </span>
              <h3 className="text-5xl font-display font-black uppercase tracking-tighter leading-none mb-10">
                {t.deepAudit.readyForLabel}
                <br />
                {recommendedCourse.title[lang]}.
              </h3>
              <div className="p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] mb-12">
                <p className="font-medium text-lg leading-relaxed opacity-90">
                  {recommendedCourse.description[lang]}
                </p>
              </div>
              <Link
                href={`/courses/${recommendedCourse.id}`}
                className="inline-flex items-center px-12 py-7 bg-white text-obsidian rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gold transition-all hover:scale-105 active:scale-95"
              >
                {t.deepAudit.reserveSpotBtn} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <Zap
              strokeWidth={1}
              className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepAudit;
