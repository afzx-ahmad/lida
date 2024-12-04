import Reviews_Card from "./Reviews_Card"

export default function Reviews(): JSX.Element {
  return (
    <section className="py-20">
      <p className="uppercase font-extrabold text-primary text-lg mb-5">
        reviews
      </p>

      <h1 className="text-5xl capitalize font-black mb-16">
        💬 • Reviews of Others
      </h1>

      <div className="flex gap-12 justify-center items-center">
        <Reviews_Card
          image="/images/user-review (1).png"
          review="Engaging plot, vivid characters; a captivating read that lingers in your thoughts."
          name="Amelia Anderson"
          status="college student"
        />
        <Reviews_Card
          image="/images/user-review (2).png"
          review="Thought-provoking narrative and rich prose. A must-read for any avid book lover!"
          name="Ruskhan Eddith"
          status="Architect"
        />
        <Reviews_Card
          image="/images/user-review (3).png"
          review="Immersive storytelling! An enriching literary experience worth savoring and sharing."
          name="Emma Claudia"
          status="dentish"
        />
      </div>
    </section>
  )
}
