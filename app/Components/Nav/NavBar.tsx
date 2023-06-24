import React from "react";
import Link from "next/link";
import twi from "../../../public/img/twi.svg";
import discord from "../../../public/img/discord.svg";
import iinsta from "../../../public/img/iinsta.svg";
import link from "../../../public/img/link.svg";
import you from "../../../public/img/you.svg";
import whats from "../../../public/img/whats.svg";
import fuad from "../../../public/img/fuad.svg";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="flex justify-between h-[]">
      <div className="bg-primary  w-[360px] p-3 h-fit rounded-md">
        <p className="font-[500]  text-sm ">
          Do you know:{" "}
          <span className="ml-1.5 text-[12px]">
            fuadux rebranded as cryptolead_
          </span>
        </p>
      </div>
      <div className="flex ">
        <div className=" my-auto flex items-center justify-center px-6 gap-6">
          <Link href="/" className="h-fit my-auto">
            <Image
              src={twi}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={discord}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={iinsta}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={link}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={you}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <Link href="/" className="h-fit my-auto">
            <Image
              src={whats}
              className="my-auto  "
              alt="lang"
              width={19}
              height={30}
              priority
            />
          </Link>
          <button
            className="text-sm hidden desktop:block bg-blue p-3 border-[1px] border-light_blue rounded-md"
          >
            Buy Me a coffee
          </button>
        </div>
        <div className="px-6 flex gap-3  border-l-[2px] border-light_blue">
          <Image
            src={fuad}
            className="my-auto  "
            alt="lang"
            width={50}
            height={55}
            priority
          />
          <div className="flex gap-2">
            <div className="flex flex-col ">
              <p className="text-[16px]">Fuad Oluwaniyi</p>
              <p className="text-[grey] -mt-1 text-sm">fuadoluwaniyi@gmail.com</p>
            </div>
            <Image
            src={fuad}
            className="my-auto  "
            alt="lang"
            width={15}
            height={20}
            priority
          />
          </div>
        </div>
      </div>
    </div>
  );
};
