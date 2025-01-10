"use client"

import Feature_Card from "./Feature_Card"
import { animationVariants } from "@/utils/animationVariants"
import { motion } from "motion/react"

export default function Features(): JSX.Element {
  return (
    <section id="features" className="py-28">
      <motion.p
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideRight_Features"
        whileInView="slideRight_Features"
        className="uppercase font-extrabold text-primary text-base lg:text-lg mb-5">
        features
      </motion.p>

      <motion.h1
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Features"
        whileInView="fadeIn_Features"
        className="text-3xl text-center md:text-left lg:text-5xl capitalize font-black mb-16">
        🤔 • What You Can Do?
      </motion.h1>

      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideUp_Features"
        whileInView="slideUp_Features"
        className="flex flex-col md:flex-row md:gap-x-16 lg:gap-x-52 max-sm:gap-y-16">
        <motion.div
          variants={animationVariants}
        >
          <Feature_Card
            icon="/images/Search-icon.png"
            title="search book"
            desc="Effortlessly find your next read with our powerful and intuitive book search."
          />
        </motion.div>

        <motion.div
          variants={animationVariants}
        >
          <Feature_Card
            icon="/images/Review-icon.png"
            title="review book"
            desc="Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly."
          />
        </motion.div>

        <motion.div
          variants={animationVariants}
        >
          <Feature_Card
            icon="/images/Wishlist-icon.png"
            title="wishlist book"
            desc="Curate your literary dreams–wishlist books  for future adventures and discoveries."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
