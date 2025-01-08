import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaching Portal",
  description: "The one and only location to edit your advertisement configurations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/placements">Placements</Link>|
          <Link href="/sizemappings">SizeMappings</Link>|
          <Link href="/identifiers">Identifiers</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
