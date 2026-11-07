"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CreateLessonFormProps {
  courseId: string;
}

export default function CreateLessonForm({ courseId }: CreateLessonFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    videoId: "",
    duration: "",
    order: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/lessons`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            videoId: formData.videoId,
            duration: formData.duration,
            order: Number(formData.order),
            courseId,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create lesson");
      }

      router.push(`/dashboard/courses/${courseId}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060d16] text-white">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link
          href={`/dashboard/courses/${courseId}`}
          className="text-sm text-gray-400 hover:text-white"
        >
          ← Back to Course
        </Link>

        <div className="mt-6 rounded-xl border border-white/10 bg-[#07111c] p-6">
          <h1 className="text-2xl font-bold">Add New Lesson</h1>

          <p className="mt-2 text-sm text-gray-400">
            Add a new lesson to this course.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Title */}
            <div>
              <label
                htmlFor="lesson-title"
                className="mb-2 block text-sm font-medium"
              >
                Lesson Title
              </label>

              <input
                id="lesson-title"
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                placeholder="Introduction to Express.js"
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-[#00e5a0]"
              />
            </div>

            {/* Video ID */}
            <div>
              <label
                htmlFor="lesson-video-id"
                className="mb-2 block text-sm font-medium"
              >
                YouTube Video ID
              </label>

              <input
                id="lesson-video-id"
                type="text"
                required
                value={formData.videoId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    videoId: e.target.value,
                  })
                }
                placeholder="G3ES63n4Oos"
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-[#00e5a0]"
              />

              <p className="mt-1 text-xs text-gray-500">Example: G3ES63n4Oos</p>
            </div>

            {/* Duration */}
            <div>
              <label
                htmlFor="lesson-duration"
                className="mb-2 block text-sm font-medium"
              >
                Duration
              </label>

              <input
                id="lesson-duration"
                type="text"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    duration: e.target.value,
                  })
                }
                placeholder="08:45"
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-[#00e5a0]"
              />
            </div>

            {/* Order */}
            <div>
              <label
                htmlFor="lesson-order"
                className="mb-2 block text-sm font-medium"
              >
                Lesson Order
              </label>

              <input
                id="lesson-order"
                type="number"
                required
                min="1"
                value={formData.order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order: e.target.value,
                  })
                }
                placeholder="1"
                className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-[#00e5a0]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90"
            >
              {loading ? "Creating Lesson..." : "Create Lesson"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
