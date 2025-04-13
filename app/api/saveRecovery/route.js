import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const { userId, summary, plan, injuryName, startDate, status } = await req.json();

  const { error } = await supabase.from("recovery_plans").insert([
    {
      user_id: userId,
      summary_input: summary,
      plan_output: plan, // plan is already an object with exercises, tips, diet
      injury_name: injuryName || "Untitled Injury",
      start_date: startDate || new Date().toISOString().split("T")[0], // fallback to today
      status: status || "active"
    }
  ]);

  if (error) {
    console.error("Save error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
