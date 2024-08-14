const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["d", "e", "f"],
  d: ["e", "f"],
  e: [],
  f: ["e"],
};

function breadthFirstTraversal(graph, start) {
  const queue = [start];
  const visited = new Map();

  while (queue.length) {
    const node = queue.shift();
    for (const neighbour of graph[node]) {
      if (!visited.neighbour) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
}
