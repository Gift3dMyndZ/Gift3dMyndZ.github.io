import { useReducedMotion } from '../../hooks/useReducedMotion';
import {
  PixelInvader,
  type InvaderVariant,
} from './PixelInvader';

interface InvaderDefinition {
  variant: InvaderVariant;
  color: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  direction: 1 | -1;
  mobile?: boolean;
}

const invaders: InvaderDefinition[] = [
  {
    variant: 'scout',
    color: '#55c7d9',
    left: 6,
    top: 13,
    size: 46,
    duration: 30,
    delay: -4,
    direction: 1,
    mobile: true,
  },
  {
    variant: 'crawler',
    color: '#c76aa7',
    left: 22,
    top: 26,
    size: 34,
    duration: 31,
    delay: -17,
    direction: -1,
  },
  {
    variant: 'sentinel',
    color: '#71c99a',
    left: 41,
    top: 10,
    size: 42,
    duration: 30,
    delay: -9,
    direction: 1,
    mobile: true,
  },
  {
    variant: 'scout',
    color: '#d6a85f',
    left: 65,
    top: 19,
    size: 31,
    duration: 35,
    delay: -22,
    direction: -1,
  },
  {
    variant: 'crawler',
    color: '#8d78c7',
    left: 87,
    top: 11,
    size: 48,
    duration: 30,
    delay: -12,
    direction: 1,
    mobile: true,
  },
  {
    variant: 'sentinel',
    color: '#638fc4',
    left: 13,
    top: 53,
    size: 39,
    duration: 33,
    delay: -21,
    direction: -1,
  },
  {
    variant: 'crawler',
    color: '#c96f78',
    left: 33,
    top: 68,
    size: 44,
    duration: 30,
    delay: -7,
    direction: 1,
    mobile: true,
  },
  {
    variant: 'scout',
    color: '#55c7d9',
    left: 54,
    top: 46,
    size: 29,
    duration: 38,
    delay: -28,
    direction: -1,
  },
  {
    variant: 'sentinel',
    color: '#71c99a',
    left: 76,
    top: 62,
    size: 41,
    duration: 30,
    delay: -14,
    direction: 1,
    mobile: true,
  },
  {
    variant: 'crawler',
    color: '#c76aa7',
    left: 92,
    top: 78,
    size: 35,
    duration: 36,
    delay: -25,
    direction: -1,
  },
  {
    variant: 'scout',
    color: '#d6a85f',
    left: 4,
    top: 88,
    size: 32,
    duration: 30,
    delay: -18,
    direction: 1,
  },
  {
    variant: 'sentinel',
    color: '#8d78c7',
    left: 49,
    top: 89,
    size: 45,
    duration: 34,
    delay: -11,
    direction: -1,
    mobile: true,
  },
];

export function InvaderField() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="invader-field"
    >
      {invaders.map((invader, index) => (
        <div
          className={
            invader.mobile
              ? 'invader-slot mobile-visible'
              : 'invader-slot desktop-only'
          }
          key={`${invader.variant}-${index}`}
        >
          <PixelInvader
            {...invader}
            reducedMotion={reducedMotion}
          />
        </div>
      ))}
    </div>
  );
}
