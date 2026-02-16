import ProcessingScreen from "../../components/funnel/ProcessingScreen";
import { LandingTrack } from "../../components/funnel/types";

type ProcessingPageProps = {
  searchParams: {
    track?: string;
    a?: string;
    primary?: string;
    secondary?: string;
  };
};

const VALID_TRACKS: LandingTrack[] = ["core", "discipline", "energy"];

export default function ProcessingPage({ searchParams }: ProcessingPageProps) {
  const track = VALID_TRACKS.includes(searchParams.track as LandingTrack)
    ? (searchParams.track as LandingTrack)
    : "core";
  const answersParam =
    typeof searchParams.a === "string" ? searchParams.a.slice(0, 12) : undefined;

  return (
    <ProcessingScreen
      track={track}
      answersParam={answersParam}
      primary={searchParams.primary}
      secondary={searchParams.secondary}
    />
  );
}
