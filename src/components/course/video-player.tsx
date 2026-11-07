"use client";

import { Lesson } from "@/lib/types";

interface VideoPlayerProps {
  lesson: Lesson;
}

export default function VideoPlayer({ lesson }: VideoPlayerProps) {
  const videoUrl = `https://www.youtube.com/embed/${lesson.videoId.replace(
    "&list=",
    "?list=",
  )}`;
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="aspect-video">
        <iframe
          key={lesson.videoId}
          src={videoUrl}
          title={lesson.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
