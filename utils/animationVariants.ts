import { delay } from "motion"
import { Variants } from "motion/react"

export const animationVariants: Variants = {
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
  initSlideLeft_Hero: {
    opacity: 0, x: "100%",
  },
  slideLeft_Hero: {
    opacity: 1, x: 0, transition: { default: { ease: "easeIn" }, opacity: { delay: 1, duration: 0.4 }, x: { delay: 1, duration: 0.6 } }
  },
  initSlideRight_Features: {
    opacity: 0, x: "-100%"
  },
  slideRight_Features: {
    opacity: 1, x: 0, transition: { ease: "easeIn", duration: 1.5 }
  },
  initFadeIn_Features: {
    opacity: 0
  },
  fadeIn_Features: {
    opacity: 1, transition: { duration: 0.6, ease: "easeIn", delay: 1 }
  },
  initSlideUp_Features: {
    opacity: 0, y: "100%"
  },
  slideUp_Features: {
    opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeIn", staggerChildren: 0.3, delayChildren: 1.2 }
  },
  initSlideRight_Services: {
    opacity: 0, x: "-100%"
  },
  slideRight_Services: {
    opacity: 1, x: 0, transition: { ease: "easeInOut", duration: 1.5 }
  },
  initFadeIn_Services: {
    opacity: 0
  },
  fadeIn_Services: {
    opacity: 1, transition: { duration: 0.6, ease: "easeIn", delay: 1.5 }
  },
  initSlideUp_Services: {
    opacity: 0, y: 120
  },
  slideUp_Services: {
    opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeIn", staggerChildren: 0.3, delayChildren: 1 }
  },
  initSlideRight_Reviews: {
    opacity: 0, x: "-100%"
  },
  slideRight_Reviews: {
    opacity: 1, x: 0, transition: { ease: "easeIn", duration: 1.5 }
  },
  initFadeIn_Reviews: {
    opacity: 0
  },
  fadeIn_Reviews: {
    opacity: 1, transition: { duration: 0.6, ease: "easeIn", delay: 1 }
  },
  initSlideRight_Location: {
    opacity: 0, x: "-100%"
  },
  slideRight_Location: {
    opacity: 1, x: 0, transition: { ease: "easeIn", duration: 1.5 }
  },
  initFadeIn_Location: {
    opacity: 0
  },
  fadeIn_Location: {
    opacity: 1, transition: { duration: 0.6, ease: "easeIn", delay: 1 }
  },
  initFadeIn_Footer: {
    opacity: 0
  },
  fadeIn_Footer: {
    opacity: 1, transition: { duration: 0.6, eturease: "easeIn" }
  },
}
