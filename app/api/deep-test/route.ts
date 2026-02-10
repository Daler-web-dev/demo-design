import { NextResponse } from "next/server";
import {
  DEEP_TEST_TIME_MS,
  DEEP_TEST_QUESTIONS,
  type DeepTestQuestion,
} from "@/content/deep-test";

/** Клиенту отдаём только текст вопросов и варианты без признака правильного ответа */
export async function GET() {
  const questions = DEEP_TEST_QUESTIONS.map((q: DeepTestQuestion) => ({
    id: q.id,
    question: q.question,
    answers: q.answers.map((a) => ({ id: a.id, title: a.title })),
  }));

  return NextResponse.json({
    time: DEEP_TEST_TIME_MS,
    questions,
  });
}
