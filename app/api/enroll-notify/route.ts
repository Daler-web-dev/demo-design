import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const token = process.env.TELEGRAM_BOT_TOKEN;
		const chatId = process.env.TELEGRAM_CHAT_ID;

		if (!token || !chatId) {
			return NextResponse.json(
				{ error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured" },
				{ status: 500 },
			);
		}

		const body = await request.json();
		const { name, phone, course } = body as {
			name?: string;
			phone?: string;
			course?: string;
		};

		if (!name?.trim() || !phone?.trim()) {
			return NextResponse.json(
				{ error: "name and phone are required" },
				{ status: 400 },
			);
		}

		const lines = [
			"📝 *Новая заявка: Запись на курс*",
			"",
			`👤 *Имя:* ${name.trim()}`,
			`📞 *Телефон:* ${phone.trim()}`,
		];
		if (course?.trim()) {
			lines.push("", `📚 *Курс:* ${course.trim()}`);
		}
		lines.push("", "_Ожидает обратного звонка для записи на пробный урок._");
		const text = lines.join("\n");

		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: chatId,
				text,
				parse_mode: "Markdown",
			}),
		});

		if (!res.ok) {
			const err = await res.text();
			console.error("Telegram API error (enroll):", res.status, err);
			return NextResponse.json(
				{ error: "Failed to send to Telegram" },
				{ status: 502 },
			);
		}

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Enroll notify error:", error);
		return NextResponse.json(
			{ error: "Failed to process request" },
			{ status: 500 },
		);
	}
}
