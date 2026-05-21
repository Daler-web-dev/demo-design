import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Записаться на пробный урок — бесплатно",
	description:
		"Запишитесь на бесплатный пробный урок в Polyglot School. Наш консультант свяжется с вами в течение 24 часов.",
	alternates: { canonical: "https://polyglot-school.uz/enroll" },
	openGraph: {
		title: "Записаться | Polyglot School",
		description: "Бесплатный пробный урок в лучшей языковой школе Самарканда.",
		url: "https://polyglot-school.uz/enroll",
	},
};

export default function EnrollLayout({ children }: { children: React.ReactNode }) {
	return children;
}
