import Link from "next/link";
import BackButton from "./BackButton";
import { LandingVariant } from "./types";

type LandingScreenProps = {
  variant: LandingVariant;
};

export default function LandingScreen({ variant }: LandingScreenProps) {
  return (
    <main className="h-[100dvh] overflow-hidden px-4 pb-4 pt-4">
      <div className="mx-auto flex h-full max-w-md flex-col">
        {variant.showBackButton !== false ? (
          <BackButton fallbackHref="/landing/core" />
        ) : null}
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {variant.badge}
        </p>

        <h1 className="whitespace-pre-line text-[27px] font-semibold leading-tight text-zinc-100">
          {variant.headline}
        </h1>

        {variant.heroImagePath ? (
          <div className="mt-3 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
            <img
              src={variant.heroImagePath}
              alt={variant.heroImageAlt ?? "Визуальный образ"}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        ) : null}

        {variant.subheadline ? (
          <p className="mt-3 whitespace-pre-line text-center text-xl font-semibold leading-snug text-zinc-100">
            {variant.subheadline}
          </p>
        ) : null}

        {variant.bridge ? (
          <div className="mt-3 min-h-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
            <p className="whitespace-pre-line text-[13px] leading-snug text-zinc-200">
              {variant.bridge}
            </p>
          </div>
        ) : (
          <div className="mt-3 flex-1" />
        )}

        <div className="mt-3 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
          <Link
            href={`/quiz/${variant.track}/1`}
            className="flex min-h-11 w-full items-center justify-center rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
          >
            {variant.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
