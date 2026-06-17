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
      <body className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white min-h-screen">
        
        {/* HEADER */}
        <header className="w-full border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center">
            <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              APICOSU
            </h1>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-[1400px] mx-auto px-6 py-16">
          {children}
        </main>

      </body>
    </html>
  );
}

