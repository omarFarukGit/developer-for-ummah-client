import { Course, Lesson } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getCourses(): Promise<Course[]> {
  const response = await fetch(`${API_URL}/courses`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const result = await response.json();

  return result.data;
}

export async function getCourse(courseId: string): Promise<Course> {
  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Course not found");
  }

  const result = await response.json();

  return result.data;
}

export async function getLessons(courseId: string): Promise<Lesson[]> {
  const response = await fetch(`${API_URL}/lessons/course/${courseId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch lessons");
  }

  const result = await response.json();

  return result.data;
}
