function findSmallestIndex(array: Array<number>): number {
	let smallestElement: number = array[0];
	let smallestIndex: number = 0;

	for (let i: number = 1; i < array.length; i++) {
		if (array[i] < smallestElement) {
			smallestElement = array[i];
			smallestIndex = i;
		}
	}

	return smallestIndex;
}

function selectionSort(array: Array<number>): Array<number> {
	// O(n x n)
	const sortedArray: Array<number> = [];
	const length: number = array.length;

	for (let i: number = 0; i < length; i++) {
		const smallestIndex: number = findSmallestIndex(array);
		sortedArray.push(array.splice(smallestIndex, 1)[0]);
	}

	return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
