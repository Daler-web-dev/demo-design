import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Контакты — 10 филиалов по Самарканду",
	description:
		"Адреса, телефоны и режим работы всех 10 филиалов Polyglot School в Самарканде. Звоните: +998 55 705 30 30.",
	alternates: { canonical: "https://polyglot-school.uz/contact" },
	openGraph: {
		title: "Контакты | Polyglot School Самарканд",
		description: "10 филиалов в Самарканде. Телефон: +998 55 705 30 30.",
		url: "https://polyglot-school.uz/contact",
	},
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return children;
}
