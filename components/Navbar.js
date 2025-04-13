"use client";
import { useModal } from "./ModalContext";
import { Mail, Lock, User } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { modalType, setModalType } = useModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // 🟡 Track logged-in user

  const router = useRouter();
  const closeModal = () => setModalType(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();

    // Optional: listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (modalType === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
        else {
          closeModal();
          router.push("/dashboard");
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: username }
          }
        });

        if (error) setError(error.message);
        else {
          const user = data.user;
          await supabase.from("profiles").update({ full_name: username }).eq("id", user.id);
          closeModal();
          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <header className="flex justify-between items-center bg-white shadow px-6 py-4 mt-2 font-poppins z-50 relative">
        <h1 className="text-xl font-semibold text-gray-900">InjuryInsight.AI</h1>

        <nav className="flex gap-4 items-center">
          {!user ? (
            <button
              className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold transition shadow border border-black"
              onClick={() => setModalType("login")}
            >
              Login
            </button>
          ) : (
            <div className="relative group">
            {/* Icon Button */}
            <button className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center hover:bg-gray-300">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path fill="#101820" d="M16,17a8,8,0,1,1,8-8A8,8,0,0,1,16,17ZM16,3a6,6,0,1,0,6,6A6,6,0,0,0,16,3Z"/>
                <path fill="#101820" d="M23,31H9a5,5,0,0,1-5-5V22a1,1,0,0,1,.49-.86l5-3a1,1,0,0,1,1,1.72L6,22.57V26a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V22.57l-4.51-2.71a1,1,0,1,1,1-1.72l5,3A1,1,0,0,1,28,22v4A5,5,0,0,1,23,31Z"/>
              </svg>
            </button>
          
            {/* Dropdown - no gap issues */}
            <div className="absolute right-0 mt-2 w-40 rounded shadow bg-white border text-sm z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
              <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          </div>          

          )}
        </nav>
      </header>

      {/* Modal */}
      {modalType && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm bg-white/40 z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50 font-poppins">
            <div className="relative bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold" onClick={closeModal}>×</button>

              <div className="mb-6 text-center">
                <div className="text-4xl mb-2">🏋️‍♂️</div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                  {modalType === "login" ? "Let’s Get Started" : "Create Your Account"}
                </h2>
                <p className="text-gray-600 text-sm">
                  {modalType === "login"
                    ? "Welcome back! Please enter your details."
                    : "Join us! Please enter your information."}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {modalType === "signup" && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Your username"
                        className="w-full outline-none text-sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <div className="flex items-center border rounded-md px-3 py-2">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full outline-none text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                  <div className="flex items-center border rounded-md px-3 py-2">
                    <Lock className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Your password"
                      className="w-full outline-none text-sm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-full transition border-2 border-black"
                >
                  {loading ? "Loading..." : modalType === "login" ? "Sign in" : "Sign up"}
                </button>

                {error && <p className="text-sm text-red-600 mt-3 text-center">{error}</p>}
              </form>

              <p className="text-sm text-center mt-4 text-gray-600">
                {modalType === "login" ? (
                  <>
                    Don’t have an account?{" "}
                    <span
                      className="text-blue-600 font-medium hover:underline cursor-pointer"
                      onClick={() => setModalType("signup")}
                    >
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      className="text-blue-600 font-medium hover:underline cursor-pointer"
                      onClick={() => setModalType("login")}
                    >
                      Sign in
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
