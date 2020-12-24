import React from 'react';

export const zeroIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%"
    height="100%" viewBox="0 0 132 132"
  >
    <defs>
        <rect id="a" width="654" height="602" x="441" y="308" rx="40"/>
        <filter id="b" width="104.9%" height="105.3%" x="-2.4%" y="-2.7%" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="15.5"/>
            <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
            <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34022618 0"/>
        </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g transform="translate(-520 -366)">
            <use fill="#F3F3F3" />
            <use fill="#000" filter="url(#b)" />
            <rect width="653" height="601" x="441.5" y="308.5" stroke="#606060" strokeLinejoin="square" rx="40"/>
        </g>
        <path fill="#404F54" d="M66 132c-36.45 0-66-29.55-66-66S29.55 0 66 0s66 29.55 66 66-29.55 66-66 66zm0-35c17.12 0 31-13.88 31-31 0-17.12-13.88-31-31-31-17.12 0-31 13.88-31 31 0 17.12 13.88 31 31 31z"/>
    </g>
</svg>
);

export const exIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%"
    height="100%" viewBox="0 0 127 126"
  >
    <defs>
        <rect id="a" width="654" height="602" x="441" y="308" rx="40"/>
        <filter id="b" width="104.9%" height="105.3%" x="-2.4%" y="-2.7%" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="15.5"/>
            <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
            <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34022618 0"/>
        </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g transform="translate(-525 -552)">
            <use fill="#F3F3F3" />
            <use fill="#000" filter="url(#b)" />
            <rect width="653" height="601" x="441.5" y="308.5" stroke="#606060" strokeLinejoin="square" rx="40"/>
        </g>
        <path stroke="#404F54" strokeLinecap="square" strokeWidth="40" d="M63.5 62.5L15.274 14.274 63.5 62.5l48.226-48.226L63.5 62.5zm0 0L15 111l48.5-48.5L112 111 63.5 62.5z"/>
    </g>
</svg>
);

export const resetIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 40">
        <g fill="none" fillRule="evenodd" transform="translate(-957 -968)">
            <rect width="152" height="70" x="941.5" y="954.5" stroke="#979797" strokeWidth="3" rx="35"/>
            <path fill="#404F54" d="M968.886 1000.187a13.91 13.91 0 0 0 7.364 2.099c7.791 0 14.107-6.396 14.107-14.286s-6.316-14.286-14.107-14.286c-6.79 0-12.46 4.859-13.804 11.33L957 983.51c2.012-8.884 9.867-15.51 19.25-15.51 10.908 0 19.75 8.954 19.75 20s-8.842 20-19.75 20c-4.639 0-8.904-1.62-12.274-4.33l-4.227 2.996-.2-13.81 12.746 4.914-3.409 2.417z"/>
        </g>
    </svg>
);