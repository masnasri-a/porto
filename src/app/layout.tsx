import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Josefin_Sans} from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",

});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const headFont = Josefin_Sans({
    subsets: ['latin'],
    variable: "--font-josefin-sans",
})


export const metadata: Metadata = {
  title: "Personal Portofolio | Nasri Adzlani",
  description: "A showcase of my skills, projects, and experiences as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} relative bg-black ${geistMono.variable} ${headFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
