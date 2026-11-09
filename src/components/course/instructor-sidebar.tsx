"use client";

import Link from "next/link";
import { BookOpen, Play, Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { Course } from "@/lib/types";
import Image from "next/image";

interface InstructorSidebarProps {
  courses: Course[];
  currentCourseId: string;
}

export default function InstructorSidebar({
  courses,
  currentCourseId,
}: InstructorSidebarProps) {
  return (
    <aside className="hidden w-[320px] shrink-0 border-r border-white/[0.08] xl:block">
      <div className="sticky top-[76px] h-[calc(100vh-76px)] overflow-y-auto px-7 py-8">
        {/* Instructor */}
        <div className="border-b border-white/[0.07] pb-7">
          <div className="flex items-center gap-4">
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-[#00e5a0] bg-[#122234] shadow-[0_0_25px_rgba(0,229,160,0.12)]">
              <span className="text-2xl font-bold text-[#00e5a0]">O</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-white">Omar Faruk</h2>

                <span className="text-[#00e5a0]">✓</span>
              </div>

              <p className="mt-1 text-sm text-gray-400">
                Full Stack Web Developer
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-2 divide-x divide-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Play size={16} className="fill-[#00e5a0] text-[#00e5a0]" />

                <span className="font-bold text-white">{courses.length}+</span>
              </div>

              <p className="mt-1 text-xs text-gray-500">Courses</p>
            </div>

            {/* <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Play size={16} className="text-[#00e5a0]" />

                <span className="font-bold text-white">100K+</span>
              </div>

              <p className="mt-1 text-xs text-gray-500">Views</p>
            </div> */}
          </div>
        </div>

        {/* Courses */}
        <div className="py-7">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen size={18} className="text-[#00e5a0]" />

            <h3 className="text-lg font-bold text-white">All Courses</h3>
          </div>

          <div className="space-y-2">
            {courses.map((course) => {
              const active = course.id === currentCourseId;

              return (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                    active
                      ? "border border-[#00e5a0]/20 bg-[#00e5a0]/10"
                      : "hover:bg-white/[0.04]"
                  }`}
                >
                  <div
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg ${
                      active ? "bg-[#00e5a0]" : "bg-[#152235]"
                    }`}
                  >
                    {course.icon ? (
                      <Image
                        src={course.icon}
                        alt={`${course.title} icon`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span
                        className={`font-semibold ${
                          active ? "text-[#061018]" : "text-gray-400"
                        }`}
                      >
                        {course.title.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate text-sm font-medium ${
                        active ? "text-[#00e5a0]" : "text-gray-300"
                      }`}
                    >
                      {course.title}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      active
                        ? "bg-[#00e5a0]/20 text-[#00e5a0]"
                        : "bg-white/5 text-gray-500"
                    }`}
                  >
                    {course.lessons.length}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-[#1d3b55] bg-gradient-to-br from-[#102337] to-[#0a1827] p-5">
          <Rocket size={35} className="mb-4 text-[#00e5a0]" />

          <h3 className="font-bold text-white">Start Learning</h3>

          <p className="mt-1 text-sm text-gray-400">Grow Your Skills</p>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#00e5a0] py-2.5 text-sm font-bold text-[#061018] transition hover:bg-[#19f2ae]"
          >
            Join Our Community →
          </button>
        </div>

        {/* Social */}
        <div className="mt-8 flex items-center gap-5 border-t border-white/[0.07] pt-6">
          <a
            href="https://www.youtube.com"
            className="text-gray-500 hover:text-[#00e5a0]"
          >
            <FaYoutube size={18} />
          </a>

          <a
            href="https://github.com"
            className="text-gray-500 hover:text-[#00e5a0]"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com"
            className="text-gray-500 hover:text-[#00e5a0]"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <p className="mt-4 text-xs leading-5 text-gray-600">
          © 2026 Developer For Ummah.
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}
