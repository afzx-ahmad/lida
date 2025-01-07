"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import animationVariants from "@/utils/animationVariants"

const MotionLink = motion(Link)
const MotionImage = motion(Image)

export default function Hero(): JSX.Element {
  return (
    <section className="flex flex-col lg:flex-row gap-x-1 w-full justify-between">
      <motion.div
        variants={animationVariants}
        initial={"initIn"}
        whileInView={"fadeIn_Hero"}
        className="py-12 w-full lg:w-1/2">
        <motion.h1 variants={animationVariants} className="text-blackBlue font-extrabold text-5xl lg:text-7xl leading-[60px] lg:leading-[89px] mb-7">
          Search & review your <span className="text-primary">fav book</span> effortlessly
        </motion.h1>

        <motion.p variants={animationVariants} className="text-gray text-base leading-7 w-full lg:w-4/5 mb-12">
          Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨
        </motion.p>

        <MotionLink variants={animationVariants} href="#" className="bg-primary px-14 py-4 text-white font-bold rounded-xl shadow-[0_30px_60px_0px_rgba(68,117,242,0.4)]">
          Start Now →
        </MotionLink>
      </motion.div>
      <MotionImage
        variants={animationVariants}
        initial={"initSlideUp_Hero_books"}
        whileInView={"slideUp_Hero_books"}
        className="hidden lg:block mt-14 h-[450px] w-[500px]"
        src="/images/books.png"
        alt="books"
        width={500}
        height={416}
      />
    </section>
  )
}
