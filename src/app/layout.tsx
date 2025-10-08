import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import { twMerge  } from "tailwind-merge";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "created by Pioter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(cormorant.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
