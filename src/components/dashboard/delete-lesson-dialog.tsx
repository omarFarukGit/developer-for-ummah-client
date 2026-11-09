"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface DeleteLessonDialogProps {
  lessonId: string;
  lessonTitle: string;
}

export default function DeleteLessonDialog({
  lessonId,
  lessonTitle,
}: DeleteLessonDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/lessons/${lessonId}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete lesson");
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

          if (!value) {
            setError("");
          }
        }
      }}
    >
      {/* Delete Button */}
      <DialogTrigger>
        <Button variant="destructive" className={"cursor-pointer"} size="sm">
          <Trash2 className="mr-2 h-4 w-4 " />
          Delete
        </Button>
      </DialogTrigger>

      {/* Confirmation Modal */}
      <DialogContent className="border-white/10 bg-[#07111c] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Delete Lesson?</DialogTitle>

          <DialogDescription className="text-gray-400">
            Are you sure you want to delete{" "}
            <span className="font-medium text-white">"{lessonTitle}"</span>?
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <DialogFooter className="mt-4 gap-2">
          {/* Cancel */}
          <Button
            className="border-white/10 bg-black hover:bg-transparent cursor-pointer"
            type="button"
            variant="outline"
            disabled={loading}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          {/* Confirm Delete */}
          <Button
            type="button"
            variant="destructive"
            disabled={loading}
            onClick={handleDelete}
            className="cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Lesson
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
