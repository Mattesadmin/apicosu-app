import "./globals.css";
import React from "react";

export const metadata = {
  title: "APICOSU",
  description: "APICOSU – Application for Intelligent Consulting Support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#0d0d0d] text-white min-h-screen">

        {/* HEADER */}
        <header className="sticky top-0 z-50 w-full h-[4.5rem] bg-[#111] border-b border-white/10 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6">
            <h1 className="text-xl font-semibold tracking-wide">
              APICOSU
            </h1>
          </div>
        </header>

        {/* MAIN */}
        <main className="pt-16 pb-16">
          {children}
        </main>

      </body>
    </html>
  );
}