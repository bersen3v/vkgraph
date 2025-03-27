export type GraphNode = {
  id: number;
  name: string;
  val: number;
  img: string;
  group: number;
};

export type GraphLink = {
  source: number;
  target: number;
};

export type GraphData = {
  nodes: GraphNode[];
  links: GraphLink[];
};