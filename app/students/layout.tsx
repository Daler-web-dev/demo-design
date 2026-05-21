import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Наши результаты — 100 000+ выпускников с IELTS и CEFR",
	description:
		"Более 100 000 студентов Polyglot School получили IELTS, CEFR и другие международные сертификаты. Реальные результаты лучшей языковой школы Самарканда.",
	alternates: { canonical: "https://polyglot-school.uz/students" },
	openGraph: {
		title: "Наши результаты | Polyglot School",
		description:
			"100 000+ студентов с международными сертификатами IELTS и CEFR. Смотрите реальные результаты.",
		url: "https://polyglot-school.uz/students",
	},
};

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
	return children;
}
