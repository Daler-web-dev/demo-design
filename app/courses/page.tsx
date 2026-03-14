'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COURSES } from "@/translations";

export default function Courses() {
	const { t, lang } = useLanguage();
	const searchParams = useSearchParams();
	const categoryFromUrl = searchParams.get("category");

	const [filter, setFilter] = useState("All");
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (
			categoryFromUrl &&
			["Kids", "Teens", "Adults", "IELTS"].includes(categoryFromUrl)
		) {
			setFilter(categoryFromUrl);
		} else {
			setFilter("All");
		}
	}, [categoryFromUrl]);

	const filteredCourses = COURSES.filter((course) => {
		const matchesFilter = filter === "All" || course.category === filter;
		const matchesSearch = course.title[lang]
			.toLowerCase()
			.includes(search.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const categories = [
		{ name: t.courses.filters.all, value: "All" },
		{ name: t.courses.filters.kids, value: "Kids" },
		{ name: t.courses.filters.teens, value: "Teens" },
		{ name: t.courses.filters.adults, value: "Adults" },
		{ name: t.courses.filters.ielts, value: "IELTS" },
	];

	return (
		<div className="bg-white min-h-screen pt-48 pb-32">
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-24">
					<h1 className="text-6xl md:text-[10rem] font-display font-black tracking-tighter leading-none mb-12">
						CHOOSE <br />
						YOUR PATH.
					</h1>
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t-2 border-brand-900 pt-10">
						<div className="flex flex-wrap gap-3">
							{categories.map((cat) => (
								<button
									key={cat.value}
									onClick={() => setFilter(cat.value)}
									className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
										filter === cat.value
											? "bg-brand-900 text-white"
											: "bg-brand-50 text-brand-400 hover:bg-brand-100"
									}`}
								>
									{cat.name}
								</button>
							))}
						</div>
						<div className="relative w-full md:w-96">
							<Search className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-300" />
							<input
								type="text"
								placeholder="Search program..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full bg-brand-50 border-none rounded-2xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-brand-900 font-bold"
							/>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
					{filteredCourses.map((course) => (
						<Link
							href={`/courses/${course.id}`}
							key={course.id}
							className="group block"
						>
							<div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
								<img
									src={course.image}
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
									alt={course.title[lang]}
								/>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
							</div>
							<div className="flex items-start justify-between">
								<div>
									<div className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-3">
										{course.category} • {course.level}
									</div>
									<h3 className="text-4xl font-display font-black leading-tight mb-4 group-hover:text-brand-900">
										{course.title[lang]}
									</h3>
									<div className="text-2xl font-black text-brand-900/40">
										{course.price[lang]}
									</div>
								</div>
								<div className="w-16 h-16 rounded-full border-2 border-brand-100 flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-all">
									<ArrowUpRight className="w-8 h-8" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
