import DashboardContent from "@/components/dashboard/dashboard-content";
import { Suspense } from "react";

function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header Skeleton */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="h-9 w-52 animate-pulse rounded bg-white/10" />

            <div className="mt-3 h-4 w-72 animate-pulse rounded bg-white/5" />
          </div>

          {/* Create Course Button */}
          <div className="h-10 w-32 animate-pulse rounded-md bg-white/10" />
        </div>

        {/* Course Count Skeleton */}
        <div className="mb-6">
          <div className="h-4 w-36 animate-pulse rounded bg-white/5" />
        </div>

        {/* Course Cards Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "course-skeleton-1",
            "course-skeleton-2",
            "course-skeleton-3",
            "course-skeleton-4",
            "course-skeleton-5",
            "course-skeleton-6",
          ].map((key) => (
            <div
              key={key}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#07111c]"
            >
              {/* Thumbnail */}
              <div className="aspect-video animate-pulse bg-white/5" />

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />

                {/* Description */}
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-white/5" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="h-4 w-20 animate-pulse rounded bg-white/5" />

                  <div className="h-4 w-16 animate-pulse rounded bg-white/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  );
}
