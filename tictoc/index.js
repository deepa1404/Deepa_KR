const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function createBoard() {
    board.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.innerText = cell;
        cellDiv.addEventListener('click', () => handleCellClick(index));
        gameBoard.appendChild(cellDiv);
    });
}

function handleCellClick(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard();
        checkWinner();
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} wins!`);
            resetGame();
            return;
        }
    }
    if (!board.includes('')) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    renderBoard();
}

resetButton.addEventListener('click', resetGame);
createBoard();
