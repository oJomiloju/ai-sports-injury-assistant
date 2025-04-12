export default function HistoryPage() {
    return (
      <div className="space-y-10">
        <h1 className="text-2xl font-bold">History</h1>
  
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🦵 Recovery Plans</h2>
          <ul className="space-y-2 text-gray-700">
            <li>ACL Tear – Started Jan 10, 2025 <button className="text-blue-600 hover:underline ml-2">View Plan</button></li>
            <li>Shoulder Sprain – Started Oct 22, 2024 <button className="text-blue-600 hover:underline ml-2">View Plan</button></li>
          </ul>
        </section>
  
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🛡️ Prevention Plans</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Soccer – Moderate Risk – Feb 5, 2025 <button className="text-green-600 hover:underline ml-2">View Tips</button></li>
          </ul>
        </section>
      </div>
    );
  }