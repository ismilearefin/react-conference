import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/svgs/HeroBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Conference",
  description: "Next.js Practice project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full grid justify-center">
         <HeroBackground></HeroBackground>
          <div className="w-[1430px] border">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          </div>
        </div>
      </body>
    </html>
  );
}
