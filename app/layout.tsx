import "./styles/globals.css";

export const metadata = {
  title: "APICOSU",
  description: "APICOSU – Automatisierte Prozess- und Customizing-Suite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
        <header className="w-full border-b border-white/10 backdrop-blur-xl bg-white/5">
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
