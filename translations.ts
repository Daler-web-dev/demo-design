
import { Language, Course, CourseModule, CourseTeacher } from './types';

export const translations: Record<Language, any> = {
  EN: {
    nav: { home: 'Main', courses: 'Catalog', about: 'The Network', contact: 'Visit Us', enroll: 'Join Now' },
    hero: { 
      badge: 'Samarkand\'s #1 Language Institution',
      title: 'Define Your Future with English Mastery',
      subtitle: 'Premium education for the global-minded. Oxford-certified standards across 8 locations in Samarkand.'
    },
    results: {
      title: 'Our Pride',
      subtitle: 'The highest IELTS scores in the region speak louder than words.',
      scores: [
        { name: 'Azizbek K.', score: '8.5', result: 'IELTS Academic', year: '2024' },
        { name: 'Madina S.', score: '8.0', result: 'IELTS Academic', year: '2023' },
        { name: 'Jasur M.', score: '8.0', result: 'IELTS Academic', year: '2024' }
      ]
    },
    branches: {
      title: 'Closest to You',
      subtitle: 'A network of 8 high-tech campuses across Samarkand.',
      list: ['Registan Center', 'Siyob Campus', 'Universitet Blvd', 'Vokzal District', 'Sat-Tepo', 'Afrosiyob', 'Chust', 'Motrid']
    },
    methodology: {
      title: 'The Protocol',
      subtitle: 'How we guarantee your transition from silent observer to confident speaker.',
      steps: [
        { title: 'Neural Diagnostic', desc: 'Not just grammar. We test your cognitive comfort and speaking barriers.' },
        { title: 'Deep Immersion', desc: '100% English environment from the first second of the lesson.' },
        { title: 'Active Feedback', desc: 'Real-time error correction using our proprietary digital tracking.' },
        { title: 'Real-World Check', desc: 'Final certification through debates with native speakers.' }
      ]
    },
    lifestyle: {
      title: 'Ecosystem',
      subtitle: 'Learning English is a lifestyle, not a 90-minute chore.',
      items: [
        { title: 'Speaking Clubs', label: 'Daily' },
        { title: 'Cinema Nights', label: 'Weekends' },
        { title: 'Elite Library', label: '24/7 Access' },
        { title: 'Game Theory', label: 'Interactive' }
      ]
    },
    faq: {
      title: 'Intelligent Support',
      questions: [
        { q: 'How long to reach IELTS 7.0?', a: 'Typically 6-9 months of intensive study depending on your starting point.' },
        { q: 'Are your teachers certified?', a: 'Yes, 100% of our staff hold CELTA, DELTA or equivalent international certificates.' },
        { q: 'Can I change my branch?', a: 'Absolutely. You can move between any of our 8 campuses in Samarkand.' }
      ]
    },
    footer: { rights: '© 2026 Polyglot Network. Excellence in Samarkand since 2012.', address: 'Universitet Blvd 77' },
    ai: { trigger: 'AI Advisor', placeholder: 'What is your current level?' },
    courses: {
      filters: { all: 'All', kids: 'Kids', teens: 'Teens', adults: 'Adults', ielts: 'IELTS' }
    },
    enrollForm: {
      title: 'Join Polyglot Network',
      subtitle: 'Start your journey to English mastery today. Our advisors will contact you shortly.',
      name: 'Your Full Name',
      phone: 'Contact Number',
      course: 'Preferred Program',
      submit: 'Send Application',
      success: 'Welcome Aboard!'
    }
  },
  RU: {
    nav: { home: 'Главная', courses: 'Курсы', about: 'О сети', contact: 'Контакты', enroll: 'Записаться' },
    hero: { 
      badge: 'Языковая школа №1 в Самарканде',
      title: 'Создай свое будущее через английский',
      subtitle: 'Премиальное образование мирового уровня. Оксфордские стандарты в 8 филиалах по всему Самарканду.'
    },
    results: {
      title: 'Гордость школы',
      subtitle: 'Самые высокие баллы IELTS в регионе говорят сами за себя.',
      scores: [
        { name: 'Азизбек К.', score: '8.5', result: 'IELTS Academic', year: '2024' },
        { name: 'Мадина S.', score: '8.0', result: 'IELTS Academic', year: '2023' },
        { name: 'Жасур М.', score: '8.0', result: 'IELTS Academic', year: '2024' }
      ]
    },
    branches: {
      title: 'Мы всегда рядом',
      subtitle: 'Сеть из 8 высокотехнологичных кампусов по всему Самарканду.',
      list: ['Регистан Центр', 'Сиёб Кампус', 'Университетский Бульвар', 'Вокзал', 'Сат-Тепо', 'Афросиёб', 'Чуст', 'Мотрид']
    },
    methodology: {
      title: 'Протокол',
      subtitle: 'Как мы гарантируем ваш переход от молчаливого слушателя к уверенному спикеру.',
      steps: [
        { title: 'Нейро-диагностика', desc: 'Не просто грамматика. Мы тестируем когнитивный комфорт и речевые барьеры.' },
        { title: 'Глубокое погружение', desc: '100% английская среда с первой секунды урока.' },
        { title: 'Активный фидбек', desc: 'Коррекция ошибок в реальном времени через нашу цифровую систему.' },
        { title: 'Проверка в жизни', desc: 'Финальная сертификация через дебаты с носителями языка.' }
      ]
    },
    lifestyle: {
      title: 'Экосистема',
      subtitle: 'Изучение английского — это стиль жизни, а не 90 минут за партой.',
      items: [
        { title: 'Разговорные клубы', label: 'Ежедневно' },
        { title: 'Кинопоказы', label: 'Выходные' },
        { title: 'Элитная библиотека', label: '24/7 Доступ' },
        { title: 'Игровая теория', label: 'Интерактив' }
      ]
    },
    faq: {
      title: 'Интеллектуальная поддержка',
      questions: [
        { q: 'Сколько времени нужно до IELTS 7.0?', a: 'Обычно 6-9 месяцев интенсивного обучения в зависимости от вашего старта.' },
        { q: 'Ваши учителя сертифицированы?', a: 'Да, 100% нашего персонала имеют международные сертификаты CELTA или DELTA.' },
        { q: 'Могу ли я сменить филиал?', a: 'Конечно. Вы можете перемещаться между любыми из 8 кампусов в Самарканде.' }
      ]
    },
    footer: { rights: '© 2026 Polyglot Network. Лидер образования в Самарканде с 2012 года.', address: 'Университетский бульвар 77' },
    ai: { trigger: 'AI Консультант', placeholder: 'Какой у вас сейчас уровень?' },
    courses: {
      filters: { all: 'Все', kids: 'Дети', teens: 'Подростки', adults: 'Взрослые', ielts: 'IELTS' }
    },
    enrollForm: {
      title: 'Присоединяйтесь к Polyglot',
      subtitle: 'Начните свой путь к совершенству в английском сегодня. Наши консультанты скоро свяжутся с вами.',
      name: 'Ваше полное имя',
      phone: 'Контактный номер',
      course: 'Предпочтительная программа',
      submit: 'Отправить заявку',
      success: 'Добро пожаловать!'
    }
  }
};

