/**
 * Единственный файл с контентом глубокого теста.
 * Редактируйте вопросы и ответы здесь — правильные ответы хранятся только на сервере
 * и не отправляются клиенту (через консоль нельзя подсмотреть).
 */

export const DEEP_TEST_TIME_MS = 30 * 60 * 1000; // 30 минут

export interface DeepTestAnswer {
	id: number;
	title: string;
	/** Правильный ответ — только на сервере, клиенту не отдаётся */
	correct: boolean;
}

export interface DeepTestQuestion {
	id: number;
	question: string;
	answers: DeepTestAnswer[];
}

// {
//   "testing":[
//       {
//           "id":1,
//           "time":1800000,
//           "title":"Tests",
//           "test":
//       }
//   ]
// }

export const DEEP_TEST_QUESTIONS: DeepTestQuestion[] = [
	{
		id: 1,
		question: "I ____ got a computer but I've got a tablet. ",
		answers: [
			{
				id: 1,
				title: "don't",
				correct: false,
			},
			{
				id: 2,
				title: "'ve",
				correct: false,
			},
			{
				id: 3,
				title: "haven't",
				correct: true,
			},
		],
	},
	{
		id: 2,
		question:
			"Sue: I love Rita Ora! _____ her? Mike: No. I prefer Ed Sheeran.",
		answers: [
			{
				id: 1,
				title: "Do you like",
				correct: true,
			},
			{
				id: 2,
				title: "Are you like",
				correct: false,
			},
			{
				id: 3,
				title: "Does you like",
				correct: false,
			},
		],
	},
	{
		id: 3,
		question:
			"Marie: _____ play a musical instrument, John?  John: Yes. I play the piano. ",
		answers: [
			{
				id: 1,
				title: "Can you",
				correct: true,
			},
			{
				id: 2,
				title: "Do you can",
				correct: false,
			},
			{
				id: 3,
				title: "Are you",
				correct: false,
			},
		],
	},
	{
		id: 4,
		question: "That's Jana. She's ______ to her friend. ",
		answers: [
			{
				id: 1,
				title: "talks",
				correct: false,
			},
			{
				id: 2,
				title: "talk",
				correct: false,
			},
			{
				id: 3,
				title: "talking",
				correct: true,
			},
		],
	},
	{
		id: 5,
		question:
			"Amy: Where ______ you yesterday?  Jill: I was at my grandmother's house.",
		answers: [
			{
				id: 1,
				title: "were",
				correct: true,
			},
			{
				id: 2,
				title: "did",
				correct: false,
			},
			{
				id: 3,
				title: "are",
				correct: false,
			},
		],
	},
	{
		id: 6,
		question:
			"Angel: Messi's the ______ footballer in the world.  Ricardo: No, he isn't. Ronaldo is!",
		answers: [
			{
				id: 1,
				title: "most good",
				correct: false,
			},
			{
				id: 2,
				title: "best",
				correct: true,
			},
			{
				id: 3,
				title: "better",
				correct: false,
			},
		],
	},
	{
		id: 7,
		question: "I _____ to the radio every day.",
		answers: [
			{
				id: 1,
				title: "read",
				correct: false,
			},
			{
				id: 2,
				title: "watch",
				correct: false,
			},
			{
				id: 3,
				title: "listen",
				correct: true,
			},
		],
	},
	{
		id: 8,
		question:
			"Dad: Where are you going?  Mum: To the _____ . I need to buy some boots.",
		answers: [
			{
				id: 1,
				title: "chemist's",
				correct: true,
			},
			{
				id: 2,
				title: "newsagent's ",
				correct: false,
			},
			{
				id: 3,
				title: "shoe shop",
				correct: true,
			},
		],
	},
	{
		id: 9,
		question:
			"Mary is very _____ . She always helps me when I have a problem. ",
		answers: [
			{
				id: 1,
				title: "hard-working",
				correct: false,
			},
			{
				id: 2,
				title: "kind",
				correct: true,
			},
			{
				id: 3,
				title: "creative",
				correct: false,
			},
		],
	},
	{
		id: 10,
		question: "You ____ tell anyone – it's a secret",
		answers: [
			{
				id: 1,
				title: "don't have to",
				correct: false,
			},
			{
				id: 2,
				title: "must",
				correct: false,
			},
			{
				id: 3,
				title: "mustn't",
				correct: true,
			},
		],
	},
	{
		id: 11,
		question: "When I was five I _____ swim but now I can.",
		answers: [
			{
				id: 1,
				title: "couldn't",
				correct: true,
			},
			{
				id: 2,
				title: "can't ",
				correct: false,
			},
			{
				id: 3,
				title: "could ",
				correct: false,
			},
		],
	},
	{
		id: 12,
		question:
			"While we _____ to school, it started snowing. It was beautiful!",
		answers: [
			{
				id: 1,
				title: "was walking",
				correct: false,
			},
			{
				id: 2,
				title: "were walking",
				correct: true,
			},
			{
				id: 3,
				title: "walked ",
				correct: false,
			},
		],
	},
	{
		id: 13,
		question:
			"Harry: What are you doing tonight? Ben: I _____ basketball with Michael. Do you want to come?",
		answers: [
			{
				id: 1,
				title: "'m playing",
				correct: true,
			},
			{
				id: 2,
				title: "will play",
				correct: false,
			},
			{
				id: 3,
				title: "play",
				correct: false,
			},
		],
	},
	{
		id: 14,
		question: "I haven't finished cleaning my bike _____ .",
		answers: [
			{
				id: 1,
				title: "already",
				correct: false,
			},
			{
				id: 2,
				title: "just",
				correct: false,
			},
			{
				id: 3,
				title: "yet",
				correct: true,
			},
		],
	},
	{
		id: 15,
		question: "If _____ to the concert later, ____ with you.",
		answers: [
			{
				id: 1,
				title: "you'll go / I come",
				correct: false,
			},
			{
				id: 2,
				title: "you go / I'll come",
				correct: true,
			},
			{
				id: 3,
				title: "you go / I come",
				correct: false,
			},
		],
	},
	{
		id: 16,
		question: "He's a ____. He writes articles for the newspaper.",
		answers: [
			{
				id: 1,
				title: "dentist ",
				correct: false,
			},
			{
				id: 2,
				title: "journalist ",
				correct: true,
			},
			{
				id: 3,
				title: "secretary",
				correct: false,
			},
		],
	},
	{
		id: 17,
		question:
			" Customer: I'd like a ____ of pizza, please.  Server: Of course. Here you are.",
		answers: [
			{
				id: 1,
				title: "packet",
				correct: false,
			},
			{
				id: 2,
				title: "slice ",
				correct: true,
			},
			{
				id: 3,
				title: "carton ",
				correct: false,
			},
		],
	},
	{
		id: 18,
		question:
			"George: These trousers are a bit big.  Dad: Yes, I think you need to buy a ____ .",
		answers: [
			{
				id: 1,
				title: "cap ",
				correct: false,
			},
			{
				id: 2,
				title: "scarf ",
				correct: false,
			},
			{
				id: 3,
				title: "belt ",
				correct: true,
			},
		],
	},
	{
		id: 19,
		question: "That is the man ____ name I can't pronounce.",
		answers: [
			{
				id: 1,
				title: "whose ",
				correct: true,
			},
			{
				id: 2,
				title: "who ",
				correct: false,
			},
			{
				id: 3,
				title: "which ",
				correct: false,
			},
		],
	},
	{
		id: 20,
		question: "My best friend isn't ____ my sister.",
		answers: [
			{
				id: 1,
				title: "as old than",
				correct: false,
			},
			{
				id: 2,
				title: "as old as",
				correct: true,
			},
			{
				id: 3,
				title: "so old than",
				correct: false,
			},
		],
	},
	{
		id: 21,
		question: "Can you turn the music down, it's _____ .",
		answers: [
			{
				id: 1,
				title: "not enough loud",
				correct: false,
			},
			{
				id: 2,
				title: "not loud enough ",
				correct: false,
			},
			{
				id: 3,
				title: "too loud",
				correct: true,
			},
		],
	},
	{
		id: 22,
		question:
			" James: What ____ if you ____ €100 in the street?  Lisa: I'd give it to the police. ",
		answers: [
			{
				id: 1,
				title: "will you do / found ",
				correct: false,
			},
			{
				id: 2,
				title: "would you do / would find",
				correct: false,
			},
			{
				id: 3,
				title: "would you do / found",
				correct: true,
			},
		],
	},
	{
		id: 23,
		question:
			"My brother and sister ____ play football together when they were younger.",
		answers: [
			{
				id: 1,
				title: "did use to",
				correct: false,
			},
			{
				id: 2,
				title: "use to",
				correct: false,
			},
			{
				id: 3,
				title: "used to",
				correct: true,
			},
		],
	},
	{
		id: 24,
		question: "I enjoyed ____ my homework last night.",
		answers: [
			{
				id: 1,
				title: "do ",
				correct: false,
			},
			{
				id: 2,
				title: "to do",
				correct: false,
			},
			{
				id: 3,
				title: "doing ",
				correct: true,
			},
		],
	},
	{
		id: 25,
		question:
			"Mum: What's the matter? Natalie: I sang too much at the concert and now my throat is ____ . ",
		answers: [
			{
				id: 1,
				title: "injured ",
				correct: false,
			},
			{
				id: 2,
				title: "sore ",
				correct: true,
			},
			{
				id: 3,
				title: "ache ",
				correct: false,
			},
		],
	},
	{
		id: 26,
		question: "I am very ____ in learning Chinese next year.",
		answers: [
			{
				id: 1,
				title: "interesting ",
				correct: false,
			},
			{
				id: 2,
				title: "interest ",
				correct: false,
			},
			{
				id: 3,
				title: "interested ",
				correct: true,
			},
		],
	},
	{
		id: 27,
		question:
			"If I don't know a word I always ____ using an online dictionary.",
		answers: [
			{
				id: 1,
				title: "look it for ",
				correct: false,
			},
			{
				id: 2,
				title: " look up it ",
				correct: false,
			},
			{
				id: 3,
				title: "look it up ",
				correct: true,
			},
		],
	},
	{
		id: 28,
		question:
			" I've lived in London ____ 20 years but I've never visited London Zoo. ",
		answers: [
			{
				id: 1,
				title: "for ",
				correct: true,
			},
			{
				id: 2,
				title: "since ",
				correct: false,
			},
			{
				id: 3,
				title: "from ",
				correct: false,
			},
		],
	},
	{
		id: 29,
		question:
			"By this time next week, we ____ our exams and we'll be on holiday!",
		answers: [
			{
				id: 1,
				title: "ll be finishing",
				correct: false,
			},
			{
				id: 2,
				title: "'re going to finish",
				correct: false,
			},
			{
				id: 3,
				title: "'ll have finished",
				correct: true,
			},
		],
	},
	{
		id: 30,
		question:
			"This film, ___ won three Oscars, stars Johnny Depp and is directed by Tim Burton. ",
		answers: [
			{
				id: 1,
				title: "which ",
				correct: true,
			},
			{
				id: 2,
				title: "where ",
				correct: false,
			},
			{
				id: 3,
				title: "that ",
				correct: false,
			},
		],
	},
	{
		id: 31,
		question:
			"It ____ John who used the computer because he doesn't know the password.",
		answers: [
			{
				id: 1,
				title: "mustn't be",
				correct: false,
			},
			{
				id: 2,
				title: "can't have been",
				correct: true,
			},
			{
				id: 3,
				title: "might have been ",
				correct: false,
			},
		],
	},
	{
		id: 32,
		question: "If you ____ football for five hours you ____ so tired.",
		answers: [
			{
				id: 1,
				title: "wouldn't have played / wouldn't have felt",
				correct: false,
			},
			{
				id: 2,
				title: "hadn't played / won't feel",
				correct: false,
			},
			{
				id: 3,
				title: "hadn't played / wouldn't have felt ",
				correct: true,
			},
		],
	},
	{
		id: 33,
		question:
			"I wish I ____ as well as her. She's got such a lovely voice.",
		answers: [
			{
				id: 1,
				title: "sing ",
				correct: false,
			},
			{
				id: 2,
				title: "can sing ",
				correct: false,
			},
			{
				id: 3,
				title: "could sing",
				correct: true,
			},
		],
	},
	{
		id: 34,
		question: "When we entered the church it was ____ inside.",
		answers: [
			{
				id: 1,
				title: "absolutely packed",
				correct: true,
			},
			{
				id: 2,
				title: "very enormous",
				correct: false,
			},
			{
				id: 3,
				title: "absolutely old",
				correct: false,
			},
		],
	},
	{
		id: 35,
		question: "My teacher is very good ____ grammar.",
		answers: [
			{
				id: 1,
				title: "for explain",
				correct: false,
			},
			{
				id: 2,
				title: "in explaining",
				correct: false,
			},
			{
				id: 3,
				title: "at explaining",
				correct: true,
			},
		],
	},
	{
		id: 36,
		question: "Sally, could you ____ me some money, please? ",
		answers: [
			{
				id: 1,
				title: "owe ",
				correct: false,
			},
			{
				id: 2,
				title: "lend ",
				correct: true,
			},
			{
				id: 3,
				title: "borrow ",
				correct: false,
			},
		],
	},
	{
		id: 37,
		question:
			"Tom: Where are you? ____ here for an hour.  Emma: Sorry. I missed the bus.",
		answers: [
			{
				id: 1,
				title: " I wait ",
				correct: false,
			},
			{
				id: 2,
				title: "I'm waiting ",
				correct: false,
			},
			{
				id: 3,
				title: "I've been waiting",
				correct: true,
			},
			{
				id: 4,
				title: " I'd been waiting",
				correct: false,
			},
		],
	},
	{
		id: 38,
		question: "It was ____ hot that we decided to stay at home.",
		answers: [
			{
				id: 1,
				title: "so ",
				correct: true,
			},
			{
				id: 2,
				title: "very ",
				correct: false,
			},
			{
				id: 3,
				title: "too ",
				correct: false,
			},
			{
				id: 4,
				title: "such a",
				correct: false,
			},
		],
	},
	{
		id: 39,
		question: "The ____ I concentrate the ____ I finish my work.",
		answers: [
			{
				id: 1,
				title: "more hard / fastest",
				correct: false,
			},
			{
				id: 2,
				title: "hardly / faster ",
				correct: false,
			},
			{
				id: 3,
				title: "harder / fastest",
				correct: false,
			},
			{
				id: 4,
				title: "harder / faster",
				correct: true,
			},
		],
	},
	{
		id: 40,
		question: "You ____ brought food. We have got plenty here.",
		answers: [
			{
				id: 1,
				title: "had better",
				correct: false,
			},
			{
				id: 2,
				title: "needn't have",
				correct: true,
			},
			{
				id: 3,
				title: "didn't need ",
				correct: false,
			},
			{
				id: 4,
				title: "should have",
				correct: false,
			},
		],
	},
	{
		id: 41,
		question:
			"We'll play a game tonight ……………. you have done your   homework.",
		answers: [
			{
				id: 1,
				title: "unless ",
				correct: false,
			},
			{
				id: 2,
				title: "provided ",
				correct: true,
			},
			{
				id: 3,
				title: "supposed ",
				correct: false,
			},
			{
				id: 4,
				title: "if only ",
				correct: false,
			},
		],
	},
	{
		id: 42,
		question: " You won a prize for your paintings, ____ ",
		answers: [
			{
				id: 1,
				title: " isn't it? ",
				correct: false,
			},
			{
				id: 2,
				title: "haven't you? ",
				correct: false,
			},
			{
				id: 3,
				title: "didn't you? ",
				correct: true,
			},
			{
				id: 4,
				title: "don't you? ",
				correct: false,
			},
		],
	},
	{
		id: 43,
		question:
			" The ____ from the airport into London was expensive but quick. ",
		answers: [
			{
				id: 1,
				title: "travel ",
				correct: false,
			},
			{
				id: 2,
				title: "trip ",
				correct: false,
			},
			{
				id: 3,
				title: "journey ",
				correct: true,
			},
			{
				id: 4,
				title: "voyage ",
				correct: false,
			},
		],
	},
	{
		id: 44,
		question:
			"When I ____ money, I usually take out €40 from the cash machine.",
		answers: [
			{
				id: 1,
				title: "pick up",
				correct: false,
			},
			{
				id: 2,
				title: "withdraw ",
				correct: true,
			},
			{
				id: 3,
				title: "set aside",
				correct: false,
			},
			{
				id: 4,
				title: "deposit",
				correct: false,
			},
		],
	},
	{
		id: 45,
		question:
			"Max always ____ his important computer documents on an external drive. ",
		answers: [
			{
				id: 1,
				title: "prints out",
				correct: false,
			},
			{
				id: 2,
				title: "saves up ",
				correct: false,
			},
			{
				id: 3,
				title: "backs up ",
				correct: true,
			},
			{
				id: 4,
				title: "sets off",
				correct: false,
			},
		],
	},
	{
		id: 46,
		question: "If the computer doesn't work try ____ it off and on again.",
		answers: [
			{
				id: 1,
				title: "to switch",
				correct: false,
			},
			{
				id: 2,
				title: "switching ",
				correct: true,
			},
			{
				id: 3,
				title: "switch ",
				correct: false,
			},
			{
				id: 4,
				title: "having switched",
				correct: false,
			},
		],
	},
	{
		id: 47,
		question:
			"The suspect ____ being near the bank at the time of the crime.",
		answers: [
			{
				id: 1,
				title: "claimed ",
				correct: false,
			},
			{
				id: 2,
				title: "accused ",
				correct: false,
			},
			{
				id: 3,
				title: "denied ",
				correct: true,
			},
			{
				id: 4,
				title: "refused",
				correct: false,
			},
		],
	},
	{
		id: 48,
		question:
			"The man is believed ____ over a thousand marathons since he started.",
		answers: [
			{
				id: 1,
				title: "to run",
				correct: false,
			},
			{
				id: 2,
				title: "to be running",
				correct: false,
			},
			{
				id: 3,
				title: "he has run ",
				correct: false,
			},
			{
				id: 4,
				title: "to have run",
				correct: true,
			},
		],
	},
	{
		id: 49,
		question:
			"Paul didn't like decorating so he got a professional decorator ____ his flat for him. ",
		answers: [
			{
				id: 1,
				title: "designing ",
				correct: false,
			},
			{
				id: 2,
				title: "design",
				correct: false,
			},
			{
				id: 3,
				title: "she designed",
				correct: false,
			},
			{
				id: 4,
				title: "to design",
				correct: true,
			},
		],
	},
	{
		id: 50,
		question: "____ all her emails, she switched off her computer. ",
		answers: [
			{
				id: 1,
				title: "Sending ",
				correct: false,
			},
			{
				id: 2,
				title: "She sent ",
				correct: false,
			},
			{
				id: 3,
				title: "Having sent ",
				correct: true,
			},
			{
				id: 4,
				title: "Sent ",
				correct: false,
			},
		],
	},
	{
		id: 51,
		question:
			"If you're angry, just tell him. You should get it off your ____ .",
		answers: [
			{
				id: 1,
				title: "head ",
				correct: false,
			},
			{
				id: 2,
				title: "chest ",
				correct: true,
			},
			{
				id: 3,
				title: "back ",
				correct: false,
			},
			{
				id: 4,
				title: "foot ",
				correct: false,
			},
		],
	},
	{
		id: 52,
		question:
			"You should take a few days off work. It won't ____ you any harm. ",
		answers: [
			{
				id: 1,
				title: "do",
				correct: true,
			},
			{
				id: 2,
				title: "give ",
				correct: false,
			},
			{
				id: 3,
				title: "make ",
				correct: false,
			},
			{
				id: 4,
				title: "pay",
				correct: false,
			},
		],
	},
	{
		id: 53,
		question: "Slow down, Barry. I can't ____ you.",
		answers: [
			{
				id: 1,
				title: "keep up with",
				correct: true,
			},
			{
				id: 2,
				title: "come up to",
				correct: false,
			},
			{
				id: 3,
				title: "come up with",
				correct: false,
			},
			{
				id: 4,
				title: "reach up with",
				correct: false,
			},
		],
	},
	{
		id: 54,
		question:
			"Budapest is a wonderful city full of culture and ____ in history.",
		answers: [
			{
				id: 1,
				title: "sprawling ",
				correct: false,
			},
			{
				id: 2,
				title: "renowned ",
				correct: false,
			},
			{
				id: 3,
				title: "steeped ",
				correct: true,
			},
			{
				id: 4,
				title: "bustling ",
				correct: false,
			},
		],
	},
	{
		id: 55,
		question:
			"I liked my new English teacher, ____ was fortunate, as she also was teaching us history. ",
		answers: [
			{
				id: 1,
				title: "who",
				correct: true,
			},
			{
				id: 2,
				title: "what",
				correct: false,
			},
			{
				id: 3,
				title: "which",
				correct: true,
			},
			{
				id: 4,
				title: "that",
				correct: false,
			},
		],
	},
	{
		id: 56,
		question:
			"Mum: Laura, have you done the dishes yet?  Laura: Well, I ____ doing them, but then I had to answer my phone. ",
		answers: [
			{
				id: 1,
				title: "started to",
				correct: false,
			},
			{
				id: 2,
				title: "did start",
				correct: true,
			},
			{
				id: 3,
				title: "was starting",
				correct: false,
			},
			{
				id: 4,
				title: "have just was",
				correct: false,
			},
		],
	},
	{
		id: 57,
		question: "____ the film started when the phone rang.",
		answers: [
			{
				id: 1,
				title: "No sooner had ",
				correct: false,
			},
			{
				id: 2,
				title: "Seldom had",
				correct: false,
			},
			{
				id: 3,
				title: "Barely had",
				correct: true,
			},
			{
				id: 4,
				title: "Not until",
				correct: false,
			},
		],
	},
	{
		id: 58,
		question: "Do you remember ____ your bed when you were a child? ",
		answers: [
			{
				id: 1,
				title: "to do",
				correct: false,
			},
			{
				id: 2,
				title: "doing",
				correct: false,
			},
			{
				id: 3,
				title: "to make",
				correct: false,
			},
			{
				id: 4,
				title: "making",
				correct: true,
			},
		],
	},
	{
		id: 59,
		question:
			"My aunt Jane bears a(n) ____ resemblance to a famous rock star.",
		answers: [
			{
				id: 1,
				title: "uncanny ",
				correct: true,
			},
			{
				id: 2,
				title: "sceptical",
				correct: false,
			},
			{
				id: 3,
				title: "intentional ",
				correct: false,
			},
			{
				id: 4,
				title: "irrational ",
				correct: false,
			},
		],
	},
	{
		id: 60,
		question:
			"My sister and my father like to win. There is a competitive ____ running through our family.",
		answers: [
			{
				id: 1,
				title: "line ",
				correct: false,
			},
			{
				id: 2,
				title: "consciousness ",
				correct: false,
			},
			{
				id: 3,
				title: "streak",
				correct: true,
			},
			{
				id: 4,
				title: "shift",
				correct: false,
			},
		],
	},
];
