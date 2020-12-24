/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { FC } from 'react';
import { exIcon, zeroIcon } from './svgIcons.jsx';

interface Props {
  id: number,
  value: string,
  onClick(a: number): void,
}

export const GameBox: FC<Props> = ({ id, value, onClick }) => {
  const isDisabled = value !== '';
  const icon = value === '' ? '' : value === 'x' ? exIcon : zeroIcon;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      type="button"
      className="game__box"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};
