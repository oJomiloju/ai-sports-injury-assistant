// app/api/generateRecovery/route.js
export async function POST(req) {
  const { prompt } = await req.json();

  const API_KEY = "AIzaSyAX5gPFqjhY4KLGOnnvhtKAteRW4LumeKM"; // use the one that worked
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("Gemini raw response:", data);

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      const text = data.candidates[0].content.parts[0].text;
      return Response.json({ success: true, result: text });
    }

    return Response.json({ success: false, error: "No candidates returned." }, { status: 500 });
  } catch (err) {
    console.error("Gemini fetch error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
