"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  fallbackHref: string;
  label?: string;
};

export default function BackButton({
  fallbackHref,
  label = "Назад",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Deterministic navigation is more stable in funnel flows than browser history.
    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="mb-4 inline-flex min-h-10 items-center rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
      aria-label={label}
    >
      ← {label}
    </button>
  );
}
