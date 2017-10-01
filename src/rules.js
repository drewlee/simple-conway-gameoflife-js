function _getTotalNeighbours(board, i, j) {
  const prevRow = (i > 0) ? i - 1 : board.length - 1;
  const nextRow = (i + 1 < board.length) ? i + 1 : 0;
  const prevCol = (j > 0) ? j - 1 : board[i].length - 1;
  const nextCol = (j + 1 < board[i].length) ? j + 1 : 0;
  const neighbours = {
    topLeft:  board[prevRow][prevCol],
    top:      board[prevRow][j],
    topRight: board[prevRow][nextCol],
    left:     board[i][prevCol],
    right:    board[i][nextCol],
    btmLeft:  board[nextRow][prevCol],
    btm:      board[nextRow][j],
    btmRight: board[nextRow][nextCol]
  };
  let count = 0;

  for (let n in neighbours) {
    if (neighbours[n]) {
      count++;
    }
  }

  return count;
}

function _updateCell(board, i, j) {
  const cell = board[i][j];
  const neighbours = _getTotalNeighbours(board, i, j);

  if (cell) { // live cell
    // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (neighbours < 2 || neighbours > 3) {
      return 0;
    }
    // Any live cell with two or three live neighbours lives on to the next generation.
    return 1;
  } else { // dead cell
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (neighbours === 3) {
      return 1;
    }
  }
  return 0;
}

export function playTurn(board) {
  let nBoard = [];

  for (let i = 0; i < board.length; i++) {
    nBoard[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      nBoard[i][j] = _updateCell(board, i, j);
    }
  }

  return nBoard;
}