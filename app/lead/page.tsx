import LeadCaptureScreen from "../../components/funnel/LeadCaptureScreen";
import { LandingTrack } from "../../components/funnel/types";

type LeadPageProps = {
  searchParams: {
    track?: string;
    a?: string;
    primary?: string;
    secondary?: string;
    name?: string;
    email?: string;
  };
};

const VALID_TRACKS: LandingTrack[] = ["core", "discipline", "energy"];

export default function LeadPage({ searchParams }: LeadPageProps) {
  const track = VALID_TRACKS.includes(searchParams.track as LandingTrack)
    ? (searchParams.track as LandingTrack)
    : "core";
  const answersParam =
    typeof searchParams.a === "string" ? searchParams.a.slice(0, 12) : undefined;

  return (
    <LeadCaptureScreen
      track={track}
      answersParam={answersParam}
      primary={searchParams.primary}
      secondary={searchParams.secondary}
      initialName={searchParams.name}
      initialEmail={searchParams.email}
    />
  );
}
