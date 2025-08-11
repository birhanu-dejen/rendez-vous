import AboutUs from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Description from "@/components/landing/description";
import Services from "@/components/landing/services";
import CallToAction from "@/components/landing/calltoaction";
import Map from "@/components/landing/map";
import { metadataTemplate } from "@/lib/metadata";

export const metadata = metadataTemplate(
  "Welcome",
  "Experience premium hotel stays and authentic Ethiopian hospitality with Rendez-Vous in Addis Ababa."
);
function Home() {
  return (
    <>
      <Hero />
      <Description />

      <Services />
      <CallToAction />
      <Map />
      <AboutUs />
    </>
  );
}

export default Home;
