import CourseLayout from "@/components/course/course-layout";
import Navbar from "@/components/navbar";
import { getCourse, getCourses } from "@/lib/api";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { courseId } = await params;

  const [course, courses] = await Promise.all([
    getCourse(courseId),
    getCourses(),
  ]);

  return (
    <div className="min-h-screen bg-[#060d16]">
      <Navbar />

      <CourseLayout course={course} courses={courses} />
    </div>
  );
}
