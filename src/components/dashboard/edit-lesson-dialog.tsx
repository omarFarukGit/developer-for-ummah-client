"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Pencil } from "lucide-react";

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
import { Lesson } from "@/lib/types";

interface EditLessonDialogProps {
  lesson: Lesson;
}

export default function EditLessonDialog({ lesson }: EditLessonDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState(lesson.title);
  const [videoId, setVideoId] = useState(lesson.videoId);
  const [duration, setDuration] = useState(lesson.duration || "");
  const [order, setOrder] = useState(String(lesson.order));

  const resetForm = () => {
    setTitle(lesson.title);
    setVideoId(lesson.videoId);
    setDuration(lesson.duration || "");
    setOrder(String(lesson.order));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Lesson title is required");
      return;
    }

    if (!videoId.trim()) {
      setError("YouTube Video ID is required");
      return;
    }

    if (!order) {
      setError("Lesson order is required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/lessons/${lesson.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            videoId,
            duration,
            order: Number(order),
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update lesson");
      }

      setOpen(false);
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

          if (value) {
            resetForm();
          } else {
            setError("");
          }
        }
      }}
    >
      {/* Trigger */}
      <DialogTrigger>
        <Button
          className="border-white/10 bg-transparent text-white hover:bg-white/5 cursor-pointer"
          variant="outline"
          size="sm"
        >
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="border-white/10 bg-[#07111c] text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Lesson</DialogTitle>

          <DialogDescription className="text-gray-400">
            Update your lesson information.
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
              htmlFor={`lesson-title-${lesson.id}`}
              className="mb-2 block text-sm font-medium"
            >
              Lesson Title
            </label>

            <Input
              id={`lesson-title-${lesson.id}`}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Introduction to Express.js"
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
            />
          </div>

          {/* Video ID */}
          <div>
            <label
              htmlFor={`lesson-video-${lesson.id}`}
              className="mb-2 block text-sm font-medium"
            >
              YouTube Video ID
            </label>

            <Input
              id={`lesson-video-${lesson.id}`}
              type="text"
              value={videoId}
              onChange={(e) => setVideoId(e.target.value)}
              placeholder="G3ES63n4Oos"
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
            />

            <p className="mt-1 text-xs text-gray-500">Example: G3ES63n4Oos</p>
          </div>

          {/* Duration */}
          <div>
            <label
              htmlFor={`lesson-duration-${lesson.id}`}
              className="mb-2 block text-sm font-medium"
            >
              Duration
            </label>

            <Input
              id={`lesson-duration-${lesson.id}`}
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="08:45"
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
            />
          </div>

          {/* Order */}
          <div>
            <label
              htmlFor={`lesson-order-${lesson.id}`}
              className="mb-2 block text-sm font-medium"
            >
              Lesson Order
            </label>

            <Input
              id={`lesson-order-${lesson.id}`}
              type="number"
              min="1"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              placeholder="1"
              className="border-white/10 bg-black/20 text-white placeholder:text-gray-600"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating Lesson...
              </>
            ) : (
              <>
                <Pencil className="mr-2 h-4 w-4" />
                Update Lesson
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
