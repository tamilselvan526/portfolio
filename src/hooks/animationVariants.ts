// Shared animation variants matching the Majd Framer reference timing
import type { Variants } from 'motion/react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Standard fade+slide-up for section content reveals */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/** Clip-reveal: text slides up from overflow:hidden container */
export const clipRevealVariants: Variants = {
  hidden: { y: '105%' },
  visible: (delay: number = 0) => ({
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/** Scale+fade for image cards */
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/** Container stagger parent */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};
