import GridView from "./views/gridView";
import SettingsView from "./views/settingsView";
import * as gridModel from "./models/gridModel";
import * as settingsModel from "./models/settingsModel";

class Controller {
  constructor() {
    this._gridView = new GridView();
    this._settingsView = new SettingsView();
  }

  _initialiseGrid() {
    const { width, height } = this._gridView.getTableDimensions();

    gridModel.computeGrid(width, height);

    this._gridView.renderGrid(gridModel.state.grid);
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

  _bindEventHandlers() {
    this._gridView.addResizeHandler(this.controlResize.bind(this));
    this._gridView.addMouseDownHandler(this.controlMouseDown.bind(this));
    this._gridView.addMouseUpHandler(this.controlMouseUp.bind(this));
    this._gridView.addMouseMoveHandler(this.controlMouseMove.bind(this));
  }

  init() {
    this._bindEventHandlers();
    this._initialiseGrid();
  }
}

export default Controller;
