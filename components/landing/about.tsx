import { Kalam } from "next/font/google";
import { Knewave } from "next/font/google";

const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});
const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });

export default function AboutUs() {
  return (
    <section className="bg-[#1E5631] text-[#FFFBFB] py-8 px-6 leading-relaxed md:px-16 md:py-10">
      <div
        className={`max-w-4xl mx-auto text-center ${kalam.className} text-[24px] md:text-[32px]`}
      >
        <h2
          className={`${knewave.className} mb-4 text-3xl font-bold md:text-4xl`}
        >
          About Us
        </h2>

        <p
          className={`mb-4 md:mb-6 text-base md:text-3xl text-justify ${kalam.className}`}
        >
          RENDE2-VOUS Hotel is one of Addis Ababa’s most welcoming hospitality
          destinations, offering guests a clean, quiet, and comfortable
          experience at an excellent value. Conveniently located near Ethio
          Cinema, our hotel is perfect for both business and leisure travelers
          seeking easy access to shopping centers, cultural attractions, and
          major transport routes.
        </p>

        <p
          className={`text-base md:text-3xl text-justify text-gray-200 ${kalam.className}`}
        >
          At RENDE2-VOUS Hotel, we combine modern amenities with the warmth of
          Ethiopian hospitality. Guests enjoy a peaceful atmosphere, well-kept
          rooms, and personalized service — all within minutes of the city’s
          vibrant entertainment, dining, and business hubs. Whether you’re
          visiting for work, family, or relaxation, we are here to make your
          stay memorable.
        </p>
      </div>
    </section>
  );
}
