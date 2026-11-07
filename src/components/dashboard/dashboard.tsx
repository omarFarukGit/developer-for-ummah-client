"use client";

import { Course, Lesson } from "@/lib/types";

interface DashboardProps {
  course: Course;
  lessons: Lesson[];
}

export default function Dashboard({ course, lessons }: DashboardProps) {
  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Course */}
        <div className="mb-8 rounded-xl border border-white/10 bg-[#07111c] p-6">
          <div className="flex flex-col gap-6 md:flex-row">
            {course.thumbnail && (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full rounded-xl object-cover md:w-80"
              />
            )}

            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>

              <p className="mt-3 text-gray-400">{course.description}</p>

              <p className="mt-4 text-sm text-[#00e5a0]">
                {lessons.length} Lessons
              </p>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="rounded-xl border border-white/10 bg-[#07111c] p-6">
          <h2 className="text-xl font-semibold">Course Lessons</h2>

          <div className="mt-5 space-y-3">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center gap-4 rounded-lg border border-white/10 p-4 hover:border-[#00e5a0]/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00e5a0]/10 text-[#00e5a0]">
                  {lesson.order}
                </div>

                <div className="flex-1">
                  <h3 className="font-medium">{lesson.title}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {lesson.duration}
                  </p>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${lesson.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00e5a0]"
                >
                  Watch
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
