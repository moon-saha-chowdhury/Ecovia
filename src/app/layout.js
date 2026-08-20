import { Inter_Tight } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { TabProvider } from "@/context/tab-context";
import { Toaster } from "sonner";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={interTight?.className}>
        <TabProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </TabProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
