"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LandingTrack } from "./types";

type ProcessingScreenProps = {
  track: LandingTrack;
  answersParam?: string;
  primary?: string;
  secondary?: string;
};

const STEPS = [
  "Обрабатываем ваши данные",
  "Проводим сравнительный анализ",
  "Проверяем позиции архетипов",
  "Формируем персональный профиль",
];

export default function ProcessingScreen({
  track,
  answersParam,
  primary,
  secondary,
}: ProcessingScreenProps) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const targetUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("track", track);
    if (answersParam) params.set("a", answersParam);
    if (primary) params.set("primary", primary);
    if (secondary) params.set("secondary", secondary);
    return `/lead?${params.toString()}`;
  }, [answersParam, primary, secondary, track]);

  useEffect(() => {
    const stepTimer = window.setInterval(() => {
      setActiveStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 700);

    const redirectTimer = window.setTimeout(() => {
      router.replace(targetUrl);
    }, 3200);

    return () => {
      window.clearInterval(stepTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [router, targetUrl]);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Шаг 2.5 из 3 · Анализ
        </p>
        <h1 className="mt-4 text-2xl font-semibold leading-tight text-zinc-100">
          Подождите, идёт обработка результатов
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Мы анализируем ответы, сравниваем паттерны и проверяем положение
          соответствующих архетипов.
        </p>

        <div className="mt-6 space-y-2">
          {STEPS.map((step, index) => {
            const isDone = index <= activeStep;
            return (
              <div
                key={step}
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  isDone
                    ? "border-amber-300/50 bg-amber-400/10 text-amber-100"
                    : "border-zinc-700 bg-zinc-950/60 text-zinc-500"
                }`}
              >
                {step}
              </div>
            );
          })}
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-amber-400 transition-all duration-500"
            style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </main>
  );
}
