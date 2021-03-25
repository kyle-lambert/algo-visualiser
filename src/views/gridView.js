class GridView {
  constructor() {
    this._tableElement = document.querySelector("[data-table]");
    this._tableContainerElement = document.querySelector("[data-table-container]");
  }

  getContainerWidth() {
    return this._tableContainerElement.clientWidth;
  }

  getContainerHeight() {
    return this._tableContainerElement.clientHeight;
  }

  clearCells() {
    while (this._tableElement.firstChild) {
      this._tableElement.removeChild(this._tableElement.firstChild);
    }
  }

  renderCells(cells) {
    for (let row = 0; row < cells.length; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < cells[row].length; col++) {
        const td = document.createElement("td");
        const classesToAdd = ["w-5", "h-5", "border", "border-gray-300"];
        td.classList.add(...classesToAdd);
        td.dataset.row = row;
        td.dataset.col = col;
        tr.appendChild(td);
      }
      this._tableElement.appendChild(tr);
    }
  }

  addResizeHandler(handler) {
    window.addEventListener("resize", () => {
      handler();
    });
  }
}

export default GridView;
