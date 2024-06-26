import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

import ButtonLogOut from "./ButtonLogOut";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => {
  return (
    <header className="absolute z-10 w-full top-0 left-0">
      <div className="flex justify-between items-center bg-[#9EA0FF] p-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="w-[70px]"
          />
          <div className="flex flex-col font-bold">
            <p>Balai Besar Wilayah Sungai Serayu Opak</p>
            <p>Direktorat Jenderal Sumber Daya Air</p>
            <p>
              Kementerian Pekerjaan Umum dan Perumahan
              Rakyat
            </p>
          </div>
        </Link>
        <div className="flex justify-between items-center gap-4 font-bold">
          <Link href="/sda">SUMBER DAYA AIR</Link>
          <Link href="/fasilitatif">FASILITATIF</Link>
          <ButtonLogOut />
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <section className="p-10 relative pt-36 overflow-hidden min-h-[90dvh]">
          <Image
            src="/rectangle.png"
            width={600}
            height={1000}
            alt="Rectangle"
            className="absolute w-full -z-10 top-0 left-0"
          />
          {children}
        </section>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
