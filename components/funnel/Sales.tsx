type SalesProps = {
  onStartCheckout: () => void;
};

export default function Sales({ onStartCheckout }: SalesProps) {
  return (
    <section id="sales" className="px-4 py-6">
      <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
        <h2 className="text-2xl font-semibold leading-tight">
          Ты уже знаешь, где теряешь силу.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          Это взрослое решение: не ждать следующего отката, а собрать в себе
          Короля, Воина, Мага и Любовника в одну устойчивую систему. Курс
          построен как практический путь, где каждый архетип занимает своё место
          и начинает работать на твою жизнь.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Без лишней теории. Чёткая структура, последовательные шаги и практики,
          которые дают реальные внутренние и внешние изменения.
        </p>

        <div className="mt-7 rounded-xl border border-zinc-700 bg-zinc-950/70 p-5">
          <h3 className="text-lg font-semibold text-zinc-100">Курс включает:</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-zinc-300">
            <li>4 модуля</li>
            <li>Пошаговая система</li>
            <li>Практики</li>
            <li>Доступ навсегда</li>
            <li>Без подписки</li>
          </ul>
        </div>

        <div className="mt-6 rounded-xl border border-amber-300/30 bg-zinc-950 p-5">
          <p className="text-sm text-zinc-400">Стоимость участия:</p>
          <div className="mt-2 flex items-end gap-3">
            <span className="text-xl text-zinc-500 line-through">129$</span>
            <span className="text-3xl font-bold text-amber-300">75$</span>
          </div>
          <p className="mt-2 text-sm text-amber-200">
            Стартовая цена для первых участников.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-emerald-300/20 bg-emerald-300/5 p-4">
          <p className="text-sm text-emerald-100">
            7-day money back guarantee.
          </p>
        </div>

        <p className="mt-6 text-base text-zinc-100">
          Ты можешь продолжать жить нормально.
          <br />
          Или начать жить в полной силе.
        </p>

        <button
          type="button"
          onClick={onStartCheckout}
          className="mt-6 min-h-12 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
        >
          Начать восстановление
        </button>
      </div>
    </section>
  );
}
