const Merge = (arr1, arr2) => {
	const merged = [];
	arr1.forEach(arr1Item => {
		arr2.forEach(arr2Item => {
			if (arr1.includes(arr2Item)) {
				return;
			}
			if (!merged.includes(arr2Item)) {
				merged.push(arr2Item);
			}
			if (arr2.includes(arr1Item)) {
				return;
			}
			if (!merged.includes(arr1Item)) {
				merged.push(arr1Item);
			}
		})
	})
	return merged.sort();
}

let array_one = [1, 2, 3, 5, 5];
let array_two = [1, 2, 5, 6, 6];
console.log(Merge(array_one, array_two));

console.log('Также можно использовать Lodash, а именно метод differnce(arr1, arr2)');

