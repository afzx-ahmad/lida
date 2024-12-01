import Feature_Card from "./Feature_Card";

export default function Features() {
  return (
    <section className="py-28">
      <p className="uppercase font-extrabold text-primary text-lg mb-5">
        features
      </p>

      <h1 className="text-5xl capitalize font-black mb-16">
        🤔 • What You Can Do?
      </h1>

      <div className="flex gap-x-52">
        <Feature_Card
          icon="/images/Search-icon.png"
          title="search book"
          desc="Effortlessly find your next read with our powerful and intuitive book search."
        />

        <Feature_Card
          icon="/images/Review-icon.png"
          title="review book"
          desc="Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly."
        />

        <Feature_Card
          icon="/images/Wishlist-icon.png"
          title="wishlist book"
          desc="Curate your literary dreams–wishlist books  for future adventures and discoveries."
        />
      </div>
    </section>
  );
}
