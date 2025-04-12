export default function PreventionPage() {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Injury Prevention Assistant</h1>
        <p className="text-gray-600">
          Answer a few questions to get personalized tips to reduce your risk of injury based on your sport and routine.
        </p>
  
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">What sport do you play?</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Soccer</option>
              <option>Basketball</option>
              <option>Running</option>
              <option>Weightlifting</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-1 font-medium">How many days/week do you train?</label>
            <input type="number" className="w-full border border-gray-300 p-2 rounded" />
          </div>
  
          <div>
            <label className="block mb-1 font-medium">Have you had past injuries?</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
  
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700">
            Get Prevention Tips
          </button>
        </form>
      </div>
    );
  }