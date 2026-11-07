"use client";

import { BookOpen, CheckCircle2, Info, Star } from "lucide-react";

import { useState } from "react";

interface CourseTabsProps {
  description?: string | null;
}

export default function CourseTabs({ description }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    {
      id: "about",
      label: "About This Course",
      icon: Info,
    },
    {
      id: "learn",
      label: "What You'll Learn",
      icon: CheckCircle2,
    },
    {
      id: "requirements",
      label: "Requirements",
      icon: BookOpen,
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: Star,
    },
  ];

  return (
    <div className="mt-5">
      {/* Tabs */}
      <div className="flex overflow-x-auto rounded-full border border-white/10 bg-[#091421] p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;

          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-[#00e5a0]/10 text-[#00e5a0] ring-1 ring-[#00e5a0]/40"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={16} />

              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="border-b border-white/[0.08] px-2 py-6">
        {activeTab === "about" && (
          <p className="max-w-4xl text-sm leading-7 text-gray-400">
            {description ||
              "Learn modern web development through practical lessons and real-world projects."}
          </p>
        )}

        {activeTab === "learn" && (
          <ul className="grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
            <li className="flex gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#00e5a0]" />
              Build powerful web servers
            </li>

            <li className="flex gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#00e5a0]" />
              Understand Express.js fundamentals
            </li>

            <li className="flex gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#00e5a0]" />
              Build REST APIs
            </li>

            <li className="flex gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#00e5a0]" />
              Work with middleware and routing
            </li>
          </ul>
        )}

        {activeTab === "requirements" && (
          <ul className="space-y-3 text-sm text-gray-400">
            <li>• Basic JavaScript knowledge</li>

            <li>• Node.js installed</li>

            <li>• VS Code</li>

            <li>• Basic terminal knowledge</li>
          </ul>
        )}

        {activeTab === "reviews" && (
          <div className="flex items-center gap-3">
            <Star size={20} className="fill-yellow-400 text-yellow-400" />

            <span className="text-lg font-bold text-white">4.9</span>

            <span className="text-sm text-gray-500">from 12k reviews</span>
          </div>
        )}
      </div>
    </div>
  );
}
