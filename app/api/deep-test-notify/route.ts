import { NextResponse } from "next/server";
import { DEEP_TEST_QUESTIONS } from "@/content/deep-test";

function calculateResult(answers: Record<number, number> | undefined) {
	if (!answers || typeof answers !== "object") return null;
	let correct = 0;
	for (const q of DEEP_TEST_QUESTIONS) {
		const correctAnswer = q.answers.find((a) => a.correct);
		if (correctAnswer && answers[q.id] === correctAnswer.id) correct++;
	}
	const total = DEEP_TEST_QUESTIONS.length;
	const percentage = total > 0 ? Math.round((correct / total) * 1000) / 10 : 0;
	return { correct, total, percentage };
}

export async function POST(request: Request) {
	try {
		const token = process.env.TELEGRAM_BOT_TOKEN;
		const chatId = process.env.TELEGRAM_CHAT_ID;

		if (!token || !chatId) {
			return NextResponse.json(
				{
					error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured",
				},
				{ status: 500 },
			);
		}

		const body = await request.json();
		const { name, phone, answers } = body as {
			name?: string;
			phone?: string;
			answers?: Record<number, number>;
		};

		if (!name?.trim() || !phone?.trim()) {
			return NextResponse.json(
				{ error: "name and phone are required" },
				{ status: 400 },
			);
		}

		const result = calculateResult(answers);
		const lines = [
			"🆕 *Новая заявка: Deep Audit*",
			"",
			`👤 *Имя:* ${name.trim()}`,
			`📞 *Телефон:* ${phone.trim()}`,
		];
		if (result) {
			lines.push(
				"",
				`📊 *Результат теста:* ${result.correct}/${result.total} (${result.percentage}%)`,
			);
		}
		lines.push("", "_Клиент прошёл тест. Ожидает обратного звонка._");
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
			console.error("Telegram API error:", res.status, err);
			return NextResponse.json(
				{ error: "Failed to send to Telegram" },
				{ status: 502 },
			);
		}

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Deep test notify error:", error);
		return NextResponse.json(
			{ error: "Failed to process request" },
			{ status: 500 },
		);
	}
}
