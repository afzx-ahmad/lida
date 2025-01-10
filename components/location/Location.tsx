"use client"

import { useEffect } from "react"
import { motion } from "motion/react"
import { animationVariants } from "@/utils/animationVariants"

interface GoogleWindow extends Window {
  google?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    maps?: any;
  };
}

declare let window: GoogleWindow;

export default function Location(): JSX.Element {
  useEffect(() => {
    const initMap = async () => {
      // Wait until Google Maps is available
      if (!window.google || !window.google.maps) {
        console.error("Google Maps library not loaded");
        return;
      }

      // The location of Uluru
      const position = { lat: -7.319829302944081, lng: 112.7587219582272 };

      // Request needed libraries
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;

      // The map, centered at location 
      const map = new Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 10,
          center: position,
          mapId: "DEMO_MAP_ID",
        }
      );

      // The marker, positioned at Uluru
      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Lida Location",
      });
    };

    // Dynamically load the Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyATbjd87-9uA1afZJgdMzgwFvx9eevGT6Q&v=beta&libraries=maps";
      script.defer = true;
      script.onload = () => initMap(); // Call initMap once the script loads
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup script on component unmount
      };
    };

    const cleanup = loadGoogleMapsScript();

    // Cleanup the script when the component unmounts
    return cleanup;
  }, [])

  return (
    <section id="location" className="py-28">
      <motion.p
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initSlideRight_Location"
        whileInView="slideRight_Location"
        className="uppercase font-extrabold text-primary text-base lg:text-lg mb-5">
        location
      </motion.p>

      <motion.h1
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Location"
        whileInView="fadeIn_Location"
        className="text-3xl text-center md:text-left lg:text-5xl capitalize font-black mb-16">
        🗺 • Our Library Location
      </motion.h1>

      <motion.div
        variants={animationVariants}
        viewport={{ once: true }}
        initial="initFadeIn_Location"
        whileInView="fadeIn_Location"
        className="h-[300px] md:h-[500px] w-full shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]"
        id="map"
      >
      </motion.div>
    </section>
  )
}
