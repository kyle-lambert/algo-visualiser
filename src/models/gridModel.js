export const state = {
  cells: [],
  startCell: null,
  targetCell: null,
};

export const generateCells = (rows, cols) => {
  const cells = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const cell = new Cell(r, c);
      if (r === Math.floor(rows / 2) && c === 4) {
        cell.setStart();
      }

      if (r === Math.floor(rows / 2) && c === cols - 4) {
        cell.setTarget();
      }

      row.push(cell);
    }
    cells.push(row);
  }

  state.cells = cells;
};

class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.isStart = false;
    this.isTarget = false;
  }

  setStart() {
    this.isStart = true;
  }

  setTarget() {
    this.isTarget = true;
  }
}
