import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PrestigeSection = ({ lang }: { lang: string }) => {
	const { t } = useLanguage();
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handlePlay = () => {
		setIsPlaying(true);
		if (videoRef.current) {
			videoRef.current.play();
		}
	};

	const videoURL = {
		RU: "https://www.youtube.com/embed/wn-h1-9ofwg",
		UZ: "https://www.youtube.com/embed/hYLCpAvfkrA",
		EN: "https://www.youtube.com/embed/hYLCpAvfkrA",
	};

	return (
		<section
			id="prestige-section"
			className="relative py-24 lg:py-32 overflow-hidden"
		>
			{/* Background elements - Large "01" for subconscious impact */}
			<div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black tracking-tighter text-brand-900 select-none leading-none">
					01
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
					{/* Left Column - The Big Statement (F-Pattern Focal Point) */}
					<div className="lg:col-span-7">
						<div>
							<div className="flex items-center space-x-4 mb-10">
								<div className="h-[1px] w-16 bg-gold"></div>
								<span className="text-gold text-xs font-black uppercase tracking-[0.6em]">
									{t.prestige.badge}
								</span>
							</div>

							<h2 className="text-[10vw] lg:text-[6rem] font-display font-black leading-[0.85] tracking-tighter text-brand-800 uppercase mb-8">
								{t.prestige.numberWord} <br />
								<span className="text-gold">
									{t.prestige.oneWord}
								</span>
							</h2>

							<div className="max-w-2xl">
								<p className="text-xl md:text-2xl text-slate-500 font-medium leading-snug tracking-tight">
									{t.prestige.descriptionBeforeHighlight}
									<span className="text-gold font-bold">
										{t.prestige.descriptionHighlight}
									</span>
								</p>
							</div>
						</div>
					</div>
					{/* Right Column - Video Player Placeholder */}
					<div className="lg:col-span-5">
						<div className="relative">
							<div className="absolute -inset-10 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

							<div className="relative z-10 overflow-hidden rounded-[3rem] border border-brand-100 bg-brand-900 shadow-2xl">
								<div className="aspect-video w-full relative">
									{isPlaying ? (
										<iframe
											className="h-full w-full object-cover"
											src={
												videoURL[
													lang as "UZ" | "RU" | "EN"
												]
											}
											title={t.prestige.videoBadge}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									) : (
										<img
											className="h-full w-full object-cover"
											src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=1200"
										/>
									)}

									{!isPlaying && (
										<>
											<div className="absolute inset-0 bg-gradient-to-tr from-brand-900/70 via-brand-900/30 to-transparent" />

											<button
												type="button"
												onClick={handlePlay}
												className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
											>
												<div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/40 shadow-[0_18px_45px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform">
													<div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold shadow-[0_12px_30px_rgba(212,175,55,0.5)]">
														<span className="ml-1 inline-block w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-white" />
													</div>
												</div>
												<div className="text-center px-6">
													<p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-gold mb-2">
														{t.prestige.videoBadge}
													</p>
													<p className="text-sm md:text-base font-medium text-indigo-50">
														{
															t.prestige
																.videoTitleLine1
														}
														<br />
														{
															t.prestige
																.videoTitleLine2
														}
													</p>
												</div>
											</button>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrestigeSection;
