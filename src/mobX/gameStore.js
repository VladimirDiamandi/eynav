const initGrid = Array(9).fill('');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calcIsWinner = (game) => {
  for (let i = 0; i < winConditions.length; i++) {
    if (game[winConditions[i][0]] === game[winConditions[i][1]]
      && game[winConditions[i][1]] === game[winConditions[i][2]]) {
      if (game[winConditions[i][0]] !== '') {
        return true;
      }
    }
  }
  return false;
};

export function createGameStore() {
  return {
    gameMap: initGrid,
    multiplayer: false,
    currentTurn: 'x',
    updateCurrentTurn() {
      this.currentTurn = this.currentTurn === 'x' ? '0' : 'x';
    }, 
    isWinner: false,
    isDraw: false,

    setMultiplayer(data) {
      this.multiplayer = data;
    },
    updateMap(id) {
      this.gameMap[id] = this.currentTurn;
    },
    initMap() {
      this.gameMap = initGrid;
      this.isDraw = false;
      this.isWinner = false;
      this.currentTurn = 'x';
    },
    pcTurn() {
      this.turn(this.gameMap.lastIndexOf(''));
    },
    turn(id) {
      this.updateMap(id);
      this.isDraw = this.gameMap.lastIndexOf('') === -1;
      this.isWinner = calcIsWinner(this.gameMap);

      this.updateCurrentTurn()
    }
    
  }
};