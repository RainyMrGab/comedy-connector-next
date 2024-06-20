"use client";

import type { Metadata } from "next";
import Header from "@components/header/Header";

import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Comedy Connector",
//   description: "Comedy Connector allows a city's comedy community to connect, especially up-and-coming talent.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Header />

        <main className="content flex-grow-1 pt-4">
          <div className="container mt-4">{children}</div>
        </main>

        <footer className="text-center py-3 px-10">
          <div className="container">&copy; Brian Gray</div>
        </footer>
      </body>
    </html>
  )
}
