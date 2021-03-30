class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.isStart = false;
    this.isTarget = false;
  }

  removeStartCell() {
    this.isStart = false;
    const element = document.querySelector(`[data-coords='${this.row}-${this.col}']`);

    if (!element) return;

    element.classList.remove("bg-green-500");
  }
}

export default Cell;
