//styles
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
