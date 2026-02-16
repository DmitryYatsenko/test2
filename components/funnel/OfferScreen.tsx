"use client";

import { useMemo } from "react";
import { ARCHETYPE_LABELS, SHADOW_RESULTS } from "./data";
import {
  ArchetypeKey,
  ArchetypeProfile,
  LandingTrack,
  ResponseQuality,
} from "./types";
import Result from "./Result";
import Sales from "./Sales";
import Checkout from "./Checkout";
import BackButton from "./BackButton";

type OfferScreenProps = {
  shadow: ArchetypeKey;
  profile: ArchetypeProfile | null;
  responseQuality: ResponseQuality | null;
  track: LandingTrack;
  answersParam?: string;
  leadName?: string;
  leadEmail?: string;
};

export default function OfferScreen({
  shadow,
  profile,
  responseQuality,
  track,
  answersParam,
  leadName,
  leadEmail,
}: OfferScreenProps) {
  const primaryArchetype = profile?.primary ?? shadow;
  const secondaryArchetype = profile?.secondary;
  const result = useMemo(
    () => SHADOW_RESULTS[primaryArchetype],
    [primaryArchetype],
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const backToLeadHref = (() => {
    const params = new URLSearchParams();
    params.set("track", track);
    if (answersParam) params.set("a", answersParam);
    if (profile?.primary) params.set("primary", profile.primary);
    if (profile?.secondary) params.set("secondary", profile.secondary);
    if (leadName) params.set("name", leadName);
    if (leadEmail) params.set("email", leadEmail);
    return `/lead?${params.toString()}`;
  })();

  return (
    <main className="min-h-screen pt-6">
      <div className="mx-auto max-w-md px-4">
        <BackButton fallbackHref={backToLeadHref} />
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Шаг 3 из 3 · Рекомендация · Трек: {track}
        </p>
      </div>

      <Result
        result={result}
        secondaryTitle={
          secondaryArchetype ? ARCHETYPE_LABELS[secondaryArchetype] : undefined
        }
        confidence={profile?.confidence}
        confidencePercent={profile?.confidencePercent}
        responseQuality={responseQuality ?? undefined}
        onScrollSales={() => scrollTo("sales")}
      />
      <Sales onStartCheckout={() => scrollTo("checkout")} />
      <Checkout initialName={leadName} initialEmail={leadEmail} />
    </main>
  );
}
