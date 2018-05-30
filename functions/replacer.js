const Replacer = (str, obj) => {
	const regex = /%\d+/g;
	const matches = str.match(regex);
	matches.forEach(match => {
		str = str.replace(match, obj[match]);
	})
	return str;
}

const ReplacerArr = (str, arr) => {
	const regex = /%\d+/g;
	const matches = str.match(regex);
	matches.forEach((match, index) => {
		str = str.replace(match, arr[index]);
	})
	return str;
}

console.log('Object type', Replacer("Вашим запросом занимается %1 номер %2", { '%1': 'Юзер', '%2': '1234' }));
console.log('Array type', ReplacerArr("Вашим запросом занимается %1 номер %2", ['Юзер', '1234']));