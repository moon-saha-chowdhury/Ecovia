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
    "Ecovia is a sustainability-focused agency offering expert services in industry sustainability, LEED certification, and environmental consulting. Partner with us to build a greener future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interTight?.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
