import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin",'cyrillic'],
  weight:['100','200','300','400','500','600','700','800','900']
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
