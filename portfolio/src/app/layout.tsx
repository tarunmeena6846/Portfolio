// src/app/layout.js
import "../app/globals.css";
import Particles from "./components/particles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="relative w-full h-full">
          <Particles />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
