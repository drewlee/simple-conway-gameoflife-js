function _createDocumentFragment(board, worldWidth, worldHeight) {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < worldWidth; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    for (let j = 0; j < worldHeight; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      if (board[i][j]) {
        cellDiv.classList.add('live');
      }
      rowDiv.appendChild(cellDiv);
    }

    frag.appendChild(rowDiv);
  }

  return frag;
}

export function drawWorld(board, worldWidth, worldHeight) {
  const world = document.querySelector('#world');
  const frag = _createDocumentFragment(board, worldWidth, worldHeight);

  world.innerText = '';
  world.appendChild(frag);
}