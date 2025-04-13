export async function POST(req) {
  const { prompt } = await req.json();

  const API_KEY = "AIzaSyAX5gPFqjhY4KLGOnnvhtKAteRW4LumeKM"; // Use your working Gemini key
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  // 🧠 Ask Gemini to return structured JSON
  const structuredPrompt = `
You are a sports recovery assistant. Based on the user's injury summary below, return a recovery plan in strict JSON format.

Summary: ${prompt}

Respond ONLY in this format:
{
  "exercises": [list of 3–5 exercise instructions],
  "tips": [list of helpful recovery tips],
  "diet": [list of food or nutrition recommendations]
}
`;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: structuredPrompt }],
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

// Remove Markdown-style code block if it exists
rawText = rawText.trim();
if (rawText.startsWith("```json")) {
  rawText = rawText.replace(/^```json\s*/, "").replace(/```$/, "").trim();
}

try {
  const parsed = JSON.parse(rawText);
  return Response.json({ success: true, result: parsed });
} catch (err) {
  console.warn("⚠️ Still invalid JSON:", rawText);
  return Response.json({ success: false, error: "Invalid JSON", raw: rawText }, { status: 500 });
}


    // 🔐 Try to safely parse the result
    try {
      const parsed = JSON.parse(rawText);
      return Response.json({ success: true, result: parsed });
    } catch (err) {
      console.warn("⚠️ Invalid JSON format from Gemini, sending raw:", rawText);
      return Response.json({ success: false, error: "Invalid JSON", raw: rawText }, { status: 500 });
    }
  } catch (err) {
    console.error("Gemini fetch error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
