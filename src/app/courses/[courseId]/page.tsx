import { Suspense } from "react";

import Navbar from "@/components/navbar";
import CourseContent from "./course-content";
import { CourseLoading } from "./course-loading";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default function CoursePage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#060d16]">
      <Navbar />

      <Suspense fallback={<CourseLoading />}>
        <CourseContent params={params} />
      </Suspense>
    </div>
  );
}
