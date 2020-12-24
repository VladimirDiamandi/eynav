import { observer } from 'mobx-react';
import React from 'react';
import { useGamesStore } from './mobX/GameContext';
import './PlayerToggler.css';

export const PlayerToggler = observer(() => {
  const gameStore = useGamesStore();
  const { multiplayer: isEnable, setMultiplayer, initMap} = gameStore;
  const handleChange = () => {
    initMap();
    setMultiplayer(!isEnable);
    
  };
  
  return (
    <>
    <div className="toggler">
      <span>1Player</span>
      <label htmlFor="button1" className="toggler__wrapper">
        <input type="checkbox" id="button1" checked={isEnable} onChange={handleChange} className="toggler__checker"/>
        <span className="toggler__view"></span>
        <i className="toggler__indicator" />
      </label>
      <span>2Player</span>
    </div>
    </>

  )
});
