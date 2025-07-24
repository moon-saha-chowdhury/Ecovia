import { Inter_Tight } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "Ecovia",
  description:
    "Ecovia is a sustainability-driven consultancy offering expert guidance on LEED certification, industry compliance, and environmental strategy — empowering businesses to build a greener future.",
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
