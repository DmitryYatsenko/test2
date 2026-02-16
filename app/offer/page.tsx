import { assessResponseQuality, resolveArchetypeProfile } from "../../components/funnel/data";
import OfferScreen from "../../components/funnel/OfferScreen";
import {
  ArchetypeKey,
  ArchetypeProfile,
  LandingTrack,
  ResponseQuality,
} from "../../components/funnel/types";

type OfferPageProps = {
  searchParams: {
    shadow?: string;
    track?: string;
    a?: string;
    primary?: string;
    secondary?: string;
    name?: string;
    email?: string;
  };
};

const VALID_SHADOWS: ArchetypeKey[] = ["king", "warrior", "magician", "lover"];
const VALID_TRACKS: LandingTrack[] = ["core", "discipline", "energy"];

export default function OfferPage({ searchParams }: OfferPageProps) {
  const shadow = VALID_SHADOWS.includes(searchParams.shadow as ArchetypeKey)
    ? (searchParams.shadow as ArchetypeKey)
    : "king";
  const track = VALID_TRACKS.includes(searchParams.track as LandingTrack)
    ? (searchParams.track as LandingTrack)
    : "core";

  const answersParam =
    typeof searchParams.a === "string" ? searchParams.a.slice(0, 12) : undefined;

  let profile: ArchetypeProfile | null = null;
  let responseQuality: ResponseQuality | null = null;
  if (answersParam && /^[0-3x]{12}$/.test(answersParam)) {
    const answers: Record<number, number> = {};
    answersParam.split("").forEach((entry, index) => {
      answers[index + 1] = entry === "x" ? 0 : Number(entry);
    });
    profile = resolveArchetypeProfile(answers);
    responseQuality = assessResponseQuality(answers);
  }

  return (
    <OfferScreen
      shadow={shadow}
      profile={profile}
      responseQuality={responseQuality}
      track={track}
      answersParam={answersParam}
      leadName={searchParams.name}
      leadEmail={searchParams.email}
    />
  );
}
