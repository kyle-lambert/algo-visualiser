class GridView {
  constructor() {
    this._tableElement = document.querySelector("[data-table]");
    this._tableContainerElement = document.querySelector("[data-table-container]");
  }

  getWidth() {
    return this._tableContainerElement.clientWidth;
  }

  getHeight() {
    return this._tableContainerElement.clientHeight;
  }

  _clearCells() {
    while (this._tableElement.firstChild) {
      this._tableElement.removeChild(this._tableElement.firstChild);
    }
  }

  renderCells(cells) {
    this._clearCells();

    for (let row = 0; row < cells.length; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < cells[row].length; col++) {
        const currentCell = cells[row][col];
        const td = document.createElement("td");
        const classesToAdd = ["border", "border-gray-300"];
        if (currentCell.isStart) {
          classesToAdd.push("bg-green-500");
        }
        if (currentCell.isTarget) {
          classesToAdd.push("bg-red-500");
        }
        td.classList.add(...classesToAdd);
        td.dataset.row = row;
        td.dataset.col = col;
        tr.appendChild(td);
      }
      this._tableElement.appendChild(tr);
    }
  }

  addResizeHandler(handler) {
    window.addEventListener("resize", handler);
  }

  addMouseDownHandler(handler) {
    // this._tableElement.addEventListener("mousedown", handler);
  }

  addMouseUpHandler(handler) {
    // this._tableElement.addEventListener("mouseup", handler);
  }

  addMouseMoveHandler(handler) {
    // this._tableElement.addEventListener("mousemove", handler);
  }
}

export default GridView;
