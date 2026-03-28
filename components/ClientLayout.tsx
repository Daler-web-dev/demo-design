"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeminiAdvisor from "@/components/GeminiAdvisor";
import {
	DEEP_TEST_IMMERSIVE_EVENT,
	type DeepTestImmersiveDetail,
} from "@/lib/deep-test-ui";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [deepTestImmersive, setDeepTestImmersive] = useState(false);
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
			const active = !!d?.active;
			setDeepTestImmersive(active);
		};
		window.addEventListener(DEEP_TEST_IMMERSIVE_EVENT, onImmersive);
		return () => {
			window.removeEventListener(DEEP_TEST_IMMERSIVE_EVENT, onImmersive);
		};
	}, []);

	const hideSiteChrome = deepTestImmersive && viewportNarrow;

	useEffect(() => {
		document.body.classList.toggle("deep-test-immersive", hideSiteChrome);
		return () => document.body.classList.remove("deep-test-immersive");
	}, [hideSiteChrome]);

	return (
		<div className="min-h-screen flex flex-col font-sans selection:bg-gold selection:text-obsidian">
			{!hideSiteChrome && <Navbar />}
			<main className="flex-grow">{children}</main>
			{!hideSiteChrome && <Footer />}
			{!hideSiteChrome && <GeminiAdvisor />}
		</div>
	);
}
