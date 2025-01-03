import { useState, useEffect } from "react"

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      const mediaQueryList = window.matchMedia(query)

      setMatches(mediaQueryList.matches);

      function listener(e: MediaQueryListEvent) {
        setMatches(e.matches)
      }

      mediaQueryList.addEventListener("change", listener)

      return () => {
        mediaQueryList.removeEventListener("change", listener)
      }
    }
  }, [query])

  return matches
}
