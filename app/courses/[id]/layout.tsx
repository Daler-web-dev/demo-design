import type { Metadata } from "next";
import en from "@/messages/en.json";

const BASE = "https://polyglot-school.uz";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const course = (en.courses.list as { id: string; title: string; description: string; level: string }[]).find(
		(c) => c.id === id,
	);

	if (!course) {
		return { title: "Курс не найден" };
	}

	const title = `${course.title} (${course.level}) — Polyglot School`;
	const description = `${course.description} Запишитесь на бесплатный пробный урок в Polyglot School Самарканд.`;
	const url = `${BASE}/courses/${id}`;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
		},
	};
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
	return children;
}
