function recursiveMax(arr: Array<number>): number | null {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    const subMax: number = recursiveMax(arr.slice(1))!;
    return arr[0] > subMax ? arr[0] : subMax;
  }
}

console.log(recursiveMax([1, 2, 4, 3])); // 4
