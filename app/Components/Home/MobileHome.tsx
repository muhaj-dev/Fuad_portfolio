import React from "react";

import Image from "next/image";

import profile2 from "../../../public/img/profile2.svg";
// import Link from "next/link";
// import twi from "../public/img/twi.svg";
// import discord from "../public/img/discord.svg";
// import iinsta from "../public/img/iinsta.svg";
// import link from "../public/img/link.svg";
// import you from "../public/img/you.svg";
// import whats from "../public/img/whats.svg";
// import { IoMdArrowUp } from "react-icons/io";

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
        <div className="relative bg-transparent flex flex-col justify-center  w-full h-[35dvh]">
          <div className="w-[95%] relative -top-5">
            <p className="font-[600] text-center text-[1.85rem]">
              Do you know:
            </p>
            <p className="text-[#D9D9D9] mb-7 mt-3 text-center">
              fuadux rebranded as cryptolead_
            </p>
          </div>
        </div>
        <div className="relative mt-auto bg-[#0B0E21] flex flex-col z-10 justify-center items-center w-full h-[65dvh] mob_bor-r">
          <div className="w-[95%] relative -top-5">
            <p className="font-[600] text-center text-[1.85rem]">
              Do you know:
            </p>
            <p className="text-[#D9D9D9] mb-7 mt-3 text-center">
              fuadux rebranded as cryptolead_
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
