import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sad Hulk Inu",
  description: "Strongest Doge Alive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
