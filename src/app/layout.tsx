import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer For Ummah",
  description: "Learn modern web development with Developer For Ummah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
