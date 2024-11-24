import Image from "next/image"
import Link from "next/link"

export default function Hero(): JSX.Element {
    return (
        <section className="flex gap-x-1 w-full justify-between">
            <div className="py-12 w-1/2">
                <h1 className="text-blackBlue font-extrabold text-7xl leading-[89px] mb-7">
                    Search & review your <span className="text-primary">fav book</span> effortlessly
                </h1>

                <p className="text-gray text-base leading-7 w-4/5 mb-12">
                    Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨
                </p>

                <Link href="#" className="bg-primary px-14 py-4 text-white font-bold rounded-xl shadow-[0_30px_60px_0px_rgba(68,117,242,0.4)]">
                    Start Now →
                </Link>
            </div>
            <Image
                className="mt-14 h-[450px] w-[500px]"
                src="/images/books.png"
                alt="books"
                width={500}
                height={416}
            />
        </section>
    )
}