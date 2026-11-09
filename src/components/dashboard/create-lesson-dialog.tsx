"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CreateLessonDialogProps {
  courseId: string;
}

export default function CreateLessonDialog({
  courseId,
}: CreateLessonDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    videoId: "",
    duration: "",
    order: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      videoId: "",
      duration: "",
      order: "",
    });

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.title.trim()) {
      setError("Lesson title is required");
      return;
    }

    if (!formData.videoId.trim()) {
      setError("YouTube Video ID is required");
      return;
    }

    if (!formData.order) {
      setError("Lesson order is required");
      return;
    }

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

      setOpen(false);
      resetForm();

      router.refresh();
    } catch (error) {
      console.error(error);

      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!loading) {
          setOpen(value);

          if (!value) {
            resetForm();
          }
        }
      }}
    >
      {/* Trigger */}
      <DialogTrigger>
        <Button className="bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90 cursor-pointer">
          <Plus className="mr-2 h-4 w-4" />
          Add Lesson
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="border-white/10 bg-[#07111c] text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Add New Lesson</DialogTitle>

          <DialogDescription className="text-gray-400">
            Add a new lesson to this course.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label
              htmlFor="lesson-title"
              className="mb-2 block text-sm font-medium"
            >
              Lesson Title
            </label>

            <Input
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
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
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

            <Input
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
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
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

            <Input
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
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
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

            <Input
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
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Lesson...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Lesson
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
