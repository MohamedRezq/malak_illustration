import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ملاك للرسوم الإيضاحية",
  description: "ملاك للرسوم الإيضاحية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
