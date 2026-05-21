"use client";

import React, {
	useRef,
	useEffect,
	useCallback,
	useState,
	useMemo,
	forwardRef,
} from "react";
import { useLanguage } from "@/context/LanguageContext";

type Step = { title: string; desc: string };

const CARD_ROW_CLASS =
	"flex-none w-[min(88vw,20rem)] sm:w-[22rem] lg:w-[26rem] p-8 sm:p-10 md:p-12 bg-gold rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-gold text-brand-900 hover:bg-gold/90 transition-all duration-500 group";

function StepCard({
	step,
	i,
	snapStart,
}: {
	step: Step;
	i: number;
	snapStart?: boolean;
}) {
	return (
		<div className={`${CARD_ROW_CLASS}${snapStart ? " snap-start" : ""}`}>
			<div className="text-3xl sm:text-4xl font-black text-brand-900 mb-8 sm:mb-10">
				0{i + 1}
			</div>
			<h4 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tighter leading-tight">
				{step.title}
			</h4>
			<p className="text-brand-900/80 font-medium group-hover:text-brand-900 transition-colors leading-relaxed text-sm sm:text-base">
				{step.desc}
			</p>
		</div>
	);
}

const SectionHeader = forwardRef<
	HTMLDivElement,
	{ whyLabel: string; title: string; subtitle: string; marginClass: string }
>(function SectionHeader({ whyLabel, title, subtitle, marginClass }, ref) {
	return (
		<div ref={ref} className={`text-center ${marginClass}`}>
			<div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6">
				<span className="w-8 h-0.5 bg-gold mx-auto" />
				{whyLabel}
				<span className="w-8 h-0.5 bg-gold mx-auto" />
			</div>
			<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black text-brand-800 leading-[0.95] tracking-tighter uppercase mb-6 break-words max-w-full">
				{title}
			</h2>
			<p className="text-lg sm:text-xl text-indigo-600/80 font-bold max-w-2xl mx-auto">
				{subtitle}
			</p>
		</div>
	);
});
SectionHeader.displayName = "SectionHeader";

function useMethodologyInteractionMode() {
	const [reducedMotion, setReducedMotion] = useState(false);
	const [finePointer, setFinePointer] = useState(true);

	useEffect(() => {
		const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
		const mqFine = window.matchMedia("(pointer: fine)");
		const sync = () => {
			setReducedMotion(mqReduce.matches);
			setFinePointer(mqFine.matches);
		};
		sync();
		mqReduce.addEventListener("change", sync);
		mqFine.addEventListener("change", sync);
		return () => {
			mqReduce.removeEventListener("change", sync);
			mqFine.removeEventListener("change", sync);
		};
	}, []);

	return { reducedMotion, wheelLock: finePointer };
}

/**
 * Scroll jail with JS-driven "fake sticky":
 * - Outer section gets extra height = maxHorizontalScroll
 * - Inner div is pinned via position:fixed while in the active scroll zone
 * - Native scroll position drives horizontal card offset
 * - Works even when an ancestor has overflow:hidden (which breaks CSS sticky)
 */
function useScrollJailTrack(
	enabled: boolean,
	sectionRef: React.RefObject<HTMLElement | null>,
	innerRef: React.RefObject<HTMLDivElement | null>,
	viewportRef: React.RefObject<HTMLDivElement | null>,
	trackRef: React.RefObject<HTMLDivElement | null>,
	resetToken: string,
) {
	const paintAll = useCallback(() => {
		const sec = sectionRef.current;
		const inner = innerRef.current;
		const tr = trackRef.current;
		if (!sec || !inner || !tr) return;

		const max = Number(sec.dataset.scrollMax ?? 0);
		if (max <= 0) {
			inner.style.cssText = "";
			tr.style.transform = "";
			return;
		}

		const secTop = sec.getBoundingClientRect().top;

		if (secTop > 0) {
			// Before section: normal flow
			inner.style.cssText = "";
			tr.style.transform = "";
		} else if (secTop >= -max) {
			// Active zone: fix the inner panel to viewport
			inner.style.cssText =
				"position:fixed;top:0;left:0;width:100%;z-index:20;";
			const offset = Math.min(max, -secTop);
			tr.style.transform =
				offset > 0 ? `translate3d(${-offset}px,0,0)` : "";
		} else {
			// Past section: pin to section bottom
			inner.style.cssText =
				"position:absolute;bottom:0;left:0;width:100%;";
			tr.style.transform = `translate3d(${-max}px,0,0)`;
		}
	}, [sectionRef, innerRef, trackRef]);

	const syncMetrics = useCallback(() => {
		const vp = viewportRef.current;
		const tr = trackRef.current;
		const sec = sectionRef.current;
		const inner = innerRef.current;
		if (!vp || !tr || !sec || !inner) return;

		// Temporarily reset inner position to get natural scrollWidth
		const savedCss = inner.style.cssText;
		inner.style.cssText = "";
		const max = Math.max(0, tr.scrollWidth - vp.clientWidth);
		inner.style.cssText = savedCss;

		sec.dataset.scrollMax = String(max);
		sec.style.height = max > 0 ? `${window.innerHeight + max}px` : "";
		paintAll();
	}, [sectionRef, innerRef, viewportRef, trackRef, paintAll]);

	useEffect(() => {
		if (!enabled) return;
		const id = requestAnimationFrame(syncMetrics);
		return () => cancelAnimationFrame(id);
	}, [enabled, resetToken, syncMetrics]);

	useEffect(() => {
		if (!enabled) return;

		const ro =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(syncMetrics)
				: null;

		const attachRo = () => {
			if (!ro) return;
			const tr = trackRef.current;
			const vp = viewportRef.current;
			if (tr) ro.observe(tr);
			if (vp) ro.observe(vp);
		};
		attachRo();
		const rafId = requestAnimationFrame(attachRo);

		window.addEventListener("scroll", paintAll, { passive: true });
		window.addEventListener("resize", syncMetrics);

		return () => {
			cancelAnimationFrame(rafId);
			ro?.disconnect();
			window.removeEventListener("scroll", paintAll);
			window.removeEventListener("resize", syncMetrics);
			const sec = sectionRef.current;
			const tr = trackRef.current;
			const inner = innerRef.current;
			if (sec) {
				sec.style.height = "";
				delete sec.dataset.scrollMax;
			}
			if (tr) tr.style.transform = "";
			if (inner) inner.style.cssText = "";
		};
	}, [
		enabled,
		syncMetrics,
		paintAll,
		resetToken,
		sectionRef,
		innerRef,
		trackRef,
		viewportRef,
	]);
}

