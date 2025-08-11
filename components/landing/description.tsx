import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });

const Description = () => {
  return (
    <section className="bg-[#2E3E50] text-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl mx-auto text-center md:max-w-5xl ${kalam.className}`}
      >
        <h2
          className={`${kalam.className} mb-2 text-3xl font-bold text-white text-center `}
        >
          RENDEZ-VOUS Hotel
        </h2>
        <p className="mb-6 text-3xl italic leading-tight md:text-justify">
          RENDEZ-VOUS Hotel in Addis Ababa offers a comfortable stay in the
          capital. Located On Ethio China St., in front of Wengelawit Building ,
          it’s ideal for business and leisure travelers. Enjoy clean, quiet
          rooms and excellent value close to cultural landmarks. We blend modern
          amenities with warm Ethiopian hospitality. Our guests benefit from a
          peaceful atmosphere and personalized service. Experience the vibrant
          attractions and business districts of Addis Ababa.
        </p>
      </div>
    </section>
  );
};

export default Description;
