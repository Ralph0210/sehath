
import "./globals.css";
import { Inria_Sans } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const sans = Inria_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "UT Sehath",
  description: "UT Sehath is a website for UT Sehath",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
