export default function DashboardHome() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-600">Here’s your personalized recovery and prevention dashboard.</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🦵 Active Recovery Plan</h2>
          <p className="text-gray-600">ACL Tear • Week 2 of 6</p>
          <ul className="list-disc ml-5 text-gray-700 mt-3">
            <li>Quad sets & leg raises</li>
            <li>Ice + elevate 3x daily</li>
            <li>Protein-rich meals</li>
          </ul>
          <a href="/dashboard/recovery" className="inline-block mt-4 text-blue-600 font-medium hover:underline">View full plan →</a>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🛡️ Prevention Overview</h2>
          <p className="text-gray-600">Sport: Soccer • Risk: Moderate</p>
          <ul className="list-disc ml-5 text-gray-700 mt-3">
            <li>Always stretch before games</li>
            <li>Strengthen hamstrings 2x/week</li>
            <li>Use proper footwear</li>
          </ul>
          <a href="/dashboard/prevention" className="inline-block mt-4 text-green-600 font-medium hover:underline">Improve plan →</a>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">📜 Recent Activity</h2>
        <ul className="text-gray-600 space-y-2 mt-3">
          <li>✔️ Uploaded ACL recovery summary (2 days ago)</li>
          <li>✔️ Completed prevention quiz (4 days ago)</li>
        </ul>
      </section>

      <section className="flex flex-col sm:flex-row gap-4">
        <a href="/dashboard/recovery" className="flex-1 bg-blue-600 text-white text-center py-3 rounded hover:bg-blue-700">Start New Recovery Plan</a>
        <a href="/dashboard/prevention" className="flex-1 bg-green-600 text-white text-center py-3 rounded hover:bg-green-700">Take Prevention Quiz</a>
      </section>
    </div>
  );
}