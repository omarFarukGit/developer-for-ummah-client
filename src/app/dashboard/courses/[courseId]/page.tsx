import { Suspense } from "react";
import CourseManageContent from "./course-manage-content";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

function CourseManageLoading() {
  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Back Skeleton */}
        <div className="h-4 w-32 animate-pulse rounded bg-white/5" />

        {/* Course Header Skeleton */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#07111c] p-6">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Thumbnail */}
            <div className="h-[180px] w-full animate-pulse rounded-lg bg-white/5 md:w-72" />

            {/* Course Info */}
            <div className="flex-1">
              {/* Title */}
              <div className="h-9 w-3/4 animate-pulse rounded bg-white/10" />

              {/* Description */}
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-white/5" />
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <div className="h-10 w-28 animate-pulse rounded-md bg-white/10" />
                <div className="h-10 w-28 animate-pulse rounded-md bg-white/5" />
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#07111c] p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-6 w-40 animate-pulse rounded bg-white/10" />

              <div className="mt-2 h-4 w-24 animate-pulse rounded bg-white/5" />
            </div>

            {/* Add Lesson Button */}
            <div className="h-10 w-32 animate-pulse rounded-md bg-white/10" />
          </div>

          {/* Lesson Skeletons */}
          <div className="mt-6 space-y-3">
            {[
              "lesson-skeleton-1",
              "lesson-skeleton-2",
              "lesson-skeleton-3",
              "lesson-skeleton-4",
              "lesson-skeleton-5",
              "lesson-skeleton-6",
            ].map((skeletonKey) => (
              <div
                key={skeletonKey}
                className="flex items-center gap-4 rounded-lg border border-white/10 p-4"
              >
                {/* Order */}
                <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-white/5" />

                {/* Lesson Info */}
                <div className="flex-1">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-white/10" />

                  <div className="mt-2 h-4 w-24 animate-pulse rounded bg-white/5" />
                </div>

                {/* Edit */}
                <div className="h-9 w-16 animate-pulse rounded-md bg-white/5" />

                {/* Delete */}
                <div className="h-9 w-16 animate-pulse rounded-md bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseManagePage({ params }: PageProps) {
  return (
    <Suspense fallback={<CourseManageLoading />}>
      <CourseManageContent params={params} />
    </Suspense>
  );
}
