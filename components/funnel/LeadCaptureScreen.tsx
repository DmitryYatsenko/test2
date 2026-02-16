"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "./BackButton";
import { LandingTrack } from "./types";

type LeadCaptureScreenProps = {
  track: LandingTrack;
  answersParam?: string;
  primary?: string;
  secondary?: string;
  initialName?: string;
  initialEmail?: string;
};

export default function LeadCaptureScreen({
  track,
  answersParam,
  primary,
  secondary,
  initialName,
  initialEmail,
}: LeadCaptureScreenProps) {
  const router = useRouter();
  const [name, setName] = useState(initialName ?? "");
  const [email, setEmail] = useState(initialEmail ?? "");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("track", track);
    if (answersParam) params.set("a", answersParam);
    if (primary) params.set("primary", primary);
    if (secondary) params.set("secondary", secondary);
    if (name.trim()) params.set("name", name.trim());
    if (email.trim()) params.set("email", email.trim());
    router.push(`/offer?${params.toString()}`);
  };

  const backHref = answersParam ? `/quiz/${track}/12?a=${answersParam}` : `/quiz/${track}/12`;

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6">
        <BackButton fallbackHref={backHref} />
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Шаг 2.7 из 3 · Контакт
        </p>
        <h1 className="mt-3 text-2xl font-semibold leading-tight text-zinc-100">
          Оставь контакт перед финальной рекомендацией
        </h1>
        <p className="mt-2 text-sm text-zinc-300">
          Мы сохраним имя и email, чтобы подставить их в checkout и отправить
          доступ после оплаты.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="lead-name" className="mb-2 block text-sm text-zinc-300">
              Имя
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/70 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="mb-2 block text-sm text-zinc-300">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/70 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="min-h-12 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
          >
            Продолжить к результату
          </button>
        </form>
      </div>
    </main>
  );
}
