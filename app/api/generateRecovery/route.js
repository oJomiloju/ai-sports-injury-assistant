import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  const { prompt } = await req.json();

  // ✅ Replace with your actual Gemini API key for now (secure later)
  const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE", {
    apiVersion: "v1", // 👈 Must be v1
  });

  const model = genAI.getGenerativeModel({
    model: "models/gemini-pro", // 👈 Must be this full name
  });

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = await result.response.text();
    return Response.json({ success: true, result: text });
  } catch (err) {
    console.error("Gemini error:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
