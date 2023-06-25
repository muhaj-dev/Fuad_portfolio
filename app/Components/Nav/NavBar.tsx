import React from "react";
import Link from "next/link";
import twi from "../../../public/img/twi.svg";
import discord from "../../../public/img/discord.svg";
import iinsta from "../../../public/img/iinsta.svg";
import link from "../../../public/img/link.svg";
import you from "../../../public/img/you.svg";
import whats from "../../../public/img/whats.svg";
import fuad from "../../../public/img/fuad.svg";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="fixed z-50 flex justify-between pt-4 pb-2 -top-[0.3rem] bg-[#0B0E21]">
      <div className="bg-primary w-[350px] p-3 h-fit rounded-md">
        <p className="font-[500]  text-sm ">
          Do you know:{" "}
          <span className="ml-1.5 text-[12px]">
            fuadux rebranded as cryptolead_
          </span>
        </p>
      </div>
      <div className="grow my-auto flex items-center justify-between px-4 gap-4 ">
          <Link href="/" className="h-fit my-auto">
            <Image
              src={twi}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={discord}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={iinsta}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={link}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={you}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={whats}
              className="my-auto  "
              alt="lang"
              width={15}
              height={15}
              priority
            />
          </Link>
          <div
            className="text-[12px] hidden desktop:block bg-blue py-3 px-2 border-[1px] border-light_blue rounded-md"
          >
            Buy Me a coffee
          </div>
        </div>
      {/* <div className="flex "> */}
        
        <div className="grow-0 px-4 flex gap-3  border-l-[2px] border-light_blue">
          <Image
            src={fuad}
            className="my-auto  "
            alt="lang"
            width={40}
            height={45}
            priority
          />
          <div className="flex gap-2 items-center">
            <div className="flex flex-col ">
              <p className="text-[14px]">Fuad Oluwaniyi</p>
              <p className="text-[grey] -mt-1 text-[12px]">fuadoluwaniyi@gmail.com</p>
            </div>
           <MdOutlineKeyboardArrowDown  />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};
