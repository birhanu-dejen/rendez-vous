import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });
import { Knewave } from "next/font/google";
const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});
const Description = () => {
  return (
    <section className="bg-[#2E3E50] text-white py-3 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl mx-auto text-center md:max-w-5xl ${kalam.className}`}
      >
        <h2
          className={`${knewave.className} mb-4 text-2xl md:text-4xl font-bold text-white text-center `}
        >
          RENDEZ-VOUS Hotel
        </h2>
        <p className="mb-6 text-base text-justify text-gray-300 md:text-3xl md:word-spacing">
          RENDEZ-VOUS Hote lin Addis Ababa Your Comfortable Stay in the Capital
          City RENDEZ-VOUS Hotel is one of the top hospitality choices in Addis
          Ababa, offering guests a clean, quiet, and comfortable experience at
          an excellent value. Located near Ethio Cinema, our hotel is perfect
          for both business and leisure travelers looking for a convenient stay
          with easy access to the city’s cultural landmarks, shopping centers,
          and major transport routes. Our hotel blends modern amenities with the
          warmth of Ethiopian hospitality. Guests enjoy a peaceful atmosphere,
          well-kept rooms, and personalized service — all within a short
          distance of Addis Ababa’s vibrant attractions and bustling business
          districts.
        </p>
      </div>
    </section>
  );
};

export default Description;
