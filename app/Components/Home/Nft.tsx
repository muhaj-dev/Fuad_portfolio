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
      <div className=" w-[97%] mx-auto flex gap-16 justify- flex-wrap">
        <div className="flex gap-2 mt-4 items-center">
          <Image
            src={nftpol}
            className=" "
            alt="lang"
            width={55}
            height={55}
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
            width={55}
            height={55}
            priority
          />
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
        <div className="flex gap-2 mt-4  items-center">
          <Image
            src={nftcat2}
            className=" "
            alt="lang"
            width={55}
            height={55}
            priority
          />
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
        <div className="flex gap-2 mt-4  items-center">
          <Image
            src={nftzero}
            className=" "
            alt="lang"
            width={55}
            height={55}
            priority
          />
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
        <div className="flex gap-2 mt-4 items-center">
          <Image
            src={nftunst}
            className=" "
            alt="lang"
            width={55}
            height={55}
            priority
          />
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
      </div>

      <div className="border-[1px] border-light_blue h-[8px] rounded-md mt-5">
        <div className="w-[35%] h-full bg-light_blue" />
      </div>
    </div>
  );
};
