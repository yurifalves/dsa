function recursiveSum(list: Array<number>): number {
  if (list.length === 0) {
    return 0;
  } else {
    const firstElement: number = list.shift() as number;
    return firstElement + recursiveSum(list);
  }
}

console.log(recursiveSum([7, 3, 16])); // 26
/*
  recursiveSum([7, 3, 16])
  = 7 + recursiveSum([3, 16])
  = 7 + 3 + recursiveSum([16])
  = 7 + 3 + 16 + recursiveSum([])
  = 7 + 3 + 16 + 0
*/
