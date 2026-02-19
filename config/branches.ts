/**
 * Единственный источник правды по филиалам.
 * Добавляйте/удаляйте элементы здесь — список, картинки и карта обновятся автоматически.
 */
export type Branch = {
	id: string;
	nameEn: string;
	nameRu: string;
	image: string;
	/** Ссылка на карту/маршрут (Google Maps, Yandex и т.д.). Если нет — используется defaultMapUrl из пропсов. */
	mapUrl?: string;
};

export const BRANCHES: Branch[] = [
	{
		id: "ayniy",
		nameEn: "Sadriddin Ayniy",
		nameRu: "Садрдин Айний",
		image: "/locations/ayniy.jpeg",
	},
	{
		id: "gagarina",
		nameEn: "Gagarina Branch",
		nameRu: "Гаганина",
		image: "/locations/gagrina.jpeg",
	},
	{
		id: "gelion",
		nameEn: "Gelion Branch",
		nameRu: "Гелион",
		image: "/locations/gelion.jpeg",
	},
	{
		id: "vokzal",
		nameEn: "Vokzal Branch",
		nameRu: "Вокзал",
		image: "/locations/vokzal.jpeg",
	},
	{
		id: "marhabo",
		nameEn: "Marhabo Branch",
		nameRu: "Мархабо",
		image: "/locations/marhabo.jpeg",
	},
	{
		id: "oqmachit",
		nameEn: "Oqmachit Branch",
		nameRu: "Окмачит",
		image: "/locations/oqmachit.jpeg",
	},
	{
		id: "qorasuv",
		nameEn: "Qorasuv Branch",
		nameRu: "Корасув",
		image: "/locations/qorasuv.jpeg",
	},
	{
		id: "chinese",
		nameEn: "Chinese Branch",
		nameRu: "Китайский филиал",
		image: "/locations/polyglot_chinese.jpeg",
	},
	{
		id: "urgut",
		nameEn: "Urgut ...Coming Soon",
		nameRu: "Ургут ...скоро",
		image: "/locations/urgut.jpeg",
	},
];
