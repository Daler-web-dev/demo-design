"use client";

import React from "react";
import Link from "next/link";
import { Award, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Teacher = {
  nameEn: string;
  nameRu: string;
  image: string;
  folder: string;
  ielts9: boolean;
};

export default function TeamPage() {
  const { t, lang } = useLanguage();
  const teachers = t.staffPage.allTeachers as Teacher[];
  const nameKeyByLang = {
    EN: "nameEn",
    RU: "nameRu",
    UZ: "nameEn",
  } as const;
  const nameKey = nameKeyByLang[lang] ?? "nameEn";

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-sm font-bold uppercase tracking-widest mb-16 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.staffPage.backHome}
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none uppercase tracking-tighter mb-6">
            {t.staffPage.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            {t.staffPage.subtitle}
          </p>
        </div>

        {/* Единая команда — все в одной сетке, IELTS 9 только как опциональный бейдж */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
            {teachers.map((teacher, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[3/4] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-gold/10">
                  <img
                    src={`/${teacher.folder}/${teacher.image}`}
                    alt={teacher[nameKey]}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-85" />
                  {teacher.ielts9 && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-2 py-1.5 rounded-lg flex items-center gap-1 group-hover:bg-gold/90 transition-colors duration-300">
                        <span className="text-sm font-black group-hover:text-obsidian">9</span>
                        <span className="text-[6px] font-black uppercase tracking-widest opacity-70 group-hover:text-obsidian">
                          IELTS
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-gold" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-gold">
                        {t.staffPage.roleLabel}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-black uppercase tracking-tighter group-hover:text-gold transition-colors">
                      {teacher[nameKey]}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
