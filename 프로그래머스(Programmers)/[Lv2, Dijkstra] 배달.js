// https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript

// const toGraph = function (N, road) {
//   const copy = [...road];
//   const graph = {};
//   for (let i = 0; i < N; i++) {
//     graph[i + 1] = [];
//     for (let j = copy.length - 1; j >= 0; j--) {
//       if (copy[j][0] === i + 1) {
//         const el = copy.splice(j, 1)[0];
//         graph[i + 1].push([el[1], el[2]]);
//       } else if (copy[j][1] === i + 1) {
//         const el = copy.splice(j, 1)[0];
//         graph[i + 1].push([el[0], el[2]]);
//       }
//     }
//   }
//   return graph;
// };

// 않이 웨안되?
// class Node {
//   constructor(num, dist, edges) {
//     this.num = num;
//     this.dist = dist;
//     this.edges = edges;
//   }
// }

// const solution = function (N, road, K) {
//   // construct Node lists
//   const nodes = [];
//   const visited = new Array(N).fill(false);
//   for (let i = 1; i <= N; i++) {
//     nodes.push(
//       new Node(
//         i,
//         Infinity,
//         road
//           .filter(edge => edge[0] === i || edge[1] === i)
//           .map(edge => (edge[0] === i ? [edge[1], edge[2]] : [edge[0], edge[2]]))
//       )
//     );
//   }
//   // 1번 마을에서 distance 계산
//   nodes[0].edges.forEach(edge => {
//     nodes[edge[0] - 1].dist = edge[1];
//   });
//   visited[0] = true;
//   nodes.sort((a, b) => a.dist - b.dist);

//   // 나머지 마을에서 distance 계산
//   for (let i = 1; i < N; i++) {
//     const cur = nodes.find(node => !visited[node.num - 1]);
//     visited[cur.num - 1] = true;
//     cur.edges.forEach(edge => {
//       nodes[edge[0] - 1].dist = Math.min(nodes[edge[0] - 1].dist, edge[1] + cur.dist);
//     });
//     nodes.sort((a, b) => a.dist - b.dist);
//     // console.log(nodes);
//   }
//   return nodes.filter(node => node.num !== 1 && node.dist <= K).length + 1;
// };

// 온라인 풀이 => 이건 될 때까지 한다잖아...
// function solution(N, road, K) {
//   const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
//   const lines = Array.from(Array(N + 1), () => []);

//   road.forEach(value => {
//     const [a, b, c] = value;
//     lines[a].push({ to: b, cost: c });
//     lines[b].push({ to: a, cost: c });
//   });

//   const queue = [{ to: 1, cost: 0 }];
//   arr[1] = 0;

//   while (queue.length) {
//     const { to } = queue.pop();
//     lines[to].forEach(next => {
//       if (arr[next.to] > arr[to] + next.cost) {
//         arr[next.to] = arr[to] + next.cost;
//         queue.push(next);
//       }
//     });
//   }
//   return arr.filter(item => item <= K).length;
// }

// 진짜 이 더러운 코드야 그만 해 좀 냥빡치네
const getRoadInfo = (N, road) => {
  const roadInfo = Array.from(new Array(N), () => new Array(N).fill(Infinity));
  roadInfo.forEach((row, i) => {
    row[i] = 0;
  });
  road.forEach(info => {
    [roadInfo[info[0] - 1][info[1] - 1], roadInfo[info[1] - 1][info[0] - 1]] = [info[2], info[2]];
  });
  return roadInfo;
};

const getClosestVillage = (distances, visited) => {
  const tmp = distances.map((dist, i) => (!visited[i] ? dist : Infinity));
  return tmp.indexOf(Math.min(...tmp));
};

const solution = (N, road, K) => {
  const distances = new Array(N).fill(Infinity);
  const visited = new Array(N).fill(false);
  const roadInfo = getRoadInfo(N, road);

  roadInfo[0].forEach((dist, i) => {
    distances[i] = dist;
  });
  visited[0] = true;

  for (let i = 1; i < N; i++) {
    const next = getClosestVillage(distances, visited);
    visited[next] = true;
    console.log(roadInfo[next]);
    roadInfo[next]
      .map((dist, idx) => (!visited[idx] ? dist : Infinity))
      .forEach((d, index) => {
        if (distances[index] > d + distances[i - 1]) distances[index] = d + distances[i - 1];
      });
  }
};

const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;
console.log(solution(N, road, K));
