import { Metadata } from "next";
import "../app/globals.css";
import Particles from "./components/particles";
import ScrollSnapLayout from "./components/ScrollSnapLayout";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <ScrollSnapLayout>
          <div className="relative w-full h-full">
            <Particles />
            <div className="relative z-10">{children}</div>
          </div>
        </ScrollSnapLayout>
      </body>
    </html>
  );
}
