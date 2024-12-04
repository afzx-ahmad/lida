import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header
      className="flex w-full items-center"
    >
      <Image
        className="h-[28px] w-[79px] mr-[125px]"
        src="/images/Logo.png"
        alt="Lida Logo"
        height={28}
        width={79}
      />

      <nav>
        <ul
          className="capitalize flex items-center gap-x-10 text-sm h-full"
        >
          <li className="text-activeLink">
            home
          </li>
          <li>
            feature
          </li>
          <li>
            services
          </li>
          <li>
            review
          </li>
          <li>
            location
          </li>
        </ul>
      </nav>

      <Link
        className="ml-auto capitalize font-bold bg-white px-[45px] py-[10px] rounded-lg"
        href="/login"
      >
        login
      </Link>
    </header>
  )
}
