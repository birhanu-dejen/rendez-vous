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
    <section className="bg-[#EAE1D6] py-6  px-6 md:py-25 md:px-6">
      <div className={`max-w-3xl mx-auto text-center ${kalam.className}`}>
        {/* Title */}
        <h2
          className={`mb-6 text-2xl font-bold md:text-4xl ${knewave.className}`}
        >
          Stay in Comfort
        </h2>

        {/* Main text */}
        <p
          className={`mb-8 text-justify text-lg md:text-3xl ${kalam.className}`}
        >
          Whether you&apos;re traveling alone, with family, or on business, our
          rooms provide the essentials for a restful night in Addis Ababa.
        </p>

        {/* Footer line */}
        <div className="flex flex-col items-center justify-center gap-6 text-lg sm:flex-row sm:justify-between">
          <p
            className={`text-lg md:text-3xl ${kalam.className} text-center sm:text-left`}
          >
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
            className={`cursor-pointer px-8 py-3 md:px-14 md:py-5 font-bold text-white text-xl md:text-4xl bg-black hover:underline rounded-full ${knewave.className}`}
          >
            Book Now
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
