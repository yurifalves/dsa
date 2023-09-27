function quickSort(arr: Array<number>): Array<number> {
  // O(n x log n)
  if (arr.length < 2) {
    return arr;
  }

  const pivot: number = arr[0];
  const less: Array<number> = arr
    .slice(1)
    .filter((el: number): boolean => el <= pivot);
  const greater: Array<number> = arr.slice(1).filter((el) => el > pivot);

  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort([10, 5, 2, 3])); // [ 2, 3, 5, 10 ]
console.log(quickSort([11, 2, 99, 13])); // [ 2, 11, 13, 99 ]
