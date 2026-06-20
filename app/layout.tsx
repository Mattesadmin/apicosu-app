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
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/10 h-[5rem] flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 flex items-center">
            <h1 className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              APICOSU
            </h1>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-24 pb-24">
          {children}
        </main>

      </body>
    </html>
  );
}