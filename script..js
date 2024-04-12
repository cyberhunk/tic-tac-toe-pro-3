let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');
let gameOver = false;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let pattern of winPatterns) {
    if (cells[pattern[0]].textContent !== '' && 
        cells[pattern[0]].textContent === cells[pattern[1]].textContent && 
        cells[pattern[0]].textContent === cells[pattern[2]].textContent) {
      message.textContent = `${currentPlayer} wins!`;
      gameOver = true;
      return;
    }
  }

  if (![...cells].some(cell => cell.textContent === '')) {
    message.textContent = "It's a draw!";
    gameOver = true;
  }
}

function cellClicked(index) {
  if (!cells[index].textContent && !gameOver) {
    cells[index].textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  cells.forEach(cell => cell.textContent = '');
  message.textContent = '';
  currentPlayer = 'X';
  gameOver = false;
}
