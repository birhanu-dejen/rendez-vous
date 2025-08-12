"use client";
import { Kalam } from "next/font/google";
import { Knewave } from "next/font/google";
import { Link as ScrollLink } from "react-scroll";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });
const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});

export default function CallToAction() {
  return (
    <section className="bg-[#EAE1D6] py-25 px-6">
      <div className={`max-w-3xl mx-auto text-center ${kalam.className}`}>
        {/* Title */}
        <h2 className={`mb-6 text-4xl  font-bold ${knewave.className}`}>
          Stay in Comfort
        </h2>

        {/* Main text */}
        <p className={`mb-8 text-3xl ${kalam.className}`}>
          Whether you're traveling alone, with family, or on business, our rooms
          provide the essentials for a restful night in Addis Ababa.
        </p>
        {/* Footer line */}
        <div className="flex flex-col items-center justify-between text-lg sm:flex-row">
          <p className={`mb-4 text-3xl sm:mb-0 ${kalam.className}`}>
            Have you questions or want <br />
            to book your stay?
          </p>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            role="button"
            tabIndex={0}
            onClick={() => {}} // optional noop handler
            className={`cursor-pointer px-14 py-5  font-bold text-white text-4xl bg-black hover:underline rounded-full ${knewave.className}`}
          >
            Book Now
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
