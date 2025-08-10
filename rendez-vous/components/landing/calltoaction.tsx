export default function CallToAction() {
  return (
    <section className="bg-[#EAE1D6] py-45 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="mb-4 text-2xl italic font-bold">Stay in Comfort</h2>

        {/* Main text */}
        <p className="mb-8 italic leading-relaxed">
          Whether you're traveling alone, with family, or on business, our rooms
          provide the essentials for a restful night in Addis Ababa.
        </p>

        {/* Footer line */}
        <div className="flex flex-col items-center justify-between text-lg italic sm:flex-row">
          <p className="mb-4 sm:mb-0">
            Have questions or want to book your stay?
          </p>
          <button className="italic font-bold hover:underline">Book Now</button>
        </div>
      </div>
    </section>
  );
}
