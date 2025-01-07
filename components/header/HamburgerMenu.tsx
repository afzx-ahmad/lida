import { MouseEventHandler } from "react"

type propsType = {
  className?: string,
  isOpen: boolean,
  toggleMenu: MouseEventHandler
}

export default function HamburgerMenu({ className, isOpen, toggleMenu }: propsType): JSX.Element {
  return (
    <div
      className={`cursor-pointer inline-block ${className}`}
      role="button"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <svg className={`icon ${isOpen && "open"}`} width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
        <rect className={`line top ${isOpen ? "fill-white" : "fill-blue-500"}`} x="0" y="0" width="30" height="4" rx="2"></rect>
        <rect className={`line middle ${isOpen ? "fill-white" : "fill-blue-500"}`} x="0" y="10" width="30" height="4" rx="2"></rect>
        <rect className={`line bottom ${isOpen ? "fill-white" : "fill-blue-500"}`} x="0" y="20" width="30" height="4" rx="2"></rect>
      </svg>
    </div >
  )
}
