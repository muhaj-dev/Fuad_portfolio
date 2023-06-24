import React from "react";
import Image from "next/image";
import star from "../../../public/img/star.svg";
import nftpol from "../../../public/img/nftpol.svg";
import nftcat1 from "../../../public/img/nftcat1.svg";
import nftcat2 from "../../../public/img/nftcat2.svg";
import nftzero from "../../../public/img/nftzero.svg";
import nftunst from "../../../public/img/nftunst.svg";
import redtick from "../../../public/img/redtick.svg";

export const Nft = () => {
  return (
    <div className="my-8">
      <div className="flex gap-3">
        <Image
          src={star}
          className=" "
          alt="lang"
          width={25}
          height={25}
          priority
        />
        <p className="text-[#068C95] text-[26px] font-[600]">My NTFs</p>
      </div>
      <div className="mt-3 w-[97%] mx-auto flex gap-[3%] flex-wrap">
        <div className="flex gap-2 mt-4 items-center">
          <Image
            src={nftpol}
            className=" "
            alt="lang"
            width={65}
            height={65}
            priority
          />
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
        <div className="flex gap-2 mt-4  items-center">
          <Image
            src={nftcat1}
            className=" "
            alt="lang"
            width={65}
            height={65}
            priority
          />
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
        <div className="flex gap-2 mt-4  items-center">
          <Image
            src={nftcat2}
            className=" "
            alt="lang"
            width={65}
            height={65}
            priority
          />
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
        <div className="flex gap-2 mt-4  items-center">
          <Image
            src={nftzero}
            className=" "
            alt="lang"
            width={65}
            height={65}
            priority
          />
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
        <div className="flex gap-2 mt-4 items-center">
          <Image
            src={nftunst}
            className=" "
            alt="lang"
            width={65}
            height={65}
            priority
          />
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
      </div>

      <div className="border-[1px] border-light_blue h-[10px] rounded-md mt-5">
        <div className="w-[35%] h-full bg-light_blue" />
      </div>
    </div>
  );
};
