import Reviews_Card from "./Reviews_Card"
import { motion } from "motion/react"
import { animationVariants } from "@/utils/animationVariants"

export default function Reviews(): JSX.Element {
  return (
    <section id="reviews" className="py-20">
      <motion.p
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideRight_Reviews"
        whileInView="slideRight_Reviews"
        className="uppercase font-extrabold text-primary text-base lg:text-lg mb-5">
        reviews
      </motion.p>

      <motion.h1
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Reviews"
        whileInView="fadeIn_Reviews"
        className="text-3xl text-center md:text-left lg:text-5xl capitalize font-black mb-16">
        💬 • Reviews of Others
      </motion.h1>

      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Reviews"
        whileInView="fadeIn_Reviews"
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center md:gap-x-16 lg:gap-x-20 gap-y-16 md:gap-y-20 lg:gap-y-0">
        <Reviews_Card
          image="/images/user-review (1).png"
          review="Engaging plot, vivid characters; a captivating read that lingers in your thoughts."
          name="Amelia Anderson"
          status="college student"
        />
        <Reviews_Card
          image="/images/user-review (2).png"
          review="Thought-provoking narrative and rich prose. A must-read for any avid book lover!"
          name="Ruskhan Eddith"
          status="Architect"
        />
        <Reviews_Card
          image="/images/user-review (3).png"
          review="Immersive storytelling! An enriching literary experience worth savoring and sharing."
          name="Emma Claudia"
          status="dentish"
        />
      </motion.div>
    </section>
  )
}
