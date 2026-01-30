'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.courses, path: '/courses' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500`}>
      <div className={`rounded-[2.5rem] flex items-center justify-between px-8 h-20 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/90 backdrop-blur-2xl shadow-2xl border border-white/10' : 'bg-white/50 backdrop-blur-md border border-obsidian/5'
      }`}>
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-obsidian rounded-xl flex items-center justify-center text-white">
            <Zap className="w-6 h-6 text-gold fill-gold" />
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter ${scrolled ? 'text-white' : 'text-obsidian'}`}>POLYGLOT</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-black uppercase tracking-widest transition-all relative group ${
                scrolled ? 'text-white/60 hover:text-white' : 'text-obsidian/60 hover:text-obsidian'
              } ${pathname === link.path ? (scrolled ? 'text-white' : 'text-obsidian') : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-500 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => setLang(lang === 'EN' ? 'RU' : 'EN')}
            className={`text-xs font-black p-2 rounded-lg transition-all ${scrolled ? 'text-white border-white/20' : 'text-obsidian border-obsidian/20'} border`}
          >
            {lang}
          </button>
          <Link
            href="/enroll"
            className="hidden sm:flex items-center bg-gold text-obsidian px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-gold/20"
          >
            {t.nav.enroll}
          </Link>
          <button onClick={() => setIsOpen(true)} className={`md:hidden p-2 ${scrolled ? 'text-white' : 'text-obsidian'}`}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-obsidian text-white z-[110] flex flex-col p-12 animate-in fade-in zoom-in duration-500">
          <div className="flex justify-between items-center mb-20">
            <span className="text-3xl font-black italic">POLYGLOT.</span>
            <button onClick={() => setIsOpen(false)} className="p-4 bg-white/10 rounded-full"><X className="w-8 h-8" /></button>
          </div>
          <div className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-6xl font-display font-black uppercase tracking-tighter hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-white/10">
            <Link href="/enroll" onClick={() => setIsOpen(false)} className="block w-full py-8 bg-gold text-obsidian text-center rounded-[2rem] text-3xl font-black">
              Start Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
