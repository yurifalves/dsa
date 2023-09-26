function recursiveCount(list: Array<number>): number {
  if (list.length === 0) {
    return 0;
  } else {
    list.shift();
    return 1 + recursiveCount(list);
  }
}

console.log(recursiveCount([2, 6, 11])); // 3
/*
  recursiveCount([2, 6, 11])
  1 + recursiveCount([6, 11])
  1 + 1 + recursiveCount([11])
  1 + 1 + 1 + recursiveCount([])
  1 + 1 + 1 + 0
*/
