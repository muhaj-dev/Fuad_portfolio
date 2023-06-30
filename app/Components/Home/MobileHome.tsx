import React from "react";

import Image from "next/image";

import profile2 from "../../../public/img/profile2.svg";
import menu from "../../../public/img/menu.svg";
import sect from "../../../public/img/sect.svg";
import fuad from "../../../public/img/fuad.svg";
import { TbMathGreater } from "react-icons/tb";
import tick from "../../../public/img/tick.svg";
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoDiscordAlt, BiLogoJava } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { Nft } from "./Nft";
import { Job } from "./Job";


export const MobileHome = () => {
  return (
    <div>
      <div className="b_gradient h-[100dvh] w-[100dvw] ">
        <div className="flex absolute top-0 bottom-0 left-0 right-0   h-[100dvh] w-[100vw] ">
          <div className="w-fit p-5 ml-auto  h-fit mb-14">
            <Image
              src={profile2}
              className=""
              alt="lang"
              width={250}
              height={140}
              priority
            />
          </div>
        </div>
        <div className="h-[100dvh] w-[100dvw] absolute b_gradient opacity-50" />
        <div className="relative bg-transparent flex flex-col pt-4 w-full h-[34dvh]">
          <div className="w-[95%] mx-auto">
            <div className="flex justify-between mx-auto relative">
              <Image
                src={menu}
                className=""
                alt="lang"
                width={25}
                height={25}
                priority
              />
              <p className="flex items-center gap-1 text-black">
                View as
                <MdOutlineKeyboardArrowDown />
              </p>
            </div>
            <p className="my-3 text-[2rem] font-bold text-[#0B0E21]">
              cryptolead_
            </p>
            <div className="w-full flex items-center justify-between">
              <div className="flex gap-1 bg-primary w-[80%] p-3  rounded-md">
                <Image
                  src={sect}
                  className=""
                  alt="lang"
                  width={10}
                  height={10}
                  priority
                />
                <p className="font-[500] text-[#D9D9D9] text-[.65rem] ">
                  Do you know:{" "}
                  <span className="ml-1  text-[10px]">
                    fuadux rebranded as cryptolead_
                  </span>
                </p>
              </div>
              <div className="border-[2px] w-fit h-fit border-primary rounded-full">
                <Image src={fuad} alt="lang" width={30} height={30} priority />
              </div>
            </div>

            <div className="w-[60%] my-3 flex justify-between px-2 ">
              <Link href="/" className="h-fit my-auto">
                <AiOutlineTwitter className="text-primary w-[1.15rem] h-[1.15rem] " />
              </Link>
              <Link href="/" className="h-fit my-auto">
                <BiLogoDiscordAlt className="text-primary w-[1.15rem] h-[1.15rem]" />
              </Link>
              <Link href="/" className="h-fit my-auto">
                <AiFillInstagram className="text-primary w-[1.15rem] h-[1.15rem] " />
              </Link>
              <Link href="/" className="h-fit my-auto">
                <AiFillLinkedin className="text-primary w-[1.15rem] h-[1.15rem] " />
              </Link>
              <Link href="/" className="h-fit my-auto">
                <AiFillYoutube className="text-primary w-[1.15rem] h-[1.15rem] " />
              </Link>
              <Link href="/" className="h-fit my-auto">
                <AiOutlineWhatsApp className="text-primary w-[1.15rem] h-[1.15rem] " />
              </Link>
            </div>
            <div className="box_shadow text-[12px] flex items-center justify-center gap-1 text-primary w-fit bg-white py-1 px-2 border-[1px] border-light_blue rounded-[10px]">
              <BiLogoJava className="text-primary w-[1.1rem] h-[1.1rem] " />
              coffee
            </div>
          </div>
        </div>
        <div className="relative mt-auto bg-[#0B0E21] w-full h-[68dvh] mob_bor-r">
          <div className="relative pt-5 w-[95%] mx-auto ">
            <div className="ml-auto w-[88%]">
              <div className=" flex px-3 py-2 justify-between border-[2px] mt-1 rounded-md border-[#494F99] ">
                <div className="flex items-center gap-1">
                  <Image
                    src={tick}
                    className="mx-auto rounded-full p-1 z-20 bg-primary"
                    alt="lang"
                    width={25}
                    height={20}
                    priority
                  />
                  <p className="text-[14px]">open to work</p>
                </div>
                <button className="text-[#D9D9D9] text-[14px] flex gap-1 items-center">
                  hire
                  <TbMathGreater className="text-light_blue w-[10px]" />
                </button>
              </div>
            </div>
            <p className="text-[#D9D9D9] leading-8 text-[1.5rem] font-[500] w-[90%] my-3 ">
              Community Manager & Web 3.0 Writer
            </p>
            <Nft/>
            <Job />
          </div>
        </div>
      </div>
    </div>
  );
};
