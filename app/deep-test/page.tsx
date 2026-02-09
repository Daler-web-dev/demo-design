"use client";

import DeepAudit from "@/components/DeepAudit";
import { useLanguage } from "@/context/LanguageContext";

export default function DeepTestPage() {
	const { t } = useLanguage();

	return (
		<div className="min-h-screen bg-obsidian text-white pt-40 pb-20 selection:bg-gold selection:text-obsidian relative overflow-hidden">
			{/* Background Decor */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden">
				<span className="text-[60vw] font-black uppercase tracking-tighter italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-outline-white">
					{t.deepAudit.backgroundWord}
				</span>
			</div>

			<div className="max-w-4xl mx-auto px-6 relative z-10">
				<DeepAudit />
			</div>
		</div>
	);
}
