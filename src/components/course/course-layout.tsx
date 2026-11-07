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

  if (!selectedLesson) {
    return (
      <div className="p-10 text-center text-gray-400">
        No lessons available.
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-76px)] flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <InstructorSidebar courses={courses} currentCourseId={course.id} />

      {/* Main */}
      <main>
        <div className="mx-auto max-w-[1450px] px-5 ">
          {/* Course Header */}
          <CourseHeader course={course} />

          {/* Main player layout */}
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Video */}
            <div className="min-w-0">
              <VideoPlayer lesson={selectedLesson} />
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
