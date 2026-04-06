import { type Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};
