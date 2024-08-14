const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["d", "e", "f"],
  d: ["e", "f"],
  e: [],
  f: ["e"],
};

for (const neighbour of graph["c"]) {
  console.log(neighbour);
}

function depthFirstSearch(graph, start) {
  const visited = new Set();
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

function depthFSRecursive(graph, start, visited = new Map()) {
  if (!visited.has(start)) {
    visited.add(start);

    for (const neighbour of graph[start]) {
      depthFSRecursive(graph, neighbour, visited);
    }
  }
}
