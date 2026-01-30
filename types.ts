export type Language = 'EN' | 'RU';

export interface CourseModule {
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface CourseTeacher {
  name: string;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  image: string;
}

export interface Course {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  duration: Record<Language, string>;
  price: Record<Language, string>;
  target: Record<Language, string>;
  outcomes: Record<Language, string[]>;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'IELTS';
  category: 'Kids' | 'Teens' | 'Adults' | 'General' | 'IELTS';
  modules: CourseModule[];
  teacher: CourseTeacher;
}

export interface Review {
  id: number;
  name: string;
  photo: string;
  text: Record<Language, string>;
  rating: number;
}
