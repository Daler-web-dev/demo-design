import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const BASE = "https://polyglot-school.uz";

export const metadata: Metadata = {
	metadataBase: new URL(BASE),
	title: {
		default: "Polyglot School — Языковая школа №1 в Самарканде",
		template: "%s | Polyglot School",
	},
	description:
		"Polyglot School — лучшая языковая школа в Самарканде. IELTS, General English, подготовка к TOEFL и CEFR. 10 филиалов, 6 преподавателей с IELTS 9.0.",
	keywords: [
		"языковая школа Самарканд",
		"IELTS Самарканд",
		"английский язык Самарканд",
		"Polyglot School",
		"курсы английского Самарканд",
		"ingliz tili Samarqand",
		"IELTS Samarqand",
	],
	authors: [{ name: "Polyglot School", url: BASE }],
	creator: "Polyglot School",
	openGraph: {
		type: "website",
		locale: "ru_UZ",
		alternateLocale: ["uz_UZ", "en_US"],
		url: BASE,
		siteName: "Polyglot School",
		title: "Polyglot School — Языковая школа №1 в Самарканде",
		description:
			"IELTS, General English, TOEFL, CEFR — 10 филиалов по Самарканду. 100 000+ выпускников.",
		images: [
			{
				url: "/logo-colorfull.png",
				width: 1200,
				height: 630,
				alt: "Polyglot School Samarkand",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Polyglot School — Языковая школа №1 в Самарканде",
		description:
			"IELTS, General English, TOEFL, CEFR — 10 филиалов по Самарканду. 100 000+ выпускников.",
		images: ["/logo-colorfull.png"],
	},
	alternates: {
		canonical: BASE,
	},
	icons: {
		icon: "/logo.png",
		apple: "/logo.png",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<body>
				<div className="grain" />
				<NextIntlClientProvider>
					<ClientLayout>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
