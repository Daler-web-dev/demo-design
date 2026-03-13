'use client';

import React from 'react';
import { ShieldCheck, Globe2, Award, Users2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-900 mb-8">Our Mission</h1>
          <p className="text-2xl text-gray-500 leading-relaxed">
            Since 2012, Polyglot School has been dedicated to breaking language barriers and empowering citizens of Samarkand to communicate with the world.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: 'Quality First', desc: 'Rigorous academic standards and constant monitoring of student progress.' },
              { icon: Globe2, title: 'International Focus', desc: 'Preparing students for international exams and global opportunities.' },
              { icon: Users2, title: 'Community', desc: 'Not just a school, but a space for cultural exchange and friendship.' },
              { icon: Award, title: 'Results', desc: 'Our success is measured by the achievements of our alumni.' }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                  <v.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-4">{v.title}</h3>
                <p className="text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Meet the Experts</h2>
            <p className="text-brand-300 text-lg">Our teaching staff consists of certified native speakers and local experts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-6">
                  <img src={`https://picsum.photos/seed/teacher${member}/600/800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Teacher" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold">Alexander Wright</h4>
                <p className="text-brand-400">Senior IELTS Instructor (UK)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold text-brand-900 mb-8">Modern Campus</h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                Our learning center in Samarkand is equipped with the latest technology to make learning engaging. Interactive boards, dedicated speaking clubs, and a modern library are at your service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <img src="https://picsum.photos/seed/class1/600/400" className="rounded-2xl w-full h-40 object-cover" alt="Campus" />
                <img src="https://picsum.photos/seed/class2/600/400" className="rounded-2xl w-full h-40 object-cover" alt="Campus" />
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img src="https://picsum.photos/seed/class3/800/1000" className="rounded-[3rem] w-full h-auto shadow-2xl" alt="Campus" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
