"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import fuad from "../../../public/img/fuad.svg";
import twitter from "../../../public/img/twi.svg";
import iinsta from "../../../public/img/iinsta.svg";
import monkey from "../../../public/img/monkey.svg";
import mobile from "../../../public/img/mobile.svg";
import { TbMathGreater } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown, MdClear } from "react-icons/md";
import Image from "next/image";
import { ButtonContext } from "@/Hooks/BtnContext";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Profile = () => {
  const contextValue = useContext(ButtonContext);

  if (!contextValue) {
    // Handle the case where contextValue is undefined
    return null;
  }

  const { buttonState, toggleButton } = contextValue;

  return (
    <>
      {buttonState && (
        <>
          <div className=" laptop:block hidden relative w-[14rem] right-1">
            <motion.div
              // className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="fixed w-[14rem] h-[96.75vh] max-h-[720px] bg-primary border-light_blue border-[2px] rounded-lg"
            >
              <p className=" text-center text-[22px] font-bold mt-2">
                My Profile
              </p>
              <div className="relative overflow-hidden mt-2">
                <div className="b_gradient rounded-full w-fit mt-2 p-[2px] mx-auto">
                  <Image
                    src={fuad}
                    className="mx-auto rounded-full p-[1px] z-20 bg-primary"
                    alt="lang"
                    width={70}
                    height={80}
                    priority
                  />
                </div>
                <p className="font-[500] text-[18px] text-center mt-2 z-20">
                  Fuad Oluwaniyi
                </p>
                <div className="z-10">
                  <div className="absolute top-0 -left-[12%] rounded-full w-[50px] h-[50px] bg-[#EA7EE3]" />
                  <div className="absolute -top-0 -right-[8%] rounded-full w-[40px] h-[40px] bg-[#3DDECF]" />
                  <div className="absolute bottom-7 -right-[6%] opacity-10 rounded-full w-[45px] h-[45px] b_c" />
                  <div className="absolute -top-0 right-[10%] opacity-20 rounded-full w-[30px] h-[30px] b_o" />
                  <div className="absolute bottom-6 -right-[10%] rounded-full w-[45px] h-[45px] b_o" />
                  <div className="absolute -top-0 right-[32%] rounded-full w-[10px] h-[10px] bg-[#3DDECF]" />
                  <div className="absolute top-2 -left-[2%] opacity-10 rounded-full w-[50px] h-[50px] bg-[#EA7EE3]" />
                  <div className="absolute z-10 bottom-0 -left-[12%] rounded-full w-[60px] h-[60px] b_c" />
                  <div className="absolute z-10 bottom-12 left-[10%] opacity-50  rounded-full w-[8px] h-[8px] bg-[#EA7EE3]" />
                  <div className="absolute bottom-1 -left-[6%] opacity-10 rounded-full w-[60px] h-[60px] b_c" />
                </div>
              </div>
              <div className="w-[92%] mx-auto mt-3">
                <div className="flex flex-wrap gap-3 justify-between mx-auto ">
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                </div>

                <div className="my-2">
                  <p className="text-[16px] font-[500]">Status</p>
                  <div className="flex px-3 py-2 justify-between border-[2px] mt-1 rounded-md border-[#494F99] ">
                    <div className="flex items-center gap-1">
                      <Image
                        src={twitter}
                        className="mx-auto rounded-full p-1 z-20 bg-primary"
                        alt="lang"
                        width={25}
                        height={20}
                        priority
                      />
                      <p className="text-[12px]">open to work</p>
                    </div>
                    <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                      hire
                      <TbMathGreater className="text-light_blue w-[10px]" />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500]">Impression</p>
                    <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                      this month
                      <MdOutlineKeyboardArrowDown className="text-light_blue" />
                    </button>
                  </div>
                  <div className="flex p-2 h-[180px] justify-between border-[2px] mt-1 rounded-md border-[#494F99] "></div>
                </div>

                <div className="my-2">
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500]">Eecent Activiy</p>
                    <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                      See All
                      <TbMathGreater className="text-light_blue w-[10px] h-[25px]" />
                    </button>
                  </div>
                  <div className="flex p-2 justify-between items-center mt-1 rounded-lg bg-[#212761] ">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src={monkey}
                        className="rounded-sm"
                        alt="lang"
                        width={45}
                        height={45}
                        priority
                      />
                      <div className="h-fit">
                        <p className="text-[12px] font-[500]  mb-1">
                          Story about buy...
                        </p>
                        <p className="text-[10px] b_cl">by cryptolead_</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-[#D9D9D9] items-center">
                      <Image
                        src={twitter}
                        className="mx-auto"
                        alt="lang"
                        width={15}
                        height={10}
                        priority
                      />
                      <p className=" text-[10px] mt-1">3min ago</p>
                    </div>
                  </div>
                  <div className="flex p-2 justify-between items-center mt-3 rounded-lg bg-[#212761] ">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src={mobile}
                        className="rounded-sm"
                        alt="lang"
                        width={45}
                        height={45}
                        priority
                      />
                      <div className="h-fit">
                        <p className="text-[12px] font-[500]  mb-1">
                          Forrest Jump App
                        </p>
                        <p className="text-[10px] font-[500] b_cl">
                          by cryptolead_
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-[#D9D9D9] items-center">
                      <Image
                        src={iinsta}
                        className="mx-auto"
                        alt="lang"
                        width={15}
                        height={10}
                        priority
                      />
                      <p className=" text-[10px] mt-1">3min ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}

      {!buttonState && (
        <>
          <motion.div
          // className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }} className=" flex z-50 laptop:hidden top-0 right-0 left-0 item-center justify-center fixed w-[100vw] h-[100%]">
            <div className="relative w-[16rem] z-10 my-auto h-[97vh] max-h-[720px]  bg-primary border-light_blue border-[2px] rounded-lg">
              <p className=" text-center text-[22px] font-bold mt-2">
                My Profile
              </p>
              <div className="relative overflow-hidden mt-2">
                <div className="b_gradient rounded-full w-fit mt-2 p-[2px] mx-auto">
                  <Image
                    src={fuad}
                    className="mx-auto rounded-full p-[1px] z-20 bg-primary"
                    alt="lang"
                    width={70}
                    height={80}
                    priority
                  />
                </div>
                <p className="font-[500] text-[18px] text-center mt-2 z-20">
                  Fuad Oluwaniyi
                </p>
                <div className="z-10">
                  <div className="absolute top-0 -left-[12%] rounded-full w-[50px] h-[50px] bg-[#EA7EE3]" />
                  <div className="absolute -top-0 -right-[8%] rounded-full w-[40px] h-[40px] bg-[#3DDECF]" />
                  <div className="absolute bottom-7 -right-[6%] opacity-10 rounded-full w-[45px] h-[45px] b_c" />
                  <div className="absolute -top-0 right-[10%] opacity-20 rounded-full w-[30px] h-[30px] b_o" />
                  <div className="absolute bottom-6 -right-[10%] rounded-full w-[45px] h-[45px] b_o" />
                  <div className="absolute -top-0 right-[32%] rounded-full w-[10px] h-[10px] bg-[#3DDECF]" />
                  <div className="absolute top-2 -left-[2%] opacity-10 rounded-full w-[50px] h-[50px] bg-[#EA7EE3]" />
                  <div className="absolute z-10 bottom-0 -left-[12%] rounded-full w-[60px] h-[60px] b_c" />
                  <div className="absolute z-10 bottom-12 left-[10%] opacity-50  rounded-full w-[8px] h-[8px] bg-[#EA7EE3]" />
                  <div className="absolute bottom-1 -left-[6%] opacity-10 rounded-full w-[60px] h-[60px] b_c" />
                </div>
              </div>
              <div className="w-[92%] mx-auto mt-3">
                <div className="flex flex-wrap gap-3 justify-between mx-auto ">
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                  <div className="w-fit h-fit">
                    <div className="bor_r">
                      <p className="bg-primary rounded-[4px] text-[12px] text-center py-1">
                        {" "}
                        1b+
                      </p>
                    </div>
                    <p className="text-center mt-2 text-[12px] text-[#D9D9D9]">
                      Wikicat
                    </p>
                  </div>
                </div>

                <div className="flex px-3 py-2 justify-between border-[2px] mt-1 rounded-md border-[#494F99] ">
                  <div className="flex items-center gap-1">
                    <Image
                      src={twitter}
                      className="mx-auto rounded-full p-1 z-20 bg-primary"
                      alt="lang"
                      width={25}
                      height={20}
                      priority
                    />
                    <p className="text-[12px]">open to work</p>
                  </div>
                  <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                    hire
                    <TbMathGreater className="text-light_blue w-[10px]" />
                  </button>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500]">Impression</p>
                    <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                      this month
                      <MdOutlineKeyboardArrowDown className="text-light_blue" />
                    </button>
                  </div>
                  <div className="flex p-2 h-[180px] justify-between border-[2px] mt-1 rounded-md border-[#494F99] "></div>
                </div>

                <div className="my-2">
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500]">Eecent Activiy</p>
                    <button className="text-[#D9D9D9] text-[12px] flex gap-1 items-center">
                      See All
                      <TbMathGreater className="text-light_blue w-[10px] h-[25px]" />
                    </button>
                  </div>
                  <div className="flex p-2 justify-between items-center mt-1 rounded-lg bg-[#212761] ">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src={monkey}
                        className="rounded-sm"
                        alt="lang"
                        width={45}
                        height={45}
                        priority
                      />
                      <div className="h-fit">
                        <p className="text-[12px] font-[500]  mb-1">
                          Story about buy...
                        </p>
                        <p className="text-[10px] b_cl">by cryptolead_</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-[#D9D9D9] items-center">
                      <Image
                        src={twitter}
                        className="mx-auto"
                        alt="lang"
                        width={15}
                        height={10}
                        priority
                      />
                      <p className=" text-[10px] mt-1">3min ago</p>
                    </div>
                  </div>
                  <div className="flex p-2 justify-between items-center mt-3 rounded-lg bg-[#212761] ">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src={mobile}
                        className="rounded-sm"
                        alt="lang"
                        width={45}
                        height={45}
                        priority
                      />
                      <div className="h-fit">
                        <p className="text-[12px] font-[500]  mb-1">
                          Forrest Jump App
                        </p>
                        <p className="text-[10px] font-[500] b_cl">
                          by cryptolead_
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-[#D9D9D9] items-center">
                      <Image
                        src={iinsta}
                        className="mx-auto"
                        alt="lang"
                        width={15}
                        height={10}
                        priority
                      />
                      <p className=" text-[10px] mt-1">3min ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={toggleButton}
              className="fixed top-0 opacity-50 bg-primary right-0 left-0 w-[100vw] h-[100%]"
            />
            <p className="z-10 ">
              <MdClear
                onClick={toggleButton}
                className="cursor-pointer h-[2rem] w-[2rem] mt-4 ml-4"
              />
            </p>
          </motion.div>
        </>
      )}
    </>
  );
};
