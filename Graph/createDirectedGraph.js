const edges = [
  ["a", "b"],
  ["b", "a"],
  ["c", "d"],
  ["d", "e"],
];

function createDirectedGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;

    if (!a in graph) {
      graph[a] = [];
    }
    if (!b in graph) {
      graph[b] = [];
    }
    graph.a.push(b);
    graph.b.push(a);
  }
  return graph;
}
