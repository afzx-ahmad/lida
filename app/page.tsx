"use client"

import Image from "next/image"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import Features from "@/components/features/Features"
import Services from "@/components/services/Services"
import Reviews from "@/components/reviews/Reviews"
import Location from "@/components/location/Location"
import Footer from "@/components/footer/Footer"
import { motion } from "motion/react"
import { animationVariants } from "@/utils/animationVariants"
import { useEffect, useState, useRef } from "react"

const MotionImage = motion(Image)

export default function LandingPage() {
  const [showScrollUp, setShowScrollUp] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null) // Reference for Hero section

  // Track scroll position and show button after scrolling past the Hero section
  function handleScroll() {
    const heroHeight = heroRef.current?.offsetHeight || 0
    if (window.scrollY > heroHeight) {
      setShowScrollUp(true)
    } else {
      setShowScrollUp(false)
    }
  }

  // Scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="px-[40px] pt-[20px] 2xl:px-[120px] 2xl:pt-[60px] font-primary relative overflow-x-hidden max-w-[1440px] xl:mx-auto">
        <MotionImage
          variants={animationVariants}
          initial="initSlideLeft_Hero"
          animate="slideLeft_Hero"
          className="hidden lg:block absolute top-0 right-[-150px] xl:right-0 -z-10"
          src="/images/bg-blue.png"
          alt="bg"
          width={720}
          height={813}
        />
        <Header />

        <div ref={heroRef}>
          <Hero />
        </div>

        <Features />
        <Services />
        <Reviews />
        <Location />
        <Footer />
      </div>

      <div className="bg-primary text-white py-10 flex justify-center items-center">
        <p>© 2024 Lida | build by afzxstuff.</p>
      </div>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <div
          id="scrollUp"
          className="shadow-[0_10px_20px_0_rgba(0,0,0,0.25)] fixed bottom-12 right-12 text-3xl text-white flex justify-center items-center bg-primary rounded-full w-14 h-14 cursor-pointer z-10"
          onClick={scrollToTop}
        >
          ^
        </div>
      )}
    </>
  )
}

