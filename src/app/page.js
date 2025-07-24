import HeroSectionTab from "@/components/Homepage/HeroSectionTab";
import Head from "next/head";

//  Metadata function

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ecovia | Empowering industries with sustainable manufacturing
        </title>
        <meta
          name="description"
          content="Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future."
        />

        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecovia-five.vercel.app/" />
        <meta
          property="og:title"
          content="Ecovia | Empowering industries with sustainable manufacturing"
        />
        <meta
          property="og:description"
          content="Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future."
        />
        <meta
          property="og:image"
          content="https://ecovia-five.vercel.app/assets/Ecovia.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ecovia | Empowering industries with sustainable manufacturing"
        />
        <meta
          name="twitter:description"
          content="Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future."
        />
        <meta
          name="twitter:image"
          content="https://ecovia-five.vercel.app/assets/Ecovia.png"
        />
      </Head>
      <HeroSectionTab />
    </>
  );
}
