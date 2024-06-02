import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sujay's Portfolio",
  description: "My Final Portfolio, with a Modern and Minimalistic look, smooth animations and transitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
