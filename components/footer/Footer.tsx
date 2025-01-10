import Image from "next/image"
import { animationVariants } from "@/utils/animationVariants"
import { motion } from "motion/react"

export default function Footer() {
  return (
    <motion.section
      variants={animationVariants}
      viewport={{ once: true }}
      initial="initFadeIn_Footer"
      whileInView="fadeIn_Footer"
      className="pt-10">
      <div
        className="flex flex-col md:flex-row gap-x-0 md:gap-x-20 max-sm:gap-y-10 justify-center mb-20"
      >
        <div
          className="flex flex-col items-center gap-y-4 justify-between"
        >
          <h3
            className="font-bold"
          >
            Managed By
          </h3>

          <Image
            alt="Logo"
            className="w-1/3 md:w-full"
            src="/images/Logo.png"
            width={148}
            height={83}
          />
        </div>

        <div
          className="flex flex-col items-center gap-y-4 justify-between"
        >
          <h3
            className="font-bold"
          >
            Social Media
          </h3>

          <div
            className="flex gap-x-5"
          >
            <a href="#">
              <Image
                className="w-full"
                alt="Twitter"
                src="/images/Twitter.png"
                width={48}
                height={40}
              />
            </a>

            <a href="#">
              <Image
                className="w-full"
                alt="Instagram"
                src="/images/Instagram.png"
                width={48}
                height={40}
              />
            </a>

            <a href="#">
              <Image
                className="w-full"
                alt="Facebook"
                src="/images/Facebook.png"
                width={48}
                height={40}
              />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-between gap-y-4"
        >
          <h3
            className="font-bold"
          >
            Slogan
          </h3>

          <p>
            #RentFavBooks
          </p>
        </div>
      </div>
      <div
        className="bg-primary text-white py-10 flex justify-center items-center"
      >
        <p>
          © 2024 Lida. All rights reserved.
        </p>
      </div>
    </motion.section>
  )
}

