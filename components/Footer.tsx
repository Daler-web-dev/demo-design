"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
	const { t } = useLanguage();
	return (
		<footer className="bg-obsidian text-white py-32 border-t border-white/5">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-20">
					<div>
						<Link href="/" className="inline-block mb-10">
							<div className="relative w-40 h-40 rounded-xl overflow-hidden">
								<Image
									src="/logo-colorfull.png"
									alt="Polyglot"
									fill
									className="object-contain"
									sizes="160px"
								/>
							</div>
						</Link>
						<h2 className="text-7xl font-display font-black mb-10 leading-[0.9] tracking-tighter">
							{t.footer.headlineLine1} <br />
							{t.footer.headlineLine2}{" "}
							<span className="text-indigo-500">
								{t.footer.headlineHighlight}
							</span>
						</h2>
						<div className="flex space-x-4">
							<a
								href="https://www.instagram.com/polyglot_school_sam/"
								target="_blank"
								className="p-4 bg-white/5 rounded-2xl hover:bg-gold transition-colors group cursor-pointer"
							>
								<Instagram className="w-6 h-6 group-hover:text-obsidian" />
							</a>
							{/* <div className="p-4 bg-white/5 rounded-2xl hover:bg-gold transition-colors group cursor-pointer">
								<Facebook className="w-6 h-6 group-hover:text-obsidian" />
							</div> */}
							<a
								href="https://t.me/polyglot_language_school"
								target="_blank"
								className="p-4 bg-white/5 rounded-2xl hover:bg-gold transition-colors group cursor-pointer"
							>
								<Send className="w-6 h-6 group-hover:text-obsidian" />
							</a>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-10">
						<div>
							<h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
								{t.footer.navigationTitle}
							</h4>
							<ul className="space-y-4 font-bold text-lg">
								<li>
									<Link
										href="/courses"
										className="hover:text-gold"
									>
										{t.nav.courses}
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="hover:text-gold"
									>
										{t.nav.about}
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-gold"
									>
										{t.nav.contact}
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
								{t.footer.hqTitle}
							</h4>
							<a
								href="tel:+998557053030"
								className="text-indigo-400 font-black"
							>
								+998 (55) 705 30 30
							</a>{" "}
							<br />
							<a
								href="tel:+998905033030"
								className="text-indigo-400 font-black"
							>
								+998 (90) 503 30 30
							</a>
						</div>
					</div>
				</div>
				<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
					<span>{t.footer.rights}</span>
					<span>{t.footer.tagline}</span>
				</div>
			</div>
		</footer>
	);
}
