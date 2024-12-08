"use client"

import { useEffect } from "react"

export default function Location(): JSX.Element {
  useEffect(() => {
    const initMap = async () => {
      // Wait until Google Maps is available
      if (!(window as any).google || !(window as any).google.maps) {
        console.error("Google Maps library not loaded");
        return;
      }

      // The location of Uluru
      const position = { lat: -7.319829302944081, lng: 112.7587219582272 };

      // Request needed libraries
      // @ts-ignore
      const { Map } = (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;

      // The map, centered at Uluru
      const map = new Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 7,
          center: position,
          mapId: "DEMO_MAP_ID",
        }
      );

      // The marker, positioned at Uluru
      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
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
    <section className="py-28">
      <p className="uppercase font-extrabold text-primary text-lg mb-5">
        location
      </p>

      <h1 className="text-5xl capitalize font-black mb-28">
        🗺 • Our Library Location
      </h1>

      <div
        className="h-[500px] w-full"
        id="map"
      >
      </div>
    </section>
  )
}
