"use client";

import { Eye, PlayCircle, Star } from "lucide-react";

import { Course } from "@/lib/types";
import Image from "next/image";

interface CourseHeaderProps {
  course: Course;
}

export default function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="mb-6">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
        <span>⌂</span>
        <span>›</span>
        <span>Courses</span>
        <span>›</span>

        <span className="text-gray-300">{course.title}</span>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        {/* Title */}
        <div className="max-w-3xl">
          <div className="flex items-start gap-4  ">
            {course.icon ? (
              <Image
                src={course.icon}
                alt={`${course.title} icon`}
                width={40}
                height={40}
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="mt-1 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00e5a0] text-[#061018] sm:flex">
                <PlayCircle size={25} fill="currentColor" />
              </div>
            )}
            

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[32px]">
                {course.title}
              </h1>

              {course.description && (
                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400 sm:text-[15px]">
                  {course.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex shrink-0 items-center gap-5 text-sm">
          <div className="flex items-center gap-1.5">
            <Star size={17} className="fill-yellow-400 text-yellow-400" />

            <span className="font-semibold text-white">4.9</span>

            <span className="text-gray-500">(12k reviews)</span>
          </div>

          <div className="h-5 w-px bg-white/10" />

          <div className="flex items-center gap-1.5 text-gray-400">
            <Eye size={17} />
            <span>1.2M views</span>
          </div>

          <span className="rounded-full bg-[#00e5a0] px-5 py-2 text-xs font-bold text-[#061018]">
            Free
          </span>
        </div>
      </div>
    </div>
  );
}