export const COURSES: Course[] = [
  {
    id: 'ielts-elite',
    title: { EN: 'IELTS Elite 7.5+', RU: 'IELTS Elite 7.5+' },
    description: { EN: 'Intensive protocol for maximum results.', RU: 'Интенсивный протокол для максимальных результатов.' },
    longDescription: { 
      EN: 'An elite preparation track for ambitious candidates seeking band 7.5 and above. Includes full mock exams, individual feedback, and high-frequency vocabulary training.', 
      RU: 'Элитный курс подготовки для амбициозных кандидатов, стремящихся к баллу 7.5 и выше. Включает полные пробные экзамены, индивидуальную обратную связь и обучение высокочастотной лексике.' 
    },
    category: 'IELTS',
    level: 'Advanced',
    duration: { EN: '12 Weeks', RU: '12 Недель' },
    target: { EN: 'Students & Professionals', RU: 'Студенты и профессионалы' },
    price: { EN: '$120/mo', RU: '1,500,000 сум/мес' },
    outcomes: { 
      EN: ['Master all 4 IELTS modules', 'Overcome speaking anxiety', 'Learn high-level academic structures', 'Speed reading techniques'], 
      RU: ['Освоение всех 4 модулей IELTS', 'Преодоление страха говорения', 'Изучение академических структур высокого уровня', 'Техники быстрого чтения'] 
    },
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    modules: [
      { title: { EN: 'Foundation & Strategy', RU: 'Основа и стратегия' }, description: { EN: 'Understanding the exam format, scoring criteria, and building your personalized study plan.', RU: 'Формат экзамена, критерии оценки и построение персонального плана подготовки.' } },
      { title: { EN: 'Listening & Reading Mastery', RU: 'Аудирование и чтение' }, description: { EN: 'Techniques for note-taking, time management, and tackling all question types across both modules.', RU: 'Конспектирование, тайм-менеджмент и работа со всеми типами заданий.' } },
      { title: { EN: 'Writing & Speaking Excellence', RU: 'Письмо и говорение' }, description: { EN: 'Essay structures, coherent arguments, and fluent speaking with real-time feedback from experts.', RU: 'Структура эссе, аргументация и беглая речь с обратной связью от экспертов.' } },
    ],
    teacher: {
      name: 'Alexander Wright',
      role: { EN: 'Senior IELTS Instructor', RU: 'Старший инструктор IELTS' },
      bio: { EN: 'Former British Council examiner with 12+ years of experience. Specializes in helping students achieve band 7.5 and above.', RU: 'Экзаменатор British Council с опытом 12+ лет. Специализация — балл 7.5 и выше.' },
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    },
  },
  {
    id: 'business-mastery',
    title: { EN: 'Business English', RU: 'Бизнес Английский' },
    description: { EN: 'Corporate communication and negotiation.', RU: 'Корпоративное общение и переговоры.' },
    longDescription: { 
      EN: 'Master the language of global commerce. This course focuses on professional presentations, emails, networking, and high-stakes negotiation techniques.', 
      RU: 'Освойте язык глобальной коммерции. Этот курс фокусируется на профессиональных презентациях, электронной почте, нетворкинге и техниках ведения важных переговоров.' 
    },
    category: 'Adults',
    level: 'Intermediate',
    duration: { EN: '6 Months', RU: '6 Месяцев' },
    target: { EN: 'Corporate Employees', RU: 'Корпоративные сотрудники' },
    price: { EN: '$90/mo', RU: '1,100,000 сум/мес' },
    outcomes: { 
      EN: ['Professional email writing', 'Effective meeting participation', 'Business vocabulary expansion', 'Cross-cultural communication'], 
      RU: ['Профессиональная переписка', 'Эффективное участие в совещаниях', 'Расширение бизнес-лексики', 'Межкультурная коммуникация'] 
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    modules: [
      { title: { EN: 'Corporate Communication', RU: 'Корпоративная коммуникация' }, description: { EN: 'Emails, meetings, and presentations in a professional context with role-plays and case studies.', RU: 'Письма, совещания и презентации в профессиональном контексте с ролевыми играми.' } },
      { title: { EN: 'Negotiation & Networking', RU: 'Переговоры и нетворкинг' }, description: { EN: 'Language and strategies for high-stakes negotiations and building international networks.', RU: 'Язык и стратегии для важных переговоров и международного нетворкинга.' } },
      { title: { EN: 'Industry Fluency', RU: 'Отраслевая лексика' }, description: { EN: 'Sector-specific vocabulary and scenarios: finance, tech, and international trade.', RU: 'Отраслевая лексика и сценарии: финансы, IT и международная торговля.' } },
    ],
    teacher: {
      name: 'Maria Chen',
      role: { EN: 'Business English Lead', RU: 'Руководитель направления Business English' },
      bio: { EN: 'Ex-Management Consultant with CELTA and 10+ years training executives across Asia and Europe.', RU: 'Бывший консультант по менеджменту, CELTA, 10+ лет обучения руководителей в Азии и Европе.' },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    },
  },
  {
    id: 'kids-genius',
    title: { EN: 'Genius Kids', RU: 'Genius Kids (Дети)' },
    description: { EN: 'Future leaders start from age 6.', RU: 'Будущие лидеры начинают с 6 лет.' },
    longDescription: { 
      EN: 'A playful yet structured approach to early language learning. We use games, songs, and interactive storytelling to build a natural affinity for English.', 
      RU: 'Игровой, но структурированный подход к раннему изучению языка. Мы используем игры, песни и интерактивное повествование, чтобы создать естественную тягу к английскому языку.' 
    },
    category: 'Kids',
    level: 'Beginner',
    duration: { EN: 'Academic Year', RU: 'Академический год' },
    target: { EN: 'Children aged 6-12', RU: 'Дети 6-12 лет' },
    price: { EN: '$60/mo', RU: '800,000 сум/мес' },
    outcomes: { 
      EN: ['Basic conversational phrases', 'Alphabet and phonics mastery', 'Confidence in speaking', 'Curiosity about world cultures'], 
      RU: ['Базовые разговорные фразы', 'Освоение алфавита и фонетики', 'Уверенность в речи', 'Любознательность к мировым культурам'] 
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    modules: [
      { title: { EN: 'Hello World', RU: 'Привет, мир' }, description: { EN: 'First words, greetings, and simple introductions through games and songs.', RU: 'Первые слова, приветствия и простые представления через игры и песни.' } },
      { title: { EN: 'Sounds & Letters', RU: 'Звуки и буквы' }, description: { EN: 'Phonics, alphabet mastery, and reading simple words with interactive activities.', RU: 'Фонетика, алфавит и чтение простых слов в интерактивной форме.' } },
      { title: { EN: 'Stories & Play', RU: 'Истории и игры' }, description: { EN: 'Storytelling, role-play, and creative projects to build confidence in speaking.', RU: 'Сторителлинг, ролевые игры и творческие проекты для уверенной речи.' } },
    ],
    teacher: {
      name: 'Emma Thompson',
      role: { EN: 'Kids Program Director', RU: 'Директор детской программы' },
      bio: { EN: 'Certified in early childhood education and drama. Makes every lesson an adventure for young learners.', RU: 'Сертификаты в дошкольном образовании и театре. Каждый урок — приключение для детей.' },
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    },
  }
];
