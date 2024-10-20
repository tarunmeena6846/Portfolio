"use client";
import { Metadata } from "next";
import "../app/globals.css";
import Particles from "./components/particles";
import ScrollSnapLayout from "./components/ScrollSnapLayout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoadingProvider } from "./components/context/LoadingContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // useEffect(() => {
  //   // setTimeout(() => {
  //     document.body.style.cursor = "default";
  //   // }, 2000);
  // }, [router]);
  return (
    <html lang="en">
      <body className="bg-black">
        <LoadingProvider>
          <ScrollSnapLayout>
            <div className="relative w-full h-full">
              <Particles />
              <div className="relative z-10">{children}</div>
            </div>
          </ScrollSnapLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
