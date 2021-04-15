// import Cell from "../utils/cell";
// import { CELL_WIDTH, CELL_HEIGHT } from "../config";

// export const state = {
//   grid: [],
//   previousStartCell: null,
//   startCell: null,
//   targetCell: null,
//   algorithm: null,
//   animationSpeed: null,
//   mousePressed: false,
//   currentlyMoving: null,
//   walls: [],
// };

// export const isStart = (row, col) => {
//   return state.grid[row][col].isStart;
// };

// export const computeGrid = (width, height) => {
//   const rows = Math.floor(height / CELL_HEIGHT);
//   const cols = Math.floor(width / CELL_WIDTH);

//   const grid = [];

//   for (let r = 0; r < rows; r++) {
//     const row = [];
//     for (let c = 0; c < cols; c++) {
//       const cell = new Cell(r, c);

//       if (r === Math.floor(rows / 2) && c === 4) {
//         state.startCell = cell;
//         cell.isStart = true;
//       }

//       if (r === Math.floor(rows / 2) && c === cols - 4) {
//         state.targetCell = cell;
//         cell.isTarget = true;
//       }

//       row.push(cell);
//     }
//     grid.push(row);
//   }

//   state.grid = grid;
// };
