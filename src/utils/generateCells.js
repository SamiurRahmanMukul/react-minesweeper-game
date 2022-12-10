/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import { gameLevel } from '../constants/gameLevel';

const generateCells = (level) => {
  // creating the cells;
  const cells = [];
  for (let row = 0; row < gameLevel(level).width; row++) {
    cells.push([]);
    for (let col = 0; col < gameLevel(level).height; col++) {
      // 0 = unpressed, 1 = visible, 2 = flag
      cells[row].push({ bomb: false, state: 0 });
    }
  }

  // randomly put 10 bombs in any cells
  for (let i = 0; i < 10; i++) {
    let placedBomb = false;
    while (!placedBomb) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);

      if (!cells[row][col].bomb) {
        cells[row][col].bomb = true;
        placedBomb = true;
      }
    }
  }

  // calculate the value of each cell
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = cells[row][col];
      if (cell.bomb) {
        cell.value = -1;
        continue;
      }

      // compute value;
      let counter = 0;
      if (row > 0 && col > 0 && cells[row - 1][col - 1].bomb) {
        counter++;
      }
      if (row > 0 && cells[row - 1][col].bomb) {
        counter++;
      }
      if (row > 0 && col < 8 && cells[row - 1][col + 1].bomb) {
        counter++;
      }
      if (col > 0 && cells[row][col - 1].bomb) {
        counter++;
      }
      if (col < 8 && cells[row][col + 1].bomb) {
        counter++;
      }
      if (row < 8 && col > 0 && cells[row + 1][col - 1].bomb) {
        counter++;
      }
      if (row < 8 && cells[row + 1][col].bomb) {
        counter++;
      }
      if (row < 8 && col < 8 && cells[row + 1][col + 1].bomb) {
        counter++;
      }
      cell.value = counter;
    }
  }

  return cells;
};

export default generateCells;
