import {
  ConfidenceLevel,
  ResponseQuality,
  ResponseQualityLevel,
  ShadowResult,
} from "./types";

type ResultProps = {
  result: ShadowResult;
  secondaryTitle?: string;
  confidence?: ConfidenceLevel;
  confidencePercent?: number;
  responseQuality?: ResponseQuality;
  onScrollSales: () => void;
};

const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  high: "Высокая",
  medium: "Средняя",
  low: "Низкая",
};

const QUALITY_LABELS: Record<ResponseQualityLevel, string> = {
  stable: "Стабильный паттерн",
  mixed: "Смешанный паттерн",
  random_like: "Нестабильный паттерн",
};

export default function Result({
  result,
  secondaryTitle,
  confidence,
  confidencePercent,
  responseQuality,
  onScrollSales,
}: ResultProps) {
  return (
    <section id="result" className="px-4 pb-6 pt-5">
      <div className="mx-auto max-w-md rounded-2xl border border-amber-300/20 bg-zinc-900/70 p-5">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-amber-300/70">
          Результат диагностики
        </p>
        <h3 className="text-2xl font-semibold leading-tight text-amber-200">
          {result.title}
        </h3>
        {secondaryTitle ? (
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
            Вторичный профиль: {secondaryTitle}
          </p>
        ) : null}
        {confidence ? (
          <p className="mt-2 text-xs text-zinc-400">
            Уверенность скрининга: {CONFIDENCE_LABELS[confidence]}
            {typeof confidencePercent === "number" ? ` (${confidencePercent}%)` : ""}
          </p>
        ) : null}
        {responseQuality ? (
          <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-950/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">
              Надёжность ответов: {QUALITY_LABELS[responseQuality.level]} ({responseQuality.score}
              %)
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {responseQuality.note}
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">{result.recognition}</p>

        <ul className="mt-5 space-y-2 text-sm text-zinc-200">
          {result.painPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-zinc-700 bg-zinc-950/70 p-4">
          <p className="text-sm text-zinc-400">Цена текущего паттерна:</p>
          <p className="mt-1 text-zinc-200">{result.price}</p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          Это скрининговый профиль по 12 вопросам, а не клиническая диагностика.
        </p>

        <p className="mt-5 text-sm font-medium leading-relaxed text-amber-100">{result.hope}</p>

        <button
          type="button"
          onClick={onScrollSales}
          className="mt-6 min-h-12 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
        >
          Выйти из тени
        </button>
      </div>
    </section>
  );
}
