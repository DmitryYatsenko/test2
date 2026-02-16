import QuestionLanding from "../../../../components/funnel/QuestionLanding";
import { LandingTrack } from "../../../../components/funnel/types";

type QuizStepPageProps = {
  params: {
    track: string;
    step: string;
  };
  searchParams: {
    a?: string;
  };
};

const VALID_TRACKS: LandingTrack[] = ["core", "discipline", "energy"];

export default function QuizStepPage({ params, searchParams }: QuizStepPageProps) {
  const track = VALID_TRACKS.includes(params.track as LandingTrack)
    ? (params.track as LandingTrack)
    : "core";
  const parsedStep = Number(params.step);
  const step = Number.isFinite(parsedStep) ? parsedStep : 1;

  return <QuestionLanding track={track} step={step} answersParam={searchParams.a} />;
}
