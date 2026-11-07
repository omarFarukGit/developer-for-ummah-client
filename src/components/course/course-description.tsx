import { ArrowRight, Play } from "lucide-react";

interface CourseDescriptionProps {
  title: string;
}

export default function CourseDescription({ title }: CourseDescriptionProps) {
  return (
    <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="max-w-4xl text-sm leading-7 text-gray-400">
          In this {title}, you will learn how to build powerful web applications
          using modern technologies. We will cover everything from basic setup
          to practical advanced concepts.
        </p>
      </div>

      <button
        type="button"
        className="flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#00e5a0] px-7 py-3.5 text-sm font-bold text-[#061018] transition hover:bg-[#19f2ae]"
      >
        <Play size={16} fill="currentColor" />
        Start Watching
        <ArrowRight size={17} />
      </button>
    </div>
  );
}
