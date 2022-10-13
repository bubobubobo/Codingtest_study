// https://school.programmers.co.kr/learn/courses/30/lessons/77485

class NumberMap {
  #map;

  constructor(rows, columns) {
    this.#map = Array.from(new Array(rows), (_, i) =>
      new Array(columns).fill(0).map((_, j) => i * columns + j + 1)
    );
  }

  toArray() {
    return [...this.#map];
  }

  rotate(rowStart, colStart, rowEnd, colEnd) {
    let remained = this.#map[rowStart - 1][colStart - 1];
    let minVal = Infinity;
    for (let i = colStart; i < colEnd; i++) {
      minVal = minVal < remained ? minVal : remained;
      [remained, this.#map[rowStart - 1][i]] = [this.#map[rowStart - 1][i], remained];
    }
    for (let i = rowStart; i < rowEnd; i++) {
      minVal = minVal < remained ? minVal : remained;
      [remained, this.#map[i][colEnd - 1]] = [this.#map[i][colEnd - 1], remained];
    }
    for (let i = colEnd; i > colStart; i--) {
      minVal = minVal < remained ? minVal : remained;
      [remained, this.#map[rowEnd - 1][i - 2]] = [this.#map[rowEnd - 1][i - 2], remained];
    }
    for (let i = rowEnd; i > rowStart; i--) {
      minVal = minVal < remained ? minVal : remained;
      [remained, this.#map[i - 2][colStart - 1]] = [this.#map[i - 2][colStart - 1], remained];
    }
    return minVal;
  }
}

function QueryMatrixRotation(rows, columns, queries) {
  const nMap = new NumberMap(rows, columns);
  return queries.map(query => nMap.rotate(...query));
}

export default QueryMatrixRotation;
