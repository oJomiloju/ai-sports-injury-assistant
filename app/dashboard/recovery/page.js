"use client";
import RecoveryPlanModal from "@/components/RecoveryPlanModal";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function RecoveryPage() {
  const [prompt, setPrompt] = useState("");
  const [injuryName, setInjuryName] = useState(""); // ✅ new state for injury name
  const [file, setFile] = useState(null);
  const [plan, setPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Fetch authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    fetchUser();
  }, []);

  // ✅ Generate plan from Gemini
  const handleGenerate = async () => {
    const res = await fetch("/api/generateRecovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    if (data.success) {
      console.log("Received plan:", data.result);
      setPlan(data.result);
      setModalOpen(true);
    } else {
      alert("Something went wrong: " + data.error);
    }
  };

  // ✅ Save to Supabase
  const handleSave = async () => {
    if (!user) {
      alert("User not found. Please log in again.");
      return;
    }

    const res = await fetch("/api/saveRecovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        injury_name: injuryName || "Untitled Injury",
        summary_input: prompt,
        plan_output: typeof plan === "string" ? JSON.parse(plan) : plan,
        start_date: new Date().toISOString().split("T")[0],
        status: "active",
      }),
    });

    const data = await res.json();
    if (data.success) {
      setModalOpen(false);
      alert("Plan saved!");
    } else {
      alert("Failed to save plan.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Injury Recovery Assistant</h1>
      <p className="text-gray-600">
        Enter a summary of your injury or upload a PDF diagnosis report. We’ll generate a recovery plan with exercises, tips, and diet guidance.
      </p>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Injury Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="e.g., ACL Tear"
          value={injuryName}
          onChange={(e) => setInjuryName(e.target.value)}
        />
      </div>

      <textarea
        rows="6"
        placeholder="Type your injury description here..."
        className="w-full border border-gray-300 rounded p-3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700"
      >
        Generate Plan
      </button>

      <RecoveryPlanModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        plan={plan}
        onSave={handleSave}
      />
    </div>
  );
}
