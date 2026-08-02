import { Inter_Tight } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { TabProvider } from "@/context/tab-context";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "WeCons",
  description:
    "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
  openGraph: {
    title: "WeCons | Empowering industries with sustainable manufacturing",
    description:
      "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
    image: "https://ecovia-five.vercel.app/assets/wecons.png",
    url: "https://ecovia-five.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeCons | Empowering industries with sustainable manufacturing",
    description:
      "WeCons is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
    image: "https://ecovia-five.vercel.app/assets/wecons.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={interTight?.className}>
        <TabProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </TabProvider>
      </body>
    </html>
  );
}
