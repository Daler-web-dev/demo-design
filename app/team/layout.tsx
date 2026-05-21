import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Наша команда — 6 преподавателей с IELTS 9.0",
	description:
		"Познакомьтесь с командой Polyglot School. 6 преподавателей с максимальным баллом IELTS 9.0 — уникальный показатель среди языковых школ Узбекистана.",
	alternates: { canonical: "https://polyglot-school.uz/team" },
	openGraph: {
		title: "Команда | Polyglot School",
		description: "6 преподавателей с IELTS 9.0 — такого нет ни в одной школе Самарканда.",
		url: "https://polyglot-school.uz/team",
	},
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
	return children;
}
