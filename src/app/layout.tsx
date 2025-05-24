import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "../redux/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Pro - Manage Your Customers Easily",
  description: "Simple and powerful CRM solution for businesses of all sizes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
