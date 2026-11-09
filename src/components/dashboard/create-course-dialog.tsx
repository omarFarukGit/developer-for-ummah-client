"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus, Loader2, Plus } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";

export default function CreateCourseDialog() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setThumbnail(null);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError("Course title is required");
      return;
    }

    if (!thumbnail) {
      setError("Course thumbnail is required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`,
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create course");
      }

      // Close dialog
      setOpen(false);

      // Reset form
      resetForm();

      // Refresh dashboard
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
      {/* Create Button */}
      <DialogTrigger>
        <Button className="bg-[#00e5a0] cursor-pointer text-black hover:bg-[#00e5a0]/90">
          <Plus className="mr-2 h-4 w-4" />
          Create New Course
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="border-white/10 bg-[#07111c] text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Create New Course</DialogTitle>

          <DialogDescription className="text-gray-400">
            Add a new course to your platform.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="course-title" className="text-sm font-medium">
              Course Title
            </label>

            <Input
              id="course-title"
              placeholder="e.g. Express.js Complete Course"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="course-description" className="text-sm font-medium">
              Description
            </label>

            <Textarea
              id="course-description"
              placeholder="Write a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="resize-none border-white/10 bg-white/5 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Thumbnail */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Course Thumbnail</p>

            <label
              htmlFor="course-thumbnail"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] px-6 py-8 transition hover:border-[#00e5a0]/50"
            >
              <ImagePlus className="mb-3 h-8 w-8 text-gray-500" />

              {thumbnail ? (
                <>
                  <p className="max-w-full truncate text-sm font-medium text-[#00e5a0]">
                    {thumbnail.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Click to change image
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-300">
                    Upload Course Thumbnail
                  </p>

                  <p className="mt-1 text-xs text-gray-500">PNG, JPG or WEBP</p>
                </>
              )}
            </label>

            <input
              id="course-thumbnail"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;

                setThumbnail(file);
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setOpen(false)}
              className="border-white/10 bg-transparent text-white hover:bg-white/5 cursor-pointer"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="bg-[#00e5a0] text-black hover:bg-[#00e5a0]/90"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Course
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
