"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    
    <header className="flex justify-between items-center bg-white shadow px-6 py-4 mt-2">

      <h1 className="text-xl font-semibold text-gray-900">InjuryInsight.AI</h1>
      <nav className="flex gap-4">
        <button className="text-sm bg-black text-white px-4 py-1 rounded">Login</button>
        
      </nav>
    </header>
    
  );
}