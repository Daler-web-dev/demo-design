'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeminiAdvisor from '@/components/GeminiAdvisor';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-gold selection:text-obsidian">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <GeminiAdvisor />
      </div>
    </LanguageProvider>
  );
}
