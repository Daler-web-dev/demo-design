/**
 * Единственный файл с контентом глубокого теста.
 * Редактируйте вопросы и ответы здесь — правильные ответы хранятся только на сервере
 * и не отправляются клиенту (через консоль нельзя подсмотреть).
 */

export const DEEP_TEST_TIME_MS = 30 * 60 * 1000; // 30 минут

export interface DeepTestAnswer {
  id: number;
  title: string;
  /** Правильный ответ — только на сервере, клиенту не отдаётся */
  correct: boolean;
}

export interface DeepTestQuestion {
  id: number;
  question: string;
  answers: DeepTestAnswer[];
}

export const DEEP_TEST_QUESTIONS: DeepTestQuestion[] = [
  {
    id: 1,
    question: "I ____ got a computer but I've got a tablet.",
    answers: [
      { id: 1, title: "don't", correct: false },
      { id: 2, title: "'ve", correct: false },
      { id: 3, title: "haven't", correct: true },
    ],
  },
  {
    id: 2,
    question:
      "Sue: I love Rita Ora! _____ her? Mike: No. I prefer Ed Sheeran.",
    answers: [
      { id: 1, title: "Do you like", correct: true },
      { id: 2, title: "Are you like", correct: false },
      { id: 3, title: "Does you like", correct: false },
    ],
  },
  {
    id: 3,
    question:
      "Marie: _____ play a musical instrument, John? John: Yes. I play the piano.",
    answers: [
      { id: 1, title: "Can you", correct: true },
      { id: 2, title: "Do you can", correct: false },
      { id: 3, title: "Are you", correct: false },
    ],
  },
  {
    id: 4,
    question: "Where ______ your parents live?",
    answers: [
      { id: 1, title: "is", correct: false },
      { id: 2, title: "does", correct: false },
      { id: 3, title: "do", correct: true },
    ],
  },
  {
    id: 5,
    question:
      "I _____ English at the moment. I'm doing my homework.",
    answers: [
      { id: 1, title: "don't study", correct: false },
      { id: 2, title: "not studying", correct: false },
      { id: 3, title: "am not studying", correct: true },
    ],
  },
];
