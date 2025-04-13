## 💡 Approach

This project was built with a user-first mindset, combining clean UI with intelligent, personalized insights to assist athletes through injury recovery and prevention.

### 1. User Flow Design
The user journey is divided into two key paths:
- **Recovery Assistant**: Users input an injury description or upload a diagnosis PDF. The AI generates a personalized recovery plan including exercises, tips, and diet suggestions.
- **Prevention Assistant**: Users answer a short questionnaire about their sport and routine. Based on their inputs, the app provides customized risk levels and preventative tips.

### 2. LLM Integration
I integrated Google’s `gemini-pro` model (via Gemini API) to:
- Summarize medical descriptions
- Generate actionable and relevant recovery guidance
- Provide context-aware tips based on sport and history

### 3. Clean and Consistent UI
Built with Tailwind CSS and React (Next.js), every screen is designed for clarity:
- Responsive layout
- Clear input fields with proper placeholder styling
- Scrollable output boxes for long responses
- Persistent navigation and intuitive routing

### 4. Authentication + Storage
Used Supabase for:
- Auth (email/password)
- User profile storage
- Recovery/prevention plan history

### 5. Edge Case Handling
- Errors (e.g., empty input or API failure) are clearly surfaced
- Long AI outputs are wrapped in scrollable containers
- File uploads are styled like native file pickers for better UX

This architecture ensures the app is AI-powered, fast, and easy to use even for non-tech-savvy users.
