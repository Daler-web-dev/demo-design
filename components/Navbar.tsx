"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
	const { lang, setLang, t } = useLanguage();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const lastScrolled = useRef(false);

	const navLinks = [
		{ name: t.nav.home, path: "/" },
		{ name: t.nav.courses, path: "/courses" },
		{ name: t.nav.about, path: "/about" },
		{ name: t.nav.contact, path: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const now = window.scrollY > SCROLL_THRESHOLD;
			if (lastScrolled.current !== now) {
				lastScrolled.current = now;
				setScrolled(now);
			}
		};
		lastScrolled.current = window.scrollY > SCROLL_THRESHOLD;
		setScrolled(lastScrolled.current);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<>
			<nav
				className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500`}
			>
				<div
					className={`rounded-[2.5rem] flex items-center justify-between px-8 h-20 transition-all duration-500 ${
						scrolled
							? "bg-obsidian/90 backdrop-blur-2xl shadow-2xl border border-white/10"
							: "bg-white/50 backdrop-blur-md border border-obsidian/5"
					}`}
				>
					<Link href="/" className="flex items-center space-x-3">
						<div className="relative w-10 h-10 min-w-10 rounded-xl overflow-hidden shrink-0">
							<Image
								src="/logo.png"
								alt="Polyglot"
								fill
								className="object-contain"
								sizes="56px"
								priority
							/>
						</div>
						{/* <span
							className={`text-2xl font-display font-black tracking-tighter ${scrolled ? "text-white" : "text-obsidian"}`}
						>
							POLYGLOT
						</span> */}
					</Link>

					<div className="hidden md:flex items-center space-x-10">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								href={link.path}
								className={`text-sm font-black uppercase tracking-widest transition-all relative group ${
									scrolled
										? "text-white/60 hover:text-white"
										: "text-obsidian/60 hover:text-obsidian"
								} ${pathname === link.path ? (scrolled ? "text-white" : "text-obsidian") : ""}`}
							>
								{link.name}
								<span
									className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-500 ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
								></span>
							</Link>
						))}
					</div>

					<div className="flex items-center gap-4">
						<button
							onClick={() => setLang(lang === "EN" ? "RU" : "EN")}
							className={`text-xs font-black p-2 rounded-lg transition-all border ${scrolled ? "text-white border-white/20" : "text-obsidian border-obsidian/20"}`}
						>
							{lang}
						</button>
						<Link
							href="/enroll"
							className="hidden sm:flex items-center bg-gold text-obsidian px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
						>
							{t.nav.enroll}
						</Link>
						<button
							type="button"
							onClick={() => setMenuOpen(true)}
							className={`md:hidden p-2 ${scrolled ? "text-white" : "text-obsidian"}`}
							aria-label="Open menu"
						>
							<Menu className="w-8 h-8" />
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu — отдельный слой, без вложенности в nav */}
			{menuOpen && (
				<div
					className="fixed inset-0 z-[200] bg-obsidian"
					aria-modal
					aria-label="Main menu"
				>
					<div className="h-full flex flex-col">
						<div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
							<Link
								href="/"
								onClick={() => setMenuOpen(false)}
								className="block w-12 h-12 relative rounded-xl overflow-hidden"
							>
								<Image
									src="/logo-colorfull.png"
									alt="Polyglot"
									fill
									className="object-contain"
									sizes="48px"
								/>
							</Link>
							<button
								type="button"
								onClick={() => setMenuOpen(false)}
								className="p-2 text-white"
								aria-label="Close menu"
							>
								<X className="w-8 h-8" />
							</button>
						</div>

						<div className="flex-1 py-8 px-6">
							<ul className="space-y-1">
								{navLinks.map((link) => (
									<li key={link.path}>
										<Link
											href={link.path}
											onClick={() => setMenuOpen(false)}
											className="block py-4 px-4 text-xl font-bold text-white hover:text-gold hover:bg-white/5 rounded-xl"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>

							<div className="mt-8 pt-6 border-t border-white/10">
								<Link
									href="/enroll"
									onClick={() => setMenuOpen(false)}
									className="block w-full py-4 text-center bg-gold text-obsidian font-black rounded-2xl text-lg"
								>
									{t.nav.enroll}
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
