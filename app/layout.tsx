import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelEase - Your Gateway to Seamless Travel",
  description:
    "Experience hassle-free travel planning with our expert services",
  generator: "v0.dev",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1758478738/airplane_2708-fe0f_jkfmzc.png",
        width: 512,
        height: 512,
        alt: "TravelEase Airplane Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://res.cloudinary.com/dxu5abgqw/image/upload/v1758478738/airplane_2708-fe0f_jkfmzc.png",
    ],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dxu5abgqw/image/upload/v1758478738/airplane_2708-fe0f_jkfmzc.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
