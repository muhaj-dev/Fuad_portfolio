"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Hero } from "./Components/Home/Hero";
import { Nft } from "./Components/Home/Nft";
import profile2 from "../public/img/profile2.svg";
import { Job } from "./Components/Home/Job";
import Link from "next/link";
import twi from "../public/img/twi.svg";
import discord from "../public/img/discord.svg";
import iinsta from "../public/img/iinsta.svg";
import link from "../public/img/link.svg";
import you from "../public/img/you.svg";
import whats from "../public/img/whats.svg";
import { IoMdArrowUp } from "react-icons/io";
import { MobileHome } from "./Components/Home/MobileHome";

export default function Home() {
  const [first, setFirst] = useState<boolean>(true);
  const [width, setWidth] = useState<number | null>(null)



  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth)
      }  
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
const widthValue = width ?? 0;

  useEffect(() => {
    if (widthValue > 649) {
      const interval = setInterval(() => {
        setFirst(false);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [width]);

  return (
    <>
      <div className="hidden tablet_l:block tablet_l:w-[95%] laptop:w-[97%] z-50  ml-auto laptop:mx-auto">
        <Hero />
        <Nft />
        <Job />
      </div>

      <div className="tablet_l:hidden block">
        {first && (
          <div className="w-[100dvw] b_gradient h-[100dvh] fixed z-50">
            <div className="flex justify-center  h-3/5 w-[100vw] ">
              <div className=" h-full justify-between flex flex-col mb-14">
                <p className="font-[400] relative top-4 text-[4rem] text-center">Fuad</p>
                <Image
                  src={profile2}
                  className=""
                  alt="lang"
                  width={330}
                  height={200}
                  priority
                />
              </div>
            </div>
            <div className="relative bg-[#0B0E21] h-2/5 flex flex-col selection:z-10 justify-center items-center  mob_bor-r">
              <div className="w-[95%] relative h-[80%]">
                <p className="font-[600] mt-3 text-center text-[2.45rem]">
                  Do you know:
                </p>
                <p className="text-[#D9D9D9] text-[20px] mb-12 mt-4 text-center">
                  fuadux rebranded as cryptolead_
                </p>
                <div className="w-[90%] mb-8 mx-auto flex items-center justify-between px-2 ">
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={twi}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={discord}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={iinsta}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={link}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={you}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <Link href="/" className="h-fit my-auto">
                    <Image
                      src={whats}
                      className="my-auto  "
                      alt="lang"
                      width={18}
                      height={18}
                      priority
                    />
                  </Link>
                  <div className="text-[10px] text-center w-[120px] hidden desktop:block bg-blue py-3 px-3 border-[1px] border-light_blue rounded-md">
                    Buy Me a coffee
                  </div>
                </div>
              </div>
              <div className="beep z-30 w-full bottom-6 fixed ">
                <IoMdArrowUp
                  onClick={() => setFirst(false)}
                  className=" cursor-pointer mx-auto w-[1.5rem] h-[2rem] text-light_blue"
                />
                <p className="text-center text-light_blue">Sypte up</p>
              </div>
              {/* <div className="absolute bg-[#0B0E21] -bottom-[126px] h-[8rem] w-[100dvw]"/> */}
            </div>
          </div>
        )}
       <MobileHome />
      </div>
    </>
  );
}
