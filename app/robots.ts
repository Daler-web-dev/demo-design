import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/enroll/success"],
		},
		sitemap: "https://polyglot-school.uz/sitemap.xml",
	};
}
