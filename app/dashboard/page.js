"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardHome() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [recovery, setRecovery] = useState(null);
  const [prevention, setPrevention] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();
      setProfile(profileData);

      const { data: recoveryPlan } = await supabase
        .from("recovery_plans")
        .select("injury_name, plan_output, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();
      setRecovery(recoveryPlan);

      const { data: preventionPlan } = await supabase
        .from("prevention_plans")
        .select("sport, risk_level, tips, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();
      setPrevention(preventionPlan);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6 text-gray-700">Loading your dashboard...</div>;

  return (
    <div className="space-y-10 min-h-screen p-6">
      <section>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back {profile?.full_name || "Athlete"}
        </h1>
        <p className="text-gray-700">Here’s your personalized recovery and prevention dashboard.</p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Active Recovery Plan</h2>
          {recovery ? (
            <>
              <p className="text-gray-600">{recovery.injury_name} • Started {new Date(recovery.created_at).toLocaleDateString()}</p>
              <ul className="list-disc ml-5 text-gray-700 mt-3">
                {(recovery.plan_output?.daily_exercises || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-600">No recovery plan found. Start one today.</p>
          )}
          <a href="/dashboard/recovery" className="inline-block mt-4 text-white bg-black px-4 py-2 rounded hover:bg-gray-800">
            {recovery ? "View Full Plan" : "Start Recovery Plan"}
          </a>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Prevention Overview</h2>
          {prevention ? (
            <>
              <p className="text-gray-600">Sport: {prevention.sport} • Risk: {prevention.risk_level}</p>
              <ul className="list-disc ml-5 text-gray-700 mt-3">
                {(prevention.tips || []).map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-600">You haven’t taken the prevention quiz yet.</p>
          )}
          <a href="/dashboard/prevention" className="inline-block mt-4 text-white bg-black px-4 py-2 rounded hover:bg-yellow-500">
            {prevention ? "Improve Plan" : "Take Prevention Quiz"}
          </a>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Recent Activity</h2>
        <ul className="text-gray-600 space-y-2 mt-3">
          {recovery && (
            <li>✔️ Uploaded {recovery.injury_name} summary ({new Date(recovery.created_at).toLocaleDateString()})</li>
          )}
          {prevention && (
            <li>✔️ Completed prevention quiz ({new Date(prevention.created_at).toLocaleDateString()})</li>
          )}
          {!recovery && !prevention && <li>No recent activity yet. Let’s get started!</li>}
        </ul>
      </section>

      <section className="flex flex-col sm:flex-row gap-4">
        <a href="/dashboard/recovery" className="flex-1 bg-black text-white text-center py-3 rounded hover:bg-gray-800">Start New Recovery Plan</a>
        <a href="/dashboard/prevention" className="flex-1 bg-black text-white text-center py-3 rounded hover:bg-yellow-500">Take Prevention Quiz</a>
      </section>
    </div>
  );
}
