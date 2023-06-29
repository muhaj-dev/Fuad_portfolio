import Image from "next/image";
import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profile2 from "../../../public/img/profile2.svg";
import profile3 from "../../../public/img/profile3.svg";
import Link from "next/link";
import { ButtonContext } from "@/Hooks/BtnContext";



export const Hero = () => {

  const contextValue = useContext(ButtonContext);

  if (!contextValue) {
    return null;
  }

  const { buttonState, toggleButton } = contextValue;


  return (
    <div className="">
      <div className="flex justify-between">
        <p className="text-[18px] tablet_l:text-[24px] big_lap:text-[30px]">View Fuad live as</p>
        <button 
          onClick={toggleButton}
          className="hidden laptop:flex gap-1 text-[12px] tablet_l:text-[14px] items-center text-light_blue "
        >
         {buttonState ?
         <> 
         Show less
          <MdKeyboardArrowRight className="w-[14px]" />
          </>
        :
        <> 
        Show more
         <MdKeyboardArrowRight className="w-[14px]" />
         </>
        }
        </button>
        
        <button 
          onClick={toggleButton}
          className="laptop:hidden flex gap-1 text-[12px] tablet_l:text-[14px] items-center text-light_blue "
        >
         {buttonState ?
         <> 
         Show more
          <MdKeyboardArrowRight className="w-[14px]" />
          </>
        :
        <> 
        Show less
         <MdKeyboardArrowRight className="w-[14px]" />
         </>
        }
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-y-6 justify-between">
        <div className="relative w-full big_lap:w-[48%] h-[240px] profile2 rounded-lg">
          <Image
            src={profile2}
            className=" mx-auto "
            alt="lang"
            width={233}
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
          <div className="blur_bg absolute py-3 bottom-4 left-4 w-[90%] laptop:w-[250px]  text-sm border- border- rounded-lg">
            <div className="w-[90%] laptop:w-[75%] mx-auto mb-2.5">
              <p className="font-semibold text-[14px] laptop:text-[16px] mb-1">
                Community Manager
              </p>
              <div className="text-[12px] laptop:text-[14px] mx-auto flex justify-between">
                <p>cryptolead_</p>
                <p>5 years XP</p>
              </div>
            </div>
            <Link href="#job_exp">
              <p className="text-sm laptop:text-[16px] blur_btn text-center mx-auto w-[90%] border-[1px] p-1 border-light_blue rounded-md">
                Don't fade
              </p>
            </Link>
          </div>
        </div>
        <div className="relative w-full big_lap:w-[48%] h-[240px] profile3 rounded-lg">
          <div className="blur_bg absolute py-3 bottom-4 left-4 w-[90%] laptop:w-[250px]  text-sm border- border- rounded-lg">
            <div className="w-[90%] laptop:w-[75%] mx-auto mb-2.5">
              <p className="font-semibold text-[14px] laptop:text-[16px] mb-1">UI/UX Designer</p>
              <div className="text-[12px] laptop:text-[14px] mx-auto flex justify-between">
                <p>fuadux</p>
                <p>1 years XP</p>
              </div>
            </div>
            <Link href="#job_exp">
              <p className="text-sm laptop:text-[16px] blur_btn text-center mx-auto w-[90%] border-[1px] p-1 border-light_blue rounded-md">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
