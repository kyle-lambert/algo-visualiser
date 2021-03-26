import Cell from "../utils/cell";
import { CELL_WIDTH, CELL_HEIGHT } from "../config";

export const state = {
  grid: [],
  startCell: null,
  targetCell: null,
};

export const computeGrid = (width, height) => {
  const rows = Math.floor(height / CELL_HEIGHT);
  const cols = Math.floor(width / CELL_WIDTH);

  const grid = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const cell = new Cell(r, c);

      if (r === Math.floor(rows / 2) && c === 4) {
        state.startCell = cell;
        cell.setStart();
      }

      if (r === Math.floor(rows / 2) && c === cols - 4) {
        state.targetCell = cell;
        cell.setTarget();
      }

      row.push(cell);
    }
    grid.push(row);
  }

  state.grid = grid;
};
