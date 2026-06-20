import "./globals.css";
import React from "react";

export const metadata = {
  title: "APICOSU",
  description: "APICOSU – Application for Intelligent Consulting Support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#f4f6f8] text-[#1a1a1a] min-h-screen">
        <header className="sticky top-0 z-50 w-full h-[4.5rem] bg-white border-b border-[#e0e0e0] shadow-sm flex items-center">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="text-xl font-semibold tracking-wide text-[#0070f2]">APICOSU</h1>
          </div>
        </header>

        <main className="pt-16 pb-16">{children}</main>
      </body>
    </html>
  );
}