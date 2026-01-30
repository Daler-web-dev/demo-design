import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY not configured' }, { status: 500 });
    }

    const body = await request.json();
    const { message, lang } = body as { message?: string; lang?: string };
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const langLabel = lang === 'RU' ? 'Russian' : 'English';
    const prompt = `You are a helpful educational advisor for "Polyglot School" in Samarkand.
User asked: "${message}"
Language: ${langLabel}.
Context: We offer "General English" (Adults), "IELTS Mastery" (Teens/Adults), and "Kids Adventures" (7-12 years).
Provide a short, motivating, and helpful answer (max 3 sentences) in ${langLabel}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });

    const text = response.text ?? (lang === 'RU' ? 'Простите, я не смог обработать ваш запрос.' : 'Sorry, I could not process your request.');
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Advisor API Error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
