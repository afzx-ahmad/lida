import { Variants } from "motion/react"

const animationVariants: Variants = {
  initIn: {
    opacity: 0
  },
  fadeIn_Hero: {
    opacity: 1, transition: { duration: 0.6, ease: "easeIn", staggerChildren: 0.6, delayChildren: 1 }
  },
  initSlideUp_Hero_books: {
    opacity: 0, y: 120
  },
  slideUp_Hero_books: {
    opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.6, ease: "easeIn" }
  },
  initSlideDown_Header: {
    opacity: 0, y: "-150%",
  },
  slideDown_Header: {
    opacity: 1, y: 0, transition: { default: { ease: "easeIn" }, opacity: { duration: 0.4 }, y: { duration: 0.6 } }
  },
  initSlideLeft: {
    opacity: 0, x: "100%",
  },
  slideLeft_Hero: {
    opacity: 1, x: 0, transition: { default: { ease: "easeIn" }, opacity: { delay: 1, duration: 0.4 }, x: { delay: 1, duration: 0.6 } }
  }
}

export default animationVariants
