export function CourseLoading() {
  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#060d16] text-white">
      <div className="flex min-h-[calc(100vh-76px)] flex-col lg:flex-row">
        {/* =========================
            LEFT SIDEBAR SKELETON
        ========================= */}
        <aside className="hidden w-[320px] shrink-0 border-r border-white/[0.08] xl:block">
          <div className="sticky top-[76px] h-[calc(100vh-76px)] overflow-hidden px-7 py-8">
            {/* Instructor */}
            <div className="border-b border-white/[0.07] pb-7">
              <div className="flex items-center gap-4">
                <div className="h-[76px] w-[76px] animate-pulse rounded-full border-2 border-white/10 bg-white/5" />

                <div className="flex-1 space-y-3">
                  <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
                  <div className="h-4 w-44 animate-pulse rounded bg-white/5" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2">
                <div className="text-center">
                  <div className="mx-auto h-5 w-16 animate-pulse rounded bg-white/10" />
                  <div className="mx-auto mt-2 h-3 w-12 animate-pulse rounded bg-white/5" />
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="py-7">
              <div className="mb-4 h-6 w-32 animate-pulse rounded bg-white/10" />

              <div className="space-y-3">
                {[
                  "course-1",
                  "course-2",
                  "course-3",
                  "course-4",
                  "course-5",
                ].map((key) => (
                  <div
                    key={key}
                    className="flex items-center gap-3 rounded-xl px-3 py-3"
                  >
                    <div className="h-10 w-10 shrink-0 animate-pulse rounded-lg bg-white/5" />

                    <div className="h-4 flex-1 animate-pulse rounded bg-white/5" />

                    <div className="h-5 w-7 animate-pulse rounded-full bg-white/5" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="h-9 w-9 animate-pulse rounded bg-white/5" />

              <div className="mt-4 h-5 w-28 animate-pulse rounded bg-white/10" />

              <div className="mt-2 h-4 w-32 animate-pulse rounded bg-white/5" />

              <div className="mt-5 h-10 w-full animate-pulse rounded-full bg-white/5" />
            </div>
          </div>
        </aside>

        {/* =========================
            MAIN CONTENT SKELETON
        ========================= */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-[1450px] px-5">
            {/* =========================
                COURSE HEADER
            ========================= */}
            <div className="flex flex-col gap-6 py-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                {/* Course icon */}
                <div className="h-14 w-14 shrink-0 animate-pulse rounded-full bg-white/10" />

                <div className="min-w-0 space-y-3">
                  <div className="h-9 w-80 max-w-[60vw] animate-pulse rounded bg-white/10" />

                  <div className="h-4 w-96 max-w-[70vw] animate-pulse rounded bg-white/5" />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-6">
                <div className="h-5 w-20 animate-pulse rounded bg-white/10" />
                <div className="h-5 w-24 animate-pulse rounded bg-white/5" />
                <div className="h-9 w-16 animate-pulse rounded-full bg-white/10" />
              </div>
            </div>

            {/* =========================
                VIDEO + PLAYLIST
            ========================= */}
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
              {/* Video skeleton */}
              <div className="min-w-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#07111c]">
                  {/* Main video image-like skeleton */}
                  <div className="absolute inset-0 animate-pulse bg-white/[0.03]" />

                  {/* Fake video center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-white/10">
                      <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white/20" />
                    </div>
                  </div>

                  {/* Fake bottom controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="h-1 w-full animate-pulse rounded bg-white/10" />

                    <div className="mt-4 flex items-center justify-between">
                      <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                      <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Playlist skeleton */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#07111c]">
                {/* Playlist header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
                  <div className="h-4 w-16 animate-pulse rounded bg-white/5" />
                </div>

                {/* Lessons */}
                <div className="space-y-1 p-2">
                  {[
                    "lesson-1",
                    "lesson-2",
                    "lesson-3",
                    "lesson-4",
                    "lesson-5",
                    "lesson-6",
                    "lesson-7",
                  ].map((key) => (
                    <div
                      key={key}
                      className="flex items-center gap-3 rounded-lg px-3 py-3"
                    >
                      <div className="h-9 w-9 shrink-0 animate-pulse rounded-full bg-white/5" />

                      <div className="min-w-0 flex-1">
                        <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
                      </div>

                      <div className="h-3 w-10 animate-pulse rounded bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =========================
                TABS
            ========================= */}
            <div className="mt-6 border-b border-white/10">
              <div className="flex gap-8">
                <div className="h-5 w-20 animate-pulse rounded bg-white/10" />
                <div className="h-5 w-24 animate-pulse rounded bg-white/5" />
                <div className="h-5 w-20 animate-pulse rounded bg-white/5" />
              </div>
            </div>

            {/* =========================
                DESCRIPTION
            ========================= */}
            <div className="py-8">
              <div className="h-6 w-52 animate-pulse rounded bg-white/10" />

              <div className="mt-4 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
