"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Code2,
  ExternalLink,
  Menu,
  PlayCircle,
  Search,
  User,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07111c]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1700px] items-center px-5 lg:px-7">
        {/* Logo */}
        <Link href="/" className="flex min-w-[250px] items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center">
            <Code2 size={38} strokeWidth={2.8} className="text-[#00e5a0]" />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Developer <span className="text-[#00e5a0]">For Ummah</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          <Link
            href="/courses"
            className="flex items-center gap-2 rounded-full bg-[#00e5a0]/10 px-5 py-2.5 text-sm font-semibold text-[#00e5a0]"
          >
            <PlayCircle size={18} />
            Courses
          </Link>

          <a
            href="#youtube"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition hover:text-white"
          >
            YouTube
            <ExternalLink size={14} />
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center gap-4">
          {/* Search */}
          <div className="hidden w-[260px] items-center gap-3 rounded-full border border-white/10 bg-[#101b2b] px-4 py-2.5 xl:flex">
            <Search size={19} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Notification */}
          <button
            type="button"
            className="relative hidden text-gray-300 transition hover:text-white sm:block"
          >
            <Bell size={22} />

            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#07111c]" />
          </button>

          {/* Profile */}
          <button type="button" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#00e5a0] bg-[#122234]">
              <User size={20} className="text-[#00e5a0]" />
            </div>

            <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
          </button>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#07111c] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/courses">Courses</Link>
            <a href="#youtube">YouTube</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
