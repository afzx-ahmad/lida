import Image from "next/image"
import { motion } from "motion/react"
import { animationVariants } from "@/utils/animationVariants"

const MotionImage = motion(Image)

export default function Services(): JSX.Element {
  return (
    <section id="services" className="py-16 lg:py-28">
      <motion.p
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideRight_Services"
        whileInView="slideRight_Services"
        className="uppercase font-extrabold text-primary text-base lg:text-lg mb-5">
        services
      </motion.p>

      <motion.h1
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Services"
        whileInView="fadeIn_Services"
        className="text-3xl text-center md:text-left lg:text-5xl capitalize font-black mb-16">
        🚀 • The Services for You
      </motion.h1>

      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideUp_Services"
        whileInView="slideUp_Services"
        className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-28">
        <MotionImage
          variants={animationVariants}
          className="size-full shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]"
          src="/images/Services-image.png"
          alt="Services Image"
          width={600}
          height={399}
        />

        <motion.div
          variants={animationVariants}
          className="lg:pl-32">
          <h3 className="text-4xl font-medium mb-8">
            <span className="text-primary">Rent</span> your favorite book fairly easy on <span className="text-primary">Lida</span>!
          </h3>

          <p className="text-base mb-6 leading-8">
            Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent that’s simple to use, Lidia lets you spend less time managing your work and more time actually doing it!
          </p>

          <p className="text-base leading-8">
            Effortless rentals, personalized shelves—Lidia transforms book management, enhancing your reading experience~
          </p>
        </motion.div>

        <motion.div
          variants={animationVariants}
          className="lg:pr-32 max-md:order-last">
          <h3 className="text-4xl font-medium mb-8">
            Quick Book Rentals: <span className="text-primary">Dive</span> into <span className="text-primary">Reading</span> Instantly
          </h3>

          <p className="text-base mb-6 leading-8">
            Discover instant literary delight. Access a vast library,
            borrow your favorite reads, and dive into captivating
            stories within minutes. Reading made quick and easy,
            just a click away!
          </p>

          <p className="text-base leading-8">
            Unlock a world of stories effortlessly.
            Browse genres, choose, rent in minutes.
            Seamlessly manage your reading adventures
            with our intuitive platform~
          </p>
        </motion.div>

        <MotionImage
          variants={animationVariants}
          className="size-full shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]"
          src="/images/Services-image1.png"
          alt="Services Image"
          width={600}
          height={399}
        />
      </motion.div>
    </section>
  )
}
