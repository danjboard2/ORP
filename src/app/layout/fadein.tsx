import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInOptions {
  threshold?: number;
}

export const useFadeIn = ({ threshold = 0.75 }: FadeInOptions = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const fadeClass = inView ? 'fade-in' : '';

  return { ref, fadeClass };
};