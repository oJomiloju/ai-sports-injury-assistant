"use client";
import Link from "next/link";
import { Home, Activity, Shield, Clock } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-5 flex flex-col gap-4 shadow-inner">
      <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-black">
    <Home className="w-5 h-5" /> Home
    </Link>
    <Link href="/dashboard/recovery" className="flex items-center gap-2 text-gray-700 hover:text-black">
    <Activity className="w-5 h-5" /> Injury Recovery
    </Link>
    <Link href="/dashboard/prevention" className="flex items-center gap-2 text-gray-700 hover:text-black">
    <Shield className="w-5 h-5" /> Prevention Tips
    </Link>
    <Link href="/dashboard/history" className="flex items-center gap-2 text-gray-700 hover:text-black">
    <Clock className="w-5 h-5" /> History
    </Link>
    </aside>
  );
}
