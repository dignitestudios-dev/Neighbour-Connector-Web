import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neighbor Connector",
  description: "Where Caring Neighbors Make Stronger Communities.",
  keywords: ["neighbor", "community", "connection", "social", "neighborhood"],
  authors: [{ name: "Neighbor Connector" }],
  icons: {
    icon: ["/images/logo.png"],
  },
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="max-w-360 mx-auto px-4 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
