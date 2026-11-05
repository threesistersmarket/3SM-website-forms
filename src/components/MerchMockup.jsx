import React from 'react';

const LOGO = 'https://static.wixstatic.com/shapes/c73eb8_d4312324d99c46f4a5d4e4076ce4553c.svg';

const shapes = {
  tee: 'M60 30 L90 18 Q100 30 110 18 L140 30 L165 62 L142 76 L136 66 L136 172 L64 172 L64 66 L58 76 L35 62 Z',
  hoodie: 'M62 34 Q100 6 138 34 L166 70 L144 84 L138 74 L138 174 L62 174 L62 74 L56 84 L34 70 Z',
  tote: 'M48 70 L152 70 L146 176 L54 176 Z M74 70 Q74 26 100 26 Q126 26 126 70 L118 70 Q118 36 100 36 Q82 36 82 70 Z',
  cap: 'M44 120 Q44 52 100 52 Q156 52 156 120 Z M40 120 L176 120 Q176 136 150 136 L40 136 Z',
  mug: 'M50 50 L136 50 L136 166 Q136 176 126 176 L60 176 Q50 176 50 166 Z M136 78 Q170 78 170 108 Q170 138 136 138 L136 126 Q156 126 156 108 Q156 90 136 90 Z',
  sticker: 'M100 28 A72 72 0 1 1 99.9 28 Z',
};

const logoBox = {
  tee: { x: 76, y: 70, w: 48 },
  hoodie: { x: 76, y: 76, w: 48 },
  tote: { x: 68, y: 96, w: 64 },
  cap: { x: 80, y: 70, w: 40 },
  mug: { x: 66, y: 86, w: 52 },
  sticker: { x: 56, y: 56, w: 88 },
};

/** Simple illustrated product stand-in until real product photos are ready. */
function MerchMockup({ type, color }) {
  const box = logoBox[type] || logoBox.tee;
  const light = color.toUpperCase() === '#FFFFFF' || color.toUpperCase() === '#E6B374';
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-hidden="true">
      <path
        d={shapes[type] || shapes.tee}
        fill={color}
        fillRule="evenodd"
        stroke={light ? '#64503f33' : 'none'}
        strokeWidth="2"
      />
      <image href={LOGO} x={box.x} y={box.y} width={box.w} height={box.w} opacity={light ? 1 : 0.95} />
    </svg>
  );
}

export default MerchMockup;
