type BridgeProps = {
  onStart: () => void;
};

export default function Bridge({ onStart }: BridgeProps) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
        <p className="whitespace-pre-line text-lg leading-relaxed text-zinc-200">
          {
            "Ты не в кризисе.\nТы не на дне.\n\nНо ты чувствуешь, что живёшь не на 100%.\n\nЭто не лень.\nНе отсутствие мотивации.\n\nЭто разбалансированные мужские архетипы.\n\nДиагностика займёт 3 минуты\nи покажет, где именно ты теряешь свой центр."
          }
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 rounded-lg border border-amber-300/50 bg-zinc-950 px-7 py-3 text-sm font-semibold text-amber-300 transition hover:border-amber-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
        >
          Начать тест
        </button>
      </div>
    </section>
  );
}
