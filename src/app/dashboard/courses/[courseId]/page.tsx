import Link from "next/link";
import Image from "next/image";
import { getCourse, getLessons } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import UpdateCourseDialog from "@/components/dashboard/update-course-dialog";
import CreateLessonDialog from "@/components/dashboard/create-lesson-dialog";
import EditLessonDialog from "@/components/dashboard/edit-lesson-dialog";
import DeleteLessonDialog from "@/components/dashboard/delete-lesson-dialog";
import DeleteCourseDialog from "@/components/dashboard/delete-course-dialog";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseManagePage({ params }: PageProps) {
  const { courseId } = await params;

  const [course, lessons] = await Promise.all([
    getCourse(courseId),
    getLessons(courseId),
  ]);

  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Back */}
        <Link
          href="/dashboard"
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        {/* Course Header */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#07111c] p-6">
          <div className="flex flex-col gap-6 md:flex-row">
            {course.thumbnail && (
              <Image
                src={course?.thumbnail}
                alt={course?.title}
                height={180}
                width={180}
                className="w-full rounded-lg object-cover md:w-72"
              />
            )}

            <div className="flex-1">
              <h1 className="text-3xl font-bold">{course.title}</h1>

              <p className="mt-3 text-gray-400">{course.description}</p>

              <div className="mt-5 flex gap-3">
                <UpdateCourseDialog course={course} />

                <DeleteCourseDialog
                  courseId={course.id}
                  courseTitle={course.title}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#07111c] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Course Lessons</h2>

              <p className="mt-1 text-sm text-gray-400">
                {lessons.length} lessons
              </p>
            </div>

            <CreateLessonDialog courseId={courseId} />
          </div>

          {/* Lesson List */}
          <div className="mt-6 space-y-3">
            {lessons.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/10 p-8 text-center">
                <p className="text-gray-400">No lessons added yet.</p>

                <CreateLessonDialog courseId={courseId} />
              </div>
            ) : (
              lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-4 rounded-lg border border-white/10 p-4 hover:border-[#00e5a0]/40"
                >
                  {/* Order */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00e5a0]/10 text-[#00e5a0]">
                    {lesson.order}
                  </div>

                  {/* Lesson */}
                  <div className="flex-1">
                    <h3 className="font-medium">{lesson.title}</h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {lesson.duration || "No duration"}
                    </p>
                  </div>

                  {/* Actions */}
                  <EditLessonDialog lesson={lesson} />

                  <DeleteLessonDialog
                    lessonId={lesson.id}
                    lessonTitle={lesson.title}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
