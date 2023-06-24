import React from "react";
import fuad from "../../../public/img/fuad.svg";
import Image from "next/image";

export const Profile = () => {
  return (
    <div>
      <p className="text-center text-[30px] font-bold mt-5">My Profile</p>
      <div className="relative overflow-hidden mt-2">
        <div className="b_gradient rounded-full w-fit mt-4 p-[2px] mx-auto">
          <Image
            src={fuad}
            className="mx-auto rounded-full p-1 z-20 bg-primary"
            alt="lang"
            width={90}
            height={90}
            priority
          />
        </div>
        <p className="font-[500] text-[22px] text-center mt-5 z-40">Fuad Oluwaniyi</p>
        <div className="z-10">
            <div className="absolute top-0 -left-[15%] rounded-full w-[60px] h-[60px] bg-[#EA7EE3]"  />
            <div className="absolute -top-0 -right-[12%] rounded-full w-[50px] h-[50px] bg-[#3DDECF]"  />
            <div className="absolute bottom-7 -right-[10%] opacity-10 rounded-full w-[60px] h-[60px] b_c"  />
            <div className="absolute bottom-24 right-[10%] opacity-20 rounded-full w-[40px] h-[40px] b_o"  />
            {/* <div className="absolute bottom-24 right-[10%] opacity-20 rounded-full w-[10px] h-[10px] b_o"  /> */}
            <div className="absolute bottom-10 -right-[12%] rounded-full w-[60px] h-[60px] b_o"  />
            <div className="absolute -top-0 right-[30%] rounded-full w-[12px] h-[12px] bg-[#3DDECF]"  />
            <div className="absolute top-2 left-[3%] opacity-10 rounded-full w-[60px] h-[60px] bg-[#EA7EE3]"  />
            <div className="absolute z-10 bottom-0 -left-[20%] rounded-full w-[80px] h-[80px] b_c"  />
            <div className="absolute z-10 bottom-12 left-[15%] opacity-70  rounded-full w-[15px] h-[15px] bg-[#EA7EE3]"  />
            <div className="absolute bottom-3 -left-[8%] opacity-10 rounded-full w-[75px] h-[75px] b_c"  />
        </div>
      </div>
      <div className="mt-4 flex gap-5 justify-center mx-auto w-[95%]">
        <div className="w-fit h-fit">
            <div className="bor_r">
                <p className="bg-primary rounded-[4px] px-2 py-1"> 1b+</p> 
            </div>
            <p className="mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
        </div> 
        <div className="w-fit h-fit">
            <div className="bor_r">
                <p className="bg-primary rounded-[4px] px-2 py-1"> 1b+</p> 
            </div>
            <p className="mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
        </div> 
        <div className="w-fit h-fit">
            <div className="bor_r">
                <p className="bg-primary rounded-[4px] px-2 py-1"> 1b+</p> 
            </div>
            <p className="mt-2 text-sm text-[#D9D9D9]">Wikicat</p>
        </div>       
      </div>
    </div>
  );
};
