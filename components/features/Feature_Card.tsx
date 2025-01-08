import Image from "next/image"

type propsType = Record<"icon" | "title" | "desc", string>

export default function Feature_Card({ icon, title, desc }: propsType): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt="Search Icon"
        className="w-[100px] mb-5"
        src={icon}
        width={202}
        height={202}
      />

      <h3 className="capitalize font-extrabold text-xl lg:text-2xl mt-[-50px] mb-3 lg:mb-6">
        {title}
      </h3>

      <p className="leading-6 lg:leading-8 text-center">
        {desc}
      </p>
    </div>
  );
}
