import React from 'react';
import { createGameStore } from './gameStore';
import { useLocalObservable } from 'mobx-react'

export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const gameStore = useLocalObservable(createGameStore);

  return (
    <GameContext.Provider value={gameStore}>
      {children}
    </GameContext.Provider>
  )
};

export const useGamesStore = () => React.useContext(GameContext);