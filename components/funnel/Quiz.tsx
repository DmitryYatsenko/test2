"use client";

import { useMemo, useState } from "react";
import { QUIZ_OPTIONS, QUIZ_QUESTIONS, resolveDominantShadow } from "./data";
import { ArchetypeKey } from "./types";

type QuizProps = {
  onComplete: (shadow: ArchetypeKey) => void;
};

export default function Quiz({ onComplete }: QuizProps) {
  // Answers map question ID -> selected score (0..3).
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showValidation, setShowValidation] = useState(false);

  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers],
  );

  const isComplete = answeredCount === QUIZ_QUESTIONS.length;

  const handleSelect = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateResult = () => {
    if (!isComplete) {
      setShowValidation(true);
      return;
    }

    const dominant = resolveDominantShadow(answers);
    onComplete(dominant);
  };

  return (
    <section id="quiz" className="px-4 pb-28 pt-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl font-semibold leading-tight">
          Диагностика теневого архетипа
        </h2>
        <p className="mt-3 text-sm text-zinc-300">
          Ответь на 12 вопросов. Это займёт около 3 минут.
        </p>

        <div className="mt-6 space-y-4">
          {QUIZ_QUESTIONS.map((question) => (
            <article
              key={question.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <p className="text-sm font-medium leading-relaxed text-zinc-100">
                {question.id}. {question.text}
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                {QUIZ_OPTIONS.map((option) => {
                  const checked = answers[question.id] === option.value;
                  return (
                    <label
                      key={option.label}
                      className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition ${
                        checked
                          ? "border-amber-300/70 bg-amber-400/10 text-amber-100"
                          : "border-zinc-700 bg-zinc-950/50 text-zinc-300 hover:border-zinc-500"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option.value}
                        checked={checked}
                        onChange={() => handleSelect(question.id, option.value)}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            Заполнено: {answeredCount} / {QUIZ_QUESTIONS.length}
          </p>
          <span className="text-xs uppercase tracking-[0.14em] text-zinc-500">
            Тест
          </span>
        </div>

        {showValidation && !isComplete ? (
          <p className="mt-3 text-sm text-rose-300">
            Ответь на все вопросы, чтобы получить точный результат.
          </p>
        ) : null}

        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-800 bg-zinc-950/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur">
          <div className="mx-auto max-w-md">
            <button
              type="button"
              onClick={calculateResult}
              className="min-h-12 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
            >
              Показать результат
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
