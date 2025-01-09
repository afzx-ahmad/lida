import Image from "next/image"

type propsType = Record<"image" | "review" | "name" | "status", string>

export default function Reviews_Card({ image, review, name, status }: propsType): JSX.Element {
  return (
    <div className="py-5 lg:py-14 px-14 lg:px-20 flex flex-col items-center justify-center min-h-[460px] md:max-w-[40vw] border-slate-200 border-[1px] shadow-[0_40px_40px_0_rgba(0,0,0,0.25)]">
      <Image
        className="rounded-full mb-7 w-28 md:w-32 lg:w-full"
        src={image}
        alt="reviewer"
        height={140}
        width={140}
      />

      <p className="text-sm lg:text-base leading-5 lg:leading-7 mb-6 lg:mb-10 text-center">
        {review}
      </p>

      <h4 className="text-base text-blue-400 font-bold capitalize mb-1 lg:mb-3">
        {name}
      </h4>

      <h3 className="capitalize text-bold text-sm lg:text-base">
        {status}
      </h3>
    </div>
  )
}
