export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          Built for Amazon Sellers
        </p>

        <h1 className="text-6xl font-bold mt-6 leading-tight">

          PricePilot

        </h1>

        <p className="text-2xl text-gray-600 mt-8 max-w-3xl leading-10">

          Helping Entrepreneurs Launch Products
          with Confidence.

        </p>

        <p className="text-lg text-gray-500 mt-6 max-w-3xl leading-8">

          Stop guessing your selling price.

          Compare similar Amazon products,
          understand the market,
          and receive an AI-powered launch price recommendation
          before listing your product.

        </p>

        <div className="mt-12 flex gap-4">

          <button className="rounded-xl bg-black px-8 py-4 text-white text-lg hover:bg-gray-800 transition">

            Launch Analysis

          </button>

          <button className="rounded-xl border border-black px-8 py-4 text-lg hover:bg-gray-100 transition">

            Learn More

          </button>

        </div>

      </section>

    </main>
  );
}