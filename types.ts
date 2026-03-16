export type Language = "EN" | "RU";

export interface CourseModule {
	title: Record<Language, string>;
	description: Record<Language, string>;
	lessons: Array<{
		title: Record<Language, string>;
		activity: Record<Language, string>;
	}>;
}

export interface CourseTeacher {
	name: string;
	bio: Record<Language, string>;
	image: string;
}

export interface Course {
	id: string;
	title: Record<Language, string>;
	description: Record<Language, string>;
	// longDescription: Record<Language, string>;
	duration: Record<Language, string>;
	// price: Record<Language, string>;
	// target: Record<Language, string>;
	outcomes: Record<Language, string[]>;
	image: string;
	level: string;
	category: any;
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
