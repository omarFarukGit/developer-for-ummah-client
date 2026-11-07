"use client";

import { ListVideo } from "lucide-react";

import { Lesson } from "@/lib/types";
import LessonItem from "./lesson-item";

interface CoursePlaylistProps {
  lessons: Lesson[];
  selectedLesson: Lesson;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function CoursePlaylist({
  lessons,
  selectedLesson,
  onSelectLesson,
}: CoursePlaylistProps) {
  return (
    <aside className="overflow-hidden rounded-xl border border-white/10 bg-[#0a1522]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <ListVideo size={20} className="text-[#00e5a0]" />

          <h2 className="font-bold text-white">Course Playlist</h2>
        </div>

        <span className="text-xs text-gray-500">{lessons.length} Lessons</span>
      </div>

      {/* Lessons */}
      <div className="max-h-[480px] overflow-y-auto cursor-pointer">
        {lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={index}
            active={selectedLesson.id === lesson.id}
            onClick={() => onSelectLesson(lesson)}
          />
        ))}
      </div>
    </aside>
  );
}
