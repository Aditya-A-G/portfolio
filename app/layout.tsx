import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Analytics} from '@vercel/analytics/react'
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya's Portfolio",
  description: "Know more about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
