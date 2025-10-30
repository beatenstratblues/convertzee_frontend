import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ConvertZee",
  description: "Your all-in-one file conversion solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavigationBar />
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
