import Image from "next/image"

type propsType = Record<"icon" | "title", "desc", string> 

export default function Feature_Card({icon, title, desc}: propsType): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt="Search Icon"
        src={icon}
        width={202}
        height={202}
      />

      <h3 className="capitalize font-extrabold text-2xl mt-[-50px] mb-6">
        {title}
      </h3>

      <p className="leading-8 text-center">
        {desc}
      </p>
    </div>
  );
}
