import Image from "next/image";
import React from "react";
import { TbMathGreater } from "react-icons/tb";
import profile2 from "../../../public/img/profile2.svg";
import profile3 from "../../../public/img/profile3.svg";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <p className="text-[200%]">View Fuad live as</p>
        <button className="flex gap-2  items-center text-light_blue ">
          Show less
          <TbMathGreater />
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-y-6 justify-between">
        <div className="relative w-full laptop:w-[48%] h-[250px] profile2 rounded-lg">
          <Image
            src={profile2}
            className=" mx-auto "
            alt="lang"
            width={243}
            height={200}
            priority
          />
          <div>
            <div className="absolute top-6 left-5 w-[10px] h-[10px] bg-[#fff] rounded " />
            <div className="absolute bottom-6 left-1 w-[5px] h-[5px] bg-[#fff] rounded " />
            <div className="absolute top-10 right-10 w-[10px] h-[10px] bg-[#fff] rounded " />
            <div className="absolute top-[22%] left-[30%] w-[8px] h-[8px] bg-[#fff] rounded " />
            <div className="absolute top-24 left-20 w-[8px] h-[8px] bg-[#fff] rounded " />
            <div className="absolute top-[60%] right-[25%] w-[10px] h-[10px] bg-[#fff] rounded " />
          </div>
          <div className="blur_bg absolute py-3 bottom-4 left-4 w-[65%] laptop:w-[250px]  text-sm border- border- rounded-lg">
            <div className="w-[75%] mx-auto mb-2.5">
              <p className="font-semibold text-[16px] mb-1">
                Community Manager
              </p>
              <div className=" mx-auto flex justify-between">
                <p>cryptolead_</p>
                <p>5 years XP</p>
              </div>
            </div>
            <Link href="#job_exp">
              <p className="blur_btn text-center mx-auto w-[80%] border-[1px] p-1 border-light_blue rounded-md">
                Don't fade
              </p>
            </Link>
          </div>
        </div>
        <div className="relative w-full laptop:w-[48%] h-[250px] profile3 rounded-lg">
          <div className="blur_bg absolute py-3 bottom-4 left-4 w-[65%] laptop:w-[250px]  text-sm border- border- rounded-lg">
            <div className="w-[75%] mx-auto mb-2.5">
              <p className="font-semibold text-[16px] mb-1">UI/UX Designer</p>
              <div className=" mx-auto flex justify-between">
                <p>fuadux</p>
                <p>1 years XP</p>
              </div>
            </div>
            <Link href="#job_exp">
              <p className="blur_btn text-center mx-auto w-[80%] border-[1px] p-1 border-light_blue rounded-md">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
