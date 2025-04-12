"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4 mt-2 font-poppins">
      <h1 className="text-xl font-semibold text-gray-900">InjuryInsight.AI</h1>
      <nav className="flex gap-4">
        <Link href="/login">
        <button className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold transition shadow border border-black">
  Login
</button>

        </Link>
      </nav>
    </header>
  );
}
