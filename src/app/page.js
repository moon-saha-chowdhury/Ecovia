import AboutSection from "@/components/Homepage/AboutSection";
import HeroSection from "@/components/Homepage/HeroSection";
import SessionDetails from "@/components/Homepage/SessionDetails";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SessionDetails />
    </>
  );
}
