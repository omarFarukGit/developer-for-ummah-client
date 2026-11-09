import CourseLayout from "@/components/course/course-layout";
import { getCourse, getCourses } from "@/lib/api";

interface CourseContentProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseContent({ params }: CourseContentProps) {
  const { courseId } = await params;

  const [course, courses] = await Promise.all([
    getCourse(courseId),
    getCourses(),
  ]);

  return <CourseLayout course={course} courses={courses} />;
}
