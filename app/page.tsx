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

export default function Home() {
  const [first, setFirst] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 649) {
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
          <div className="w-[100vw] h-[100vh] fixed z-50">
            {/* <div
              onClick={() => setFirst(false)}
              className="flex gap-2 items-center cursor-pointer w-fit mx-auto text-blue text-[12px] relative -right-32"
            >
              Go to Home page
            </div> */}
            <div className="flex justify-center items-end b_gradient h-[70%] w-[100vw] ">
              <div className=" h-fit mb-14">
                <p className="font-[400] text-[4rem] text-center">Fuad</p>
                <Image
                  src={profile2}
                  className="m"
                  alt="lang"
                  width={280}
                  height={200}
                  priority
                />
              </div>
            </div>
            <div className="relative -top-16 bg-[#0B0E21] flex z-10 justify-center items-center h-[40%] mob_bor-r">
              <div className="w-[95%]">
                <p className="font-[600] text-center text-[1.85rem]">
                  Do you know:
                </p>
                <p className="text-[#D9D9D9] mb-7 mt-3 text-center">
                  fuadux rebranded as cryptolead_
                </p>
                <div className=" flex items-center justify-between px-2 ">
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
                <IoMdArrowUp
                  onClick={() => setFirst(false)}
                  className="mx-auto mt-8 w-[1.5rem] h-[2rem] text-light_blue"
                />
              </div>
            </div>
          </div>
        )}
        <div className="bg-[#0B0E21] ">
          welcome</div>
      </div>
    </>
  );
}
