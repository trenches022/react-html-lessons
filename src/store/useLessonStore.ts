import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LessonState {
  completedLessons: number[]; 
  completeLesson: (id: number) => void; 
  isLessonCompleted: (id: number) => boolean; 
}

export const useLessonStore = create<LessonState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      completeLesson: (id) =>
        set((state) => ({
          completedLessons: [...new Set([...state.completedLessons, id])], 
        })),
      isLessonCompleted: (id) => get().completedLessons.includes(id),
    }),
    {
      name: "lesson-progress", 
    }
  )
);