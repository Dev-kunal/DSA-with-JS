function hasPathDFS(graph, start, destination) {
  const stack = [start];
  const visited = new Set();

  while (stack.length) {
    const node = stack.pop();
    if (node === destination) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) stack.push(neighbour);
      }
    }
  }
  return false;
}

function hasPathBFS(graph, start, destination) {
  const queue = [start];
  const visited = new Set();

  while (queue.length) {
    const node = queue.shift();
    if (node === destination) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        queue.push(neighbour);
      }
    }
  }

  return false;
}

function hasPathRecursive(graph, start, destination, visited = new Set()) {
  if (start === destination) return true;

  if (visited.has(start)) return false;
  visited.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRecursive(graph, neighbour, destination)) return true;
  }
  return false;
}
