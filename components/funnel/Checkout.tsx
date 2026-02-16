type CheckoutProps = {
  initialName?: string;
  initialEmail?: string;
};

export default function Checkout({ initialName, initialEmail }: CheckoutProps) {
  return (
    <section id="checkout" className="px-4 pb-10 pt-6">
      <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <h2 className="text-2xl font-semibold">Secure Checkout</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Без подписки. Разовая оплата.
        </p>

        <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Stripe Elements Placeholder
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Вставьте Stripe Elements сюда.
          </p>
          {/* TODO: Add Stripe publishable key (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) and mount PaymentElement here. */}
        </div>

        {/* Minimal checkout form. Replace onSubmit with Stripe confirmation flow. */}
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="checkout-name"
              className="mb-2 block text-sm text-zinc-300"
            >
              Name
            </label>
            <input
              id="checkout-name"
              name="name"
              type="text"
              defaultValue={initialName}
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/70 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="checkout-email"
              className="mb-2 block text-sm text-zinc-300"
            >
              Email
            </label>
            <input
              id="checkout-email"
              name="email"
              type="email"
              defaultValue={initialEmail}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/70 focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="min-h-12 w-full rounded-xl border border-amber-300/50 bg-amber-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
          >
            Оплатить 75$
          </button>
        </form>

        <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs text-zinc-400">
          <span className="rounded-md border border-zinc-700 px-2 py-2">
            SSL
          </span>
          <span className="rounded-md border border-zinc-700 px-2 py-2">
            Stripe
          </span>
          <span className="rounded-md border border-zinc-700 px-2 py-2">
            Visa / MC
          </span>
          <span className="rounded-md border border-zinc-700 px-2 py-2">
            7-Day Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
