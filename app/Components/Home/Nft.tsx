"use client";

import React, { useRef } from "react";
import Image from "next/image";
import star from "../../../public/img/star.svg";
import nftpol from "../../../public/img/nftpol.svg";
import nftcat1 from "../../../public/img/nftcat1.svg";
import nftcat2 from "../../../public/img/nftcat2.svg";
import nftzero from "../../../public/img/nftzero.svg";
import nftunst from "../../../public/img/nftunst.svg";
import redtick from "../../../public/img/redtick.svg";
import { motion, useScroll } from "framer-motion";

export const Nft = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="my-4">
      <div className="flex gap-2">
        <Image
          src={star}
          className=" "
          alt="lang"
          width={20}
          height={20}
          priority
        />
        <p className="text-[#068C95] text-[24px] font-[600]">My NTFs</p>
      </div>

      <ul ref={ref} className="hidden tablet:flex">
        <li>
          <div className="flex gap-2 basis-fit items-center">
            <div className="rounded-full">
              <Image
                src={nftpol}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={55}
                height={55}
                priority
              />
            </div>
            <div className="flex gap-1 items-start">
              <div className="">
                <p className="text-[14px]">polypepe</p>
                <p className="text-light_blue text-[12px] mt-2">20 MATIC</p>
              </div>

              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={15}
                height={15}
                priority
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 basis-fit items-center">
            <div className="rounded-full">
              <Image
                src={nftcat1}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={55}
                height={55}
                priority
              />
            </div>
            <div className="flex gap-1 items-start">
              <div className="">
                <p className="text-[14px]">AiCat</p>
                <p className="text-light_blue text-[12px] mt-2">---</p>
              </div>
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={15}
                height={15}
                priority
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 basis-fit items-center">
            <div className="rounded-full">
              <Image
                src={nftcat2}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={55}
                height={55}
                priority
              />
            </div>
            <div className="flex gap-1 items-start">
              <div className="">
                <p className="text-[14px]">AiCat</p>
                <p className="text-light_blue text-[12px] mt-2">---</p>
              </div>
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={15}
                height={15}
                priority
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 basis-fit items-center">
            <div className="rounded-full">
              <Image
                src={nftzero}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={55}
                height={55}
                priority
              />
            </div>
            <div className="flex gap-1 items-start">
              <div className="">
                <p className="text-[14px]">Zeroloss</p>
                <p className="text-light_blue text-[12px] mt-2">0.1 BNB</p>
              </div>
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={15}
                height={15}
                priority
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 basis-fit items-center">
            <div className="rounded-full">
              <Image
                src={nftunst}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={55}
                height={55}
                priority
              />
            </div>
            <div className="flex gap-1 items-start">
              <div className="">
                <p className="text-[14px]">Unstopa...</p>
                <p className="text-light_blue text-[12px] mt-1">1 MATIC</p>
              </div>
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={15}
                height={15}
                priority
              />
            </div>
          </div>
        </li>
      </ul>

      <ul ref={ref} className=" tablet_l:hidden">
        <li>
          <div className="relative flex flex-col items-center basis-fit">
            <div className="rounded-full">
              <Image
                src={nftpol}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={50}
                height={50}
                priority
              />
            <div className="absolute top-0 -right-1">
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={20}
                height={20}
                priority
              />
            </div>
                <p className="mt-1 text-[0.75rem]">polypepe</p>
            </div>
          </div>
        </li>
        <li>
        <div className="relative flex flex-col items-center basis-fit">
            <div className="rounded-full">
              <Image
                src={nftcat1}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={50}
                height={50}
                priority
              />
            {/* <div className="absolute top-0 -right-1">
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={20}
                height={20}
                priority
              />
            </div> */}
                <p className="mt-1 text-[0.75rem]">AiCat</p>
            </div>
          </div>
        </li>
        <li>
        <div className="relative flex flex-col items-center basis-fit">
            <div className="rounded-full">
              <Image
                src={nftcat2}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={50}
                height={50}
                priority
              />
            {/* <div className="absolute top-0 -right-1">
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={20}
                height={20}
                priority
              />
            </div> */}
                <p className="mt-1 text-[0.75rem]">AiCat</p>
            </div>
          </div>
        </li>
        <li>
        <div className="relative flex flex-col items-center basis-fit">
            <div className="rounded-full">
              <Image
                src={nftzero}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={50}
                height={50}
                priority
              />
            {/* <div className="absolute top-0 -right-1">
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={20}
                height={20}
                priority
              />
            </div> */}
                <p className="mt-1 text-[0.75rem]">Zeroloss</p>
            </div>
          </div>
        </li>
        <li>
        <div className="relative flex flex-col items-center basis-fit">
            <div className="rounded-full">
              <Image
                src={nftunst}
                className="rounded-full tablet_l:rounded-md "
                alt="lang"
                width={50}
                height={50}
                priority
              />
            {/* <div className="absolute top-0 -right-1">
              <Image
                src={redtick}
                className="mt-1"
                alt="lang"
                width={20}
                height={20}
                priority
              />
            </div> */}
                <p className="mt-1 text-[0.75rem]">Unstopa...</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
