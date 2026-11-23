import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diwas Sapkota - Portfolio",
  description:
    "Personal portfolio of Diwas Sapkota - Civil Engineering Student & Software Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen max-w-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
