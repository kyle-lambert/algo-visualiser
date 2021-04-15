import { CELL_WIDTH, CELL_HEIGHT } from "../config";

class BoardModel {
  constructor() {
    this.nodes = [];
    this.startNode = null;
    this.targetNode = null;
  }

  _loopNodes(callback) {
    for (let row = 0; row < this.nodes.length; row++) {
      for (let col = 0; col < this.nodes[row].length; col++) {
        callback(this.nodes[row][col]);
      }
    }
  }

  createNodes(width, height) {
    const rows = Math.floor(height / CELL_HEIGHT);
    const cols = Math.floor(width / CELL_WIDTH);

    const nodes = [];

    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const node = new Node(r, c);
        row.push(node);

        const startRow = Math.floor(rows / 2) > 0 ? Math.floor(rows / 2) : 0;
        const startCol = 2;
        const targetRow = Math.floor(rows / 2) > 0 ? Math.floor(rows / 2) : 0;
        const targetCol = cols - 2 - 1;

        if (r === startRow && c === startCol) {
          this.setStartNode(node);
        } else if (r === targetRow && c === targetCol) {
          this.setTargetNode(node);
        }
      }
      nodes.push(row);
    }

    this.nodes = nodes;
    return nodes;
  }

  setStartNode(node) {
    // Reset all nodes to avoid duplication
    this._loopNodes((loopNode) => {
      loopNode.isStart = false;
    });

    // Set property on Node instance
    node.isStart = true;

    // Set property on Board instance
    this.startNode = node;
  }

  setTargetNode(node) {
    // Reset all nodes to avoid duplication
    this._loopNodes((loopNode) => {
      loopNode.isTarget = false;
    });

    // Set property on Node instance
    node.isTarget = true;

    // Set property on Board instance
    this.targetNode = node;
  }
}

export default new BoardModel();

class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.isStart = false;
    this.isTarget = false;
  }
}
