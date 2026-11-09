import Link from "next/link";
import { getCourses } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CreateCourseDialog from "@/components/dashboard/create-course-dialog";

export default async function DashboardPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <p className="mt-2 text-gray-400">
              Manage your courses and lessons
            </p>
          </div>

          <CreateCourseDialog />
        </div>

        {/* Course Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-400">
            Total Courses:{" "}
            <span className="font-semibold text-white">{courses.length}</span>
          </p>
        </div>

        {/* Courses */}
        {courses.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 bg-[#07111c] p-12 text-center">
            <h2 className="text-xl font-semibold">No courses found</h2>

            <p className="mt-2 text-gray-400">
              Create your first course to get started.
            </p>

            <Link href="/dashboard/courses/create">
              <Button className="mt-5 bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90">
                <Plus className="mr-2 h-4 w-4" />
                Create Course
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/dashboard/courses/${course.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111c] transition hover:-translate-y-1 hover:border-[#00e5a0]/50">
                  {/* Thumbnail */}
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="aspect-video w-full object-cover transition group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-white/5 text-gray-500">
                      No Thumbnail
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-lg font-semibold transition group-hover:text-[#00e5a0]">
                      {course.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                      {course.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {course.lessons?.length ?? 0} Lessons
                      </span>

                      <span className="text-sm text-[#00e5a0]">Manage →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
