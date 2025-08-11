import Image from "next/image";

export const metadata = {
  title: "Gallery",
  description:
    "Browse the stunning photo gallery showcasing Rendez-Vous Hotel and its exceptional services in Addis Ababa, Ethiopia.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-35 ">
      {/* First row: two images side by side (50% each) */}
      <div className="flex gap-6">
        <div className="flex-1">
          <Image
            src="/images/gallery/gallery1.jpg"
            alt="Gallery image 1"
            width={600}
            height={400}
            className="object-cover w-full rounded-lg h-120"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/gallery/gallery2.jpg"
            alt="Gallery image 2"
            width={600}
            height={400}
            className="object-cover w-full rounded-lg h-120"
          />
        </div>
      </div>

      {/* Second row: full width image */}
      <div className="my-16">
        <Image
          src="/images/gallery/gallery3.jpg"
          alt="Gallery image 3"
          width={1200}
          height={400}
          className="object-cover w-full rounded-lg h-100"
        />
      </div>

      {/* Third row: three images side by side */}
      <div className="flex gap-14">
        <div className="flex-1">
          <Image
            src="/images/gallery/gallery4.jpg"
            alt="Gallery image 4"
            width={400}
            height={300}
            className="object-cover w-full rounded-lg h-110"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/gallery/gallery5.jpg"
            alt="Gallery image 5"
            width={400}
            height={300}
            className="object-cover w-full rounded-lg h-110"
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/gallery/gallery6.jpg"
            alt="Gallery image 6"
            width={400}
            height={300}
            className="object-cover w-full rounded-lg h-110"
          />
        </div>
      </div>

      {/* Fourth row: single image 1/3 width on left, empty right */}
      <div className="flex">
        <div className="w-1/3">
          <Image
            src="/images/gallery/gallery7.jpg"
            alt="Gallery image 7"
            width={400}
            height={300}
            className="object-cover w-full rounded-lg h-110"
          />
        </div>
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
