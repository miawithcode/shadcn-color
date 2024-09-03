import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/container";
import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Color",
  description: "Visualize shadcn color palettes with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative flex h-full min-h-svh w-full flex-col antialiased",
          inter.className,
        )}
      >
        <Container>
          <Navbar />
          <main className="flex-1 flex-grow">{children}</main>
        </Container>
      </body>
    </html>
  );
}
