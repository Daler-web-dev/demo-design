import type { MetadataRoute } from "next";

const BASE = "https://polyglot-school.uz";

const COURSE_IDS = [
	"azero-pre-elementary",
	"a1-plus-beginner",
	"a1-plus-elementary",
	"b1-pre-intermediate",
	"b1-plus-intermediate",
	"b2-upper-intermediate",
	"b2-plus-advanced-foundation",
	"kids-family-friends-1",
	"kids-family-friends-2",
	"kids-family-friends-3",
	"cefr-dtm-prep",
	"toefl-prep",
	"duolingo-prep",
	"ielts-intensive",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
		{ url: `${BASE}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE}/students`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE}/ielts-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
		{ url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE}/enroll`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${BASE}/deep-test`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
		{ url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
		{ url: `${BASE}/oferta`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
	];

	const courseRoutes: MetadataRoute.Sitemap = COURSE_IDS.map((id) => ({
		url: `${BASE}/courses/${id}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticRoutes, ...courseRoutes];
}
