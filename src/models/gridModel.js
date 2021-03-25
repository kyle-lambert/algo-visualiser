import { CELL_WIDTH, CELL_HEIGHT } from "../config";

export const state = {
  cells: [],
  startCell: null,
  targetCell: null,
};

export const generateCells = (width, height) => {
  const rows = Math.floor(height / CELL_HEIGHT);
  const cols = Math.floor(width / CELL_WIDTH);
  const cells = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(new Cell(i, j));
    }
    cells.push(row);
  }

  state.cells = cells;
};

class Cell {
  constructor(row, col) {
    (this.row = row), (this.col = col);
  }
}
