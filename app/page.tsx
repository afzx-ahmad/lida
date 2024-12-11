import Image from "next/image"

import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import Features from "@/components/features/Features"
import Services from "@/components/services/Services"
import Reviews from "@/components/reviews/Reviews"
import Location from "@/components/location/Location"
import Footer from "@/components/footer/Footer"

export default function LandingPage() {
  return (
    <div className="px-[120px] pt-[60px] font-primary">
      <Image
        className="absolute top-0 right-0 -z-10"
        src="/images/bg-blue.png"
        alt="bg"
        width={720}
        height={813}
      />
      <Header />
      <Hero />
      <Features />
      <Services />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}
