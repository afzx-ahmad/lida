"use client"

import Image from "next/image"
import Link from "next/link"
import useMediaQuery from "@/hooks/useMediaQuery"
import HamburgerMenu from "./HamburgerMenu"
import { useState, useEffect } from "react"
import { motion, useAnimate, stagger } from "motion/react"
import animationVariants from "@/utils/animationVariants"

export default function Header(): JSX.Element {
  const isShowMobileMenu = useMediaQuery("(max-width: 1023px)")
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scope, animate] = useAnimate()

  function toggleMenu() {
    if (isAnimating) return;

    setIsOpen(!isOpen)
  }

  async function handleMenuAnimation() {
    setIsAnimating(true);
    isOpen ?
      await animate([
        [scope.current, { x: "-120vw" }, { ease: "linear", duration: 0.3 }],
        ["li", { opacity: 1 }, { ease: "easeIn", duration: 0.2, delay: stagger(0.2, { startDelay: 1 }) }]
      ]) :
      await animate([
        ["li", { opacity: 0 }, { duration: 0.2, ease: "easeInOut", delay: stagger(0.2, { from: "last" }) }],
        [scope.current, { x: 0 }, { ease: "linear", duration: 0.3 }]
      ])

    setIsAnimating(false)
  }

  useEffect(() => {
    if (isShowMobileMenu) {
      handleMenuAnimation()
    }
  }, [isOpen, isShowMobileMenu]);

  return (
    <motion.header
      variants={animationVariants}
      initial="initSlideDown_Header"
      animate="slideDown_Header"
      className="flex w-full h-max items-center"
    >
      <Image
        className="h-[28px] w-[79px] mr-[125px]"
        src="/images/Logo.png"
        alt="Lida Logo"
        height={28}
        width={79}
      />

      <nav
        ref={scope}
        className={`${isShowMobileMenu ? "right-[-120vw] absolute h-screen w-screen bg-primary top-0 px-[40px] transition-all duration-500 ease-in" : "block h-max"}`}
      >
        <ul
          className="capitalize flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10 h-dvh lg:h-max justify-center lg:justify-start items-end lg:items-center text-3xl lg:text-sm font-bold text-zinc-300 lg:text-zinc-500"
        >
          <li className="text-white opacity-0 lg:opacity-100 lg:text-activeLink underline underline-offset-8">
            <a href="#">
              home
            </a>
          </li>
          <li>
            <a href="#">
              feature
            </a>
          </li>
          <li>
            <a href="#">
              services
            </a>
          </li>
          <li>
            <a href="#">
              review
            </a>
          </li>
          <li>
            <a href="#">
              location
            </a>
          </li>
        </ul>
      </nav>

      {
        isShowMobileMenu ?
          <HamburgerMenu
            className="ml-auto z-10"
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
          :
          <Link
            className="lg:block ml-auto capitalize font-bold bg-white px-[45px] py-[10px] rounded-lg"
            href="/login"
          >
            login
          </Link>
      }
    </motion.header>
  )
}
