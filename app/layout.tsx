import "./styles/globals.css";

export const metadata = {
  title: "APICOSU",
  description: "Consulting Suite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
