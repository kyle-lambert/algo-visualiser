import GridView from "./views/gridView";
import * as gridModel from "./models/gridModel";

class Controller {
  constructor() {
    this._gridView = new GridView();
    this.controlResize = this.controlResize.bind(this);
    this._initialiseGrid();
  }

  _initialiseGrid() {
    const width = this._gridView.getContainerWidth();
    const height = this._gridView.getContainerHeight();

    gridModel.generateCells(width, height);

    this._gridView.clearCells();
    this._gridView.renderCells(gridModel.state.cells);
  }

  controlResize() {
    this._initialiseGrid();
  }

  init() {
    this._gridView.addResizeHandler(this.controlResize);
  }
}

export default Controller;
