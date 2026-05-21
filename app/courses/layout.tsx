import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Курсы английского — IELTS, General English, TOEFL",
	description:
		"Все курсы Polyglot School: General English (A0–C1), IELTS Intensive, TOEFL, CEFR/DTM, Duolingo, English for Kids. Запишитесь на бесплатный пробный урок.",
	alternates: { canonical: "https://polyglot-school.uz/courses" },
	openGraph: {
		title: "Курсы английского | Polyglot School Самарканд",
		description:
			"General English, IELTS, TOEFL, CEFR/DTM, Duolingo и English for Kids. 14 программ на любой уровень.",
		url: "https://polyglot-school.uz/courses",
	},
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
	return children;
}
