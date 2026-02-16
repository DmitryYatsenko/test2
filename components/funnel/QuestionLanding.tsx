"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "./BackButton";
import {
  QUESTION_VISUALS,
  QUIZ_OPTIONS,
  QUIZ_QUESTIONS,
  resolveArchetypeProfile,
} from "./data";
import { LandingTrack } from "./types";

type QuestionLandingProps = {
  track: LandingTrack;
  step: number;
  answersParam?: string;
};

const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;

function normalizeAnswers(serialized?: string): string {
  const fallback = "x".repeat(TOTAL_QUESTIONS);
  if (!serialized) return fallback;

  const trimmed = serialized.slice(0, TOTAL_QUESTIONS);
  const normalized = trimmed
    .split("")
    .map((char) => (/^[0-3x]$/.test(char) ? char : "x"))
    .join("");

  return normalized.padEnd(TOTAL_QUESTIONS, "x");
}

export default function QuestionLanding({
  track,
  step,
  answersParam,
}: QuestionLandingProps) {
  const router = useRouter();
  const [showValidation, setShowValidation] = useState(false);

  const safeStep = Math.min(Math.max(step, 1), TOTAL_QUESTIONS);
  const answers = useMemo(() => normalizeAnswers(answersParam), [answersParam]);
  const question = QUIZ_QUESTIONS[safeStep - 1];
  const visual = QUESTION_VISUALS[question.id];
  const selected = answers[safeStep - 1];
  const nextQuestion = safeStep < TOTAL_QUESTIONS ? QUIZ_QUESTIONS[safeStep] : null;
  const nextVisual = nextQuestion ? QUESTION_VISUALS[nextQuestion.id] : null;

  // Preload the next question image to make step transitions feel instant.
  useEffect(() => {
    if (!nextVisual) return;
    const preloader = new window.Image();
    preloader.src = nextVisual.imagePath;
  }, [nextVisual]);

  const nextWithAnswer = (value: number) => {
    const nextAnswers = answers.split("");
    nextAnswers[safeStep - 1] = String(value);
    const serialized = nextAnswers.join("");

    if (safeStep < TOTAL_QUESTIONS) {
      router.push(`/quiz/${track}/${safeStep + 1}?a=${serialized}`);
      return;
    }

    const answerMap: Record<number, number> = {};
    nextAnswers.forEach((entry, index) => {
      answerMap[index + 1] = entry === "x" ? 0 : Number(entry);
    });
    const profile = resolveArchetypeProfile(answerMap);
    router.push(
      `/processing?track=${track}&a=${serialized}&primary=${profile.primary}&secondary=${profile.secondary}`,
    );
  };

  const handleContinue = () => {
    if (selected === "x") {
      setShowValidation(true);
      return;
    }
    nextWithAnswer(Number(selected));
  };

  const fallbackHref =
    safeStep > 1
      ? `/quiz/${track}/${safeStep - 1}?a=${answers}`
      : `/landing/${track}`;

  return (
    <main className="h-[100dvh] overflow-hidden px-4 pb-4 pt-4">
      <div className="mx-auto flex h-full max-w-md flex-col">
        <BackButton fallbackHref={fallbackHref} />
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Шаг 2 из 3 · Вопрос {safeStep} из {TOTAL_QUESTIONS}
        </p>

        <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-2.5">
          <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
            {/* Add realistic image files into /public/images/questions/q{n}.jpg */}
            <div className="relative h-[40dvh] min-h-52 max-h-[50dvh] w-full">
              <Image
                src={visual.imagePath}
                alt={visual.alt}
                fill
                quality={50}
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-contain"
                priority={safeStep <= 2}
              />
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-snug text-zinc-100">
            {safeStep}. {question.text}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {QUIZ_OPTIONS.map((option) => {
              const isActive = selected === String(option.value);
              return (
                <button
                  type="button"
                  key={option.label}
                  onClick={() => {
                    setShowValidation(false);
                    nextWithAnswer(option.value);
                  }}
                  className={`min-h-10 rounded-xl border px-3 py-2 text-left text-[13px] transition ${
                    isActive
                      ? "border-amber-300/70 bg-amber-400/10 text-amber-100"
                      : "border-zinc-700 bg-zinc-950/50 text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {showValidation ? (
            <p className="mt-2 text-xs text-rose-300">
              Выберите вариант ответа, чтобы продолжить.
            </p>
          ) : null}
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={handleContinue}
              className="min-h-11 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
            >
              {safeStep < TOTAL_QUESTIONS ? "Следующий вопрос" : "Получить результат"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
