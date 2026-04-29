"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram, Menu, Phone, Send, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
	const { lang, setLang, t } = useLanguage();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const lastScrolled = useRef(false);
	const navSurfaceClass = scrolled
		? "bg-obsidian/90 backdrop-blur-2xl shadow-2xl border border-white/10"
		: "bg-white/50 backdrop-blur-md border border-obsidian/5";
	const navTextClass = scrolled ? "text-white" : "text-obsidian";
	const navMutedTextClass = scrolled
		? "text-white/60 hover:text-white"
		: "text-obsidian/60 hover:text-obsidian";
	const navDividerClass = scrolled ? "border-white/10" : "border-obsidian/10";
	const navHoverClass = scrolled ? "hover:bg-white/5" : "hover:bg-obsidian/5";

	const navLinks = [
		{ name: t.nav.home, path: "/" },
		{ name: t.nav.courses, path: "/courses" },
		{ name: t.nav.audit, path: "/#audit" },
		{ name: t.nav.vacancies, path: "/#vacancies" },
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

	return (
		<>
			<nav
				className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500`}
			>
				<div
					className={`overflow-hidden transition-all duration-500 ${navSurfaceClass} ${
						menuOpen ? "rounded-[2rem]" : "rounded-[2.5rem]"
					}`}
				>
					<div className="flex items-center justify-between px-8 h-20">
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
										navMutedTextClass
									} ${pathname === link.path ? navTextClass : ""}`}
								>
									{link.name}
									<span
										className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-500 ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
									></span>
								</Link>
							))}
						</div>

						<div className="flex items-center gap-4">
							<select
								value={lang}
								onChange={(e) =>
									setLang(
										e.target.value as "EN" | "RU" | "UZ",
									)
								}
								className={`text-xs font-black p-2 rounded-lg transition-all border bg-transparent ${scrolled ? "text-white border-white/20" : "text-obsidian border-obsidian/20"}`}
								aria-label={t.nav.languageSelect ?? "Language"}
							>
								<option value="EN" className="text-obsidian">
									EN
								</option>
								<option value="RU" className="text-obsidian">
									RU
								</option>
								<option value="UZ" className="text-obsidian">
									UZ
								</option>
							</select>
							<a
								href="tel:+998905033030"
								className="hidden sm:flex items-center bg-indigo-600 text-obsidian px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
							>
								<Phone className="w-4 h-4" color="white" />
							</a>
							<button
								type="button"
								onClick={() => setMenuOpen((prev) => !prev)}
								className={`md:hidden p-2 ${navTextClass}`}
								aria-label={
									menuOpen ? t.nav.closeMenu : t.nav.openMenu
								}
								aria-expanded={menuOpen}
								aria-controls="mobile-menu"
							>
								{menuOpen ? (
									<X className="w-8 h-8" />
								) : (
									<Menu className="w-8 h-8" />
								)}
							</button>
						</div>
					</div>

					<div
						id="mobile-menu"
						className={`md:hidden grid transition-all duration-500 ease-out ${
							menuOpen
								? "grid-rows-[1fr] opacity-100"
								: "grid-rows-[0fr] opacity-0"
						}`}
						aria-hidden={!menuOpen}
					>
						<div className="overflow-hidden">
							<div
								className={`border-t px-3 pb-3 pt-2 transition-all duration-500 ${
									navDividerClass
								} ${menuOpen ? "translate-y-0 scale-100" : "-translate-y-3 scale-[0.98]"}`}
							>
								<ul className="space-y-1">
									{navLinks.map((link) => (
										<li key={link.path}>
											<Link
												href={link.path}
												onClick={() =>
													setMenuOpen(false)
												}
												className={`group flex items-center justify-between rounded-[1.25rem] px-4 py-3 text-[15px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
													pathname === link.path
														? `${navTextClass} bg-gold/20 shadow-[inset_0_0_0_1px_rgba(255,215,0,0.14)]`
														: `${navMutedTextClass} ${navHoverClass}`
												}`}
											>
												<span>{link.name}</span>
												<span
													className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
														pathname === link.path
															? "bg-gold opacity-100"
															: scrolled
																? "bg-white/20 opacity-0 group-hover:opacity-100"
																: "bg-obsidian/20 opacity-0 group-hover:opacity-100"
													}`}
												></span>
											</Link>
										</li>
									))}
								</ul>

								<div
									className={`flex items-center gap-3 mt-3 border-t pt-3 ${navDividerClass}`}
								>
									<a
										href="tel:+998905033030"
										onClick={() => setMenuOpen(false)}
										className="w-fit flex items-center bg-indigo-600 text-white px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
									>
										<Phone
											className="w-4 h-4"
											color="white"
										/>
									</a>
									<a
										href="https://www.instagram.com/polyglot_language_school_/"
										onClick={() => setMenuOpen(false)}
										className="w-fit flex items-center bg-indigo-600 text-white px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
									>
										<Instagram
											className="w-4 h-4"
											color="white"
										/>
									</a>
									<a
										href="https://t.me/polyglot_language_school"
										onClick={() => setMenuOpen(false)}
										className="w-fit flex items-center bg-indigo-600 text-white px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
									>
										<Send
											className="w-4 h-4"
											color="white"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{menuOpen && (
				<div
					className="fixed inset-0 z-[90] md:hidden bg-transparent"
					onClick={() => setMenuOpen(false)}
					aria-hidden="true"
				></div>
			)}
		</>
	);
}
