const findAvailTruckIdx = (subTruck, weight) => subTruck.findIndex(v => v >= weight);

const solution = (truck, w) => {
  const res = Array.from({ length: w.length }, () => -1);
  let cnt = w.length;

  truck.forEach((maxAvail, truckIdx) => {
    if (cnt === 0) return;

    let avail = maxAvail;
    for (let i = 0; i < w.length; i++) {
      if (avail === 0) break;

      if (w[i] !== 0 && avail >= w[i]) {
        avail -= w[i];
        res[i] = truckIdx + 1;
        w[i] = 0;
        cnt -= 1;
      }
    }
  });

  return res;
};

const truck = [1, 4, 5, 2, 4];
const w = [2, 4, 4, 3, 2];
// const truck = [2, 7, 4, 9];
// const w = [7, 6, 8];
console.log(solution(truck, w));

// let subTruck = truck;
// const res = Array.from({ length: w.length }, () => -1);

// w.forEach((weight, i) => {
//   const subIdx = findAvailTruckIdx(subTruck, weight);

//   // 넣을 수 있는 트럭이 없는 경우
//   if (subIdx === -1) {
//     subTruck = truck;
//     return;
//   }

//   // 있는 경우
//   const truckIdx =
//     i !== 0 && weight > w[i - 1] && res[i - 1] !== -1 ? res[i - 1] + subIdx - 1 : subIdx;
//   truck[truckIdx] -= weight;
//   subTruck = weight >= w[i + 1] ? truck : truck.slice(truckIdx);
//   res[i] = truckIdx + 1;
// });

// return res;
