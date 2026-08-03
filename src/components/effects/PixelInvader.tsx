import type { CSSProperties } from 'react';

export type InvaderVariant =
  | 'scout'
  | 'crawler'
  | 'sentinel';

interface PixelInvaderProps {
  variant: InvaderVariant;
  color: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  direction: 1 | -1;
  reducedMotion: boolean;
}

const patterns: Record<InvaderVariant, string[]> = {
  scout: [
    '00100100',
    '00011000',
    '01111110',
    '11011011',
    '11111111',
    '10111101',
    '10100101',
    '01000010',
  ],
  crawler: [
    '01000010',
    '00100100',
    '01111110',
    '11011011',
    '11111111',
    '01111110',
    '11000011',
    '00100100',
  ],
  sentinel: [
    '00011000',
    '01111110',
    '11011011',
    '11111111',
    '10111101',
    '00111100',
    '01100110',
    '11000011',
  ],
};

export function PixelInvader({
  variant,
  color,
  left,
  top,
  size,
  duration,
  delay,
  direction,
  reducedMotion,
}: PixelInvaderProps) {
  const pattern = patterns[variant];

  const style = {
    '--invader-color': color,
    '--invader-left': `${left}%`,
    '--invader-top': `${top}%`,
    '--invader-size': `${size}px`,
    '--invader-duration': `${duration}s`,
    '--invader-delay': `${delay}s`,
    '--invader-direction': direction,
  } as CSSProperties;

  return (
    <span
      aria-hidden="true"
      className={[
        'pixel-invader',
        reducedMotion
          ? 'pixel-invader-static'
          : 'pixel-invader-animated',
      ].join(' ')}
      style={style}
    >
      {pattern.flatMap((row, rowIndex) =>
        [...row].map((pixel, columnIndex) => (
          <span
            className={
              pixel === '1'
                ? 'invader-pixel active'
                : 'invader-pixel'
            }
            key={`${rowIndex}-${columnIndex}`}
          />
        )),
      )}
    </span>
  );
}
