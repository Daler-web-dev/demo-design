/**
 * Единственный источник правды по филиалам.
 * Добавляйте/удаляйте элементы здесь — список, картинки и карта обновятся автоматически.
 */
export type Branch = {
	id: string;
	nameEn: string;
	nameRu: string;
	address: string;
	image: string;
	yandexMapUrl?: string;
};

export const BRANCHES: Branch[] = [
	{
		id: "ayniy",
		nameEn: "Ayniy Branch",
		nameRu: "Филиал Айний",
		address: "Садриддин Айний кўчаси, Самарқанд",
		image: "/locations/ayniy.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Ayniy",
	},
	{
		id: "gagarina",
		nameEn: "Gagarina Branch",
		nameRu: "Филиал Гагарина",
		address: "Гагарин кўчаси, Самарқанд",
		image: "/locations/gagrina.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Gagarina",
	},
	{
		id: "gelion",
		nameEn: "Gelion Branch",
		nameRu: "Филиал Гелион",
		address: "Гелион бизнес маркази, Самарқанд",
		image: "/locations/gelion.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Gelion",
	},
	{
		id: "vokzal",
		nameEn: "Vokzal Branch",
		nameRu: "Филиал Вокзал",
		address: "Темир йўл вокзали яқини, Самарқанд",
		image: "/locations/vokzal.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Vokzal",
	},
	{
		id: "marhabo",
		nameEn: "Marhabo Branch",
		nameRu: "Филиал Мархабо",
		address: "Мархабо маҳалласи, Самарқанд",
		image: "/locations/marhabo.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Marhabo",
	},
	{
		id: "oqmachit",
		nameEn: "Oqmachit Branch",
		nameRu: "Филиал Оқмачит",
		address: "Оқмачит, Самарқанд",
		image: "/locations/oqmachit.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Oqmachit",
	},
	{
		id: "qorasuv",
		nameEn: "Qorasuv Branch",
		nameRu: "Филиал Корасув",
		address: "Қорасув тумани, Самарқанд",
		image: "/locations/qorasuv.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Qorasuv",
	},
	{
		id: "chinese",
		nameEn: "Chinese Branch",
		nameRu: "Китайский филиал",
		address: "Хитой кўчаси, Самарқанд",
		image: "/locations/polyglot_chinese.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Chinese",
	},
	{
		id: "urgut",
		nameEn: "Urgut — Coming Soon",
		nameRu: "Ургут — скоро",
		address: "Ургут шаҳри, Самарқанд вилояти",
		image: "/locations/urgut.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Urgut+Samarkand",
	},
];
