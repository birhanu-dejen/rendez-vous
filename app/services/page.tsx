import Image from "next/image";
import { Kalam, Knewave } from "next/font/google";

export const metadata = {
  title: "Services",
  description: "Description specific to Services page.",
};

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });
const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});

export default function Services() {
  return (
    <div className="max-w-6xl px-4 py-12 mx-auto space-y-16 md:px-16">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1
          className={`${knewave.className} text-xl md:text-2xl font-bold text-black opacity-100 md:text-4xl`}
        >
          RENDEZ-VOUS Hotel
        </h1>
        <p
          className={`${kalam.className} max-w-3xl mx-auto text-lg md:text-[32px] leading-normal tracking-normal text-black opacity-100 text-justify`}
        >
          Our hotel is the perfect choice whether you are visiting Addis Ababa
          for business, leisure, or a special getaway. With years of experience
          providing excellent service to guests from across Ethiopia and beyond,
          RENDEZ-VOUS Hotel has earned a reputation for its welcoming
          atmosphere, comfortable rooms, and top-quality facilities...
        </p>
      </div>

      {/* Rooms Section */}
      <div className="grid items-center grid-cols-2 gap-8">
        <div>
          <h2
            className={`${knewave.className} mb-2 text-xl md:text-4xl font-bold text-black text-center`}
          >
            Rooms
          </h2>
          <p
            className={`${kalam.className} text-lg md:text-[32px] leading-normal tracking-normal text-black opacity-100 text-justify`}
          >
            Rooms at our hotel offer 26 individually-themed rooms, each with
            high quality, accommodations. Rooms include large baths, power
            showers and excellent room services. Choose affordable luxury and
            find a home away from home.
          </p>
        </div>
        <Image
          src="/images/services/bed1.jpg"
          alt="Room"
          width={500}
          height={300}
          className="rounded-lg h-110"
        />
      </div>

      {/* Restaurant Section */}
      <div className="grid flex-row-reverse items-center grid-cols-2 gap-8">
        <Image
          src="/images/services/food1.jpg"
          alt="Restaurant"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div>
          <h2
            className={`${knewave.className} mb-2 text-xl md:text-4xl font-bold text-black text-center`}
          >
            Restaurant
          </h2>
          <p
            className={`${kalam.className} text-lg md:text-[32px] leading-normal tracking-normal text-black opacity-100 text-justify`}
          >
            Sink in to our comfy sofas with a well-deserved drink and enjoy our
            Bar. Enjoy our superb wine list, premium beers and spirits from our
            menu, or arrange a bottle of champagne on ice for your arrival.
          </p>
        </div>
      </div>

      {/* Breakfast Section */}
      <div className="grid items-center grid-cols-2 gap-8">
        <div>
          <h2
            className={`${knewave.className} mb-2 text-xl md:text-4xl font-bold text-black text-center`}
          >
            Breakfast
          </h2>
          <p
            className={`${kalam.className} text-lg md:text-[32px] leading-normal tracking-normal text-black opacity-100 text-justify`}
          >
            Breakfast is typically cooked from 7:30 am until 9:00 am on a
            weekday morning and 8:30 am until 10:00 am on a weekend. While you
            wait for your breakfast, why not try our snack bar.
          </p>
        </div>
        <Image
          src="/images/services/food2.jpg"
          alt="Breakfast"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Final Section */}
      <div className="grid flex-row-reverse items-center grid-cols-2 gap-8">
        <Image
          src="/images/services/bdg1.jpg"
          alt="Hotel Building"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div>
          <h2
            className={`${knewave.className} mb-2 text-xl md:text-4xl font-bold text-black text-center`}
          >
            RENDEZ-VOUS Hotel
          </h2>
          <p
            className={`${kalam.className} text-lg md:text-[32px] leading-normal tracking-normal text-black opacity-100 text-justify`}
          >
            We have more than 10 years of experience in providing excellent
            services to customers, and our stunning boutique hotel has left a
            lasting impression on countless customers.
          </p>
        </div>
      </div>
    </div>
  );
}
