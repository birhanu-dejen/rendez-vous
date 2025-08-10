import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/images/hero.jpg"
        alt="Hotel Room"
        layout="fill"
        objectFit="cover"
        priority
      />
    </section>
  );
}
