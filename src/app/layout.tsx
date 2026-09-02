import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "کوشه دنج | Cozy Corner",
  description:
    "کوشه دنج؛ راهی ساده برای پیدا کردن کافه‌های مناسب کار، درس، مطالعه و وقت‌گذرانی.",
  keywords: [
    "کوشه دنج",
    "Cozy Corner",
    "کافه",
    "کافه خوب",
    "پیدا کردن کافه",
    "کافه مناسب کار",
    "کافه برای مطالعه",
    "کافه برای درس خواندن",
    "کافه دانشجویی",
    "کافه آرام",
    "کافه مناسب لپ تاپ",
    "کافه با وای فای",
    "کافه با پریز برق",
    "کافه نزدیک من",
    "بهترین کافه",
    "کافه های نزدیک",
    "محیط مناسب کار",
    "محیط مناسب مطالعه",
  ],
  icons: {
    icon: "/icons/icon.png",
  },
};

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/woff2/IRANSansX-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/IRANSansX-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${iranSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAFAF9]">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}