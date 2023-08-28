function simpleSearch1<T>(list: T[], item: T): number | null {
    // O(n)
    for (let i: number = 0; i < list.length-1; i++) {
        if (list[i] === item) {
            return i;
        }
    }

    return null;
}

function simpleSearch2<T>(list: T[], item: T): number | null {
    // O(n)
    let low: number = 0;
    const high: number = list.length - 1;

    while (low <= high) {
      if (list[low] === item) {
        return low;
      }
      low++;
    }

    return null;
}
