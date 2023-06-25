import React from "react";
import fuad from "../../../public/img/fuad.svg";
import twitter from "../../../public/img/twi.svg";
import iinsta from "../../../public/img/iinsta.svg";
import monkey from "../../../public/img/monkey.svg";
import mobile from "../../../public/img/mobile.svg";
import { TbMathGreater } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

export const Profile = () => {
  return (
    <div>
      <p className="text-center text-[30px] font-bold mt-5">My Profile</p>
      <div className="relative overflow-hidden mt-2">
        <div className="b_gradient rounded-full w-fit mt-4 p-[2px] mx-auto">
          <Image
            src={fuad}
            className="mx-auto rounded-full p-1 z-20 bg-primary"
            alt="lang"
            width={90}
            height={90}
            priority
          />
        </div>
        <p className="font-[500] text-[20px] text-center mt-6 z-40">
          Fuad Oluwaniyi
        </p>
        <div className="z-10">
          <div className="absolute top-0 -left-[15%] rounded-full w-[60px] h-[60px] bg-[#EA7EE3]" />
          <div className="absolute -top-0 -right-[12%] rounded-full w-[50px] h-[50px] bg-[#3DDECF]" />
          <div className="absolute bottom-7 -right-[10%] opacity-10 rounded-full w-[60px] h-[60px] b_c" />
          <div className="absolute bottom-24 right-[10%] opacity-20 rounded-full w-[40px] h-[40px] b_o" />
          {/* <div className="absolute bottom-24 right-[10%] opacity-20 rounded-full w-[10px] h-[10px] b_o"  /> */}
          <div className="absolute bottom-10 -right-[12%] rounded-full w-[60px] h-[60px] b_o" />
          <div className="absolute -top-0 right-[30%] rounded-full w-[12px] h-[12px] bg-[#3DDECF]" />
          <div className="absolute top-2 left-[3%] opacity-10 rounded-full w-[60px] h-[60px] bg-[#EA7EE3]" />
          <div className="absolute z-10 bottom-0 -left-[20%] rounded-full w-[80px] h-[80px] b_c" />
          <div className="absolute z-10 bottom-12 left-[15%] opacity-70  rounded-full w-[15px] h-[15px] bg-[#EA7EE3]" />
          <div className="absolute bottom-3 -left-[8%] opacity-10 rounded-full w-[75px] h-[75px] b_c" />
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-5">
        <div className="mt-4 flex gap-5 justify-between mx-auto ">
          <div className="w-fit h-fit">
            <div className="bor_r">
              <p className="bg-primary rounded-[4px] px-3 py-1"> 1b+</p>
            </div>
            <p className="text-center mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
          </div>
          <div className="w-fit h-fit">
            <div className="bor_r">
              <p className="bg-primary rounded-[4px] px-3 py-1"> 1b+</p>
            </div>
            <p className="text-center mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
          </div>
          <div className="w-fit h-fit">
            <div className="bor_r">
              <p className="bg-primary rounded-[4px] px-3 py-1"> 1b+</p>
            </div>
            <p className="text-center mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
          </div>
        </div>

        <div className="my-5">
          <p className="text-[20px] font-[500]">Status</p>
          <div className="flex p-2 justify-between border-[2px] mt-2 rounded-md border-[#494F99] ">
            <div className="flex items-center gap-1.5">
              <Image
                src={twitter}
                className="mx-auto rounded-full p-1 z-20 bg-primary"
                alt="lang"
                width={25}
                height={20}
                priority
              />
              <p className="text-sm">open to work</p>
            </div>
            <button className="text-[#D9D9D9] text-sm flex gap-1 items-center">
              hire
              <TbMathGreater className="text-light_blue w-[10px]" />
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-[500]">Impression</p>
            <button className="text-[#D9D9D9] text-sm flex gap-1 items-center">
              this month
              <MdOutlineKeyboardArrowDown className="text-light_blue" />
            </button>
          </div>
          <div className="flex p-2 h-[200px] justify-between border-[2px] mt-2 rounded-md border-[#494F99] ">
            {/* Bar Charts position */}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mt-5">
            <p className="text-[20px] font-[500]">Eecent Activiy</p>
            <button className="text-[#D9D9D9] text-sm flex gap-1 items-center">
              See All
              <TbMathGreater className="text-light_blue w-[10px] h-[25px]" />
            </button>
          </div>
          <div className="flex p-2 justify-between items-center mt-3 rounded-lg bg-[#212761] ">
            <div className="flex items-center gap-1.5">
              <Image
                src={monkey}
                className="rounded-sm"
                alt="lang"
                width={45}
                height={45}
                priority
              />
              <div className="h-fit">
                <p className="text-[12px] font-[500]  mb-2">Story about buy...</p>
                <p className="text-[10px] b_cl">by cryptolead_</p>
              </div>
            </div>
            <div className="flex flex-col text-[#D9D9D9] items-center">
            <Image
               src={twitter}
               className="mx-auto"
               alt="lang"
               width={15}
               height={10}
               priority
              />
              <p className=" text-[10px] mt-2">3min ago</p>
            </div>
          </div>
          <div className="flex p-2 justify-between items-center mt-3 rounded-lg bg-[#212761] ">
            <div className="flex items-center gap-1.5">
              <Image
                src={mobile}
                className="rounded-sm"
                alt="lang"
                width={45}
                height={45}
                priority
              />
              <div className="h-fit">
                <p className="text-[12px] font-[500]  mb-2">Forrest Jump App</p>
                <p className="text-[10px] b_cl">by cryptolead_</p>
              </div>
            </div>
            <div className="flex flex-col text-[#D9D9D9] items-center">
            <Image
               src={iinsta}
               className="mx-auto"
               alt="lang"
               width={15}
               height={10}
               priority
              />
              <p className=" text-[10px] mt-2">3min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
