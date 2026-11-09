export interface Lesson {
  id: string;
  title: string;
  videoId: string;
  duration?: string | null;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description?: string | null;
  thumbnail?: string | null;
  icon?: string | null;

  createdAt?: string;
  updatedAt?: string;
  lessons: Lesson[];
}

export interface UpdateCourseDialogProps {
  course: Course;
}
