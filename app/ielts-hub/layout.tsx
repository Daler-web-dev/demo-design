import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IELTS Hub — Подготовка к IELTS в Самарканде",
	description:
		"Polyglot IELTS Hub — специализированный центр подготовки к IELTS. Преподаватели с IELTS 9.0, малые группы, гарантированный результат.",
	alternates: { canonical: "https://polyglot-school.uz/ielts-hub" },
	openGraph: {
		title: "IELTS Hub | Polyglot School",
		description:
			"Лучшая подготовка к IELTS в Самарканде. 6 преподавателей с IELTS 9.0.",
		url: "https://polyglot-school.uz/ielts-hub",
	},
};

export default function IeltsHubLayout({ children }: { children: React.ReactNode }) {
	return children;
}
