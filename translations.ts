import { BookOpen, Target, Smile, Globe, Globe2, Feather } from "lucide-react";
import { Language, Course } from "./types";

export const translations: Record<Language, any> = {
	EN: {
		nav: {
			home: "Main",
			courses: "Catalog",
			about: "The Network",
			contact: "Visit Us",
			enroll: "Join Now",
		},
		hero: {
			badge: "Samarkand's #1 Language Institution",
			title: "Define Your Future with English Mastery",
			subtitle:
				"Premium education for the global-minded. Oxford-certified standards across 8 locations in Samarkand.",
		},
		prestige: {
			badge: "Official Ranking 2024",
			numberWord: "NUMBER",
			oneWord: "ONE.",
			descriptionBeforeHighlight:
				"Officially recognized as the Best Performing Learning Center in ",
			descriptionHighlight: "Uzbekistan by IDP Uzbekistan.",
			videoBadge: "Polyglot School",
			videoTitleLine1: "Watch the story behind",
			videoTitleLine2: "Uzbekistan's leading language school.",
		},
		results: {
			badge: "THE TEAM",
			title: "Our Pride",
			subtitle: "6 teachers with IELTS 9",
			uniqueClaim: "No other language center in Samarkand has this",
			scoreLabel: "IELTS 9",
			roleLabel: "Teacher",
			teachersStat: "Teachers",
			maxBandLabel: "Max Band",
			teachers: [
				{ name: "Angus", image: "Angus.jpeg" },
				{ name: "Jasur", image: "Jasur.jpeg" },
				{ name: "Nazira", image: "NAZIRA.jpeg" },
				{ name: "Otabek", image: "Otabek.jpeg" },
				{ name: "Shahzoda", image: "SHAHZODA.jpeg" },
				{ name: "Tesni", image: "Tesni.jpeg" },
			],
			viewAllStaff: "View all staff",
		},
		staffPage: {
			title: "Our Team",
			subtitle:
				"Meet the people who make Polyglot the leading language school in Samarkand.",
			sectionNiners: "IELTS 9 — Our Pride",
			sectionTeam: "Teaching Team",
			roleLabel: "Teacher",
			scoreLabel: "IELTS 9",
			allTeachers: [
				{
					nameEn: "Angus",
					nameRu: "Ангус",
					image: "Angus.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Jasur",
					nameRu: "Жасур",
					image: "Jasur.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Nazira",
					nameRu: "Назира",
					image: "NAZIRA.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Otabek",
					nameRu: "Отабек",
					image: "Otabek.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Shahzoda",
					nameRu: "Шахзода",
					image: "SHAHZODA.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Tesni",
					nameRu: "Тесни",
					image: "Tesni.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Javokhir",
					nameRu: "Жавохир",
					image: "Javokhir.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Nodir",
					nameRu: "Нодир",
					image: "Nodir.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Shahrukh",
					nameRu: "Шахрух",
					image: "Shahrukh.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Siyovush",
					nameRu: "Сиёвуш",
					image: "Siyovush.jpeg",
					folder: "team",
					ielts9: false,
				},
			],
		},
		branches: {
			title: "Closest to You",
			subtitle: "A network of 8 high-tech campuses across Samarkand.",
			mapRouteText: "Build route",
			list: [
				"Registan Center",
				"Siyob Campus",
				"Universitet Blvd",
				"Vokzal District",
				"Sat-Tepo",
				"Afrosiyob",
				"Chust",
				"Motrid",
			],
		},
		methodology: {
			title: "The Protocol",
			subtitle:
				"How we guarantee your transition from silent observer to confident speaker.",
			steps: [
				{
					title: "Neural Diagnostic",
					desc: "Not just grammar. We test your cognitive comfort and speaking barriers.",
				},
				{
					title: "Deep Immersion",
					desc: "100% English environment from the first second of the lesson.",
				},
				{
					title: "Active Feedback",
					desc: "Real-time error correction using our proprietary digital tracking.",
				},
				{
					title: "Real-World Check",
					desc: "Final certification through debates with native speakers.",
				},
			],
		},
		lifestyle: {
			title: "Ecosystem",
			subtitle: "Learning English is a lifestyle, not a 90-minute chore.",
			items: [
				{ title: "Speaking Clubs", label: "Daily" },
				{ title: "Cinema Nights", label: "Weekends" },
				{ title: "Elite Library", label: "24/7 Access" },
				{ title: "Game Theory", label: "Interactive" },
			],
		},
		faq: {
			title: "Intelligent Support",
			questions: [
				{
					q: "How long to reach IELTS 7.0?",
					a: "Typically 6-9 months of intensive study depending on your starting point.",
				},
				{
					q: "Are your teachers certified?",
					a: "Yes, 100% of our staff hold CELTA, DELTA or equivalent international certificates.",
				},
				{
					q: "Can I change my branch?",
					a: "Absolutely. You can move between any of our 8 campuses in Samarkand.",
				},
			],
		},
		footer: {
			rights: "© 2026 Polyglot Network. Excellence in Samarkand since 2012.",
			address: "Universitet Blvd 77",
		},
		ai: {
			trigger: "AI Advisor",
			placeholder: "What is your current level?",
		},
		enrollForm: {
			title: "Join Polyglot Network",
			subtitle:
				"Start your journey to English mastery today. Our advisors will contact you shortly.",
			name: "Your Full Name",
			phone: "Contact Number",
			branch: "Choose a convenient branch",
			submit: "Send Application",
			success: "Welcome Aboard!",
		},
		diagnostic: {
			title: "Quick Diagnostic",
			subtitle: "Find out your real language level in 60 seconds.",
			quickCardTime: "60 Seconds",
			quickCardTitle: "Quick Diagnostic",
			quickCardDesc:
				"Fast AI assessment of your speaking comfort and basic goals.",
			quickCardCta: "Start Now",
			deepCardTime: "30 Minutes",
			deepCardTitle: "Deep Audit",
			deepCardDesc:
				"Full professional academic testing with grammar, vocabulary and logic.",
			deepCardCta: "Go To Exam",
			startBtn: "Start Test",
			nextBtn: "Next Question",
			calculating: "Analyzing data...",
			resultTitle: "Diagnostic Complete",
			recommendation: "Recommended program:",
			retake: "Retake Test",
			questions: [
				{
					q: "How would you describe your comfort when communicating?",
					options: [
						{ a: "I use single words and gestures", score: 1 },
						{
							a: "I can communicate in daily life, but complex topics are difficult",
							score: 2,
						},
						{
							a: "I speak freely but sometimes make grammar mistakes",
							score: 3,
						},
						{
							a: "I use English professionally every day",
							score: 4,
						},
					],
				},
				{
					q: "Which sentence is grammatically correct?",
					options: [
						{ a: "I have seen him yesterday", score: 1 },
						{ a: "I saw him yesterday", score: 3 },
						{ a: "I seen him yesterday", score: 0 },
					],
				},
				{
					q: "What is your main learning goal?",
					options: [
						{
							a: "Academic (IELTS / University admission)",
							score: 5,
						},
						{
							a: "Career growth / Business negotiations",
							score: 4,
						},
						{ a: "Personal development / Travel", score: 2 },
					],
				},
			],
		},
		deepAudit: {
			backgroundWord: "AUDIT",
			titleWord: "Neural",
			titleHighlight: "Deep Audit.",
			subtitle:
				"Full 30-minute professional assessment from Polyglot HQ. Cover grammar, lexical resource, and linguistic logic.",
			timeLabel: "Time Limit",
			timeValue: "30 MIN",
			standardsLabel: "Standards",
			standardsValue: "CEFR STDR",
			accuracyLabel: "Accuracy",
			accuracyValue: "98% ACC.",
			startBtn: "Start Full Exam",
			formTitle: "Your contact details",
			formSubtitle: "We will use them to call you back after the test.",
			formNameLabel: "Name",
			formNamePlaceholder: "John Doe",
			formPhoneLabel: "Phone",
			formPhonePlaceholder: "+998 (__) ___-__-__",
			formContinueBtn: "Continue to test",
			leaveWarning:
				"If you refresh the page or go back, your progress will be lost. Are you sure?",
			formLoading: "Loading test…",
			formLoadError: "Failed to load test. Please refresh the page.",
			questionLabel: "Question",
			back: "Back",
			next: "Next",
			finishBtn: "Finish & Analyze",
			completeBadge: "Audit Complete",
			resultSuccessTitle: "All tests passed",
			resultSuccessSubtitle: "We will call you back soon.",
			yourLabel: "Your",
			standingLabel: "Standing.",
			metricsTitle: "Diagnostic Metrics",
			levelLabel: "Level",
			retakeBtn: "Retake Audit",
			systemRecLabel: "System Recommendation",
			readyForLabel: "Ready for",
			reserveSpotBtn: "Reserve Spot",
			levels: {
				beginner: "Beginner (A1)",
				intermediate: "Intermediate (B1-B2)",
				advanced: "Advanced (C1)",
			},
		},
	},
	RU: {
		nav: {
			home: "Главная",
			courses: "Курсы",
			about: "О сети",
			contact: "Контакты",
			enroll: "Записаться",
		},
		hero: {
			badge: "Языковая школа №1 в Самарканде",
			title: "Создай свое будущее через английский",
			subtitle:
				"Премиальное образование мирового уровня. Оксфордские стандарты в 8 филиалах по всему Самарканду.",
		},
		prestige: {
			badge: "Официальный рейтинг 2024",
			numberWord: "НОМЕР",
			oneWord: "ПЕРВЫЙ.",
			descriptionBeforeHighlight:
				"Официально признан Лучшим языковым центром ",
			descriptionHighlight: "Узбекистана по версии IDP Uzbekistan.",
			videoBadge: "Polyglot School",
			videoTitleLine1: "Узнайте историю",
			videoTitleLine2: "ведущей языковой школы Узбекистана.",
		},
		results: {
			badge: "КОМАНДА",
			title: "Наша гордость",
			subtitle: "6 преподавателей с IELTS 9",
			uniqueClaim: "Такого нет ни в одном учебном центре Самарканда",
			scoreLabel: "IELTS 9",
			roleLabel: "Преподаватель",
			teachersStat: "Преподавателей",
			maxBandLabel: "Макс. балл",
			teachers: [
				{ name: "Ангус", image: "Angus.jpeg" },
				{ name: "Жасур", image: "Jasur.jpeg" },
				{ name: "Назира", image: "NAZIRA.jpeg" },
				{ name: "Отабек", image: "Otabek.jpeg" },
				{ name: "Шахзода", image: "SHAHZODA.jpeg" },
				{ name: "Тесни", image: "Tesni.jpeg" },
			],
			viewAllStaff: "Посмотреть весь состав",
		},
		staffPage: {
			title: "Наша команда",
			subtitle:
				"Люди, которые делают Polyglot ведущей языковой школой Самарканда.",
			sectionNiners: "IELTS 9 — Наша гордость",
			sectionTeam: "Преподавательский состав",
			roleLabel: "Преподаватель",
			scoreLabel: "IELTS 9",
			allTeachers: [
				{
					nameEn: "Angus",
					nameRu: "Ангус",
					image: "Angus.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Jasur",
					nameRu: "Жасур",
					image: "Jasur.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Nazira",
					nameRu: "Назира",
					image: "NAZIRA.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Otabek",
					nameRu: "Отабек",
					image: "Otabek.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Shahzoda",
					nameRu: "Шахзода",
					image: "SHAHZODA.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Tesni",
					nameRu: "Тесни",
					image: "Tesni.jpeg",
					folder: "niners",
					ielts9: true,
				},
				{
					nameEn: "Javokhir",
					nameRu: "Жавохир",
					image: "Javokhir.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Nodir",
					nameRu: "Нодир",
					image: "Nodir.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Shahrukh",
					nameRu: "Шахрух",
					image: "Shahrukh.jpeg",
					folder: "team",
					ielts9: false,
				},
				{
					nameEn: "Siyovush",
					nameRu: "Сиёвуш",
					image: "Siyovush.jpeg",
					folder: "team",
					ielts9: false,
				},
			],
		},
		branches: {
			title: "Мы всегда рядом",
			subtitle:
				"Сеть из 8 высокотехнологичных кампусов по всему Самарканду.",
			mapRouteText: "Составить маршрут",
			list: [
				"Регистан Центр",
				"Сиёб Кампус",
				"Университетский Бульвар",
				"Вокзал",
				"Сат-Тепо",
				"Афросиёб",
				"Чуст",
				"Мотрид",
			],
		},
		methodology: {
			title: "Протокол",
			subtitle:
				"Как мы гарантируем ваш переход от молчаливого слушателя к уверенному спикеру.",
			steps: [
				{
					title: "Нейро-диагностика",
					desc: "Не просто грамматика. Мы тестируем когнитивный комфорт и речевые барьеры.",
				},
				{
					title: "Глубокое погружение",
					desc: "100% английская среда с первой секунды урока.",
				},
				{
					title: "Активный фидбек",
					desc: "Коррекция ошибок в реальном времени через нашу цифровую систему.",
				},
				{
					title: "Проверка в жизни",
					desc: "Финальная сертификация через дебаты с носителями языка.",
				},
			],
		},
		lifestyle: {
			title: "Экосистема",
			subtitle:
				"Изучение английского — это стиль жизни, а не 90 минут за партой.",
			items: [
				{ title: "Разговорные клубы", label: "Ежедневно" },
				{ title: "Кинопоказы", label: "Выходные" },
				{ title: "Элитная библиотека", label: "24/7 Доступ" },
				{ title: "Игровая теория", label: "Интерактив" },
			],
		},
		faq: {
			title: "Интеллектуальная поддержка",
			questions: [
				{
					q: "Сколько времени нужно до IELTS 7.0?",
					a: "Обычно 6-9 месяцев интенсивного обучения в зависимости от вашего старта.",
				},
				{
					q: "Ваши учителя сертифицированы?",
					a: "Да, 100% нашего персонала имеют международные сертификаты CELTA или DELTA.",
				},
				{
					q: "Могу ли я сменить филиал?",
					a: "Конечно. Вы можете перемещаться между любыми из 8 кампусов в Самарканде.",
				},
			],
		},
		footer: {
			rights: "© 2026 Polyglot Network. Лидер образования в Самарканде с 2012 года.",
			address: "Университетский бульвар 77",
		},
		ai: {
			trigger: "AI Консультант",
			placeholder: "Какой у вас сейчас уровень?",
		},
		enrollForm: {
			title: "Присоединяйтесь к Polyglot",
			subtitle:
				"Начните свой путь к совершенству в английском сегодня. Наши консультанты скоро свяжутся с вами.",
			name: "Ваше полное имя",
			phone: "Контактный номер",
			branch: "Выберите удобный филиал",
			submit: "Отправить заявку",
			success: "Добро пожаловать!",
		},
		diagnostic: {
			title: "Диагностика",
			subtitle: "Узнайте свой реальный уровень языка за 60 секунд.",
			quickCardTime: "60 секунд",
			quickCardTitle: "Быстрая диагностика",
			quickCardDesc: "Быстрая оценка комфорта в речи и основных целей.",
			quickCardCta: "Начать",
			deepCardTime: "30 минут",
			deepCardTitle: "Глубокий аудит",
			deepCardDesc:
				"Полное профессиональное тестирование: грамматика, лексика и логика.",
			deepCardCta: "К тесту",
			startBtn: "Начать тест",
			nextBtn: "Следующий вопрос",
			calculating: "Анализ данных...",
			resultTitle: "Диагностика завершена",
			recommendation: "Рекомендуемая программа:",
			retake: "Пройти снова",
			questions: [
				{
					q: "Как бы вы описали свой комфорт при общении?",
					options: [
						{ a: "Использую отдельные слова и жесты", score: 1 },
						{
							a: "Могу общаться в быту, но сложные темы даются с трудом",
							score: 2,
						},
						{
							a: "Говорю свободно, но иногда делаю грамматические ошибки",
							score: 3,
						},
						{
							a: "Использую английский профессионально каждый день",
							score: 4,
						},
					],
				},
				{
					q: "Какое предложение грамматически верно?",
					options: [
						{ a: "I have seen him yesterday", score: 1 },
						{ a: "I saw him yesterday", score: 3 },
						{ a: "I seen him yesterday", score: 0 },
					],
				},
				{
					q: "Какова ваша основная цель обучения?",
					options: [
						{
							a: "Академическая (IELTS / Поступление в ВУЗ)",
							score: 5,
						},
						{ a: "Карьерный рост / Бизнес-переговоры", score: 4 },
						{ a: "Личное развитие / Путешествия", score: 2 },
					],
				},
			],
		},
		deepAudit: {
			backgroundWord: "АУДИТ",
			titleWord: "Нейро",
			titleHighlight: "Глубокий аудит.",
			subtitle:
				"Полная 30-минутная профессиональная оценка от Polyglot. Грамматика, лексика и языковая логика.",
			timeLabel: "Лимит времени",
			timeValue: "30 МИН",
			standardsLabel: "Стандарты",
			standardsValue: "CEFR",
			accuracyLabel: "Точность",
			accuracyValue: "98%",
			startBtn: "Начать полный тест",
			formTitle: "Ваши контактные данные",
			formSubtitle:
				"Мы используем их, чтобы перезвонить вам после теста.",
			formNameLabel: "Имя",
			formNamePlaceholder: "Иван Иванов",
			formPhoneLabel: "Телефон",
			formPhonePlaceholder: "+998 (__) ___-__-__",
			formContinueBtn: "Перейти к тесту",
			leaveWarning:
				"Если вы обновите страницу или уйдёте назад, прогресс обнулится. Продолжить?",
			formLoading: "Загрузка теста…",
			formLoadError: "Не удалось загрузить тест. Обновите страницу.",
			questionLabel: "Вопрос",
			back: "Назад",
			next: "Далее",
			finishBtn: "Завершить и анализировать",
			completeBadge: "Аудит завершён",
			resultSuccessTitle: "Все тесты пройдены",
			resultSuccessSubtitle: "В ближайшее время вам перезвонят.",
			yourLabel: "Ваш",
			standingLabel: "результат.",
			metricsTitle: "Показатели диагностики",
			levelLabel: "Уровень",
			retakeBtn: "Пройти снова",
			systemRecLabel: "Рекомендация системы",
			readyForLabel: "Вам подойдёт",
			reserveSpotBtn: "Записаться",
			levels: {
				beginner: "Начальный (A1)",
				intermediate: "Средний (B1-B2)",
				advanced: "Продвинутый (C1)",
			},
		},
	},
};

