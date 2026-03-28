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
	"flex-none w-[min(88vw,20rem)] sm:w-[22rem] lg:w-[24rem] p-8 sm:p-10 md:p-12 bg-gold rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-gold text-brand-900 hover:bg-gold/90 transition-all duration-500 group";

const OFFSET_EPS = 0.5;
const SECTION_PIN_TOP_PX = 8;
const SECTION_MIN_VISIBLE_BOTTOM = 80;
const HEADER_TOP_CAP_PX = 200;
const HEADER_TOP_VH_RATIO = 0.36;
const HEADER_MIN_VISIBLE = 48;
const TRACK_VIEWPORT_MARGIN = 32;
const TRACK_MIN_VISIBLE = 48;

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
	{
		whyLabel: string;
		title: string;
		subtitle: string;
		marginClass: string;
	}
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

/** reduced-motion → grid; coarse pointer → native horizontal strip; fine → wheel-driven sticky */
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

	return {
		reducedMotion,
		/** true = перехват wheel + translate; false = overflow-x на тач */
		wheelLock: finePointer,
	};
}

/**
 * Горизонтальный сдвиг только через DOM (без лишних ре-рендеров).
 * Горизонталь начинается только когда заголовок в верхней зоне и лента карточек в кадре;
 * при offset > 0 колесо по-прежнему откатывает ленту назад.
 */
function useWheelDrivenTrack(
	enabled: boolean,
	sectionRef: React.RefObject<HTMLElement | null>,
	headerRef: React.RefObject<HTMLDivElement | null>,
	viewportRef: React.RefObject<HTMLDivElement | null>,
	trackRef: React.RefObject<HTMLDivElement | null>,
	resetToken: string,
) {
	const offsetRef = useRef(0);
	const maxRef = useRef(0);

	const paintTransform = useCallback(() => {
		const tr = trackRef.current;
		if (!tr) return;
		const max = maxRef.current;
		if (max <= OFFSET_EPS) {
			tr.style.transform = "";
			return;
		}
		tr.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
	}, []);

	const syncMetrics = useCallback(() => {
		const vp = viewportRef.current;
		const tr = trackRef.current;
		if (!vp || !tr) return;
		const max = Math.max(0, tr.scrollWidth - vp.clientWidth);
		maxRef.current = max;
		offsetRef.current = Math.min(offsetRef.current, max);
		paintTransform();
	}, [paintTransform]);

	useEffect(() => {
		if (!enabled) return;
		offsetRef.current = 0;
		let id = requestAnimationFrame(() => syncMetrics());
		return () => cancelAnimationFrame(id);
	}, [enabled, resetToken, syncMetrics]);

	useEffect(() => {
		if (!enabled) return;

		const onWheel = (e: WheelEvent) => {
			const sec = sectionRef.current;
			const tr = trackRef.current;
			const head = headerRef.current;
			if (!sec || !tr || !head) return;

			const max = maxRef.current;
			if (max <= OFFSET_EPS) return;

			const s = sec.getBoundingClientRect();
			if (s.top > SECTION_PIN_TOP_PX || s.bottom < SECTION_MIN_VISIBLE_BOTTOM) {
				return;
			}

			const vh = window.innerHeight;
			const headBox = head.getBoundingClientRect();
			const trackBox = tr.getBoundingClientRect();

			const headerTopLimit = Math.min(HEADER_TOP_CAP_PX, vh * HEADER_TOP_VH_RATIO);
			const headerAnchored =
				headBox.top <= headerTopLimit && headBox.bottom > HEADER_MIN_VISIBLE;
			const trackVisible =
				trackBox.top < vh - TRACK_VIEWPORT_MARGIN &&
				trackBox.bottom > TRACK_MIN_VISIBLE;
			const readyToStart = headerAnchored && trackVisible;

			const offset = offsetRef.current;
			const dy = e.deltaY;

			if (offset <= OFFSET_EPS) {
				if (!readyToStart) return;
				if (dy <= 0) return;
				e.preventDefault();
				offsetRef.current = Math.min(max, offset + dy);
				paintTransform();
				return;
			}

			if (dy > 0) {
				if (offset >= max - OFFSET_EPS) return;
				e.preventDefault();
				offsetRef.current = Math.min(max, offset + dy);
				paintTransform();
				return;
			}

			e.preventDefault();
			offsetRef.current = Math.max(0, offset + dy);
			paintTransform();
		};

		window.addEventListener("wheel", onWheel, { passive: false });
		return () => window.removeEventListener("wheel", onWheel);
	}, [enabled, paintTransform, sectionRef, headerRef, trackRef]);

	useEffect(() => {
		if (!enabled) return;

		let innerRaf = 0;
		const outerRaf = requestAnimationFrame(() => {
			innerRaf = requestAnimationFrame(syncMetrics);
		});

		const ro =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(syncMetrics)
				: null;

		const attachTargets = () => {
			const tr = trackRef.current;
			const vp = viewportRef.current;
			if (!ro) return;
			if (tr) ro.observe(tr);
			if (vp) ro.observe(vp);
		};
		attachTargets();
		const obsRaf = requestAnimationFrame(attachTargets);

		window.addEventListener("resize", syncMetrics);

		return () => {
			cancelAnimationFrame(outerRaf);
			cancelAnimationFrame(innerRaf);
			cancelAnimationFrame(obsRaf);
			ro?.disconnect();
			window.removeEventListener("resize", syncMetrics);
			const tr = trackRef.current;
			if (tr) tr.style.transform = "";
		};
	}, [enabled, syncMetrics, resetToken]);
}

export default function MethodologySection() {
	const { t, lang } = useLanguage();
	const steps: Step[] = useMemo(
		() => (t.methodology?.steps ?? []) as Step[],
		[t.methodology?.steps],
	);

	const { reducedMotion, wheelLock } = useMethodologyInteractionMode();

	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	const resetToken = `${lang}:${steps.length}`;

	useWheelDrivenTrack(
		!reducedMotion && wheelLock,
		sectionRef,
		headerRef,
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
			<section ref={sectionRef} className="relative bg-white py-16 md:py-24">
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
					<div ref={trackRef} className="flex gap-4 md:gap-6 w-max pr-6">
						{steps.map((step, i) => (
							<StepCard key={i} step={step} i={i} snapStart />
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section ref={sectionRef} className="relative bg-white">
			<div className="sticky top-0 min-h-screen flex flex-col justify-start pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 w-full shrink-0">
					<SectionHeader
						ref={headerRef}
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
