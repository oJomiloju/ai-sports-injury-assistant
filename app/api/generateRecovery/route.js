import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  const { prompt } = await req.json();

  // ⛔️ Only use this for testing – never push a hardcoded key
  const genAI = new GoogleGenerativeAI("AIzaSyAX5gPFqjhY4KLGOnnvhtKAteRW4LumeKM", {
    apiVersion: "v1", // Ensure this is included
  });

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return Response.json({ success: true, result: text });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
