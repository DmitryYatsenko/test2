type HeroProps = {
  onStart: () => void;
};

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500">
          Мужская диагностика архетипов
        </p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Ты построил нормальную жизнь.
          <br />
          Но внутри знаешь — это не предел.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-zinc-300 sm:text-lg">
          {"Работа есть. Стабильность есть.\nНо ощущение полной силы так и не пришло.\nПройди диагностику и узнай, какой архетип удерживает тебя в тени."}
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-10 rounded-lg border border-amber-300/50 bg-amber-500 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
        >
          Пройти диагностику
        </button>
      </div>
    </section>
  );
}
