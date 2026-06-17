import "./globals.css";
import React from "react";

export const metadata = {
  title: "APICOSU",
  description: "APICOSU – Application for Intelligent Consulting Support",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="bg-black text-white min-h-screen">
        <header className="w-full border-b border-white/10 bg-black/20 backdrop-blur-md relative z-50">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold tracking-wide">APICOSU</h1>
          </div>
        </header>

        <main className="max-w-[1400px] mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
