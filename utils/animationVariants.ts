import { stagger } from "motion/react"

const animationVariants = {
  aniamte_liMenuOut: {
    animationProps: {
      opacity: 0,
    },
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: stagger(0.2, { from: "last" })
    }
  }
}

export default animationVariants
