import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });

export default function CallToAction() {
  return (
    <section className="bg-[#EAE1D6] py-25 px-6">
      <div className={`max-w-3xl mx-auto text-center ${kalam.className}`}>
        {/* Title */}
        <h2 className="mb-4 text-4xl italic font-bold">Stay in Comfort</h2>

        {/* Main text */}
        <p className="mb-8 text-3xl italic leading-relaxed">
          Whether you're traveling alone, with family, or on business, our rooms
          provide the essentials for a restful night in Addis Ababa.
        </p>

        {/* Footer line */}
        <div className="flex flex-col items-center justify-between text-lg italic sm:flex-row">
          <p className="mb-4 sm:mb-0">
            Have questions or want <br />
            to book your stay?
          </p>
          <button className="px-6 py-2 italic font-bold text-white bg-black hover:underline rounded-3xl">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
