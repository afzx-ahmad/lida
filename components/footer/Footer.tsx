import Image from "next/image"

export default function Footer() {
  return (
    <section className="pt-10">
      <div
        className="flex gap-x-20 justify-center mb-20"
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
            className="flex gap-x-10"
          >
            <a href="#">
              <Image
                alt="Twitter"
                src="/images/Twitter.png"
                width={48}
                height={40}
              />
            </a>

            <a href="#">
              <Image
                alt="Instagram"
                src="/images/Instagram.png"
                width={48}
                height={40}
              />
            </a>

            <a href="#">
              <Image
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
            Managed By
          </h3>

          <p>
            #RentFavBooks
          </p>
        </div>
      </div>

      <div
        className="bg-primary text-white h-32 flex justify-center items-center"
      >
        <p>
          © 2024 Lidia. All rights reserved.
        </p>
      </div>
    </section>
  )
}

