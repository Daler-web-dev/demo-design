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
		address: "ул. Садриддина Айний, 2А",
		image: "/locations/ayniy.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Ayniy",
	},
	{
		id: "gagarina",
		nameEn: "Gagarina Branch",
		nameRu: "Филиал Гагарина",
		address: "ул. Гагарина, 86(2 этаж)",
		image: "/locations/gagrina.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Gagarina",
	},
	{
		id: "gelion",
		nameEn: "Gelion Branch",
		nameRu: "Филиал Гелион",
		address: "ул. Ибн Сины, 8А",
		image: "/locations/gelion.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Gelion",
	},
	{
		id: "vokzal",
		nameEn: "Vokzal Branch",
		nameRu: "Филиал Вокзал",
		address: "ул. Ибн Холдуна, 1",
		image: "/locations/vokzal.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Vokzal",
	},
	{
		id: "marhabo",
		nameEn: "ул. Буюк Ипак Йули, 72(3 этаж)",
		nameRu: "ул. Буюк Ипак Йули, 72(3 этаж)",
		address: "Buyuk ipak yo'li ko'chasi, 72(3 qavat)",
		image: "/locations/marhabo.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Marhabo",
	},
	{
		id: "oqmachit",
		nameEn: "Oqmachit Branch",
		nameRu: "Филиал Оқмачит",
		address: "ул. Термез, 513",
		image: "/locations/oqmachit.jpeg",
		yandexMapUrl:
			"https://yandex.uz/maps/?text=Polyglot+Samarkand+Oqmachit",
	},
	{
		id: "qorasuv",
		nameEn: "Qorasuv Branch",
		nameRu: "Филиал Корасув",
		address: "массив Корасув, 136",
		image: "/locations/qorasuv.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Qorasuv",
	},
	{
		id: "chinese",
		nameEn: "Chinese Branch",
		nameRu: "Китайский филиал",
		address: "ул. Гагарина, 86(1 этаж)",
		image: "/locations/polyglot_chinese.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Polyglot+Samarkand+Chinese",
	},
	{
		id: "urgut",
		nameEn: "Urgut branch",
		nameRu: "Ургут филиал",
		address: "Ургут, ул. Амира Темура(ориентир: автосалон KIA)",
		image: "/locations/urgut.jpeg",
		yandexMapUrl: "https://yandex.uz/maps/?text=Urgut+Samarkand",
	},
	{
		id: "ielts_hub",
		nameEn: "Uzbekistan st",
		nameRu: "ул, Узбекистанская (Молодежный креативный городок)",
		address: "Yoshlar Creative Shaharchasi Самарканд",
		image: "/ieltshub.jpeg",
		yandexMapUrl:
			"https://yandex.ru/maps?text=39.642667,66.949712&si=qzk6nfbr7691ut1hakv07dnup4",
	},
];
