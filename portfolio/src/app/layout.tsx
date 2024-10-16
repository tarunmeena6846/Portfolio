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
        <div className="relative w-full h-full">
          <Particles />
          <ScrollSnapLayout>
            <div className="relative z-10">{children}</div>
          </ScrollSnapLayout>
        </div>
      </body>
    </html>
  );
}
