import HeroSectionTab from "@/components/Homepage/HeroSectionTab";

//  Metadata function
export async function generateMetadata() {
  const baseUrl = "https://ecovia-five.vercel.app/" || "http://localhost:3000";
  const title = "Ecovia | Empowering industries with sustainable manufacturing";
  const description =
    "Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.";
  const image = `${baseUrl}/assets/Ecovia.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}`,
      siteName: "Ecovia",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Ecovia Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
