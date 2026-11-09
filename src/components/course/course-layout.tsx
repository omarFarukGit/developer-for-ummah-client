"use client";

import { useState } from "react";

import { Course, Lesson } from "@/lib/types";

import InstructorSidebar from "./instructor-sidebar";
import CourseHeader from "./course-header";
import VideoPlayer from "./video-player";

import CourseTabs from "./course-tabs";
import CourseDescription from "./course-description";
import CoursePlaylist from "./course-playlist";

interface CourseLayoutProps {
  course: Course;
  courses: Course[];
}

export default function CourseLayout({ course, courses }: CourseLayoutProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(
    course.lessons[0] ?? null,
  );

  return (
    <div className="min-h-[calc(100vh-76px)] flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <InstructorSidebar courses={courses} currentCourseId={course.id} />

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-[1450px] px-5">
          {/* Course Header */}
          <CourseHeader course={course} />

          {/* Main player layout */}
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Video */}
            <div className="min-w-0">
              {selectedLesson ? (
                <VideoPlayer lesson={selectedLesson} />
              ) : (
                /* Upcoming Video */
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#07111c]">
                  {/* Course Thumbnail */}
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[1px]"
                    />
                  ) : (
                    <div className="absolute inset-0 animate-pulse bg-white/5" />
                  )}

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-14 w-14 animate-pulse rounded-full bg-white/10" />

                      <h2 className="text-xl font-semibold tracking-wide text-white">
                        UPCOMING VIDEO
                      </h2>

                      <p className="mt-2 text-sm text-gray-400">
                        This course will be updated soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Playlist */}
            <CoursePlaylist
              lessons={course.lessons}
              selectedLesson={selectedLesson}
              onSelectLesson={setSelectedLesson}
            />
          </div>

          {/* Tabs */}
          <CourseTabs description={course.description} />

          {/* Bottom */}
          <CourseDescription title={course.title} />
        </div>
      </main>
    </div>
  );
}
