import Navbar from "@/components/navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060d16]">
      <Navbar />

      <section className="relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00e5a0]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-28 text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#00e5a0]/20 bg-[#00e5a0]/5 px-4 py-2 text-xs font-semibold text-[#00e5a0]">
            <span className="h-2 w-2 rounded-full bg-[#00e5a0]" />
            Learn • Build • Grow
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Learn Development.
            <br />
            <span className="text-[#00e5a0]">Build Real Projects.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Master modern web development through practical courses, tutorials
            and real-world projects.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="rounded-full bg-[#00e5a0] px-7 py-3.5 text-sm font-bold text-[#061018] transition hover:bg-[#19f2ae]"
            >
              Explore Courses →
            </Link>

            <a
              href="#youtube"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#00e5a0]/40"
            >
              Watch YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
