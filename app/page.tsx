"use client";

import { useState } from "react";
import Image from "next/image";
import { NavBar } from "./Components/Nav/NavBar";
import { Hero } from "./Components/Home/Hero";
import { Nft } from "./Components/Home/Nft";
import { Job } from "./Components/Home/Job";
import { Profile } from "./Components/Home/Profile";

export default function Home() {
  const [first, setfirst] = useState(true);
  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <NavBar />
        <div className="w-[98%] mt-2 pt-6">
          <Hero />
          <Nft />
          <Job />
        </div>
      </div>
      <div className="w-[19%] mr- bg-primary border-light_blue border-[2px] rounded-lg">
        <Profile />
      </div>
    </div>
  );
}
