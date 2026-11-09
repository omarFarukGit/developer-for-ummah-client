import CoursesContent from "@/components/course/courses-content";
import { Suspense } from "react";

function CoursesLoading() {
  return (
    <main className="min-h-screen bg-[#060d16]">
      <div className="mx-auto max-w-[1450px] px-5 py-12 lg:px-8">
        <div className="h-4 w-48 animate-pulse rounded bg-white/10" />

        <div className="mt-4 h-10 w-72 animate-pulse rounded bg-white/10" />

        <div className="mt-4 h-5 w-96 max-w-full animate-pulse rounded bg-white/5" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["one", "two", "three", "four", "five", "six"].map((skeleton) => (
            <div
              key={skeleton}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1623]"
            >
              <div className="aspect-video animate-pulse bg-white/5" />

              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesLoading />}>
      <CoursesContent />
    </Suspense>
  );
}
