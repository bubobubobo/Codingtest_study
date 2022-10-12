const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  let merged = [];
  let [l, r] = [0, 0];
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      merged.push(left[l]);
      l += 1;
    } else {
      merged.push(right[r]);
      r += 1;
    }
  }
  if (l === left.length) merged = [...merged, ...right.slice(r)];
  if (r === right.length) merged = [...merged, ...left.slice(l)];

  return merged;
};

const arr = [3, 1, 4, 2, -3];
console.log(mergeSort(arr));
