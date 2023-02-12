/* eslint-disable max-len */

import React from 'react';

export default function Icon(props) {
  const {dark, onClick} = props;
  const color      = dark ? '#e0e0e0' : '#000000';
  const innerColor = dark ? '#a0a0a0' : '#ffffff';
  const opacity    = dark ? '0.4'     : '0.16';

  return (
    <svg viewBox='0 0 512 512'>
      <g onClick={onClick}>
        <g transform='scale(21.33)'>
          <path d='M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z' fill={color} fillOpacity={opacity} stroke={color} strokeWidth='1.5' strokeMiterlimit='10' />
          <g transform='scale(0.6) translate(8 8)'>
            <path d='M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6Z' fill={innerColor} fillOpacity={opacity} stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M20 18H4' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' />
            <path d='M14 20a2 2 0 1 1-4 0' fill={innerColor} stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <circle cx='12' cy='3' r='1' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          </g>
        </g>
      </g>
    </svg>
  );
}
