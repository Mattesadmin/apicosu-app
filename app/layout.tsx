import "./globals.css";
import React from "react";

export const metadata = {
  title: "APICOSU",
  description: "APICOSU – Application for Intelligent Consulting Support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#0e0e0e] text-white min-h-screen">
        <header className="sticky top-0 z-50 w-full h-[4.5rem] bg-[#121212] border-b border-[#2a2a2a] flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="text-xl font-semibold tracking-wide text-[#00aaff]">APICOSU</h1>
          </div>
        </header>

        <main className="pt-16 pb-16">{children}</main>
      </body>
    </html>
  );
}