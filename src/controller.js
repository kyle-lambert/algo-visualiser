import boardView from "./views/BoardView";
import boardModel from "./models/BoardModel";

function initialiseBoard() {
  const boardWidth = boardView.getBoardWidth();
  const boardHeight = boardView.getBoardHeight();

  const nodes = boardModel.createNodes(boardWidth, boardHeight);

  boardView.renderBoard(nodes);

  // Bind event handlers for newly created nodes
  boardView.addMouseEnterHandler(controlMouseEnter);
}

function controlResize() {
  initialiseBoard();
}

function controlMouseDown() {
  console.log("mousedown");
}

function controlMouseUp() {
  console.log("mouseup");
}

function controlMouseEnter() {
  console.log("mouseenter");
}

export const init = () => {
  initialiseBoard();

  // Bind event handlers
  boardView.addResizeHandler(controlResize);
  boardView.addMouseDownHandler(controlMouseDown);
  boardView.addMouseUpHandler(controlMouseUp);
};

// import GridView from "./views/gridView";
// import * as gridModel from "./models/gridModel";

// class Controller {
//   constructor() {
//     this._gridView = new GridView();
//   }

//   _initialiseGrid() {
//     const { width, height } = this._gridView.getTableDimensions();

//     gridModel.computeGrid(width, height);

//     this._gridView.renderGrid(gridModel.state.grid);

//     this._gridView.addMouseEnterHandler(this.controlMouseEnter.bind(this));
//   }

//   controlResize() {
//     this._initialiseGrid();
//   }

//   controlMouseDown(e) {
//     // Prevent default browser drag/drop behaviour
//     e.preventDefault();
//     console.log("mouse down");
//     gridModel.state.mousePressed = true;

//     const coords = e.target.dataset.coords.split("-");
//     const row = coords[0];
//     const col = coords[1];

//     const isStart = gridModel.state.grid[row][col].isStart;
//     const isTarget = gridModel.state.grid[row][col].isTarget;

//     if (isStart) {
//       gridModel.state.currentlyMoving = "start";
//     } else if (isTarget) {
//       gridModel.state.currentlyMoving = "target";
//     }
//   }

//   controlMouseUp(e) {
//     gridModel.state.mousePressed = false;
//     gridModel.state.currentlyMoving = null;
//   }

//   controlMouseEnter(e) {
//     if (!gridModel.state.mousePressed) return;

//     if (gridModel.state.currentlyMoving === "start") {
//       console.log("moving start");
//       const coords = e.target.dataset.coords.split("-");
//       const row = coords[0];
//       const col = coords[1];

//       const previousStartElement = gridModel.state.startCell;
//       previousStartElement.removeStartCell();
//     }
//   }

//   _bindEventHandlers() {
//     this._gridView.addResizeHandler(this.controlResize.bind(this));
//     this._gridView.addMouseDownHandler(this.controlMouseDown.bind(this));
//     this._gridView.addMouseUpHandler(this.controlMouseUp.bind(this));
//   }

//   init() {
//     this._bindEventHandlers();
//     this._initialiseGrid();
//   }
// }

// export default Controller;
