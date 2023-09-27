function quickSort(arr: Array<number>): Array<number> {
  // O(n x log n)
  if (arr.length < 2) {
    return arr;
  }

  const pivotIndex: number = Math.floor(arr.length / 2);
  const pivot: number = arr[pivotIndex];
  const less: Array<number> = [];
  const greater: Array<number> = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    const el: number = arr[i];
    if (el <= pivot) {
      less.push(el);
    } else {
      greater.push(el);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([10, 5, 2, 3])); // [ 2, 3, 5, 10 ]
console.log(quickSort([11, 2, 99, 13, 9, 0])); // [ 0, 2, 9, 11, 13, 99 ]
