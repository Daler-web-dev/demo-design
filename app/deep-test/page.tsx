"use client";

import { useEffect, useState } from "react";
import DeepAudit from "@/components/DeepAudit";
import { useLanguage } from "@/context/LanguageContext";
import {
	DEEP_TEST_IMMERSIVE_EVENT,
	type DeepTestImmersiveDetail,
} from "@/lib/deep-test-ui";

export default function DeepTestPage() {
	const { t } = useLanguage();
	const [immersive, setImmersive] = useState(false);
	const [viewportNarrow, setViewportNarrow] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(max-width: 767px)");
		const syncVp = () => setViewportNarrow(mq.matches);
		syncVp();
		mq.addEventListener("change", syncVp);
		return () => mq.removeEventListener("change", syncVp);
	}, []);

	useEffect(() => {
		const onImmersive = (e: Event) => {
			const d = (e as CustomEvent<DeepTestImmersiveDetail>).detail;
			setImmersive(!!d?.active);
		};
		window.addEventListener(DEEP_TEST_IMMERSIVE_EVENT, onImmersive);
		return () =>
			window.removeEventListener(DEEP_TEST_IMMERSIVE_EVENT, onImmersive);
	}, []);

	const compactTop = immersive && viewportNarrow;

	return (
		<div
			className={`min-h-screen bg-obsidian text-white pb-20 selection:bg-gold selection:text-obsidian relative overflow-hidden ${
				compactTop ? "pt-2 max-md:pt-1 md:pt-40" : "pt-40"
			}`}
		>
			{/* Background Decor */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden">
				<span className="text-[60vw] font-black uppercase tracking-tighter italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-outline-white">
					{t.deepAudit.backgroundWord}
				</span>
			</div>

			<div className="max-w-5xl mx-auto px-6 relative z-10">
				<DeepAudit />
			</div>
		</div>
	);
}
