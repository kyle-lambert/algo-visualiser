class BoardView {
  constructor() {
    this._boardElement = document.getElementById("board");
  }

  getBoardWidth() {
    return this._boardElement.clientWidth;
  }

  getBoardHeight() {
    return this._boardElement.clientHeight;
  }

  _clearBoard() {
    while (this._boardElement.firstChild) {
      this._boardElement.removeChild(this._boardElement.firstChild);
    }
  }

  _createElement(tag) {
    return document.createElement(tag);
  }

  _getCoordsStr(row, col) {
    return `${row}-${col}`;
  }

  renderBoard(nodes) {
    this._clearBoard();

    for (let row = 0; row < nodes.length; row++) {
      const tr = this._createElement("tr");
      for (let col = 0; col < nodes[row].length; col++) {
        const td = this._createElement("td");
        td.dataset.coords = this._getCoordsStr(row, col);

        const classList = ["node"];
        const currentNode = nodes[row][col];

        if (currentNode.isStart) {
          classList.push("node--start");
        } else if (currentNode.isTarget) {
          classList.push("node--target");
        }

        td.classList.add(...classList);
        tr.appendChild(td);
      }
      this._boardElement.appendChild(tr);
    }
  }

  addResizeHandler(handler) {
    window.addEventListener("resize", handler);
  }

  addMouseDownHandler(handler) {
    this._boardElement.addEventListener("mousedown", handler);
  }

  addMouseUpHandler(handler) {
    window.addEventListener("mouseup", handler);
  }

  addMouseEnterHandler(handler) {
    Array.from(this._boardElement.querySelectorAll("[data-coords]")).forEach((node) =>
      node.addEventListener("mouseenter", handler)
    );
  }
}

export default new BoardView();
