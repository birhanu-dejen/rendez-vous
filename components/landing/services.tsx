import Image from "next/image";
import { Knewave } from "next/font/google";
const knewave = Knewave({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-knewave",
});

export default function HotelServices() {
  return (
    <section className="px-4 bg-[#F5F5F5] py-22 md:px-16">
      <h2
        className={`${knewave.className} text-2xl italic font-bold text-center my-18 md:text-3xl`}
      >
        Hotel Services
      </h2>

      {/* First row - three images */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="relative">
          <Image
            src="/images/hero/Frame1.jpg"
            alt="frame1"
            width={500}
            height={300}
            className="object-cover w-full rounded-lg h-120"
          />
          <p className="absolute px-2 py-1 text-sm italic text-black bg-white rounded bottom-2 left-2 bg-opacity-60">
            title.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/hero/Frame2.jpg"
            alt="frame2"
            width={500}
            height={300}
            className="object-cover w-full rounded-lg h-120"
          />
          <p className="absolute px-2 py-1 text-sm italic text-black bg-white rounded bottom-2 left-2 bg-opacity-60">
            title.
          </p>
        </div>

        <div className="relative">
          <Image
            src="/images/hero/Frame3.jpg"
            alt="frame3"
            width={500}
            height={300}
            className="object-cover w-full rounded-lg h-120"
          />
          <p className="absolute px-2 py-1 text-sm italic text-black bg-white rounded bottom-2 left-2 bg-opacity-60">
            title.
          </p>
        </div>
      </div>

      {/* Large featured image */}
      <div className="my-25">
        {" "}
        {/* my-6 = margin-top & margin-bottom */}
        <Image
          src="/images/hero/Frame4.jpg"
          alt="frame4"
          width={1200}
          height={450}
          className="object-cover w-full rounded-lg h-[450px]"
        />
        <p className="mt-2 text-sm italic">Feature title.</p>
      </div>

      {/* Last two images side by side */}
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/hero/Frame5.jpg"
            alt="frame5"
            width={1068} // customized width
            height={600} // customized height
            className="object-cover w-full h-[600px] rounded-lg"
          />
          <p className="mt-2 text-sm italic">Feature title.</p>
        </div>

        <div className="relative">
          <Image
            src="/images/hero/Frame6.jpg"
            alt="frame6"
            width={600}
            height={350}
            className="object-cover w-full h-[600px] rounded-lg"
          />
          <p className="mt-2 text-sm italic">Feature title.</p>
        </div>
      </div>
    </section>
  );
}
