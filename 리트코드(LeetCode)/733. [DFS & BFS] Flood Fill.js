const checkVisited = (visited, cur) => {
  for (const pos of visited) {
    if (pos[0] === cur[0] && pos[1] === cur[1]) return true;
  }
  return false;
};

const floodFill = (image, sr, sc, color) => {
  const [ROW_MAX, COL_MAX] = [image.length, image[0].length];
  const curColor = image[sr][sc];

  const visited = [];
  const queue = [[sr, sc]];

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  while (queue.length) {
    const [r, c] = queue.shift();
    visited.push([r, c]);
    image[r][c] = color;

    for (let i = 0; i < 4; i++) {
      const [nr, nc] = [r + dr[i], c + dc[i]];

      // out of image
      if (nr < 0 || nr >= ROW_MAX || nc < 0 || nc >= COL_MAX) continue;
      // color is different
      if (image[nr][nc] !== curColor) continue;
      // already visited
      if (!checkVisited(visited, [nr, nc])) queue.push([nr, nc]);
    }
  }
  return image;
};

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;
console.log(floodFill(image, sr, sc, color));
