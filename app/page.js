import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-[#d8eafd]">
      {/* Optional spacing below navbar */}
      <div className="mt-2" />

      {/* Hero section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 pt-6 pb-10">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
    {/* Text Section */}
    <div className="max-w-xl text-center md:text-left">
      <h1 className="text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
        InjuryInsight.AI
      </h1>
      <p className="text-2xl text-gray-800 mb-8 font-medium leading-relaxed">
        Your AI-powered recovery and prevention coach. Whether you're bouncing back from an injury or staying active at the gym — we've got your back.
      </p>

      <a
        href="/dashboard"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full text-xl transition shadow-md border-2 border-black inline-block mb-6"
      >
        Get Started
      </a>

      <div className="mt-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Smarter Movement Starts Here
        </h2>
        <p className="text-lg text-gray-700 font-medium leading-relaxed">
          We use advanced AI to summarize your injuries, create personalized rehab plans, and help you train better — whether you're lifting weights or just staying active.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-[45%]">
      <img
        src="/girl.png"
        alt="Athlete Illustration"
        className="w-full h-auto"
      />
    </div>
  </div>
</main>





      <Footer />
    </div>
  );
}

