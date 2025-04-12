export default function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">The Athletic Assistant</h1>
      <p className="text-xl text-gray-600 mb-6 text-center max-w-xl">
        Prevent injuries. Recover smarter. InjuryInsight.AI helps you take control of your training and recovery with personalized LLM-powered guidance.
      </p>
      <a
        href="/dashboard"
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
      >
        Discover
      </a>
      <div className="mt-16 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Break the bad habit</h2>
        <p className="text-gray-600">
          Learn how to train safely, rest smartly, and get back to your sport stronger. One of the best skills you can develop is how to listen to your body.
        </p>
      </div>
    </div>
  );
}