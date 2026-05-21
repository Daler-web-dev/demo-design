"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, Suspense } from "react";

function Bar() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [active, setActive] = useState(false);
	const [width, setWidth] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const crawlRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const pathRef = useRef(pathname + searchParams.toString());

	const stopCrawl = () => {
		if (crawlRef.current) {
			clearInterval(crawlRef.current);
			crawlRef.current = null;
		}
	};

	useEffect(() => {
		const path = pathname + searchParams.toString();
		if (path === pathRef.current) return;
		pathRef.current = path;

		stopCrawl();
		setWidth(100);
		setOpacity(1);

		const fadeTimer = setTimeout(() => {
			setOpacity(0);
			setTimeout(() => {
				setActive(false);
				setWidth(0);
				setOpacity(1);
			}, 300);
		}, 200);

		return () => clearTimeout(fadeTimer);
	}, [pathname, searchParams]);

	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const anchor = (e.target as HTMLElement).closest("a");
			if (!anchor) return;
			const href = anchor.getAttribute("href");
			if (!href || /^(https?:\/\/|\/\/|#|mailto:|tel:)/.test(href)) return;

			// Same-page hash navigation — no real route change, skip the bar
			if (href.includes("#")) {
				const hrefPath = href.split("#")[0] || "/";
				if (!hrefPath || hrefPath === pathname) return;
			}

			stopCrawl();
			setActive(true);
			setOpacity(1);
			setWidth(8);

			let w = 8;
			crawlRef.current = setInterval(() => {
				w = Math.min(w + Math.random() * 9 + 3, 82);
				setWidth(w);
				if (w >= 82) stopCrawl();
			}, 350);
		};

		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("click", onClick);
			stopCrawl();
		};
	}, []);

	if (!active) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 9999,
				height: 3,
				width: `${width}%`,
				opacity,
				transition: "width 0.35s ease, opacity 0.3s ease",
				background: "linear-gradient(to right, #F59220, #fbbf24)",
				boxShadow: "0 0 10px rgba(245, 146, 32, 0.7)",
				borderRadius: "0 2px 2px 0",
			}}
		/>
	);
}

export default function NavigationProgress() {
	return (
		<Suspense>
			<Bar />
		</Suspense>
	);
}
