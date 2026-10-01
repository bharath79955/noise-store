function About() {
  return (
    <section className="min-h-screen bg-white px-5 py-16 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            ABOUT NOISE STORE
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl dark:text-white">
            Technology that
            <br />
            makes some noise.
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400">
            NOISE STORE is a modern frontend e-commerce experience inspired by
            India's consumer electronics ecosystem. Explore smartwatches,
            earbuds and headphones through a clean, responsive and interactive
            shopping experience.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Smart Design",
              description:
                "Clean and modern designs created for everyday digital experiences.",
            },
            {
              number: "02",
              title: "Modern Technology",
              description:
                "Explore connected products designed around today's lifestyle.",
            },
            {
              number: "03",
              title: "Everyday Lifestyle",
              description:
                "Technology that fits naturally into your everyday routine.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-3xl bg-gray-100 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-900"
            >
              <span className="text-sm font-bold text-gray-400">
                {item.number}
              </span>

              <h2 className="mt-10 text-2xl font-black text-black dark:text-white">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-[2rem] bg-black p-8 text-white sm:p-12 dark:bg-gray-900">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            NOISE STORE
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Smart. Bold. Connected.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            This project demonstrates a responsive React e-commerce interface
            with product browsing, search, filtering, wishlist, cart,
            authentication forms, dark mode and responsive navigation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;