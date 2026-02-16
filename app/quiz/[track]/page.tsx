import { redirect } from "next/navigation";
import { LandingTrack } from "../../../components/funnel/types";

type QuizTrackPageProps = {
  params: {
    track: string;
  };
};

const VALID_TRACKS: LandingTrack[] = ["core", "discipline", "energy"];

export default function QuizTrackPage({ params }: QuizTrackPageProps) {
  const track = VALID_TRACKS.includes(params.track as LandingTrack)
    ? (params.track as LandingTrack)
    : "core";

  redirect(`/quiz/${track}/1`);
}
