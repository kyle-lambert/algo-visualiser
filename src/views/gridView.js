class GridView {
  constructor() {
    this._tableElement = document.getElementById("table");
  }

  getTableDimensions() {
    return {
      width: this._tableElement.clientWidth,
      height: this._tableElement.clientHeight,
    };
  }

  _clearGrid() {
    while (this._tableElement.firstChild) {
      this._tableElement.removeChild(this._tableElement.firstChild);
    }
  }

  _createTableDataElement(row, col) {
    const td = document.createElement("td");
    td.dataset.coords = `${row}-${col}`;
    td.dataset.type = "cell";

    const classesToAdd = ["border", "border-gray-300"];

    td.classList.add(...classesToAdd);

    return td;
  }

  renderGrid(grid) {
    this._clearGrid();

    for (let row = 0; row < grid.length; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < grid[row].length; col++) {
        const td = this._createTableDataElement(row, col);
        const currentCell = grid[row][col];

        if (currentCell.isStart) {
          td.classList.add("bg-green-500");
        }

        if (currentCell.isTarget) {
          td.classList.add("bg-red-500");
        }

        tr.appendChild(td);
      }
      this._tableElement.appendChild(tr);
    }
  }

  addResizeHandler(handler) {
    window.addEventListener("resize", handler);
  }

  addMouseDownHandler(handler) {
    this._tableElement.addEventListener("mousedown", handler);
  }

  addMouseUpHandler(handler) {
    window.addEventListener("mouseup", handler);
  }

  addMouseEnterHandler(handler) {
    const cellElements = Array.from(this._tableElement.querySelectorAll("[data-type=cell]"));
    cellElements.forEach((el) => el.addEventListener("mouseenter", handler));
  }
}

export default new GridView();
