import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

export const metadata = {
  title: "ConvertZee",
  description: "Your all-in-one file conversion solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#F9FCFE] text-[#454545]`}
      >
        <header>
          <NavigationBar />
        </header>
        <main className="pt-20 mx-10 md:mx-16 lg:mx-44 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
