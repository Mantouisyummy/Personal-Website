import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mantou.dev"),
  title: "鰻頭的個人網站",
  description: "鰻頭的個人網站",
  openGraph: {
    title: "鰻頭的個人網站",
    description: "鰻頭的個人網站",
    url: "https://mantou.dev",
    siteName: "鰻頭的個人網站",
    images: [
      {
        url: "/avatar.png",
        width: 512,
        height: 512,
        alt: "頭像",
      },
    ],
    locale: "zh-TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "鰻頭的個人網站",
    description: "鰻頭的個人網站",
    images: ["/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <Particles className="absolute inset-0 -z-10" />
            <Navbar />
            <div className="pb-24">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
