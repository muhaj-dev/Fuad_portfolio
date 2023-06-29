"use client";

import { useContext } from 'react';
import { Side } from "./Components/Nav/SideNav";
import "./globals.css";
import { Iceland, Inter } from "next/font/google";
import { Iceberg } from "next/font/google";
import { Profile } from "./Components/Home/Profile";
import { NavBar } from "./Components/Nav/NavBar";
import { ButtonProvider } from "@/Hooks/BtnContext";

const inter = Inter({ subsets: ["latin"] });
const iceberg = Iceland({
  subsets: ["latin"],
  weight: "400",
});


export const metadata = {
  title: "fuadoluwaniyi",
  description: "Home page of fuadoluwaniyi's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ButtonProvider>
          <div className=" h-fit">
            <div className="flex flex-row max-w-[1600px] mx-auto tablet_l:gap-4  tablet_l:py-3 tablet_l:px-2">
              <div className="hidden tablet_l:block z-[1000] w-[4.45rem]">
                <Side />
              </div>
              <div className="w-full tablet_l:w-[94rem] laptop:w-[78.5rem]">
                <div className="hidden tablet_l:block sticky ml-auto laptop:mx-auto z-50 top-3 w-[93%] bg-primary tablet_l:w-[95%] laptop:w-full ">
                {/* <div className="sticky mx-auto z-50 top-3 w-[95%] bg-red-400 tablet_l:w-[95%] laptop:w-full bg-primary"> */}
                  <NavBar />
                </div>
                {children}
              </div>
                <div className='hidden tablet_l:block'>
                  <Profile />
                </div>
            </div>
            {/* Mobile */}

            <div>

            </div>
          </div>
        </ButtonProvider>
      </body>
    </html>
  );
}
