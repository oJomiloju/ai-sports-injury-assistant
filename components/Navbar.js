"use client";
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Navbar() {
  const { modalType, setModalType } = useModal();
  const [showPassword, setShowPassword] = useState(false);

  const closeModal = () => setModalType(null);

  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between items-center bg-white shadow px-6 py-4 mt-2 font-poppins z-50 relative">
        <h1 className="text-xl font-semibold text-gray-900">InjuryInsight.AI</h1>
        <nav className="flex gap-4">
          <button
            className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold transition shadow border border-black"
            onClick={() => setModalType("login")}
          >
            Login
          </button>
        </nav>
      </header>

      {/* Modal */}
      {modalType && (
        <>
          {/* Blurred background */}
          <div className="fixed inset-0 backdrop-blur-sm bg-white/40 z-40" />

          {/* Centered modal box */}
          <div className="fixed inset-0 flex items-center justify-center z-50 font-poppins">
            <div className="relative bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>

              {/* Modal heading */}
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

              <form>
                {/* Username only for signup */}
                {modalType === "signup" && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
                    <div className="flex items-center border rounded-md px-3 py-2">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Your username"
                        className="w-full outline-none text-sm text-black placeholder-gray-400"
                      />
                    </div>
                  </div>
                )}

                {/* Email field */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <div className="flex items-center border rounded-md px-3 py-2">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full outline-none text-sm text-black placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Password field with toggle */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                  <div className="flex items-center border rounded-md px-3 py-2 relative">
                    <Lock className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      className="w-full outline-none text-sm text-black placeholder-gray-400 pr-8"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 cursor-pointer"
                    >
                      {showPassword ? (
                        <Eye className="w-4 h-4 text-gray-500" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-full transition border-2 border-black"
                >
                  {modalType === "login" ? "Sign in" : "Sign up"}
                </button>
              </form>

              {/* Toggle login/signup */}
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


