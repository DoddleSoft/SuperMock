import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SuperMock - Professional IELTS Mock Testing Platform",
  description:
    "A cloud-based mock test system designed for IELTS centres to seamlessly conduct mock tests.",
  metadataBase: new URL("https://supermock.net"),
  applicationName: "SuperMock",
  generator: "Next.js",
  keywords: [
    "IELTS",
    "mock test",
    "IELTS centre",
    "CD IELTS",
    "English assessment",
    "exam practice",
    "online testing",
    "assessment platform",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "SuperMock - Professional IELTS Mock Testing Platform",
    description:
      "A cloud-based mock test system designed for IELTS centres to seamlessly conduct mock tests.",
    siteName: "SuperMock",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperMock - Professional IELTS Mock Testing Platform",
    description:
      "A cloud-based mock test system designed for IELTS centres to seamlessly conduct mock tests.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased max-w-7xl mx-auto bg-supermock-base text-supermock-text`}
      >
        {children}
      </body>
    </html>
  );
}
