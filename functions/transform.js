let source = {
	ua: {
		buttons: {
			btn_open: "Відкрити",
			btn_close: "Закрити",
			btn_cancel: "Відміна",
		},
		texts: {
			txt_ok: "Готово",
			txt_not: "Не готово"
		}
	},
	ru: {
		buttons: {
			btn_open: "Открыть",
			btn_close: "Закрыть",
			btn_cancel: "Отмена",
		},
		texts: {
			txt_ok: "Ок",
			txt_not: "Не ок"
		}
	}
}

const Transform = (obj) => {
	let newObj = {};
	for (locale in obj) {
		for (element in obj[locale]) {
			for (translation in obj[locale][element]) {
				newObj[translation] = {};
				for (locale2 in obj) {
					newObj[translation][locale2] = {};
					for (element2 in obj[locale]) {
						for (translation2 in obj[locale2][element2]) {
							newObj[translation][locale2] = obj[locale2][element][translation];
						}
					}
				}
			}
		}
	}
	return newObj;
}


console.log(Transform(source));

/* Результат
let result = {
	btn_open: {
		ua: 'Відкрити',
		ru: 'Открыть'
	},
	btn_close: {
		ua: 'Закрити',
		ru: 'Закрыть'
	},
	btn_cancel: {
		ua: 'Відміна',
		ru: 'Отмена'
	},
	txt_ok: {
		ua: 'Готово',
		ru: 'Ок'
	},
	txt_not: {
		ua: 'Не готово',
		ru: 'Не ок'
	}
} */