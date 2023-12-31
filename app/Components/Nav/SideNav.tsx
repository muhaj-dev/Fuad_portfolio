import React from "react";
import NavLink from "./NavLink";
import eth from "../../../public/img/eth.svg";
import home from "../../../public/img/home.svg";
import wallet from "../../../public/img/wallet.svg";
import profile from "../../../public/img/profile.svg";
import market from "../../../public/img/market.svg";
import network from "../../../public/img/network.svg";
import fuad from "../../../public/img/fuad.svg";
import searchFile from "../../../public/img/searchFile.svg";
import sect from "../../../public/img/sect.svg";
import upArr from "../../../public/img/upArr.svg";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    path: "/",
    text: home,
  },
  {
    path: "/nfts",
    text: wallet,
  },
  {
    path: "/address",
    text: eth,
  },
  {
    path: "/profile",
    text: profile,
  },
  {
    path: "/market",
    text: market,
  },
];

const links2 = [
  {
    path: "/network",
    text: network,
  },
  {
    path: "/search",
    text: searchFile,
  },
  {
    path: "/profile",
    text: fuad,
  },
];

export const Side = () => {
  return (
    <div className="fixed flex flex-col w-[2.5rem] h-[96.5vh] max-h-[720px] py-5 bg-primary rounded-[10px]">
      <Link href='/'>
        <Image
          src={sect}
          className="mx-auto mb-2 "
          alt="lang"
          width={20}
          height={20}
            priority
        />
      </Link>
      <div className="flex flex-col justify-between items-center space-y-5 my-3">
        {links.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </div>
      <div className="h-[2px] bg-light_blue w-[90%] mx-auto mt-3 mb-5"/>
      <div className="hidden md:flex flex-col justify-between items-center space-y-5">
        {links2.map((link, index) => (
          <NavLink key={index} {...link} />
        ))}
      </div>

      <div className="mt-auto" >
        <Image
          src={upArr}
          className="mx-auto "
          alt="lang"
          width={12}
          height={12}
            priority
        />
      </div>
    </div>
  );
};
