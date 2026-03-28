"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type PrivacySection = {
	title: string;
	paragraphs: string[];
};

export default function PrivacyPage() {
	const { t } = useLanguage();
	const p = t.privacyPage as {
		title: string;
		updated: string;
		intro: string;
		backHome: string;
		sections: PrivacySection[];
		contactBlockTitle: string;
		contactPageLink: string;
	};

	const sections = (p?.sections ?? []) as PrivacySection[];

	return (
		<div className="bg-white min-h-screen pt-[100px]">
			<div className="bg-brand-50 border-b border-brand-100">
				<div className="max-w-3xl mx-auto px-6 py-10">
					<Link
						href="/"
						className="inline-flex items-center text-brand-600 hover:text-gold text-sm font-bold mb-6 transition-colors group"
					>
						<ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
						{p.backHome}
					</Link>
					<h1 className="text-4xl md:text-5xl font-display font-black text-obsidian tracking-tight">
						{p.title}
					</h1>
					<p className="mt-4 text-sm font-bold uppercase tracking-widest text-brand-600">
						{p.updated}
					</p>
				</div>
			</div>

			<article className="max-w-3xl mx-auto px-6 py-14 md:py-20">
				<p className="text-lg text-gray-600 leading-relaxed mb-12">
					{p.intro}
				</p>

				<div className="space-y-12">
					{sections.map((section, i) => (
						<section key={i}>
							<h2 className="text-xl md:text-2xl font-black text-brand-900 mb-4 tracking-tight">
								{section.title}
							</h2>
							<div className="space-y-4 text-gray-600 leading-relaxed">
								{section.paragraphs.map((para, j) => (
									<p key={j}>{para}</p>
								))}
							</div>
						</section>
					))}
				</div>

				<div className="mt-16 p-8 rounded-3xl bg-obsidian text-white">
					<h2 className="text-lg font-black uppercase tracking-widest text-gold mb-4">
						{p.contactBlockTitle}
					</h2>
					<p className="text-white/80 leading-relaxed mb-4">
						<a
							href="tel:+998557053030"
							className="text-gold font-bold hover:underline"
						>
							+998 (55) 705 30 30
						</a>
						{" · "}
						<a
							href="tel:+998905033030"
							className="text-gold font-bold hover:underline"
						>
							+998 (90) 503 30 30
						</a>
					</p>
					<Link
						href="/contact"
						className="inline-block text-sm font-bold text-white/90 hover:text-gold underline-offset-4 hover:underline"
					>
						{p.contactPageLink}
					</Link>
				</div>
			</article>
		</div>
	);
}
