import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-4 bg-[#d8eafd] font-poppins">

      <div className="mt-10" />

      <main className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          InjuryInsight.AI
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-8 font-medium">
          Your AI-powered recovery and prevention coach. Whether you're bouncing back from an injury or staying active at the gym — we've got your back.
        </p>

        <a
          href="/dashboard"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg transition shadow-md"
        >
          Get Started
        </a>

        <section className="mt-24 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Smarter Movement Starts Here
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-medium">
            We use advanced AI to summarize your injuries, create personalized rehab plans, and help you train better — whether you're lifting weights or just staying active.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


