import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SuperMock - Professional IELTS Mock Testing",
  description: "The premium, cloud-based mock test system for IELTS centres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased max-w-7xl mx-auto bg-supermock-base text-supermock-text`}
      >
        {children}
      </body>
    </html>
  );
}
