function simpleSearch<T>(list: Array<T>, item: T): number | null {
	// O(n)
	for (let i: number = 0; i < list.length - 1; i++) {
		if (list[i] === item) {
			return i;
		}
	}

	return null;
}

const myList: Array<number> = [2, 8, 9, 13, 25];

console.log(simpleSearch(myList, 13)); // 3
