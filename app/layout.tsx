import { Side } from "./Components/Nav/SideNav";
import "./globals.css";
import { Iceland, Inter } from "next/font/google";
import { Iceberg } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceland({ 
  subsets: ['latin'],
  weight:  "400",
 })

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
        <div className="w-[100vw] bg-[#0B0E21] h-fit">
        <div className="flex flex-row w-[100vw] max-w-[1600px] mx-auto justify-between py-[1%] px-[0.5%]">
          <div className="fixed w-[3%] h-[94vh] max-h-[890px] py-5 bg-primary rounded-[10px]">
            <Side />
          </div>
          <div className="w-[3%] "/>
          <div className="w-[96%] ">
            {children}
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
