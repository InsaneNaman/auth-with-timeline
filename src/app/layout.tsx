//styles
import "./globals.css";

//fonts
import { inter } from "@/app/fonts";

//types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlys Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
