import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GradualBlurMemo from "@/components/GradualBlur";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
// import Bottomblur from "./components/Bottomblur";

export const metadata: Metadata = {
  title: "Third Eye Creative | Software, Branding & Media Agency in Bangalore",
  description:
    "We craft digital experiences that blend tech, design & storytelling. Your creative partner for apps, branding, and media in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body cz-shortcut-listen="true">
        <Navbar />

        {children}

        {/* Glass morphism blur */}
        {/* <Bottomblur /> */}

        <SpeedInsights />
        <Analytics />

        <GradualBlurMemo
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={false}
          opacity={1}
        />
        <Footer />
      </body>
    </html>
  );
}
