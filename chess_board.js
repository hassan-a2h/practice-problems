let board = '';
const boardSize = prompt("Enter size", 8);

const boxColor = [' ', '#'];
const initialCharacterSeed = Math.floor(Math.random() * 2);

for (let i = 0; i < boardSize; i++) {
  for (let j = 0; j < boardSize; j++) {
    board += boxColor[(i + j) % 2];
  }
  board += '\n';
}

console.log(board);
