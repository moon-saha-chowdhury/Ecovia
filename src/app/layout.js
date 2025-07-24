import { Inter_Tight } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "Ecovia | Empowering industries with sustainable manufacturing",
  description:
    "Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy.",
  openGraph: {
    title: "Ecovia | Empowering industries with sustainable manufacturing",
    description:
      "Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy.",
    url: "https://ecovia-five.vercel.app",
    siteName: "Ecovia",
    type: "website",
    images: [
      {
        url: "https://ecovia-five.vercel.app/assets/Ecovia.png",
        width: 1200,
        height: 630,
        alt: "Ecovia Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecovia | Empowering industries with sustainable manufacturing",
    description:
      "Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy.",
    images: ["https://ecovia-five.vercel.app/assets/Ecovia.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={interTight?.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
