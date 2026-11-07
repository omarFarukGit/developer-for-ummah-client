"use client";

import { Check, Play } from "lucide-react";

import { Lesson } from "@/lib/types";

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  active: boolean;
  onClick: () => void;
}

export default function LessonItem({
  lesson,
  index,
  active,
  onClick,
}: LessonItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer w-full items-center gap-3 px-4 py-3.5 text-left transition ${
        active ? "bg-[#00e5a0]/10" : "hover:bg-white/[0.035]"
      }`}
    >
      {/* Number / Play */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
          active
            ? "border-[#00e5a0] bg-[#00e5a0] text-[#061018]"
            : "border-gray-600 text-gray-400"
        }`}
      >
        {active ? (
          <Play size={14} fill="currentColor" />
        ) : (
          <span className="text-xs">{index + 1}</span>
        )}
      </div>

      {/* Title */}
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-medium ${
            active ? "text-[#00e5a0]" : "text-gray-300"
          }`}
        >
          {lesson.title}
        </p>
      </div>

      {/* Duration */}
      {lesson.duration && (
        <span
          className={`shrink-0 text-xs ${
            active ? "text-[#00e5a0]" : "text-gray-500"
          }`}
        >
          {lesson.duration}
        </span>
      )}
    </button>
  );
}
