/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import { observer } from 'mobx-react';
import React from 'react';
import { GameBox } from './GameBox';
import { useGamesStore } from './mobX/GameContext';
import { exIcon, zeroIcon } from './svgIcons.jsx';
import { Winner } from './Winner';

export const GameGrid = observer(() => {
  const gameStore = useGamesStore();
  const { currentTurn, isWinner, isDraw } = gameStore;
  const currentTurnIcon = currentTurn === 'x' ? exIcon : zeroIcon;
  const winnerIcon = currentTurn === '0' ? exIcon : zeroIcon;

  



  const init = () => {
    gameStore.initMap();
  };


  const handleTurn = (id) => {
    gameStore.turn(id);
    const {multiplayer, isWinner, isDraw} = gameStore;
    if (!multiplayer && !(isWinner || isDraw)) {
      gameStore.pcTurn();
    }
  };


  return (
    <>
      <h2>
        Current turn
        <div className="game__turn-icon">{currentTurnIcon}</div>
      </h2>
        {(isWinner || isDraw) && <Winner icon={winnerIcon} onClick={init} isDraw={isDraw && !isWinner} />}
      <div className="game__view">
        <div className="game__background">
          <div className="game__grid">
            {gameStore.gameMap.map((boxValue, id) => (
              <GameBox key={id} id={id} value={boxValue} onClick={handleTurn} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
;
});
