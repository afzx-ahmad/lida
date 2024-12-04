import Image from "next/image"

export default function Services(): JSX.Element {
  return (
    <section className="py-28">
      <p className="uppercase font-extrabold text-primary text-lg mb-5">
        services
      </p>

      <h1 className="text-5xl capitalize font-black mb-28">
        🚀 • The Services for You
      </h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-y-28">
        <Image
          className="size-full shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]"
          src="/images/Services-image.png"
          alt="Services Image"
          width={600}
          height={399}
        />

        <div className="pl-32">
          <h3 className="text-4xl font-medium mb-8">
            <span className="text-primary">Rent</span> your favorite book fairly easy on <span className="text-primary">Lida</span>!
          </h3>

          <p className="text-base mb-6 leading-8">
            Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent that’s simple to use, Lidia lets you spend less time managing your work and more time actually doing it!
          </p>

          <p className="text-base leading-8">
            Effortless rentals, personalized shelves—Lidia transforms book management, enhancing your reading experience~
          </p>
        </div>

        <div className="pr-32">
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
        </div>

        <Image
          className="size-full shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]"
          src="/images/Services-image1.png"
          alt="Services Image"
          width={600}
          height={399}
        />
      </div>
    </section>
  )
}
