'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BRANCHES = ['Gagarina', 'Gelion', 'Vokzal', 'Marhabo', 'Sadriddin Ayniy', 'Qorasuv', 'Oqmachit'];

export default function Enroll() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const name = (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim() ?? '';
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.trim() ?? '';
    const branch = (form.querySelector('[name="branch"]') as HTMLSelectElement)?.value ?? '';
    try {
      await fetch('/api/enroll-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, branch }),
      });
    } catch (err) {
      console.error('Enroll notify failed:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-display font-bold text-brand-900 mb-4">{t.enrollForm.success}</h2>
          <p className="text-gray-500 mb-10">{t.enrollForm.successDetails}</p>
          <Link href="/" className="inline-flex items-center text-brand-600 font-bold hover:underline">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.enrollForm.backHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] py-16 px-4 flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">{t.enrollForm.title}</h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">{t.enrollForm.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.enrollForm.name}</label>
              <input
                name="name"
                required
                type="text"
                placeholder={t.enrollForm.namePlaceholder}
                className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-500 transition-all text-brand-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.enrollForm.phone}</label>
              <input
                name="phone"
                required
                type="tel"
                placeholder="+998 (__) ___-__-__"
                className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-500 transition-all text-brand-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{t.enrollForm.branch}</label>
              <select name="branch" required className="w-full bg-gray-50 border-gray-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-500 transition-all text-brand-900 outline-none appearance-none">
                <option value="">{t.enrollForm.branchPlaceholder}</option>
                {BRANCHES.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <button
              disabled={loading}
              className={`w-full py-5 bg-brand-900 text-white rounded-2xl font-bold text-xl hover:bg-brand-800 transition-all flex items-center justify-center shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {t.enrollForm.submit}
                  <Send className="ml-3 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="hidden lg:block relative">
          <img src="https://picsum.photos/seed/enroll1/800/1000" alt={t.enrollForm.heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/10 backdrop-blur-[2px]"></div>
          <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-900 rounded-full flex items-center justify-center text-white font-bold text-xl">&quot;</div>
              <div className="font-bold text-brand-900">{t.enrollForm.quoteAuthor}</div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">
              &quot;{t.enrollForm.quoteText}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
