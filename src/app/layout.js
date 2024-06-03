import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "florezf90 gym",
  description: "A place to growth and learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
