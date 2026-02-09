import {  Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neighbor Connector",
  description: "Where Caring Neighbors Make Stronger Communities.",
  keywords: ["neighbor", "community", "connection", "social", "neighborhood"],
  authors: [{ name: "Neighbor Connector" }],
  openGraph: {
    title: "Neighbor Connector",
    description: "Connect with your community and neighbors",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#07519B" />
      </head>
      <body
        className={`${inter.variable} antialiased max-w-360 mx-auto px-8 `}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
