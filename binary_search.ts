function binarySearch<T>(list: Array<T>, item: T): number | null {
	// O(log2 n)
	let low: number = 0;
	let high: number = list.length - 1;

	while (low <= high) {
		let mid: number = Math.floor((low + high) / 2);
		let guess: T = list[mid];
		if (guess === item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
}

const myList: Array<number> = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3)); // 1
console.log(binarySearch(myList, -1)); // null
