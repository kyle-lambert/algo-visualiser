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

export default Cell;
