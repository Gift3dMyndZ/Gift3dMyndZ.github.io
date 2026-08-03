import { useEffect, useState } from 'react';

const REDUCED_MOTION_QUERY =
  '(prefers-reduced-motion: reduce)';

function getInitialPreference(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia(
    REDUCED_MOTION_QUERY,
  ).matches;
}

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] =
    useState(getInitialPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      REDUCED_MOTION_QUERY,
    );

    const handleChange = (
      event: MediaQueryListEvent,
    ) => {
      setReducedMotion(event.matches);
    };

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleChange,
      );
    };
  }, []);

  return reducedMotion;
}
