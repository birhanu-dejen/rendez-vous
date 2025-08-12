import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/images/hero/Hero.jpg"
        alt="Hotel Room"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </section>
  );
}
