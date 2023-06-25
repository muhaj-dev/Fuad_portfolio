import Head from "next/head";
import { Side } from "./Components/Nav/SideNav";
import "./globals.css";
import { Iceland, Inter } from "next/font/google";
import { Iceberg } from "next/font/google";
import sect from "../public/img/sect.svg";
import { Profile } from "./Components/Home/Profile";
const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceland({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Crypto Lead",
  description: "Home page for cryptoLead's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#0B0E21] h-fit">
          <div className="flex flex-row max-w-[1600px] mx-auto gap-4  py-3 px-2">
            <div className="relative w-[50px]">
              <Side />
            </div>
            <div className="w-full">{children}</div>
            <div className=" relative w-[340px] right-3">
              <Profile />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
