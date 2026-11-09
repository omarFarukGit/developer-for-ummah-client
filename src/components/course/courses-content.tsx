import Link from "next/link";

import { getCourses } from "@/lib/api";
import Navbar from "@/components/navbar";

export default async function CoursesContent() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-[#060d16]">
      <Navbar />

      <section className="mx-auto max-w-[1450px] px-5 py-12 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00e5a0]">
            Developer For Ummah
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Explore Courses
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Learn modern web development through practical tutorials and
            real-world projects.
          </p>

          {/* Course Count */}
          <div className="mt-5 flex items-center gap-2">
            <span className="text-2xl font-bold text-[#00e5a0]">
              {courses.length}
            </span>

            <span className="text-sm text-gray-400">Available Courses</span>
          </div>
        </div>

        {/* Course Grid */}
        {courses.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 bg-[#0b1623] px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-white">
              No Courses Available
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              New courses will be added soon. Stay connected!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#0b1623] transition hover:-translate-y-1 hover:border-[#00e5a0]/40"
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden bg-[#101d2d]">
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl font-bold text-[#00e5a0]/30">
                        {course.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Course Information */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-white group-hover:text-[#00e5a0]">
                    {course.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    {course.description || "No description available."}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {course.lessons?.length ?? 0} Lessons
                    </span>

                    <span className="text-sm font-semibold text-[#00e5a0]">
                      Start Learning →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
