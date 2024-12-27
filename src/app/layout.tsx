import type { Metadata } from "next";
import "./ui/globals.css";
import Header from "./ui/header/header";
import SlideMenu from "./ui/navigation/slide-menu";

export const metadata: Metadata = {
  title: "Website Next.js Template",
  description: "Website Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-montserrat font-regular antialiased">
        <header className="w-full bg-black">
          <Header />
          <SlideMenu />
        </header>
        {/* flex-grow in the main makes it occupy the available space between the header and the footer. */}
        <main className="flex-grow">{children}</main>
        <footer className="w-full bg-black text-white text-xs py-4 text-center">
          © 2025 Alejandro Otero
        </footer>
      </body>
    </html>
  );
}
