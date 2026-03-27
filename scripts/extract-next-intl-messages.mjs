import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = process.cwd();
const sourcePath = path.join(rootDir, "translations.ts");
const messagesDir = path.join(rootDir, "messages");

const source = fs.readFileSync(sourcePath, "utf8");

const withoutImports = source.replace(/^import\s.+$/gm, "");
const withoutTypedExports = withoutImports
  .replace(/export const (\w+)\s*:[^=]+=\s*/g, "const $1 = ")
  .replace(/export const (\w+)\s*=\s*/g, "const $1 = ");

const prelude = `
const BookOpen = "BookOpen";
const Target = "Target";
const Smile = "Smile";
const Globe = "Globe";
const Globe2 = "Globe2";
const Feather = "Feather";
`;

const script = `${prelude}\n${withoutTypedExports}\nmodule.exports = {translations, COURSE_CATEGORIES, COURSES};`;
const context = { module: { exports: {} }, exports: {} };
vm.createContext(context);
vm.runInContext(script, context);

const { translations, COURSE_CATEGORIES, COURSES } = context.module.exports;

const localeMap = {
  en: "EN",
  ru: "RU",
  uz: "RU",
};

function pickLocalizedRecord(record, langKey) {
  if (!record || typeof record !== "object") return record ?? "";
  return record[langKey] ?? record.EN ?? record.RU ?? "";
}

function localizeCourse(course, langKey) {
  return {
    id: course.id,
    image: course.image,
    title: pickLocalizedRecord(course.title, langKey),
    description: pickLocalizedRecord(course.description, langKey),
    duration: pickLocalizedRecord(course.duration, langKey),
    outcomes: pickLocalizedRecord(course.outcomes, langKey),
    level: course.level,
    category: course.category,
    modules: (course.modules ?? []).map((moduleItem) => ({
      title: pickLocalizedRecord(moduleItem.title, langKey),
      description: pickLocalizedRecord(moduleItem.description, langKey),
      lessons: (moduleItem.lessons ?? []).map((lesson) => ({
        title: pickLocalizedRecord(lesson.title, langKey),
        activity: pickLocalizedRecord(lesson.activity, langKey),
      })),
    })),
    teacher: course.teacher
      ? {
          name: course.teacher.name,
          image: course.teacher.image,
          bio: pickLocalizedRecord(course.teacher.bio, langKey),
        }
      : null,
  };
}

function buildMessages(locale) {
  const langKey = localeMap[locale];
  const rawBase = translations[langKey] ?? translations.EN;

  const categories = (COURSE_CATEGORIES ?? []).map((category) => ({
    value: category.value,
    label: category.label,
    duration: category.duration,
    iconId: category.icon,
  }));

  const courses = (COURSES ?? []).map((course) => localizeCourse(course, langKey));

  return {
    ...rawBase,
    courses: {
      categories,
      list: courses,
    },
  };
}

fs.mkdirSync(messagesDir, { recursive: true });
for (const locale of ["en", "ru", "uz"]) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  fs.writeFileSync(filePath, JSON.stringify(buildMessages(locale), null, 2) + "\n", "utf8");
}

console.log("Generated messages: en.json, ru.json, uz.json");
