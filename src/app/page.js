import HeroSectionTab from "@/components/Homepage/HeroSectionTab";

//  Metadata function
export async function generateMetadata() {
  return {
    title: "WeCons",
    description:
      "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
    openGraph: {
      title: "WeCons | Empowering industries with sustainable manufacturing",
      description:
        "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
      images: "https://ecovia-five.vercel.app/assets/weCons.png",
      url: "https://ecovia-five.vercel.app",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "WeCons | Empowering industries with sustainable manufacturing",
      description:
        "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
      images: "https://ecovia-five.vercel.app/assets/weCons.png",
    },
  };
}
export default function Home() {
  return (
    <>
      <HeroSectionTab />
    </>
  );
}
