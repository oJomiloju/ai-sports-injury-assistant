"use client";
import { useState } from "react";

export default function RecoveryPage() {
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return setError("Please enter a prompt first.");

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/generateRecovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Something went wrong with the AI.");
      } else {
        setResult(data.result);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Injury Recovery Assistant</h1>
      <p className="text-gray-600">
        Enter a summary of your injury or upload a PDF diagnosis report. We’ll generate a recovery plan with exercises, tips, and diet guidance.
      </p>

      <textarea
        rows="6"
        placeholder="Type your injury description here..."
        className="w-full border border-gray-300 rounded p-3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div>
        <label className="block mb-2 text-gray-700">Or upload a diagnosis PDF</label>
        <input
          type="file"
          accept=".pdf"
          className="border border-gray-300 p-2 rounded"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {result && (
        <div className="mt-8 p-4 bg-gray-100 border rounded whitespace-pre-wrap text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
}
