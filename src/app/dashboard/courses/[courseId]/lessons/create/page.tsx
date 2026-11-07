import CreateLessonForm from "@/components/dashboard/create-lesson-form";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CreateLessonPage({ params }: PageProps) {
  const { courseId } = await params;

  return <CreateLessonForm courseId={courseId} />;
}
