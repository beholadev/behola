import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Behola | An AI Assistant",
  description: "Designed & Developed by gunash.na",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
