"use client";

import { useState } from "react";
import Image from "next/image";
import { NavBar } from "./Components/Nav/NavBar";
import { Hero } from "./Components/Home/Hero";
import { Nft } from "./Components/Home/Nft";
import { Job } from "./Components/Home/Job";

export default function Home() {
  const [first, setfirst] = useState(true);
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full ">
        <div className="w-[98%] -mt-2 z-10">
          <Hero />
          <Nft />
          <Job />
        </div>
      </div>
    </div>
  );
}