export const COURSE_CATEGORIES = [
	{
		value: "General English",
		label: "General_English",
		icon: BookOpen,
		duration: "From Beginning to Fluency",
	},
	{
		value: "IELTS Intensive",
		label: "IELTS_Intensive",
		icon: Target,
		duration: "From Intermediate to Advanced",
	},
	{
		value: "English kids",
		label: "English_kids",
		icon: Smile,
		duration: "From Foundation to Beginner",
	},
	{
		value: "Подготовка к CEFR/DTM",
		label: "Подготовка_к_CEFR/DTM",
		icon: Globe,
		duration: "From Foundation to Fluency",
	},
	{
		value: "Подготовка к TOEFL",
		label: "Подготовка_к_TOEFL",
		icon: Globe2,
		duration: "From Intermediate to Advanced",
	},
	{
		value: "Подготовка к Duolingo",
		label: "Подготовка_к_Duolingo",
		icon: Feather,
		duration: "From Intermediate to Advanced",
	},
];

export const COURSES: Course[] = [
	{
		id: "b1-pre-intermediate",
		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
		title: {
			EN: "B1 Pre Intermediate",
			RU: "B1 Pre-Intermediate",
		},

		description: {
			EN: "Build confident communication and solid grammar foundation.",
			RU: "Развитие уверенного общения и прочной грамматической базы.",
		},

		level: "B1",

		duration: {
			EN: "2 Months (40 lessons)",
			RU: "2 месяца (40 занятий)",
		},
		category: "General_English",

		outcomes: {
			EN: [
				"Use advanced grammar structures in speech and writing",
				"Participate in discussions and debates",
				"Write structured essays and formal letters",
				"Prepare for the national B2 certificate exam",
			],
			RU: [
				"Свободно использовать сложную грамматику в речи и письме",
				"Участвовать в обсуждениях и конструктивных спорах",
				"Писать структурированные эссе и формальные письма",
				"Подготовиться к национальному экзамену уровня B2",
			],
		},

		modules: [
			{
				title: {
					EN: "Month 1",
					RU: "1-й месяц",
				},

				description: {
					EN: "Focus on core grammar and everyday vocabulary.",
					RU: "Углубление в базовую грамматику и повседневную лексику.",
				},

				lessons: [
					{
						title: {
							EN: "Present Simple vs Present Continuous",
							RU: "Present Simple vs Present Continuous",
						},
						activity: {
							EN: "Reading: Multiple Choice Questions",
							RU: "Чтение: тест с вариантами ответа",
						},
					},

					{
						title: {
							EN: "Articles",
							RU: "Артикли",
						},
						activity: {
							EN: "Speaking: Family arguments / information role-plays",
							RU: "Говорение: семейные дискуссии и ролевые игры",
						},
					},

					{
						title: {
							EN: "Past Simple",
							RU: "Past Simple",
						},
						activity: {
							EN: "Telling stories related to crime",
							RU: "Рассказы на тему преступлений",
						},
					},

					{
						title: {
							EN: "Past Continuous",
							RU: "Past Continuous",
						},
						activity: {
							EN: "Writing: Understanding the evaluation",
							RU: "Письмо: понимание критериев оценки",
						},
					},

					{
						title: {
							EN: "Quantifiers",
							RU: "Quantifiers",
						},
						activity: {
							EN: "Talking about social networks",
							RU: "Обсуждение социальных сетей",
						},
					},

					{
						title: {
							EN: "Relative Pronouns",
							RU: "Относительные местоимения",
						},
						activity: {
							EN: "Discussing definitions",
							RU: "Обсуждение определений",
						},
					},

					{
						title: {
							EN: "Present Perfect (ever / never / for / since)",
							RU: "Present Perfect (ever / never / for / since)",
						},
						activity: {
							EN: "Understanding first aid",
							RU: "Понимание темы первой помощи",
						},
					},

					{
						title: {
							EN: "Present Perfect vs Past Simple",
							RU: "Present Perfect vs Past Simple",
						},
						activity: {
							EN: "Writing: Content and style",
							RU: "Письмо: содержание и стиль",
						},
					},

					{
						title: {
							EN: "Comparative & Superlative Adjectives",
							RU: "Сравнительные и превосходные степени",
						},
						activity: {
							EN: "Writing: Opinions about TV and films",
							RU: "Письмо: мнение о фильмах и ТВ",
						},
					},

					{
						title: {
							EN: "Modifying adjectives / too & enough",
							RU: "Модификаторы прилагательных",
						},
						activity: {
							EN: "Speaking: Negotiations",
							RU: "Говорение: переговоры",
						},
					},

					{
						title: {
							EN: "Presentation",
							RU: "Презентация",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},

					{
						title: {
							EN: "Going to / Will / May / Might",
							RU: "Going to / Will / May / Might",
						},
						activity: {
							EN: "Talking about your future",
							RU: "Разговор о будущем",
						},
					},

					{
						title: {
							EN: "Zero & First Conditional",
							RU: "Zero и First Conditional",
						},
						activity: {
							EN: "Writing: Formal exam letter",
							RU: "Письмо: формальное письмо для экзамена",
						},
					},

					{
						title: {
							EN: "Modals of obligation / prohibition / advice",
							RU: "Модальные глаголы обязательства и совета",
						},
						activity: {
							EN: "Writing a CV",
							RU: "Написание CV",
						},
					},

					{
						title: {
							EN: "Second Conditional",
							RU: "Second Conditional",
						},
						activity: {
							EN: "Speaking: Giving advice",
							RU: "Говорение: советы",
						},
					},

					{
						title: {
							EN: "Past Perfect / Used to",
							RU: "Past Perfect / Used to",
						},
						activity: {
							EN: "Reporting past activities",
							RU: "Описание прошлых событий",
						},
					},

					{
						title: {
							EN: "Gerunds vs Infinitives",
							RU: "Gerunds vs Infinitives",
						},
						activity: {
							EN: "Discussing friendship interests",
							RU: "Обсуждение интересов в дружбе",
						},
					},

					{
						title: {
							EN: "Reported Speech: Statements",
							RU: "Косвенная речь: утверждения",
						},
						activity: {
							EN: "Reading: Referencing exercise",
							RU: "Чтение: упражнение на вставку предложений",
						},
					},

					{
						title: {
							EN: "Reported Speech: Questions",
							RU: "Косвенная речь: вопросы",
						},
						activity: {
							EN: "Listening: Completing notes",
							RU: "Аудирование: заполнение заметок",
						},
					},

					{
						title: {
							EN: "Passive Voice (Present Simple)",
							RU: "Passive Voice (Present Simple)",
						},
						activity: {
							EN: "Speaking: Importance of the internet",
							RU: "Говорение: значение интернета",
						},
					},

					{
						title: {
							EN: "Passive Voice (Other tenses)",
							RU: "Passive Voice (другие времена)",
						},
						activity: {
							EN: "Speculating about photos",
							RU: "Обсуждение фотографий",
						},
					},

					{
						title: {
							EN: "Presentation",
							RU: "Презентация",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},

					{
						title: {
							EN: "Review Lesson",
							RU: "Повторение",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},
					{
						title: {
							EN: "Head Teacher Workshop",
							RU: "Мастер-класс старшего преподавателя",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},
				],
			},
		],
		teacher: {
			name: "Emily Johnson",
			bio: {
				EN: "Lead Instructor",
				RU: "Главный преподаватель",
			},
			image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
		},
	},
	{
		id: "b1-plus-intermediate",

		image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",

		title: {
			EN: "B1+ Intermediate",
			RU: "B1+ Intermediate",
		},

		description: {
			EN: "Develop advanced grammar and argumentative speaking skills.",
			RU: "Развитие продвинутой грамматики и навыков аргументированной речи.",
		},

		level: "B1+",

		duration: {
			EN: "2 Months (40 lessons)",
			RU: "2 месяца (40 занятий)",
		},

		category: "General_English",

		outcomes: {
			EN: [
				"Use advanced grammar structures in speech and writing",
				"Participate in discussions and debates",
				"Write structured essays and formal letters",
				"Prepare for the national B2 certificate exam",
			],
			RU: [
				"Свободно использовать сложную грамматику в речи и письме",
				"Участвовать в обсуждениях и конструктивных спорах",
				"Писать структурированные эссе и формальные письма",
				"Подготовиться к национальному экзамену уровня B2",
			],
		},

		modules: [
			{
				title: {
					EN: "Month 1",
					RU: "1-й месяц",
				},

				description: {
					EN: "Develop advanced grammar and argumentative speaking skills.",
					RU: "Развитие продвинутой грамматики и навыков аргументированной речи.",
				},

				lessons: [
					{
						title: {
							EN: "Present Simple vs Present Continuous",
							RU: "Present Simple vs Present Continuous",
						},
						activity: {
							EN: "Reading: True / False / Not Given",
							RU: "Чтение: True / False / Not Given",
						},
					},

					{
						title: {
							EN: "State and Action Verbs",
							RU: "State and Action Verbs",
						},
						activity: {
							EN: "Listening: Matching information, Speaking: Describing people",
							RU: "Аудирование: сопоставление информации, Говорение: описание людей",
						},
					},

					{
						title: {
							EN: "Past Simple / Past Continuous / Past Perfect",
							RU: "Past Simple / Past Continuous / Past Perfect",
						},
						activity: {
							EN: "Speaking: Exchanging information",
							RU: "Говорение: обмен информацией",
						},
					},

					{
						title: {
							EN: "Used to / Would",
							RU: "Used to / Would",
						},
						activity: {
							EN: "Speaking: Discussing life in the past",
							RU: "Говорение: обсуждение жизни в прошлом",
						},
					},

					{
						title: {
							EN: "Present Perfect",
							RU: "Present Perfect",
						},
						activity: {
							EN: "Listening: Podcast",
							RU: "Аудирование: подкаст",
						},
					},

					{
						title: {
							EN: "Present Perfect Continuous",
							RU: "Present Perfect Continuous",
						},
						activity: {
							EN: "Writing: Explaining statistics for Writing Task 1",
							RU: "Письмо: объяснение статистики (Writing Task 1)",
						},
					},

					{
						title: {
							EN: "Future Forms",
							RU: "Future Forms",
						},
						activity: {
							EN: "Writing: A recipe",
							RU: "Письмо: рецепт",
						},
					},

					{
						title: {
							EN: "Future Continuous & Future Perfect",
							RU: "Future Continuous и Future Perfect",
						},
						activity: {
							EN: "Speaking: Recipe discussion",
							RU: "Говорение: обсуждение рецепта",
						},
					},

					{
						title: {
							EN: "Modals of Obligation / Prohibition / Advice / Permission",
							RU: "Модальные глаголы: обязанность, запрет, совет, разрешение",
						},
						activity: {
							EN: "Writing: Formal letter of application",
							RU: "Письмо: формальное письмо-заявка",
						},
					},

					{
						title: {
							EN: "Zero, First, Second Conditionals",
							RU: "Zero, First, Second Conditionals",
						},
						activity: {
							EN: "Speaking: Talking about school projects",
							RU: "Говорение: обсуждение школьных проектов",
						},
					},

					{
						title: {
							EN: "Presentation",
							RU: "Презентация",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},

					{
						title: {
							EN: "Passive Voice / Have Something Done",
							RU: "Passive Voice / Have Something Done",
						},
						activity: {
							EN: "Speaking: Brainstorming with the team",
							RU: "Говорение: мозговой штурм в команде",
						},
					},

					{
						title: {
							EN: "Gerunds and Infinitives",
							RU: "Gerunds and Infinitives",
						},
						activity: {
							EN: "Writing: For-and-against essay",
							RU: "Письмо: эссе «за и против»",
						},
					},

					{
						title: {
							EN: "Defining Relative Clauses",
							RU: "Defining Relative Clauses",
						},
						activity: {
							EN: "Reading and analyzing a magazine article",
							RU: "Чтение и анализ журнальной статьи",
						},
					},

					{
						title: {
							EN: "Non-defining Relative Clauses",
							RU: "Non-defining Relative Clauses",
						},
						activity: {
							EN: "Speaking: Debate (superstitions and rituals)",
							RU: "Говорение: дебаты (суеверия и ритуалы)",
						},
					},

					{
						title: {
							EN: "Reported Speech: Statements",
							RU: "Косвенная речь: утверждения",
						},
						activity: {
							EN: "Speaking: Film feedback",
							RU: "Говорение: отзыв о фильме",
						},
					},

					{
						title: {
							EN: "Reported Speech: Questions & Commands",
							RU: "Косвенная речь: вопросы и команды",
						},
						activity: {
							EN: "Writing: Instructions",
							RU: "Письмо: инструкции",
						},
					},

					{
						title: {
							EN: "Modal Verbs of Speculation and Deduction",
							RU: "Модальные глаголы предположения",
						},
						activity: {
							EN: "Speaking: Conspiracy theories discussion",
							RU: "Говорение: обсуждение теорий заговора",
						},
					},

					{
						title: {
							EN: "Third Conditional",
							RU: "Third Conditional",
						},
						activity: {
							EN: "Writing: A story",
							RU: "Письмо: рассказ",
						},
					},

					{
						title: {
							EN: "Indeterminate Pronouns",
							RU: "Неопределённые местоимения",
						},
						activity: {
							EN: "Speaking: Clothes shop dialogue",
							RU: "Говорение: диалог в магазине одежды",
						},
					},

					{
						title: {
							EN: "So / Such / I wish / If only",
							RU: "So / Such / I wish / If only",
						},
						activity: {
							EN: "Writing: Formal letter of complaint",
							RU: "Письмо: формальная жалоба",
						},
					},

					{
						title: {
							EN: "Presentation",
							RU: "Презентация",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},

					{
						title: {
							EN: "Review Lesson",
							RU: "Повторение",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},

					{
						title: {
							EN: "Head Teacher Workshop",
							RU: "Мастер-класс старшего преподавателя",
						},
						activity: {
							EN: "",
							RU: "",
						},
					},
				],
			},
		],
		teacher: {
			name: "Emily Johnson",
			bio: {
				EN: "Lead Instructor",
				RU: "Главный преподаватель",
			},
			image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
		},
	},
];
