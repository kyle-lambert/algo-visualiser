import GridView from "./views/gridView";
import * as gridModel from "./models/gridModel";
import { CELL_WIDTH, CELL_HEIGHT } from "./config";

class Controller {
  constructor() {
    this._gridView = new GridView();
    this._initialiseGrid();
  }

  _initialiseGrid() {
    const rows = Math.floor(this._gridView.getHeight() / CELL_HEIGHT);
    const cols = Math.floor(this._gridView.getWidth() / CELL_WIDTH);

    gridModel.generateCells(rows, cols);

    this._gridView.renderCells(gridModel.state.cells);
  }

  controlResize() {
    this._initialiseGrid();
  }

  controlMouseDown(e) {
    console.log("mouse down");
  }

  controlMouseUp(e) {
    console.log("mouse up");
  }

  controlMouseMove(e) {
    console.log("mouse move");
  }

  init() {
    this._gridView.addResizeHandler(this.controlResize.bind(this));
    this._gridView.addMouseDownHandler(this.controlMouseDown.bind(this));
    this._gridView.addMouseUpHandler(this.controlMouseUp.bind(this));
    this._gridView.addMouseMoveHandler(this.controlMouseMove.bind(this));
  }
}

export default Controller;
