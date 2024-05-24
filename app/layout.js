import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Practical Applications of AI in Everyday Educational Settings",
  description: "Educational Settings Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
