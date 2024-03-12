let players = ['x', 'o'];
let activePlayer;
let counter;
let board;
let winnerIs;

function startGame() {
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
  
  counter = 0;
  renderBoard(board);
}

function click(row,col) {
  board[row][col] = activePlayer;
  renderBoard(board);

  if ((board[row][0] === activePlayer && board[row][1] === activePlayer && board[row][2] === activePlayer) || (board[0][col] === activePlayer && board[1][col] === activePlayer && board[2][col] === activePlayer) || (board[0][2] === activePlayer && board[1][1] === activePlayer && board[2][0] === activePlayer) || (board[0][0] === activePlayer && board[1][1] === activePlayer && board[2][2] === activePlayer)) {
    
    alert('Поздравляем!');
    showWinner(winnerIs);
    return;
  } else {
    counter += 1;
    if (counter % 2 === 0) {
      activePlayer = players[0];
      winnerIs = 0;
    } else {
      activePlayer = players[1];
      winnerIs = 1;
    }
  }
}