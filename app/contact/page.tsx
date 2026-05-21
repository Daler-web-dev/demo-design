"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Contact() {
	const { t } = useLanguage();

	return (
		<div className="bg-white min-h-screen">
			<section className="py-40 px-4 bg-gray-50 text-center">
				<h1 className="text-5xl font-display font-bold text-brand-900 mb-4">
					{t.nav.contact}
				</h1>
				<p className="text-xl text-gray-500">{t.contact.subtitle}</p>
			</section>

			<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
					<div>
						<div className="space-y-12">
							{/* <div className="flex items-start space-x-6">
								<div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
									<MapPin className="w-7 h-7" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-brand-900 mb-2">
										Location
									</h3>
									<p className="text-lg text-gray-500 leading-relaxed">
										{t.footer.address}
										<br />
										Samarkand, Uzbekistan 140100
									</p>
								</div>
							</div> */}

							<div className="flex items-start space-x-6">
								<div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
									<Phone className="w-7 h-7" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-brand-900 mb-2">
										{t.contact.phoneLabel}
									</h3>
									<a
										href="tel:+998557053030"
										className="text-lg text-gray-500"
									>
										+998 (55) 705 30 30
									</a>{" "}
									<br />
									<a
										href="tel:+998905033030"
										className="text-lg text-gray-500"
									>
										+998 (90) 503 30 30
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-6">
								<div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
									<Mail className="w-7 h-7" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-brand-900 mb-2">
										{t.contact.emailLabel}
									</h3>
									<p className="text-lg text-gray-500">
										hello@polyglot-school.uz
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-6">
								<div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
									<Clock className="w-7 h-7" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-brand-900 mb-2">
										{t.contact.hoursLabel}
									</h3>
									<p className="text-lg text-gray-500">
										{t.contact.hoursWeekdays}
									</p>
									<p className="text-lg text-gray-500">
										{t.contact.hoursSunday}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gray-200 rounded-[3rem] overflow-hidden h-[500px] relative shadow-inner">
						<div className="absolute inset-0 bg-brand-100 flex flex-col items-center justify-center p-12 text-center">
							<MapPin className="w-20 h-20 text-brand-300 mb-6" />
							<h3 className="text-2xl font-bold text-brand-900 mb-2">
								{t.contact.mapTitle}
							</h3>
							<p className="text-brand-700">
								{t.contact.mapDescription}
							</p>
							<Link
								href="/#locations"
								className="mt-8 bg-white text-brand-900 px-8 py-3 rounded-full font-bold shadow-lg"
							>
								{t.contact.showLocations}
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-gray-50 px-4">
				<div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl text-center">
					<MessageSquare className="w-12 h-12 text-brand-600 mx-auto mb-6" />
					<h2 className="text-3xl font-display font-bold text-brand-900 mb-4">
						{t.contact.questionsTitle}
					</h2>
					<p className="text-lg text-gray-500 mb-10">
						{t.contact.questionsSubtitle}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="https://t.me/polyglotlanguageschool"
							className="bg-brand-900 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center"
						>
							{t.contact.telegramCta}
						</a>
						{/* <a
							href="mailto:info@polyglot.uz"
							className="bg-gray-100 text-brand-900 px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center"
						>
							Send an Email
						</a> */}
					</div>
				</div>
			</section>
		</div>
	);
}
