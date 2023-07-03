

import React, { useContext } from "react";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import profile2 from "../../../public/img/profile2.svg";
import profile3 from "../../../public/img/profile3.png";
import menu from "../../../public/img/menu.svg";
import sect from "../../../public/img/sect.svg";
import fuad from "../../../public/img/fuad.svg";
import { FaAngleRight } from 'react-icons/fa'
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
import { ButtonContext } from "@/Hooks/BtnContext";


export const MobileHome = () => {

  const contextValue = useContext(ButtonContext);

  if (!contextValue) {
    // Handle the case where contextValue is undefined
    return null;
  }

  const { veiwAs, toggleView, viewUx, viewCt } = contextValue;
  return (
    <div>
      {/* <div className="b_gradient2 h-fit w-[100dvw] "> */}
      <div className={veiwAs ? 'b_gradient h-fit w-[100dvw]' : 'b_gradient2 h-fit w-[100dvw]'}>
        <div className="flex absolute top-0 bottom-0 left-0 right-0   h-[100dvh] w-[100vw] ">
          <div className="w-fit ml-auto pt-5 h-fit mb-1">
            {veiwAs ?
             <Image
              src={profile2}
              className=""
              alt="lang"
              width={230}
              height={470}
              priority
            />
          :
          <Image
              src={profile3}
              className=""
              alt="lang"
              width={230}
              height={470}
              priority
            />
          }
          </div>
        </div>
        <div className={veiwAs ? "h-[100dvh] w-[100dvw] absolute b_gradient opacity-50" : "h-[100dvh] w-[100dvw] absolute b_gradient2 opacity-50"} />
        <div className="relative bg-transparent flex flex-col pt-3 w-full h-[29vh]">
          <div className="w-[95%] mx-auto pt-1">
            <div className="flex justify-between mx-auto relative">
              <Image
                src={menu}
                className=""
                alt="lang"
                width={25}
                height={25}
                priority
              />
              {/* <p 
                onClick={toggleView}
              className="flex cursor-pointer font-semibold items-center gap-1 text-black">
                View as {veiwAs ? 'web designer' : 'crypto expert'}
              </p> */}
                {/* <MdOutlineKeyboardArrowDown /> */}

<div className=" top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Veiw as
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        {/* <div className={veiwAs ? "h-[100dvh] w-[100dvw] absolute b_gradient opacity-50" : "h-[100dvh] w-[100dvw] absolute b_gradient2 opacity-50"} /> */}
        <Menu.Items className="absolute right-0 mt-2 w-[6.9rem] origin-top-right divide-y divide-gray-100 rounded-md bg-black bg-opacity-40 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* <Menu.Items className="absolute h-[33dvh] w-[100dvw] -right-[0.8rem]   origin-top-right rounded-md bg-transparent  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> */}
            <div className="">
              { veiwAs ? <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={viewUx}
                    className={`${
                      active ? 'bg-primary hover:bg-opacity-70 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md p-3 text-[12px]`}
                  >
                    web designer
                  </button>
                )}
              </Menu.Item>
              :
              <Menu.Item>
                {({ active }) => (
                  <button
                  onClick={viewCt}
                    className={`${
                      active ? 'bg-primary hover:bg-opacity-70 text-white' : 'text-white'
                    } group flex w-full items-center rounded-md p-3 text-[12px]`}
                  >
                crypto expert
                  </button>
                )}
              </Menu.Item>}
            </div>           
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

            </div>
            <p className="my-3 text-[2.25rem] font-bold text-[#0B0E21]">
              cryptolead_
            </p>
            <div className="w-full my-4 flex items-center justify-between">
              <div className="flex gap-2 bg-primary w-[85%] box_shadow p-3  rounded-md">
                <Image
                  src={sect}
                  className=""
                  alt="lang"
                  width={15}
                  height={15}
                  priority
                />
                <p className="font-[500] text-[#D9D9D9] text-[.65rem] ">
                  Do you know:{" "}
                  <span className="ml-[2px]  text-[10px]">
                    fuadux rebranded as cryptolead_
                  </span>
                </p>
              </div>
              <div className="relative border-[2px] w-fit h-fit border-primary rounded-full">
                <Image src={fuad} alt="lang" width={30} height={30}  />
                <div className="absolute -bottom-[5px] right-0 border-[3px] w-fit h-fit border-primary rounded-full">
                <Image src={fuad} alt="lang" width={10} height={10}  />
               
              </div>
              </div>
            </div>

            <div className="w-[60%] my-4 flex justify-between px-2 ">
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
        <div className="relative mt-auto bg-[#0B0E21] w-full h-fit mob_bor-r">
          <div className="relative pt-5 w-[95%] mx-auto ">
            <div className="ml-auto w-[88%] mb-7">
              <div className=" flex px-3 py-3 justify-between border-[3px] mt-1 rounded-md border-[#494F99] ">
                <div className="flex items-center gap-1">
                  <Image
                    src={tick}
                    className="mx-auto rounded-full p-1 z-20 bg-primary"
                    alt="lang"
                    width={25}
                    height={20}
                    priority
                  />
                  <p className="text-[1.2rem] font-[600]">open to work</p>
                </div>
                <button className="text-[#D9D9D9] text-[14px] flex gap-1 items-center">
                  hire
                  <FaAngleRight className="text-[#068C95] w-[14px] h-[14px]"  />
                </button>
              </div>
            </div>
            <p className="text-[#D9D9D9] leading-8 text-[1.5rem] font-[500] w-[90%] my-3 ">
              Community Manager & Web 3.0 Writer
            </p>
            <Nft/>
            <Job />

            <p className="flex items-center justify-center text-[#068C95] font-semibold text-[0.7rem] mt-10 text-center"><label className="h-1 w-1 mr-1.5 rounded-full bg-[#068C95]" /><span className="underline mr-1"> Copyright </span> fuadoluwaniyi@gmail.com © 2023</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
