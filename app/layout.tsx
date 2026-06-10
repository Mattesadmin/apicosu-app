export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <header className="w-full border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white tracking-wide">
              APICOSU
            </h1>
            <span className="text-sm text-gray-400">SAP KI Suite</span>
          </div>
        </header>

        <main className="flex-1 max-w-[1400px] mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