export default function MethodologySection() {
	const { t, lang } = useLanguage();
	const steps: Step[] = useMemo(
		() => (t.methodology?.steps ?? []) as Step[],
		[t.methodology?.steps],
	);

	const { reducedMotion, wheelLock } = useMethodologyInteractionMode();

	const sectionRef = useRef<HTMLElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	const resetToken = `${lang}:${steps.length}`;

	useScrollJailTrack(
		!reducedMotion && wheelLock,
		sectionRef,
		innerRef,
		viewportRef,
		trackRef,
		resetToken,
	);

	const why = t.homePage.whyChooseUs;
	const title = t.methodology.title;
	const subtitle = t.methodology.subtitle;

	if (reducedMotion) {
		return (
			<section className="relative bg-white min-h-fit py-40">
				<div className="max-w-7xl mx-auto px-6">
					<SectionHeader
						whyLabel={why}
						title={title}
						subtitle={subtitle}
						marginClass="mb-32"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{steps.map((step, i) => (
							<div
								key={i}
								className="p-8 sm:p-10 md:p-12 bg-gold rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-gold text-brand-900 hover:bg-gold/90 transition-all duration-500 group"
							>
								<div className="text-3xl sm:text-4xl font-black text-brand-900 mb-8 sm:mb-10">
									0{i + 1}
								</div>
								<h4 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tighter leading-none">
									{step.title}
								</h4>
								<p className="text-brand-900/80 font-medium group-hover:text-brand-900 transition-colors leading-relaxed text-sm sm:text-base">
									{step.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	if (!wheelLock) {
		return (
			<section
				ref={sectionRef}
				className="relative bg-white py-16 md:py-24"
			>
				<div className="max-w-7xl mx-auto px-6 w-full">
					<SectionHeader
						whyLabel={why}
						title={title}
						subtitle={subtitle}
						marginClass="mb-10 md:mb-14"
					/>
				</div>
				<div
					ref={viewportRef}
					className="w-full overflow-x-auto overflow-y-hidden px-6 pb-4 snap-x snap-mandatory"
					style={{ WebkitOverflowScrolling: "touch" }}
				>
					<div
						ref={trackRef}
						className="flex gap-4 md:gap-6 w-max pr-6"
					>
						{steps.map((step, i) => (
							<StepCard key={i} step={step} i={i} snapStart />
						))}
					</div>
				</div>
			</section>
		);
	}

	// Desktop: scroll jail + JS fake sticky
	return (
		<section ref={sectionRef} className="relative bg-white">
			{/* innerRef: position is controlled via JS (fixed → absolute → static) */}
			<div
				ref={innerRef}
				className="bg-white min-h-screen flex flex-col justify-start pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden"
			>
				<div className="max-w-7xl mx-auto px-6 w-full shrink-0">
					<SectionHeader
						whyLabel={why}
						title={title}
						subtitle={subtitle}
						marginClass="mb-10 md:mb-14"
					/>
				</div>
				<div ref={viewportRef} className="w-full overflow-hidden px-6">
					<div
						ref={trackRef}
						className="flex gap-4 md:gap-6 will-change-transform pb-2 pr-2"
					>
						{steps.map((step, i) => (
							<StepCard key={i} step={step} i={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
