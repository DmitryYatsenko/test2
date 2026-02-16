import Image from "next/image";
import Link from "next/link";
import BackButton from "./BackButton";
import { LandingVariant } from "./types";

type LandingScreenProps = {
  variant: LandingVariant;
};

export default function LandingScreen({ variant }: LandingScreenProps) {
  return (
    <main className="h-[100dvh] overflow-hidden px-4 pb-4 pt-4 md:h-auto md:min-h-screen md:overflow-visible md:px-6 md:py-8">
      <div className="mx-auto flex h-full max-w-md flex-col md:max-w-5xl">
        {variant.showBackButton !== false ? (
          <BackButton fallbackHref="/landing/core" />
        ) : null}
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {variant.badge}
        </p>

        <h1 className="whitespace-pre-line text-[27px] font-semibold leading-tight text-zinc-100 md:text-5xl">
          {variant.headline}
        </h1>

        {variant.heroImagePath ? (
          <div className="relative mt-3 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950 md:mt-5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={variant.heroImagePath}
                alt={variant.heroImageAlt ?? "Визуальный образ"}
                fill
                quality={52}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1080px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : null}

        {variant.subheadline ? (
          <p className="mt-3 whitespace-pre-line text-center text-xl font-semibold leading-snug text-zinc-100 md:mt-5 md:text-3xl">
            {variant.subheadline}
          </p>
        ) : null}

        {variant.bridge ? (
          <div className="mt-3 min-h-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 md:mt-5 md:p-6">
            <p className="whitespace-pre-line text-[13px] leading-snug text-zinc-200 md:text-base">
              {variant.bridge}
            </p>
          </div>
        ) : (
          <div className="mt-3 flex-1 md:mt-5" />
        )}

        <div className="mt-3 pb-[max(0.25rem,env(safe-area-inset-bottom))] md:mt-6 md:pb-0">
          <Link
            href={`/quiz/${variant.track}/1`}
            className="flex min-h-11 w-full items-center justify-center rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 md:min-h-12 md:text-base"
          >
            {variant.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
