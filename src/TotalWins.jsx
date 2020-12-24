import React from 'react';
import { resetIcon } from './svgIcons';

export const TotalWins = () => {
  return (
    <div className="total">
      <div className="total__score">
        <span className="total__player">Player 1</span>
        <span className="total__counter">00</span>
        <div className="total__divider"/>
        <span className="total__player">Player 2</span>
        <span className="total__counter">00</span>
      </div>
      <button type="button" className="total__action action">
        <span className="action__icon">{resetIcon}</span>
        <span className="action__name">RESET</span>
      </button>
    </div>
  )
};
