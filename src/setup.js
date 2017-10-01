import { playTurn } from './rules';
import { drawWorld } from './display';

function _createInitialBoard(width, height) {
  let board = [];

  for (let i = 0; i < width; i++) {
    board[i] = [];
    for (let j = 0; j < height; j++) {
      board[i][j] = Math.round(Math.random());
    }
  }

  return board;
}

export function initGame(width, height) {
  // double dimensions to emulate an infinite plane
  let board = _createInitialBoard(width * 2, height * 2);

  drawWorld(board, width, height);

  setInterval(() => {
    board = playTurn(board);
    drawWorld(board, width, height);
  }, 250);
}